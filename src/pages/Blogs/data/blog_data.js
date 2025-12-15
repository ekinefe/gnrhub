import ExampleBlog from '../contents/ExampleBlog.jsx';
import PythonIntroduction from '../contents/PythonIntroduction/main.jsx';

// === BLOG POSTS ===
export const posts = [
  // {
  //   id: "linux-setup",
  //   title: "Automating Fedora Setup",
  //   date: "2025-11-20",
  //   tag: "LINUX",
  //   summary: "How I use a single script to install VS Code, Docker, and configure GNOME.",
  //   content: `
  //     <h2>Why Automate?</h2>
  //     <p>Setting up a new ThinkPad T480s takes time. Here is how I scripted the process using Bash.</p>
  //     <h3>The Script</h3>
  //     <p>Content goes here...</p>
  //   `
  // },
  // {
  //   id: "local-llm",
  //   title: "Running Local LLMs on CPU",
  //   date: "2025-10-14",
  //   tag: "AI",
  //   summary: "Guide to running Llama 3 on consumer hardware without a GPU.",
  //   content: "Detailed guide on using llama.cpp..."
  // }
  {
    id: "example-blog",
    title: "Example Blog: Style & Formatting Showcase",
    date: "2025-12-11",
    tag: "DEMO",
    summary: "A comprehensive guide on formatted content: lists, checkboxes, code blocks (Bash, Java, C++, Python), and image sizing.",
    content: ExampleBlog
  },
  {
    id: "python-intro",
    // title: "Python: Introduction & Setup",
    title: "Python_Introduction",
    date: "2025-12-12",
    tag: "PYTHON",
    summary: "Getting started with Python: Installation on Windows, macOS, and Linux.",
    content: PythonIntroduction,
    sections: [
      { id: "download", title: "01_Download" },
      { id: "ide", title: "02_IDE_Download" },
      { id: "helloworld", title: "03_Hello_World" },
      { id: "variables", title: "04_Variables" },
      { id: "math", title: "05_Math" },
      { id: "input", title: "06_Input" },
      { id: "conditionals", title: "07_Conditionals" },
      { id: "functions", title: "08_Functions" },

      { id: "classes", title: "09_Classes" },
      { id: "modules", title: "10_Modules" },
      { id: "packages", title: "11_Packages" },
      { id: "exceptions", title: "12_Exceptions" },
      { id: "files", title: "13_Files" },
      { id: "networking", title: "14_Networking" },
      { id: "gui", title: "15_GUI" },
      { id: "web", title: "16_Web" },
      { id: "data", title: "17_Data" },
      { id: "security", title: "18_Security" },
      { id: "performance", title: "19_Performance" },
      { id: "testing", title: "20_Testing" },
      { id: "deployment", title: "21_Deployment" },
      { id: "future", title: "22_Future" }
    ]
  }
];