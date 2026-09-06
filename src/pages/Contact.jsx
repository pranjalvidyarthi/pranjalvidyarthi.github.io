
import React, { useState } from "react";

/* =====================================================
   PASTE YOUR WEB3FORMS ACCESS KEY HERE
   ===================================================== */

const WEB3FORMS_KEY = "d9136e48-d0a0-4ae8-9154-6116a2fb5823";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    query: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);


  /* =====================================================
     Handle Input Changes
     ===================================================== */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove previous status when user starts typing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };


  /* =====================================================
     Submit Form
     ===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if API key has been added
    if (
      !WEB3FORMS_KEY ||
      WEB3FORMS_KEY === "PASTE_YOUR_FORM_KEY_HERE"
    ) {
      setStatus({
        type: "error",
        message: "Please add your Web3Forms access key first.",
      });

      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });


    try {
      const formDataToSend = new FormData();

      formDataToSend.append(
        "access_key",
        WEB3FORMS_KEY
      );

      formDataToSend.append(
        "name",
        formData.name
      );

      formDataToSend.append(
        "email",
        formData.email
      );

      formDataToSend.append(
        "subject",
        formData.subject
      );

      formDataToSend.append(
        "message",
        formData.query
      );


      /* Optional Web3Forms settings */

      formDataToSend.append(
        "from_name",
        "Portfolio Contact Form"
      );

      formDataToSend.append(
        "botcheck",
        ""
      );


      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );


      const result = await response.json();


      if (result.success) {

        setStatus({
          type: "success",
          message:
            "Message sent successfully! 🚀 I'll get back to you soon.",
        });


        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          query: "",
        });

      } else {

        setStatus({
          type: "error",
          message:
            result.message ||
            "Something went wrong. Please try again.",
        });

      }

    } catch (error) {

      console.error("Web3Forms Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please check your internet connection and try again.",
      });

    } finally {

      setIsSending(false);

    }
  };


  return (
    <>
      {/* =================================================
          CSS
      ================================================= */}

      <style>{`

        /* ================================================
           MAIN CONTAINER
        ================================================ */

        .contact-container {
          min-height: 100vh;
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 40px 20px;

          position: relative;
          overflow: hidden;

          box-sizing: border-box;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(96, 165, 250, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(244, 114, 182, 0.18),
              transparent 30%
            ),
            #070b14;
        }


        /* ================================================
           BACKGROUND GLOW
        ================================================ */

        .contact-container::before,
        .contact-container::after {
          content: "";

          position: absolute;

          border-radius: 50%;

          filter: blur(90px);

          pointer-events: none;
        }


        .contact-container::before {
          width: 300px;
          height: 300px;

          background: rgba(59, 130, 246, 0.18);

          top: -100px;
          left: -100px;

          animation: floatingGlow 6s ease-in-out infinite;
        }


        .contact-container::after {
          width: 320px;
          height: 320px;

          background: rgba(236, 72, 153, 0.14);

          bottom: -120px;
          right: -120px;

          animation: floatingGlow 7s ease-in-out infinite reverse;
        }


        /* ================================================
           CARD
        ================================================ */

        .contact-card {
          width: 100%;
          max-width: 620px;

          padding: 45px 42px;

          position: relative;
          z-index: 2;

          box-sizing: border-box;

          background: rgba(15, 23, 42, 0.72);

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 28px;

          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

          animation: cardAppear 0.7s ease;
        }


        /* ================================================
           GRADIENT BORDER
        ================================================ */

        .contact-card::before {
          content: "";

          position: absolute;

          inset: -1px;

          border-radius: 28px;

          padding: 1px;

          background: linear-gradient(
            135deg,
            rgba(96, 165, 250, 0.7),
            transparent 40%,
            rgba(244, 114, 182, 0.7)
          );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          pointer-events: none;
        }


        /* ================================================
           TITLE
        ================================================ */

        .contact-title {
          margin: 0;

          text-align: center;

          font-size: clamp(2rem, 5vw, 2.7rem);

          font-weight: 800;

          letter-spacing: -1px;

          background: linear-gradient(
            90deg,
            #60a5fa,
            #a78bfa,
            #f472b6
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          background-clip: text;
        }


        .contact-subtitle {
          text-align: center;

          margin: 10px 0 35px;

          color: #94a3b8;

          font-size: 1rem;
        }


        /* ================================================
           FORM
        ================================================ */

        .contact-form {
          display: flex;

          flex-direction: column;

          gap: 25px;
        }


        /* ================================================
           INPUT GROUP
        ================================================ */

        .contact-input-group {
          position: relative;
        }


        .contact-input-group input,
        .contact-input-group textarea {

          width: 100%;

          box-sizing: border-box;

          padding: 16px 17px;

          font-size: 15px;

          font-family: inherit;

          color: #f8fafc;

          background: rgba(255, 255, 255, 0.035);

          border: 1px solid rgba(148, 163, 184, 0.2);

          border-radius: 14px;

          outline: none;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }


        /* ================================================
           TEXTAREA
        ================================================ */

        .contact-input-group textarea {
          min-height: 130px;

          resize: vertical;
        }


        /* ================================================
           LABEL
        ================================================ */

        .contact-input-group label {

          position: absolute;

          left: 16px;
          top: 16px;

          padding: 0 5px;

          color: #64748b;

          font-size: 15px;

          pointer-events: none;

          transition: all 0.25s ease;
        }


        /* ================================================
           INPUT FOCUS
        ================================================ */

        .contact-input-group input:focus,
        .contact-input-group textarea:focus {

          background: rgba(96, 165, 250, 0.05);

          border-color: #60a5fa;

          box-shadow:
            0 0 0 3px rgba(96, 165, 250, 0.1),
            0 0 25px rgba(96, 165, 250, 0.08);
        }


        /* ================================================
           FLOATING LABEL
        ================================================ */

        .contact-input-group input:focus + label,
        .contact-input-group textarea:focus + label,

        .contact-input-group input:not(:placeholder-shown) + label,
        .contact-input-group textarea:not(:placeholder-shown) + label {

          top: -9px;

          color: #60a5fa;

          font-size: 12px;

          background: #101827;

          border-radius: 5px;
        }


        /* ================================================
           SEND BUTTON
        ================================================ */

        .send-btn {

          width: 100%;

          margin-top: 5px;

          padding: 16px 25px;

          border: none;

          border-radius: 14px;

          font-size: 16px;

          font-weight: 700;

          font-family: inherit;

          color: white;

          cursor: pointer;

          background: linear-gradient(
            135deg,
            #3b82f6,
            #8b5cf6,
            #ec4899
          );

          box-shadow:
            0 10px 30px rgba(99, 102, 241, 0.25);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease;

          position: relative;

          overflow: hidden;
        }


        /* ================================================
           BUTTON SHINE
        ================================================ */

        .send-btn::before {

          content: "";

          position: absolute;

          top: 0;

          left: -120%;

          width: 70%;

          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );

          transform: skewX(-20deg);

          transition: left 0.6s ease;
        }


        .send-btn:hover::before {
          left: 150%;
        }


        .send-btn:hover:not(:disabled) {

          transform: translateY(-3px);

          box-shadow:
            0 15px 40px rgba(99, 102, 241, 0.4);

          filter: brightness(1.08);
        }


        .send-btn:active:not(:disabled) {
          transform: translateY(0);
        }


        /* ================================================
           DISABLED BUTTON
        ================================================ */

        .send-btn:disabled {

          cursor: not-allowed;

          opacity: 0.7;

          transform: none;
        }


        /* ================================================
           LOADING
        ================================================ */

        .loading-spinner {

          width: 17px;
          height: 17px;

          display: inline-block;

          margin-right: 8px;

          border: 2px solid rgba(255, 255, 255, 0.35);

          border-top-color: white;

          border-radius: 50%;

          vertical-align: -4px;

          animation: spin 0.7s linear infinite;
        }


        /* ================================================
           STATUS MESSAGE
        ================================================ */

        .form-status {

          margin-top: 5px;

          padding: 13px 15px;

          border-radius: 12px;

          text-align: center;

          font-size: 14px;

          line-height: 1.5;

          animation: statusAppear 0.35s ease;
        }


        .form-status.success {

          color: #86efac;

          background: rgba(34, 197, 94, 0.08);

          border: 1px solid rgba(34, 197, 94, 0.2);
        }


        .form-status.error {

          color: #fca5a5;

          background: rgba(239, 68, 68, 0.08);

          border: 1px solid rgba(239, 68, 68, 0.2);
        }


        /* ================================================
           ANIMATIONS
        ================================================ */

        @keyframes cardAppear {

          from {
            opacity: 0;

            transform:
              translateY(30px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }


        @keyframes floatingGlow {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(20px, 20px);
          }
        }


        @keyframes spin {

          to {
            transform: rotate(360deg);
          }
        }


        @keyframes statusAppear {

          from {
            opacity: 0;

            transform: translateY(-5px);
          }

          to {
            opacity: 1;

            transform: translateY(0);
          }
        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 600px) {

          .contact-container {

            padding: 25px 15px;
          }


          .contact-card {

            padding: 32px 22px;

            border-radius: 22px;
          }


          .contact-card::before {

            border-radius: 22px;
          }


          .contact-title {

            font-size: 2rem;
          }


          .contact-subtitle {

            font-size: 0.9rem;

            margin-bottom: 28px;
          }


          .contact-form {

            gap: 21px;
          }


          .contact-input-group input,
          .contact-input-group textarea {

            font-size: 14px;
          }


          .send-btn {

            padding: 15px;
          }
        }

      `}</style>


      {/* =================================================
          CONTACT SECTION
      ================================================= */}

      <div className="contact-container">

        <div className="contact-card">

          <h2 className="contact-title">
            Contact Me
          </h2>


          <p className="contact-subtitle">
            Let's build something amazing 🚀
          </p>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* ================================
                NAME
            ================================= */}

            <div className="contact-input-group">

              <input
                type="text"
                name="name"
                required
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />

              <label>Name</label>

            </div>


            {/* ================================
                EMAIL
            ================================= */}

            <div className="contact-input-group">

              <input
                type="email"
                name="email"
                required
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />

              <label>Email</label>

            </div>


            {/* ================================
                SUBJECT
            ================================= */}

            <div className="contact-input-group">

              <input
                type="text"
                name="subject"
                required
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Subject</label>

            </div>


            {/* ================================
                MESSAGE
            ================================= */}

            <div className="contact-input-group">

              <textarea
                name="query"
                rows="4"
                required
                placeholder=" "
                value={formData.query}
                onChange={handleChange}
              ></textarea>

              <label>Message</label>

            </div>


            {/* ================================
                STATUS MESSAGE
            ================================= */}

            {status.message && (

              <div
                className={`form-status ${status.type}`}
              >
                {status.type === "success"
                  ? "✓ "
                  : "⚠ "}

                {status.message}
              </div>

            )}


            {/* ================================
                SEND BUTTON
            ================================= */}

            <button
              type="submit"
              className="send-btn"
              disabled={isSending}
            >

              {isSending ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message ✉️
                </>
              )}

            </button>

          </form>

        </div>

      </div>
    </>
  );
};


export default Contact;

