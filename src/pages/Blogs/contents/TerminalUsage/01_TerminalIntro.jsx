import React from 'react';

const TerminalIntro = () => {
    return (
        <div className="blog-article">
            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_01: TERMINAL_OPERATIONS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    The Terminal (or Console) is a text-based interface used to interact with your computer.
                    Unlike the GUI (mouse and windows), the Terminal allows you to execute commands directly to the Operating System.
                    <br /><br />
                    It is faster, scriptable, and essential for any developer using Linux or Mac. Below is the primary dataset of commands you will use daily.
                </p>
            </section>

            {/* === NAVIGATION === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#4ec9b0', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// NAVIGATION</h3>
                <CommandItem
                    cmd="pwd"
                    desc="Print Working Directory. Shows exactly where you are in the system."
                    example="$ pwd\n/home/user/projects"
                />
                <CommandItem
                    cmd="ls"
                    desc="List. Shows files in current directory."
                    example="$ ls -la\n(Lists all files including hidden ones with permissions)"
                />
                <CommandItem
                    cmd="cd"
                    desc="Change Directory. Moves you to a new folder."
                    example="$ cd my_project\n$ cd .. (Go back one level)\n$ cd ~ (Go home)"
                />
            </div>

            {/* === FILE OPERATIONS === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#569cd6', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// FILE_MANIPULATION</h3>
                <CommandItem
                    cmd="mkdir"
                    desc="Make Directory. Creates a new folder."
                    example="$ mkdir new_folder"
                />
                <CommandItem
                    cmd="touch"
                    desc="Creates an empty file."
                    example="$ touch script.py"
                />
                <CommandItem
                    cmd="cp"
                    desc="Copy. Duplicates files or directories (use -r for folders)."
                    example="$ cp file.txt backup.txt\n$ cp -r folder/ backup_folder/"
                />
                <CommandItem
                    cmd="mv"
                    desc="Move. Also used to Rename files."
                    example="$ mv file.txt ./documents/\n$ mv oldname.txt newname.txt"
                />
                <CommandItem
                    cmd="rm"
                    desc="Remove. Deletes files. WARNING: There is no recycle bin."
                    example="$ rm file.txt\n$ rm -rf folder_name/ (Force delete folder)"
                />
            </div>

            {/* === VIEWING CONTENT === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#ce9178', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// READ_DATA</h3>
                <CommandItem
                    cmd="cat"
                    desc="Concatenate. Prints the entire content of a file to the screen."
                    example="$ cat data.txt"
                />
                <CommandItem
                    cmd="less"
                    desc="View large files page by page. Press 'q' to quit."
                    example="$ less huge_log_file.log"
                />
                <CommandItem
                    cmd="head"
                    desc="Shows the first 10 lines of a file."
                    example="$ head -n 5 script.py"
                />
                <CommandItem
                    cmd="tail"
                    desc="Shows the last 10 lines. Great for logs."
                    example="$ tail -f server.log (Watch file updates in real-time)"
                />
            </div>

            {/* === SYSTEM & SEARCH === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#dcdcaa', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// SYSTEM_CONTROL</h3>
                <CommandItem
                    cmd="grep"
                    desc="Global Regular Expression Print. Searches for text inside files."
                    example="$ grep 'error' server.log"
                />
                <CommandItem
                    cmd="find"
                    desc="Searches for files and directories."
                    example="$ find . -name '*.py' (Find all python files in current folder)"
                />
                <CommandItem
                    cmd="top"
                    desc="Task manager. Shows CPU/RAM usage. (Use 'htop' if available)."
                    example="$ top"
                />
                <CommandItem
                    cmd="sudo"
                    desc="SuperUser Do. Run command as Administrator (root)."
                    example="$ sudo apt update"
                />
                <CommandItem
                    cmd="history"
                    desc="Shows a list of commands you recently typed."
                    example="$ history"
                />
                <CommandItem
                    cmd="clear"
                    desc="Clears the terminal screen."
                    example="$ clear"
                />
            </div>

            {/* === SHORTCUTS TIP === */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)' }}>&gt; PRO_TIP: SHORTCUTS</h3>
                <ul style={{ paddingLeft: '1rem', color: '#ccc', lineHeight: '1.6' }}>
                    <li><strong>TAB Key:</strong> Autocompletes file and folder names. Use this constantly!</li>
                    <li><strong>Up/Down Arrows:</strong> Scrolls through your previous commands.</li>
                    <li><strong>Ctrl + C:</strong> Kills the currently running process (Stop!).</li>
                    <li><strong>Ctrl + L:</strong> Shortcut for `clear`.</li>
                </ul>
            </div>
        </div>
    );
};

// Helper Component for cleaner code
const CommandItem = ({ cmd, desc, example }) => (
    <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed #333' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#00ff9d', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '1rem', fontFamily: 'monospace' }}>
                {cmd}
            </span>
            <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{desc}</span>
        </div>
        <div style={{
            background: '#000',
            padding: '0.5rem 1rem',
            borderLeft: '2px solid #555',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            whiteSpace: 'pre-wrap',
            color: '#ccc'
        }}>
            {example}
        </div>
    </div>
);

export default TerminalIntro;