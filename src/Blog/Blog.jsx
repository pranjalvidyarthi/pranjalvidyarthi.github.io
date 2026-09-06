import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  blogPosts as BLOG_POSTS,
  categories as CATEGORIES,
  getPostBySlug,
  searchPosts,
} from "./blogData";

const BASE_URL = "https://pranjalvidyarthi.github.io/#";

// ─── CodeBlock Component ──────────────────────────────────────────────────────
const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative", margin: "16px 0" }}>
      <button
        onClick={copy}
        style={{
          position: "absolute", top: 8, right: 8, zIndex: 1,
          background: copied ? "#22c55e" : "#374151", color: "#fff",
          border: "none", borderRadius: 6, padding: "4px 10px",
          fontSize: 11, cursor: "pointer", transition: "background 0.2s",
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre style={{
        background: "#0d1117", color: "#e6edf3", borderRadius: 10,
        padding: "16px", overflowX: "auto",
        fontSize: 13, lineHeight: 1.6, margin: 0,
        border: "1px solid #30363d",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Markdown Renderer ────────────────────────────────────────────────────────
const MarkdownContent = ({ content }) => {
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div>
      {parts.map((part, i) => {
        if (part.startsWith("```")) {
          const lines = part.slice(3).split("\n");
          const code = lines.slice(1, -1).join("\n");
          return <CodeBlock key={i} code={code} />;
        }

        const paragraphs = part.split(/\n\n+/).filter(Boolean);
        return paragraphs.map((para, j) => {
          if (para.startsWith("## ")) {
            return (
              <h2 key={`${i}-${j}`} style={{
                fontSize: 22, fontWeight: 700, color: "var(--text-primary)",
                margin: "32px 0 14px", paddingBottom: 8,
                borderBottom: "1px solid var(--border)", fontFamily: "Georgia, serif",
              }}>
                {para.slice(3)}
              </h2>
            );
          }
          if (para.startsWith("### ")) {
            return (
              <h3 key={`${i}-${j}`} style={{
                fontSize: 17, fontWeight: 600, color: "var(--text-primary)", margin: "24px 0 10px",
              }}>
                {para.slice(4)}
              </h3>
            );
          }

          const lines = para.split("\n").filter(Boolean);
          if (lines.every(l => l.startsWith("- "))) {
            return (
              <ul key={`${i}-${j}`} style={{ paddingLeft: 20, marginBottom: 16 }}>
                {lines.map((l, k) => (
                  <li
                    key={k}
                    style={{ color: "var(--text-muted)", marginBottom: 6, lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{
                      __html: l.slice(2)
                        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>')
                        .replace(/`(.+?)`/g, '<code style="background:var(--search-bg);border:1px solid var(--border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:13px;color:#f97316">$1</code>'),
                    }}
                  />
                ))}
              </ul>
            );
          }

          const html = para
            .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>')
            .replace(/`(.+?)`/g, '<code style="background:var(--search-bg);border:1px solid var(--border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:13px;color:#f97316">$1</code>');

          return (
            <p
              key={`${i}-${j}`}
              style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        });
      })}
    </div>
  );
};

// ─── Blog List ────────────────────────────────────────────────────────────────
export const BlogList = ({ searchResults, searchQuery }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [localSearch, setLocalSearch] = useState("");

  const isExternalSearch = searchResults !== undefined;

  const filteredPosts = isExternalSearch
    ? searchResults
    : localSearch.trim()
      ? searchPosts(localSearch)
      : activeCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(p => p.category === activeCategory);

  const displayQuery = searchQuery || localSearch;

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>

      {/* ── SEO ── */}
      <Helmet>
        <title>Blog & Tutorials | Pranjal.dev</title>
        <meta name="description" content="Practical Python, Git, and CSS guides from real dev problems." />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Blog & Tutorials | Pranjal.dev" />
        <meta property="og:description" content="Practical Python, Git, and CSS guides from real dev problems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
      </Helmet>

      <div style={{ marginBottom: 32 }}>
        <h1 style={{
          fontSize: 36, fontWeight: 800, color: "var(--text-primary)",
          margin: 0, letterSpacing: "-0.5px", fontFamily: "Georgia, serif",
        }}>
          {isExternalSearch && searchQuery ? `Results for "${searchQuery}"` : "Blog & Tutorials"}
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: 8, fontSize: 16 }}>
          {isExternalSearch && searchQuery
            ? `${filteredPosts.length} post${filteredPosts.length !== 1 ? "s" : ""} found`
            : "Practical guides and fixes from real dev problems"}
        </p>
      </div>

      {/* Local search bar */}
      {!isExternalSearch && (
        <>
          <form onSubmit={e => e.preventDefault()} style={{ marginBottom: 24 }}>
            <div style={{
              display: "flex", alignItems: "center",
              background: "var(--search-bg)",
              border: "1px solid var(--border)",
              borderRadius: 10, overflow: "hidden",
              maxWidth: 400,
            }}>
              <span style={{ padding: "0 8px 0 14px", color: "var(--text-muted)", fontSize: 14 }}>🔍</span>
              <input
                type="search"
                placeholder="Search posts..."
                value={localSearch}
                onChange={e => {
                  setLocalSearch(e.target.value);
                  setActiveCategory("All");
                }}
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "var(--text-primary)", fontSize: 14, padding: "10px 12px 10px 0",
                }}
              />
              {localSearch && (
                <button
                  type="button"
                  onClick={() => setLocalSearch("")}
                  style={{
                    background: "transparent", border: "none", color: "var(--text-muted)",
                    padding: "0 12px", cursor: "pointer", fontSize: 16,
                  }}
                >✕</button>
              )}
            </div>
          </form>

          {!localSearch && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {["All", ...CATEGORIES].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? "var(--accent)" : "var(--search-bg)",
                    color: activeCategory === cat ? "#fff" : "var(--text-muted)",
                    border: `1px solid ${activeCategory === cat ? "var(--accent)" : "var(--border)"}`,
                    borderRadius: 20, padding: "5px 14px", fontSize: 12,
                    fontWeight: activeCategory === cat ? 600 : 400,
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {isExternalSearch && (
        <button
          onClick={() => navigate("/blog")}
          style={{
            background: "transparent", border: "1px solid var(--border)",
            color: "var(--text-muted)", borderRadius: 8, padding: "7px 16px",
            fontSize: 13, cursor: "pointer", marginBottom: 28,
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          ← All Posts
        </button>
      )}

      {filteredPosts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p style={{ fontSize: 18 }}>No posts found for "{displayQuery}"</p>
          <button
            onClick={() => { setLocalSearch(""); navigate("/blog"); }}
            style={{
              marginTop: 16, background: "var(--accent)", color: "#fff",
              border: "none", borderRadius: 8, padding: "10px 24px",
              fontSize: 14, cursor: "pointer",
            }}
          >
            View All Posts
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}`)}
              style={{
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: 14, padding: "28px 32px", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{
                  background: "var(--accent-soft)", color: "var(--accent)",
                  fontSize: 11, fontWeight: 700, padding: "3px 10px",
                  borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5,
                }}>{post.category}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{post.date}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>· {post.readTime}</span>
              </div>
              <h2 style={{
                fontSize: 20, fontWeight: 700, color: "var(--text-primary)",
                margin: "0 0 8px", lineHeight: 1.3, fontFamily: "Georgia, serif",
              }}>
                {post.title}
              </h2>
              <p style={{ color: "var(--text-muted)", margin: "0 0 16px", lineHeight: 1.6, fontSize: 14 }}>
                {post.summary}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{
                    background: "var(--tag-bg)", color: "var(--text-muted)",
                    fontSize: 11, padding: "3px 10px", borderRadius: 6, fontFamily: "monospace",
                  }}>#{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Blog Post ────────────────────────────────────────────────────────────────
export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) return (
    <div style={{ textAlign: "center", padding: 80, color: "var(--text-muted)" }}>
      <div style={{ fontSize: 48 }}>📄</div>
      <p style={{ marginTop: 12, fontSize: 16 }}>Post not found.</p>
      <button
        onClick={() => navigate("/blog")}
        style={{
          marginTop: 16, background: "var(--accent)", color: "#fff", border: "none",
          borderRadius: 8, padding: "10px 24px", cursor: "pointer", fontSize: 14,
        }}
      >
        ← Back to Blog
      </button>
    </div>
  );

  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "40px 20px" }}>

      {/* ── SEO ── */}
      <Helmet>
        <title>{post.title} | Pranjal.dev</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": "Pranjal" },
            "url": postUrl,
          })}
        </script>
      </Helmet>

      <button
        onClick={() => navigate("/blog")}
        style={{
          background: "transparent", border: "1px solid var(--border)", color: "var(--text-muted)",
          borderRadius: 8, padding: "7px 16px", fontSize: 13, cursor: "pointer",
          marginBottom: 32, display: "flex", alignItems: "center", gap: 6,
        }}
      >
        ← All Posts
      </button>

      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{
            background: "var(--accent-soft)", color: "var(--accent)",
            fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, textTransform: "uppercase",
          }}>{post.category}</span>
          <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{post.date} · {post.readTime}</span>
        </div>
        <h1 style={{
          fontSize: 32, fontWeight: 800, color: "var(--text-primary)", margin: "0 0 16px",
          lineHeight: 1.25, letterSpacing: "-0.5px", fontFamily: "Georgia, serif",
        }}>
          {post.title}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          {post.summary}
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 32 }} />

      <MarkdownContent content={post.content} />

      <div style={{
        display: "flex", gap: 8, flexWrap: "wrap",
        marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border)",
      }}>
        {post.tags.map(tag => (
          <span key={tag} style={{
            background: "var(--tag-bg)", color: "var(--text-muted)",
            fontSize: 12, padding: "4px 12px", borderRadius: 6, fontFamily: "monospace",
          }}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

// ─── Search Results Page ──────────────────────────────────────────────────────
export const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const results = searchPosts(query);
  return <BlogList searchResults={results} searchQuery={query} />;
};