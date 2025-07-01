# Basic Computer Science

Computer science is a field of study that encompasses the **theory, design, development, and application of software and software systems**. It is not solely about programming but includes a broad range of topics related to computing.

## What is a Computer System?

A computer system is a **programmable digital electronic device** that accepts input in the form of data, processes this data based on program instructions, and outputs information in a desired format for meaningful use. Its two main characteristics are that it **responds to a specific set of instructions in a well-defined manner** and it **can execute a pre-recorded list of instructions (a program)**. Modern computers are electronic and digital.

## Main Functions of a Computer System

A computer primarily performs the following four basic functions:

- **Receive input**: Accepts data/information from outside through various input devices like the keyboard, mouse, or scanner.
- **Process information**: Performs arithmetic or logical operations on data/information. This involves converting raw data into useful information.
- **Produce output**: Communicates information to the outside world through output devices like a monitor or printer.
- **Store information**: Stores information in storage devices like hard disk, floppy disks, or CD for future use.

## Components of a Computer System

A computer system comprises two major components: **hardware** and **software**. They are **interdependent**, meaning software needs hardware to run, and hardware is useless without software. Software sends instructions to hardware for tasks like printing or saving files.

### Hardware

Hardware refers to the **physical components of the computer** that can be seen and touched. Key hardware components include:

- **Central Processing Unit (CPU)**: Often called the **"brain" or "heart" of the computer**, it is the component that actually executes instructions and processes data. It controls all operations and performs calculations.
    - **Control Unit (CU)**: **Manages and coordinates the entire computer system**. It tells the rest of the system how to carry out program instructions and directs the movement of electronic signals between memory, the ALU, and input/output devices.
    - **Arithmetic Logic Unit (ALU)**: Performs **arithmetical operations** (addition, subtraction, multiplication, division) and **logical operations** (comparisons).
    - **Registers**: Special high-speed storage areas within the Control Unit and ALU that **temporarily hold data and instructions during processing**.
- **Memory Unit**: The electronic device that **holds data and instructions for processing**. It consists of binary cells (0s and 1s) to store information. Memory is categorized into:
    - **Primary Memory (Main Memory)**: Accessible directly by the CPU and used for **temporary storage of data and instructions in use**. It has low memory capacity but high processing speed.
        - **Random Access Memory (RAM)**: **Volatile memory** where data is lost when the power goes off. When a computer starts, operating system files and basic programs are loaded into RAM.
        - **Read-Only Memory (ROM)**: **Non-volatile memory** where information is permanently stored and retained even when power is off. ROM stores standard processing programs supplied by manufacturers and can only be read by the CPU.
        - **PROM (Programmable Read-Only Memory)**: A variation of ROM where data can be written only once.
        - **EPROM (Erasable Programmable Read-Only Memory)**: Information stored in an EPROM chip can be erased and reprogrammed using a special device.
        - **EAPROM (Electrically Alterable Programmable Read-Only Memory)**: Similar to EPROM, but memory can be altered using electrical signals without erasing the whole memory.
        - **Cache Memory**: A small, expensive memory chip attached between the CPU and main memory to reduce the mismatch in operating speed. It stores frequently used programs or data.
    - **Secondary Memory (Auxiliary Memory)**: External source of memory for **long-term data storage**, typically with low cost per bit of storage but slower operating speed than primary memory. Examples include:
        - **Hard Disk Drives (HDD)** and **Solid-State Drives (SSD)**.
        - **USB flash drives/Pen Drives**.
        - **Floppy Disk**: A portable, low-cost device with a capacity of 1.44 megabytes.
        - **CD-ROM/CD-R/CD-RW**: Optical disks used to store digital data, music, video, and pictures (up to 700MB).
        - **Magnetic Tape**: Very large storage capacity (20 GB to 2 TB) used for backup.
        - **Blue-Ray Disk**: Optical medium capable of storing 25 GB per single layer and 50 GB per dual layer.
- **Input Devices**: Devices used to **enter data/instructions into the computer**. Examples include keyboard, mouse, scanner, microphone, joystick, touch screen, light pen, and webcam.
- **Output Devices**: Devices that **display or output data from the computer** in a human-understandable form. Examples include monitor/display screen, printer (inkjet, laser, dot matrix, 3D), speaker, and headphones.
- **Motherboard**: The **main circuit board that connects all components** of the computer, housing the CPU, memory, and other essential components.
- **Power Supply**: Provides power to the computer's internal components.
- **Computer Buses**: Facilitate communication between components.

### Software

Software refers to the **set of instructions, data, or programs used to operate computers and execute specific tasks**. It is intangible and exists as digital data. Software activates hardware to perform specific tasks.

- **System Software**: The software necessary to **run a computer and control/coordinate programs**. It enhances hardware utilization efficiency and makes computers simpler to use.
    - **Operating System (OS)**: A set of programs that **manages computer hardware and provides services for computer programs**. It acts as a **medium between the user and the computer**. Examples include Windows, Linux, MacOS, Android, and iOS. Functions include memory management, file management, input/output management, user interface, and providing utilities.
    - **Utility Programs**: Such as antivirus and disk cleanup.
    - **Programming Language**: Tools to write instructions for computers.
    - **Language Translator**: System software that **translates a computer program written by a user into a machine-understandable form**. This includes **compilers** and **interpreters**.
