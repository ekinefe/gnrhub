import ExampleBlog from '../contents/ExampleBlog.jsx';
import PythonIntroduction from '../contents/PythonIntroduction/main.jsx';
import TerminalUsage from '../contents/TerminalUsage/main.jsx';
import BashScripting from '../contents/BashScripting/BashScripting.jsx';
import CwKeyer from '../contents/CWKeyerHardware.jsx';

import CWKeyerSoftware from '../contents/CWKeyerSoftware.jsx';

// === BLOG POSTS ===
export const posts = [
  // {
  //   id: "example-blog",
  //   title: "Example Blog: Style & Formatting Showcase",
  //   date: "2025-12-11",
  //   tag: "DEMO",
  //   summary: "A comprehensive guide on formatted content: lists, checkboxes, code blocks (Bash, Java, C++, Python), and image sizing.",
  //   keywords: ["demo", "example", "formatting", "style"],
  //   content: ExampleBlog
  // },
  {
    id: "CW_KEYER",
    title: "CW_KEYER",
    date: "2025-12-15",
    tag: "CW_KEYER",
    summary: "Building a CW Keyer with Arduino: Hardware and Software.",
    keywords: ["cw", "morse", "arduino", "electronics"],
    content: CwKeyer
  },
  {
    id: "CW_TRAINER_DESKTOP",
    // title: "CW_TRAINER_DESKTOP",
    title: "CW_TRAINER",
    date: "2026-02-02",
    tag: "SOFTWARE",
    summary: "The official desktop companion app for Ultimate CW Keyer. Features drills, stats, and real-time decoding.",
    keywords: ["c++", "qt", "desktop", "training", "qt", "cpp", "serial", "build", "setup", "linux", "usage", "guide", "help"],
    content: CWKeyerSoftware
  },
  {
    id: "python-intro",
    // title: "Python: Introduction & Setup",
    title: "Python_Introduction",
    date: "2025-12-12",
    tag: "PYTHON",
    summary: "Getting started with Python: Installation on Windows, macOS, and Linux.",
    keywords: ["python", "programming", "tutorial", "setup"],
    content: PythonIntroduction,
    sections: [
      { id: "download", title: "01_Download", keywords: ["install", "setup", "OS"] },
      { id: "ide", title: "02_IDE_Download", keywords: ["vscode", "pycharm", "editor"] },
      { id: "helloworld", title: "03_Hello_World", keywords: ["print", "first program", "hello"] },
      { id: "variables", title: "04_Variables", keywords: ["data types", "int", "string"] },
      { id: "math", title: "05_Math", keywords: ["operators", "arithmetic", "calc"] },
      { id: "input", title: "06_Input", keywords: ["user input", "console", "keyboard"] },
      { id: "conditionals", title: "07_Conditionals", keywords: ["if", "else", "logic"] },
      { id: "functions", title: "08_Functions", keywords: ["def", "return", "parameters"] },
      { id: "classes", title: "09_Classes", keywords: ["oop", "object", "self"] },
      { id: "modules", title: "10_Modules", keywords: ["import", "library", "split code"] },
      { id: "packages", title: "11_Packages", keywords: ["pip", "init", "structure"] },
      { id: "exceptions", title: "12_Exceptions", keywords: ["try", "except", "error"] },
      { id: "files", title: "13_Files", keywords: ["read", "write", "open"] },
      { id: "networking", title: "14_Networking", keywords: ["socket", "http", "web"] },
      { id: "gui", title: "15_GUI", keywords: ["tkinter", "interface", "window"] },
      { id: "web", title: "16_Web", keywords: ["flask", "django", "server"] },
      { id: "data", title: "17_Data", keywords: ["pandas", "numpy", "analysis"] },
      { id: "security", title: "18_Security", keywords: ["encryption", "hash", "safe"] },
      { id: "performance", title: "19_Performance", keywords: ["speed", "optimization", "memory"] },
      { id: "testing", title: "20_Testing", keywords: ["pytest", "debug", "unittest"] },
      { id: "deployment", title: "21_Deployment", keywords: ["docker", "deploy", "cloud"] },
      { id: "future", title: "22_Future", keywords: ["trends", "ai", "advanced"] }
    ]
  },
  {
    id: "Basic_of_Terminal",
    title: "Terminal_Basics",
    date: "2025-12-15",
    tag: "TERMINAL",
    summary: "Getting started with Terminal: Navigation, Files, Permissions, Search.",
    keywords: ["linux", "terminal", "bash", "shell"],
    content: TerminalUsage,
    sections: [
      { id: "intro", title: "01_Intro", keywords: ["shell", "basics", "cli"] },
      { id: "navigation", title: "02_Navigation", keywords: ["cd", "ls", "pwd"] },
      { id: "files", title: "03_Files", keywords: ["touch", "mkdir", "rm"] },
      { id: "permissions", title: "04_Permissions", keywords: ["chmod", "security", "access"] },
      { id: "search", title: "05_Search", keywords: ["grep", "find", "locate"] }
    ]
  },

  {
    id: "Bash_Scripting",
    title: "Bash_Scripting",
    date: "2025-12-15",
    tag: "BASH",
    summary: "Getting started with Bash: Variables, Logic, Loops, Functions, Automation.",
    keywords: ["bash", "scripting", "terminal", "automation"],
    content: BashScripting,
    sections: [
      { id: "intro", title: "01_Intro", keywords: ["bash", "scripting", "terminal"] },
      { id: "variables", title: "02_Variables", keywords: ["variables", "data types", "int"] },
      { id: "logic", title: "03_Logic", keywords: ["if", "else", "logic"] },
      { id: "loops", title: "04_Loops", keywords: ["for", "while", "loop"] },
      { id: "functions", title: "05_Functions", keywords: ["functions", "parameters", "return"] },
      { id: "automation", title: "06_Automation", keywords: ["automation", "script", "backup"] }
    ]
  }
];