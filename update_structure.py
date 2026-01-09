import os

# Configuration
OUTPUT_FILE = "structure.md"

# List of specific files to include in "High-Level File Contents"
# These should be the most critical/active files in your project.
IMPORTANT_FILES = [
    # Core Config
    "src/App.jsx",
    "src/index.css",
    "src/App.css",

    # Auth Front-End
    "src/components/auth/SignInPage.jsx",
    "src/components/auth/SignUpPage.jsx",
    "src/components/auth/ForgotPasswordPage.jsx",
    "src/components/auth/ResetPasswordPage.jsx",
    "src/components/auth/ProtectedRoute.jsx",

    # Auth Back-End
    "functions/api/auth/login.js",
    "functions/api/auth/register.js",
    "functions/api/auth/me.js",
    "functions/api/auth/verify.js",
    "functions/api/auth/delete-account.js",
    "functions/api/auth/change-password.js",
    "functions/api/auth/forgot-password.js",
    "functions/api/auth/reset-password.js",

    # User Features (Profile & Roles)
    "src/pages/Services/Profile.jsx",
    "functions/api/user/apply-role.js",
    "functions/templates/role_application.js",

    # Admin Dashboard
    "src/pages/Admin/AdminDashboard.jsx",
    "functions/api/admin/users.js",

    # Brand Book Service (Core)
    "src/pages/Services/BrandBook/Dashboard.jsx",
    "src/pages/Services/BrandBook/Editor.jsx",
    "src/pages/Services/BrandBook/Preview.jsx",
    "src/pages/Services/BrandBook/context/BrandContext.jsx",
    
    # Gym Tracker Service
    "src/pages/Services/GymTracker/GymTracker.jsx",
    "functions/api/gym/sessions.js",
    "functions/api/gym/logs.js",

    # Utilities
    "functions/api/send-email.js",
]

def generate_file_tree(startpath):
    """Generates a markdown representation of the file tree."""
    tree_str = "## Project Directory Structure\n\n```\n"
    for root, dirs, files in os.walk(startpath):
        level = root.replace(startpath, '').count(os.sep)
        indent = '│   ' * (level)
        
        # Filter hidden directories and node_modules
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        
        subindent = '│   ' * (level + 1)
        tree_str += f"{indent}├── {os.path.basename(root)}/\n"
        for f in files:
            if not f.startswith('.'):
                tree_str += f"{subindent}├── {f}\n"
    tree_str += "```\n\n"
    return tree_str

def read_file_content(filepath):
    """Reads and formats file content."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            ext = filepath.split('.')[-1]
            lang = 'javascript' if ext in ['js', 'jsx'] else ext
            return f"### `{filepath}`\n\n```{lang}\n{content}\n```\n\n"
    except Exception as e:
        return f"### `{filepath}`\n\n> Error reading file: {e}\n\n"

def main():
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        # Header
        out.write("# GNRHUB Project Structure\n\n")
        out.write("**Context:** Cloudflare Pages (React) + Cloudflare Functions (Backend) + D1 Database\n\n")
        
        # 1. File Tree
        out.write(generate_file_tree('.'))

        # 2. Important File Contents
        out.write("## Key File Contents\n\n")
        for filepath in IMPORTANT_FILES:
            if os.path.exists(filepath):
                print(f"Reading {filepath}...")
                out.write(read_file_content(filepath))
            else:
                print(f"WARNING: File not found: {filepath}")

    print(f"\nSuccessfully updated {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
