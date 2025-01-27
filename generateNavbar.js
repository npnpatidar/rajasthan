import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, "docs"); // Path to your docs folder
const vitepressDir = path.join(docsDir, ".vitepress"); // Path to .vitepress folder

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