- **Application Software**: Programs written in high-level languages for **specific problems or user needs**. Examples include MS Office, web browsers, games, word processing, inventory control, and railway reservation systems.
- **Programming Software**: Used for coding and software development.

## Computer Languages

Programming languages are formal languages used to give instructions to a computer and develop software. They are classified into:

- **Low-Level Language**: Closer to hardware and written in machine code or assembly language.
    - **Machine Language**: Consists of **binary code (0s and 1s)** directly understood by computer hardware. It is difficult to write and understand.
    - **Assembly Language**: Uses **symbolic codes and abbreviated instructions (mnemonic codes)**, making it easier to read and write than machine language. It needs to be converted to machine code for execution.
- **High-Level Language**: Easier for humans to read and understand, requiring a compiler or interpreter for execution. They are generally machine-independent. Examples include C, C++, Java, Python, Pascal, Fortran, JavaScript, PHP, Ruby, SQL, Prolog, and HTML.
    - **Procedural Languages**: (e.g., C, Pascal, Fortran).
    - **Object-Oriented Languages**: (e.g., C++, Java, Python).
    - **Scripting Languages**: (e.g., JavaScript, PHP, Ruby).
    - **Declarative Languages**: (e.g., SQL, Prolog, HTML).
- **Compiler**: Translates the entire high-level program into machine language before execution.
- **Interpreter**: Executes the code line by line.

## Data Processing Concepts

Data processing involves converting **raw data** (a collection of facts) into **useful information** (transformed data presented in a meaningful and concise form). The data processing cycle includes:

- **Collection**: Gathering raw data.
- **Conversion**: Changing data into a machine-readable form (e.g., binary).
- **Manipulation**: Performing operations like classifying, sorting, calculating, and summarizing.
- **Storage and Retrieval**: Filing data and information for future use.
- **Communication**: Transmitting processed information.

## Evolution of Computers

The development of computers can be categorized into generations based on technological advancements:

- **First Generation (1940-1956)**: Used **Vacuum Tubes** as the main technology. Operated with machine language and punch cards. Examples include ENIAC and UNIVAC-I. They were large, consumed much electricity, and generated significant heat.
- **Second Generation (1956-1963)**: Featured **Transistors**, making them smaller, faster, and more energy-efficient than vacuum tubes. Assembly language was used. Examples: IBM 1401.
- **Third Generation (1964-1971)**: Introduced **Integrated Circuits (ICs)**, combining multiple transistors on a single silicon chip. Operating systems were developed to manage hardware and software, enabling multitasking.
- **Fourth Generation (1971-1989)**: Characterized by **Microprocessors** and **Very Large Scale Integration (VLSI)**, leading to personal computers. Introduced high-level programming languages and user-friendly interfaces.
- **Fifth Generation (1989-till date)**: Focused on developing computers with **intellectual capacities like reasoning, thinking, and decision-making**, with a goal of faster speed, greater reliability, and ability to work in unfavorable conditions.

## Fundamentals of Computing

This area encompasses a wide range of concepts forming the basis of computer science and information technology.

- **Basic Computer Architecture**: Includes CPU, Memory (RAM, ROM), Storage Devices, Input/Output Devices, and Motherboard.
- **Operating Systems**: Software that manages computer hardware and provides services for programs.
- **Software Development**: Involves programming languages and software engineering principles.
- **Data Structures and Algorithms**:
    - **Data Structures**: Ways to organize and store data (e.g., arrays, lists, trees).
    - **Algorithms**: Step-by-step procedures for calculations, data processing, and automated reasoning. They must be efficient, correct, finite, and definite.
- **Databases**: Systems for storing, retrieving, and managing data (Relational/SQL, Non-relational/NoSQL).
- **Networking**: Connecting multiple computers to share resources and communicate, including concepts like LAN, WAN, protocols (TCP/IP), and network security.
- **Internet and Web Technologies**: The global network of networks (Internet) and technologies for developing websites and web applications (HTML, CSS, JavaScript).
- **Human-Computer Interaction**: Focuses on designing user-friendly interfaces.

## Key Terminology

- **Bit**: The smallest unit of memory, a binary digit, representing either 0 or 1.
- **Byte**: Consists of **8 bits**.
- **Volatile Memory**: Memory that loses its content when power is removed (e.g., RAM).
- **Non-Volatile Memory**: Memory that retains data even when power is off (e.g., ROM, HDD, SSD).
- **Moore's Law**: Proposed by Gordon Moore in 1965, it predicted that the **number of transistors on a chip would double every two years while costs would be halved**.
- **Digital Signal**: A signal that takes only particular finite number of amplitude values, typically ‘0’ and ‘1’.
- **Punched Card**: A piece of stiff paper that stores digital data in the form of holes at predefined positions.