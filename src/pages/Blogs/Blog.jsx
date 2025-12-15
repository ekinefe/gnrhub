import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from './data/blog_data';

function Blog() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPosts, setExpandedPosts] = useState({});

  const activePost = posts.find(p => p.id === id);

  // === 1. TOGGLE FUNCTION ===
  const toggleExpand = (postId, e) => {
    e.preventDefault();
    e.stopPropagation();

    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // === 2. DATA PROCESSING ===
  const processedPosts = useMemo(() => {
    // Even if search is empty, we map to ensure data structure consistency
    // or we handle the raw data correctly in the render loop.
    if (!searchQuery) return posts;

    const query = searchQuery.trim().toLowerCase();

    return posts.map(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const summaryMatch = post.summary?.toLowerCase().includes(query);
      const tagMatch = post.tag?.toLowerCase().includes(query);
      const keywordMatch = post.keywords?.some(k => k.toLowerCase().includes(query));

      const isMainMatch = titleMatch || summaryMatch || tagMatch || keywordMatch;

      const sections = post.sections || [];
      const matchingSections = sections.filter(s =>
        s.title.toLowerCase().includes(query) ||
        (s.keywords && s.keywords.some(k => k.toLowerCase().includes(query)))
      );

      return {
        ...post,
        isMatch: isMainMatch || matchingSections.length > 0,
        isMainMatch,
        matchingSections,
        allSections: sections
      };
    }).filter(p => p.isMatch);
  }, [searchQuery]);


  return (
    <div className="sidebar-page">

      {/* === SIDEBAR === */}
      <aside className="page-sidebar">
        <h3>/articles</h3>

        {/* Search Bar */}
        <div style={{ padding: '0 1.5rem 1rem 1.5rem' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-primary)'
            }}
          />
        </div>

        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ padding: '0.5rem 1.5rem' }}>
            <Link to="/blog" className={!id ? "active" : ""} style={{ display: 'block' }}>
              Latest_Posts
            </Link>
          </li>

          {processedPosts.map(post => {
            // === LOGIC FIX START ===
            // 1. Determine which sections exist in the data
            // If we are searching, we look for 'matchingSections' or 'allSections'
            // If NOT searching, we look for raw 'sections'
            let sectionsToShow = [];

            if (searchQuery) {
              // If the Main Title matched, show ALL sections. 
              // Otherwise, show only the specific keywords/sections that matched.
              if (post.isMainMatch) {
                sectionsToShow = post.allSections || post.sections || [];
              } else {
                sectionsToShow = post.matchingSections || [];
              }
            } else {
              // Not searching? Show all raw sections.
              sectionsToShow = post.sections || [];
            }

            const hasSections = sectionsToShow.length > 0;
            // === LOGIC FIX END ===

            // Expand if: Active Page OR Manually Toggled OR Search Active
            const isExpanded = (id === post.id) || expandedPosts[post.id] || !!searchQuery;

            return (
              <li key={post.id} style={{ marginBottom: '0.2rem' }}>

                {/* POST ROW */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.25rem 1.5rem 0.25rem 0.5rem'
                }}>

                  {/* === TOGGLE BUTTON === */}
                  {/* We force this div to always exist so alignment is perfect */}
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginRight: '4px' }}>
                    {hasSections ? (
                      <button
                        onClick={(e) => toggleExpand(post.id, e)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isExpanded ? 'var(--accent)' : 'var(--text-secondary)', // Highlight if open
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          padding: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                        }}
                        title={isExpanded ? "Collapse" : "Expand"}
                      >
                        {isExpanded ? '▼' : '▶'}
                      </button>
                    ) : (
                      <span style={{ width: '16px' }}></span>
                    )}
                  </div>

                  {/* === LINK === */}
                  <Link
                    to={`/blog/${post.id}`}
                    className={id === post.id ? "active" : ""}
                    style={{
                      flex: 1,
                      textDecoration: 'none',
                      color: id === post.id ? 'var(--accent)' : 'var(--text-primary)',
                      fontWeight: id === post.id ? 'bold' : 'normal',
                    }}
                  >
                    {post.title}
                  </Link>
                </div>

                {/* === SUB-SECTIONS LIST === */}
                {isExpanded && hasSections && (
                  <ul style={{
                    listStyle: 'none',
                    paddingLeft: '0',
                    marginTop: '0.2rem',
                    marginBottom: '0.75rem',
                    marginLeft: '2.2rem', // Align under the text, past the arrow
                    borderLeft: '1px solid var(--border)'
                  }}>
                    {sectionsToShow.map(section => (
                      <li key={section.id} style={{ marginBottom: '0.25rem' }}>
                        <Link
                          to={`/blog/${post.id}#${section.id}`}
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            display: 'block',
                            paddingLeft: '0.8rem',
                            position: 'relative'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = 'var(--accent)';
                            e.target.style.paddingLeft = '1.0rem'; // Slight nudge effect
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = 'var(--text-secondary)';
                            e.target.style.paddingLeft = '0.8rem';
                          }}
                        >
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* === MAIN CONTENT === */}
      <main className="page-content">
        {activePost ? (
          <article className="blog-reader">
            <span style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>
              {activePost.date} // {activePost.tag}
            </span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{activePost.title}</h1>
            <hr style={{ border: 0, borderBottom: '1px solid var(--border)', margin: '2rem 0' }} />

            <div className="article-body">
              {typeof activePost.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: activePost.content }} />
              ) : (
                <activePost.content />
              )}
            </div>
          </article>
        ) : (
          <div>
            <h1>/documentation_log</h1>
            <p>Technical guides, research notes, and project updates.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {processedPosts.length === 0 && (
                <p style={{ color: '#666' }}>No results found for "{searchQuery}".</p>
              )}

              {processedPosts.map(post => {
                // Visual helper for cards
                let cardSections = [];
                if (searchQuery) {
                  cardSections = post.isMainMatch
                    ? (post.allSections || post.sections || []).slice(0, 3)
                    : (post.matchingSections || []);
                }

                return (
                  <div key={post.id} className="tech-card">
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>
                      {post.date} // {post.tag}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>

                    {cardSections.length > 0 && (
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          Matches:
                        </strong>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                          {cardSections.map(s => (
                            <li key={s.id} style={{ marginBottom: '0.25rem' }}>
                              <Link to={`/blog/${post.id}#${s.id}`} style={{ color: 'var(--accent)', fontSize: '0.9rem', textDecoration: 'none' }}>
                                → {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link to={`/blog/${post.id}`} className="btn secondary-btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
                      Read_Article
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Blog;