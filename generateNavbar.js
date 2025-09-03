import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, "docs"); // Path to your docs folder
const vitepressDir = path.join(docsDir, ".vitepress"); // Path to .vitepress folder

function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = String(date.getDate()).padStart(2, '0');
  const monthNum = String(date.getMonth() + 1);
  return { year, month, day, monthNum };
}

function getLatestFile(dirPath, day) {
    if (!fs.existsSync(dirPath)) {
        return null;
    }
    const files = fs.readdirSync(dirPath);
    const dayFiles = files.filter(file => file.startsWith(`${day}_${day}`));
    if (dayFiles.length === 0) {
        return null;
    }
    dayFiles.sort().reverse();
    return dayFiles[0];
}

function getCurrentAffairsLink() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const todayDate = getFormattedDate(today);
  const yesterdayDate = getFormattedDate(yesterday);

  const currentAffairsDir = path.join(docsDir, 'rajasthan', '6_current_affairs');
  const todayDir = path.join(currentAffairsDir, `${todayDate.monthNum}_${todayDate.month}_${todayDate.year}`);
  const yesterdayDir = path.join(currentAffairsDir, `${yesterdayDate.monthNum}_${yesterdayDate.month}_${yesterdayDate.year}`);

  let latestFile = getLatestFile(todayDir, todayDate.day);
  let link;

  if (latestFile) {
    link = `/rajasthan/6_current_affairs/${todayDate.monthNum}_${todayDate.month}_${todayDate.year}/${latestFile}`;
  } else {
    latestFile = getLatestFile(yesterdayDir, yesterdayDate.day);
    if (latestFile) {
      link = `/rajasthan/6_current_affairs/${yesterdayDate.monthNum}_${yesterdayDate.month}_${yesterdayDate.year}/${latestFile}`;
    }
  }
  return link ? link.replace('.md', '') : null;
}


function parseOrder(orderStr) {
  const match = orderStr.match(/^(\d+)([a-z]*)/);
  if (match) {
    const numberPart = parseInt(match[1], 10);
    const alphaPart = match[2];
    return { numberPart, alphaPart };
  }
  return { numberPart: Infinity, alphaPart: "" }; // Default to Infinity if no order is found
}

function capitalizeTitle(title) {
  return title
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !["to", "and", "of"].includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
}

function generateNavbar(dir) {
  const items = [];
  const files = fs.readdirSync(dir);

  // Combine directories and files into a single array
  const directoriesAndFiles = files
    .map((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      const match = file.match(/^(\d+[a-z]*)_(.+)$/);
      let orderStr = "";
      let name = file;

      if (match) {
        orderStr = match[1];
        name = match[2];
      }

      const { numberPart, alphaPart } = parseOrder(orderStr);

      if (stat.isDirectory()) {
        // Skip the .obsidian folder
        if (file === ".obsidian") {
          return null;
        }
        // Check if the directory is empty
        const dirFiles = fs.readdirSync(filePath);
        if (dirFiles.length === 0) {
          return null;
        }
        return { type: "directory", numberPart, alphaPart, name, filePath };
      } else if (path.extname(file) === ".md") {
        // Skip the index.md file
        if (file === "index.md") {
          return null;
        }
        const link = `/${path.relative(docsDir, filePath).replace(".md", "")}`;
        name = name.replace(".md", ""); // Remove .md from the name
        return { type: "file", numberPart, alphaPart, name, link };
      }
      return null;
    })
    .filter(Boolean);

  // Sort directories and files based on the parsed order
  directoriesAndFiles.sort((a, b) => {
    if (a.numberPart === b.numberPart) {
      return a.alphaPart.localeCompare(b.alphaPart); // Alphabetical order if number parts are the same
    }
    return a.numberPart - b.numberPart;
  });

  // Process sorted directories and files
  directoriesAndFiles.forEach((item) => {
    const title = capitalizeTitle(item.name.replace(/_/g, " "));

    if (item.type === "directory") {
      const nestedItems = generateNavbar(item.filePath);
      if (nestedItems.length > 0) {
        items.push({
          text: title,
          items: nestedItems,
          collapsed: true,
        });
      }
    } else if (item.type === "file") {
      items.push({ text: title, link: item.link });
    }
  });

  return items;
}

const navbar = generateNavbar(docsDir);
const currentAffairsLink = getCurrentAffairsLink();

if (currentAffairsLink) {
  const recurseAndReplace = (items) => {
    for (const item of items) {
      if (item.text === 'Current Affairs') {
        item.link = currentAffairsLink;
        break;
      }
      if (item.items) {
        recurseAndReplace(item.items);
      }
    }
  };
  recurseAndReplace(navbar);

  const indexMdTemplatePath = path.join(vitepressDir, 'index.md.template');
  const indexMdPath = path.join(docsDir, 'index.md');
  let indexContent = fs.readFileSync(indexMdTemplatePath, 'utf8');
  indexContent = indexContent.replace('{{CURRENT_AFFAIRS_LINK}}', currentAffairsLink);
  fs.writeFileSync(indexMdPath, indexContent);
  console.log("Generated index.md from template");
}


// Ensure the .vitepress directory exists
if (!fs.existsSync(vitepressDir)) {
  fs.mkdirSync(vitepressDir);
}

// Write the navbar configuration to the correct location
fs.writeFileSync(
  path.join(vitepressDir, "navbar.json"),
  JSON.stringify(navbar, null, 2),
);

console.log("Navbar generated successfully at docs/.vitepress/navbar.json!");