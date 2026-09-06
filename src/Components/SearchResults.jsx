// SearchResults.jsx — /search?q=... route
import { Link, useSearchParams } from "react-router-dom";
import { searchPosts } from "../Blog/blogData.js";

export function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const results = query ? searchPosts(query) : [];

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, opacity: 0.5, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Search results
      </p>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
        "{query}"
      </h1>

      {results.length === 0 ? (
        <div style={{ opacity: 0.5, textAlign: "center", padding: "4rem 0" }}>
          <p>No posts matched "{query}"</p>
          <Link to="/blog" style={{ color: "inherit", marginTop: "1rem", display: "inline-block" }}>
            Browse all posts →
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(128,128,128,0.12)", borderRadius: 12, overflow: "hidden" }}>
          {results.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              style={{
                display: "block",
                padding: "1.25rem 1.5rem",
                textDecoration: "none",
                background: "var(--color-background-primary, white)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(128,128,128,0.06)"}
              onMouseLeave={(e) => e.currentTarget.style.background = ""}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: "0.4rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.05em" }}>
                  {post.category}
                </span>
                <span style={{ opacity: 0.35, fontSize: 12 }}>{post.readTime} read</span>
              </div>
              <h2 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 14, opacity: 0.55, lineHeight: 1.5 }}>{post.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
