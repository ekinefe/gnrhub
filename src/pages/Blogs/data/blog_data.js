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
    title: "Python",
    date: "2025-12-12",
    tag: "PYTHON",
    summary: "Getting started with Python: Installation on Windows, macOS, and Linux.",
    content: PythonIntroduction,
    sections: [
      { id: "download", title: "01_Download" },
      { id: "ide", title: "02_IDE_Download" },
      { id: "helloworld", title: "03_Hello_World" }
    ]
  }
];