import React from 'react';

const ExampleBlog = () => {
  return (
    <div className="blog-content">
      <h2>Introduction</h2>
      <p>This post demonstrates how different content types render in our blog engine. Use this as a reference for formatting future articles.</p>
      <hr />

      <h3>1. Lists & Nesting</h3>

      <p><strong>Unordered List:</strong></p>
      <ul style={{ marginBottom: '1.5rem' }}>
        <li>- Core System Components</li>
        <li>- User Interface Layers
          {/* <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '2rem' }}> */}
          <ul style={{ marginTop: '0.0rem', marginBottom: '0.5rem', paddingLeft: '2rem' }}>
            <li>- Dashboard Widgets</li>
            <li><strong>- Sidebar Navigation</strong> (Nested Item)</li>
          </ul>
        </li>
        <li>-Database Connectors</li>
      </ul>

      <p><strong>Ordered List:</strong></p>
      <ol style={{ marginBottom: '1.5rem' }}>
        <li>Initialize the repository</li>
        <li>Install dependencies (<code>npm install</code>)</li>
        <li>Build the production bundle</li>
      </ol>

      <h3>2. Task Lists (Checkboxes)</h3>
      <div style={{ marginBottom: '2rem', background: 'var(--bg-panel)', padding: '1rem', border: '1px solid var(--border)', borderRadius: '4px' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <input type="checkbox" checked readOnly /> <span style={{ marginLeft: '8px' }}>Completed: Design System Setup</span>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <input type="checkbox" checked readOnly /> <span style={{ marginLeft: '8px' }}>Completed: React Router Configuration</span>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <input type="checkbox" readOnly /> <span style={{ marginLeft: '8px' }}>Pending: Backend API Integration</span>
        </div>
        <div>
          <input type="checkbox" readOnly /> <span style={{ marginLeft: '8px' }}>Pending: Unit Testing Suite</span>
        </div>
      </div>

      <h3>3. Code Blocks</h3>
      <p>We support syntax highlighting for various languages.</p>

      <h4>Bash / Shell</h4>
      <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflowX: 'auto', marginBottom: '1.5rem' }}><code>{`#!/bin/bash
# System Update Script
echo "Starting update process..."
sudo apt update && sudo apt upgrade -y
echo "Update complete."`}</code></pre>

      <h4>Python</h4>
      <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflowX: 'auto', marginBottom: '1.5rem' }}><code>{`def calculate_factorial(n):
    if n == 0:
        return 1
    else:
        return n * calculate_factorial(n-1)

print(f"Factorial of 5 is {calculate_factorial(5)}")`}</code></pre>

      <h4>Java</h4>
      <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflowX: 'auto', marginBottom: '1.5rem' }}><code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Enterprise World!");
    }
}`}</code></pre>

      <h4>C++</h4>
      <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflowX: 'auto', marginBottom: '1.5rem' }}><code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Memory management is fun!";
    return 0;
}`}</code></pre>

      <h3>4. Image Sizing & Layout</h3>
      <p>Images can be sized and aligned using inline styles to create rich layouts.</p>

      <p><strong>Full Width (100%):</strong></p>
      <img src="https://placehold.co/800x300/111/eee?text=Full+Width+Banner" alt="Full Width" style={{ width: '100%', height: 'auto', borderRadius: '6px', border: '1px solid var(--border)', marginBottom: '1.5rem' }} />

      <p><strong>Half Width (50%) - Centered:</strong></p>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <img src="https://placehold.co/600x400/222/FFF?text=Half+Width" alt="Half Width" style={{ width: '50%', height: 'auto', borderRadius: '6px', border: '1px solid var(--border)' }} />
        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>Figure 1: Centered Image Example</p>
      </div>

      <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
        <img src="https://placehold.co/200x200/333/FFF?text=Small" alt="Thumbnail" style={{ width: '150px', height: 'auto', float: 'left', marginRight: '1.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} />
        <p><strong>Wrapping Text:</strong> This is an example of text wrapping around a small, left-aligned image. This is useful for author bios or product thumbnails. You can just float the image left and the text fills the rest of the container space naturally.</p>
      </div>
      <div style={{ clear: 'both' }}></div>

      <hr />
      <p><em>End of formatting showcase.</em></p>
    </div>
  );
};

export default ExampleBlog;
