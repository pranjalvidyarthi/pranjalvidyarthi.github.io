import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff, RotateCcw } from "lucide-react";

const uiComponents = [
 {
        id: 1,
        title: "Amazing Loading Screen",
        description: "Amazing Loading Screen using pure Html and CSS",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/00001.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/00001.html",
    },
    {
        id: 2,
        title: "Hover Button",
        description: "Hover Button using pure HTML,CSS and JS only!!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0002.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0002.html",
    },
    {
        id: 3,
        title: "Loading Bar",
        description: "Loading Bar",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0003.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0003.html",
    },
    {
        id: 4,
        title: "Digital Clock",
        description: "Digital Clock",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0004.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0004.html",
    },

    {
        id: 5,
        title: " On ClickChange Background",
        description: "Change Background",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0005.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0005.html",
    },

    {
        id: 6,
        title: "HTML Slider Range",
        description: "HTML Slider Range",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0006.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0006.html",
    },

    {
        id: 7,
        title: "Solar System",
        description: "Solar System using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0007.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0007.html",
    },
    {
        id: 8,
        title: "Flame",
        description: "Creative Flame Animation using HTML And CSS only",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0008.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0008.html",
    },
    {
        id: 9,
        title: "UNIQUE SLIDER",
        description: "Unique slider using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0009.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0009.html",
    },
    {
        id: 10,
        title: "Login Form Design",
        description: "Modern Login Page using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0010.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0010.html",
    },
    {
        id: 11,
        title: "Creative Button Animation",
        description: "Creative Button Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0011.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0011.html",
    },
    // {
    //     id:12,
    //     title: "",
    //     description: "Solar System using HTML,CSS and JS Only !!",
    //     preview:
    //         "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0012.html",
    //     code:
    //         "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0012.html",
    // },
    {
        id: 13,
        title: "Working Analog Clock",
        description: "Working Analog Clock using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0013.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0013.html",
    },
    {
        id: 14,
        title: "Circle Animation",
        description: "Circle Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0014.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0014.html",
    },
    {
        id: 15,
        title: "Creative Animation",
        description: "Text Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0015.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0015.html",
    },
    {
        id: 16,
        title: "Bulb on off",
        description: "Bulb on off using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0016.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0016.html",
    },
    {
        id: 17,
        title: "Squares Animation",
        description: "Squares Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0017.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0017.html",
    },
    {
        id: 20,
        title: "Animated background",
        description: "Animated background using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0020.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0020.html",
    },

        {
        id: 21,
        title: "Ghost Text Effect",
        description: "Hover Ghost Text Effect using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0021.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0021.html",
    },
        {
        id: 22,
        title: "Cat Hands",
        description: "Cat Hands - Mini Endless Game",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0022.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0022.html",
    },
        {
        id: 23,
        title: "Pulse Animation",
        description: "Pulse Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0023.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0023.html",
    },
        {
        id: 24,
        title: "Line Animation",
        description: "Line Animation using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0024.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0024.html",
    },
        {
        id: 25,
        title: "Image Slider",
        description: "Image Slider using HTML,CSS and JS Only !!",
        preview:
            "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0025.html",
        code:
            "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0025.html",
    },
];

const isMobile = () => window.innerWidth <= 768;

const HTML_1_series = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRefs = useRef([]);

  const isMobile = () => window.innerWidth <= 768;

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
          <h2 className="fw-bold">100 Days HTML Designs</h2>
          <p className="text-muted">Optimized previews (Desktop only)</p>
        </div>

        <div className="row">
          {uiComponents.map((item, index) => {
            const canPreview =
              !isMobile() && visibleCards.includes(String(item.id));

            return (
              <div
                key={`${item.id}-${index}`}
                className="col-md-6 col-lg-4 mb-4"
                data-id={item.id}
                ref={(el) => (observerRefs.current[index] = el)}
              >
                <div className="card h-100">

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
                              overflow: "hidden",
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
                            <Eye size={36} className="eye-icon" />
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark btn-sm"
                      >
                        View Code
                      </a>
                      <a
                        href={item.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
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


export default HTML_1_series;


