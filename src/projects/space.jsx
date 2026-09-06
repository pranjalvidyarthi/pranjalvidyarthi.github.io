import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff, RotateCcw } from "lucide-react";
import { preview } from "vite";

const uiComponents = [
  {
    id: 1,
    title: "Parallax Text Effect",
    description: "",
    preview:
      "https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/1.Day-1.Parallax_Effect.html",
    code:
      "https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/1.Day-1.Parallax_Effect.html",
  },
  {
    id:2,
    title: "Cyber Clock",
    description:'',
    preview: 'https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/2.Day-2.Digital_Clock_Animation.html',
    code: 'https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/2.Day-2.Digital_Clock_Animation.html',
  },

  {
    id:3,
    title:'Black Hole using Three.js',
    description:'',
    preview:'https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/3.Day-3 Black Hole in CSS.html',
    code:'https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/3.Day-3%20Black%20Hole%20in%20CSS.html',
  }
  ,
  {
    id:4,
    title:"Solar System using Three.js",
    description:'',
    preview:'https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/4.Day-4 Creating a Solar System.html',
    code:'https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/4.Day-4%20Creating%20a%20Solar%20System.html',
  },
 {
  id: 5,
  title: "Subscribe Button Design",
  description:'',
  preview:'https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/5.Day--5 Subscirbe now.html',
  code:'https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/5.Day--5 Subscirbe now.html',

 }
 ,
 {
  id:6,
  title:"3D Earth",
  description:'',
  preview:'https://pranjalvidyarthi.github.io/30-DAYS-30-DESIGNS/6.Day-6. Our Earthi using three.js.html',
  code:'https://github.com/pranjalvidyarthi/30-DAYS-30-DESIGNS/blob/main/6.Day-6. Our Earthi using three.js.html',
 },
];

const isMobile = () => window.innerWidth <= 768;

const SpaceDesigns = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    if (isMobile()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleCards((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.35 }
    );

    observerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 themed-section">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">UI Components</h2>
          <p className="text-muted">
            Optimized previews (Desktop only)
          </p>
        </div>

        <div className="row">
          {uiComponents.map((item, index) => {
            const canPreview =
              !isMobile() && visibleCards.includes(String(item.id));

            return (
              <div
                key={item.id}
                className="col-md-6 col-lg-4 mb-4"
                data-id={item.id}
                ref={(el) => (observerRefs.current[index] = el)}
              >
                <div className="card h-100 shadow-sm">

                  {/* PREVIEW BOX */}
                  <div
                    className="preview-box"
                    style={{
                      height: "280px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: canPreview ? "pointer" : "not-allowed",
                    }}
                    onClick={() => canPreview && setActivePreview(item.id)}
                  >
                    {activePreview === item.id && canPreview ? (
                      <>
                        {/* SCALE WRAPPER */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            transform: "scale(0.85)",
                            transformOrigin: "top left",
                            width: "118%",
                            height: "118%",
                          }}
                        >
                          <iframe
                            src={item.preview}
                            title={item.title}
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "none",
                            }}
                          />
                        </div>

                        {/* UNLOAD BUTTON */}
                        <button
                          className="btn btn-dark btn-sm"
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            zIndex: 5,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePreview(null);
                          }}
                        >
                          <RotateCcw size={16} />
                        </button>
                      </>
                    ) : (
                      <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
                        {isMobile() ? (
                          <>
                            <EyeOff size={32} />
                            <p className="text-muted mt-2">
                              Preview disabled on mobile
                            </p>
                          </>
                        ) : (
                          <>
                            <Eye size={36} />
                            <p className="mt-2 fw-semibold">
                              Click to Preview
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* CARD CONTENT */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted flex-grow-1">
                      {item.description}
                    </p>

                    <div className="d-flex gap-2">
                      <a
                        href={item.code}
                        className="btn btn-dark btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                      <a
                        href={item.preview}
                        className="btn btn-outline-dark btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SpaceDesigns;
