import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from './data/blog_data';

function Blog() {
  const { id } = useParams();
  const activePost = posts.find(p => p.id === id);

  return (
    <div className="sidebar-page">

      {/* === SIDEBAR === */}
      <aside className="page-sidebar">
        <h3>/articles</h3>
        <ul>
          <li>
            <Link to="/blog" className={!id ? "active" : ""}>Latest_Posts</Link>
          </li>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} className={id === post.id ? "active" : ""}>
                {post.title}
              </Link>
              {id === post.id && post.sections && (
                <ul style={{ marginTop: '0.0rem', marginBottom: '0.5rem', paddingLeft: '1.5rem', listStyle: 'none' }}>
                  {post.sections.map(section => (
                    <li key={section.id} style={{ marginBottom: '0.25rem' }}>
                      <a href={`#${section.id}`} style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* === CONTENT === */}
      <main className="page-content">

        {/* VIEW 1: READ ARTICLE */}
        {activePost ? (
          <article className="blog-reader">
            <span style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>
              {activePost.date} // {activePost.tag}
            </span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{activePost.title}</h1>
            <hr style={{ border: 0, borderBottom: '1px solid var(--border)', margin: '2rem 0' }} />

            {/* Render HTML content safely */}
            {/* Render HTML content safely OR render React Component */}
            <div className="article-body">
              {typeof activePost.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: activePost.content }} />
              ) : (
                <activePost.content />
              )}
            </div>
          </article>
        ) : (

          /* VIEW 2: LIST ARTICLES */
          <div>
            <h1>/documentation_log</h1>
            <p>Technical guides, research notes, and project updates.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {posts.map(post => (
                <div key={post.id} className="tech-card">
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>
                    {post.date} // {post.tag}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <Link to={`/blog/${post.id}`} className="btn secondary-btn">
                    Read_Article
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default Blog;