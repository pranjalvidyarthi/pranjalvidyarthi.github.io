import React, { useState, useEffect, useCallback } from "react";
import pythonQuizSets from "../quizData/pythonQuizSets/complete_quiz_data";

const quizData = {
  python: {
    title: "Python Quiz",
    icon: "🐍",
    color: "#3B82F6",
    sets: pythonQuizSets,
  },
};

/* ─── Inline styles (no external CSS needed) ─── */
const S = {
  wrap: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#F8F9FB",
    padding: "2.5rem 1rem",
  },
  inner: { maxWidth: 680, margin: "0 auto" },
  pageTitle: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: "-0.5px",
  },
  pageSub: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 32,
  },
  /* Category */
  catCard: (hovered) => ({
    background: "#fff",
    border: hovered ? "1.5px solid #3B82F6" : "1.5px solid #E2E8F0",
    borderRadius: 16,
    padding: "20px 24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 16,
    maxWidth: 340,
    margin: "0 auto",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: hovered ? "0 4px 24px rgba(59,130,246,0.12)" : "0 1px 4px rgba(0,0,0,0.05)",
  }),
  catIcon: {
    width: 52,
    height: 52,
    background: "#EFF6FF",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    flexShrink: 0,
  },
  catTitle: { fontSize: 16, fontWeight: 600, color: "#0F172A" },
  catSub: { fontSize: 13, color: "#94A3B8", marginTop: 2 },
  arrow: { color: "#CBD5E1", fontSize: 20, marginLeft: "auto" },

  /* Set grid */
  setGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
    gap: 10,
    marginBottom: 20,
  },
  setBtn: (hovered) => ({
    background: hovered ? "#EFF6FF" : "#fff",
    border: hovered ? "1.5px solid #3B82F6" : "1.5px solid #E2E8F0",
    borderRadius: 12,
    padding: "14px 8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.15s",
  }),
  setNum: { fontSize: 15, fontWeight: 600, color: "#0F172A" },
  setRange: { fontSize: 11, color: "#94A3B8", marginTop: 3 },

  /* Quiz */
  quizCard: {
    background: "#fff",
    border: "1.5px solid #E2E8F0",
    borderRadius: 20,
    padding: "28px 28px 24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  qCounter: { fontSize: 13, color: "#94A3B8", fontWeight: 500 },
  timerBadge: (warn) => ({
    fontSize: 13,
    fontWeight: 600,
    padding: "5px 14px",
    borderRadius: 999,
    background: warn ? "#FEF2F2" : "#EFF6FF",
    color: warn ? "#DC2626" : "#2563EB",
    border: `1.5px solid ${warn ? "#FECACA" : "#BFDBFE"}`,
    letterSpacing: "0.5px",
  }),
  qText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.55,
    marginBottom: 20,
    letterSpacing: "-0.2px",
  },
  optBtn: (selected, hovered) => ({
    width: "100%",
    textAlign: "left",
    background: selected ? "#EFF6FF" : hovered ? "#F8FAFC" : "#fff",
    border: selected ? "1.5px solid #3B82F6" : hovered ? "1.5px solid #CBD5E1" : "1.5px solid #E2E8F0",
    borderRadius: 12,
    padding: "13px 16px",
    marginBottom: 8,
    cursor: "pointer",
    fontSize: 14,
    color: selected ? "#1D4ED8" : "#334155",
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    transition: "all 0.12s",
    fontFamily: "inherit",
  }),
  optLetter: (selected) => ({
    fontWeight: 700,
    flexShrink: 0,
    color: selected ? "#2563EB" : "#94A3B8",
    minWidth: 18,
  }),
  progressWrap: {
    height: 4,
    background: "#F1F5F9",
    borderRadius: 2,
    marginTop: 24,
    overflow: "hidden",
  },
  progressFill: (pct) => ({
    height: "100%",
    width: `${pct}%`,
    background: "linear-gradient(90deg, #3B82F6, #6366F1)",
    borderRadius: 2,
    transition: "width 0.3s",
  }),
  quizFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 8,
  },

  /* Buttons */
  btn: (variant, hovered, disabled) => ({
    fontSize: 14,
    fontWeight: 600,
    padding: "10px 22px",
    borderRadius: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "all 0.15s",
    fontFamily: "inherit",
    ...(variant === "primary"
      ? { background: hovered ? "#1D4ED8" : "#2563EB", color: "#fff", border: "none" }
      : variant === "success"
      ? { background: hovered ? "#15803D" : "#16A34A", color: "#fff", border: "none" }
      : { background: hovered ? "#F1F5F9" : "#fff", color: "#475569", border: "1.5px solid #E2E8F0" }),
  }),

  /* Score card */
  scoreCard: {
    background: "#fff",
    border: "1.5px solid #E2E8F0",
    borderRadius: 20,
    padding: "32px 24px",
    textAlign: "center",
    marginBottom: 24,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  scoreBig: { fontSize: 52, fontWeight: 800, color: "#0F172A", letterSpacing: "-2px" },
  scoreDenom: { fontSize: 24, color: "#94A3B8", fontWeight: 400 },
  scoreHint: { fontSize: 12, color: "#94A3B8", marginTop: 6 },
  resultBarWrap: {
    height: 10,
    background: "#F1F5F9",
    borderRadius: 5,
    margin: "16px 0 8px",
    overflow: "hidden",
  },
  resultBarFill: (pct) => ({
    height: "100%",
    width: `${Math.max(0, pct)}%`,
    background: pct >= 70 ? "#22C55E" : pct >= 40 ? "#F59E0B" : "#EF4444",
    borderRadius: 5,
    transition: "width 0.6s ease",
  }),

  /* Review */
  reviewItem: (state) => ({
    background: "#fff",
    border: "1.5px solid #E2E8F0",
    borderLeft: `4px solid ${state === "correct" ? "#22C55E" : state === "wrong" ? "#EF4444" : "#F59E0B"}`,
    borderRadius: "0 12px 12px 0",
    padding: "14px 16px",
    marginBottom: 10,
  }),
  reviewQ: { fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 10, lineHeight: 1.5 },
  answerRow: { display: "flex", gap: 20, flexWrap: "wrap", fontSize: 13 },
  pill: (type) => ({
    padding: "2px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    marginRight: 6,
    background:
      type === "correct" ? "#DCFCE7" : type === "wrong" ? "#FEE2E2" : "#FEF9C3",
    color:
      type === "correct" ? "#15803D" : type === "wrong" ? "#B91C1C" : "#92400E",
  }),
  explBox: {
    background: "#F8FAFC",
    borderRadius: 10,
    padding: "10px 12px",
    marginTop: 10,
    fontSize: 13,
    color: "#475569",
    lineHeight: 1.6,
  },
  explLabel: { fontSize: 11, fontWeight: 700, color: "#94A3B8", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.5px" },

  resultActions: { display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 24 },
};

/* ─── Reusable Button ─── */
function Btn({ children, onClick, variant = "default", disabled = false, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...S.btn(variant, hovered, disabled), ...style }}
    >
      {children}
    </button>
  );
}

/* ─── Main Component ─── */
const Quizes = () => {
  const [step, setStep] = useState("category");
  const [selectedSet, setSelectedSet] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [hoveredCat, setHoveredCat] = useState(false);
  const [hoveredSet, setHoveredSet] = useState(null);
  const [hoveredOpt, setHoveredOpt] = useState(null);

  const handleSubmit = useCallback(() => {
    let finalScore = 0;
    selectedSet.forEach((q, i) => {
      if (userAnswers[i] === q.answer) finalScore += 1;
      else if (userAnswers[i]) finalScore -= 1;
    });
    setScore(finalScore);
    setStep("result");
  }, [selectedSet, userAnswers]);

  useEffect(() => {
    if (step !== "quiz") return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, step, handleSubmit]);

  const startSet = (set) => {
    setSelectedSet(set);
    setCurrentQ(0);
    setUserAnswers({});
    setTimeLeft(30 * set.length);
    setStep("quiz");
  };

  const selectAnswer = (option) => {
    setUserAnswers((prev) => ({ ...prev, [currentQ]: option }));
  };

  const mins = Math.floor(timeLeft / 60);
  const secs = (timeLeft % 60).toString().padStart(2, "0");
  const timerWarn = timeLeft < 30;
  const sets = Object.entries(quizData.python.sets);
  const pct = Math.max(0, Math.round((score / (selectedSet.length || 1)) * 100));

  return (
    <div style={S.wrap}>
      <div style={S.inner}>

        {/* ── CATEGORY ── */}
        {step === "category" && (
          <>
            <h1 style={S.pageTitle}>🧠 Quiz Portal</h1>
            <p style={S.pageSub}>Pick a topic and test your knowledge</p>
            <div
              style={S.catCard(hoveredCat)}
              onClick={() => setStep("set")}
              onMouseEnter={() => setHoveredCat(true)}
              onMouseLeave={() => setHoveredCat(false)}
            >
              <div style={S.catIcon}>🐍</div>
              <div>
                <div style={S.catTitle}>Python</div>
                <div style={S.catSub}>100 questions · 10 sets</div>
              </div>
              <span style={S.arrow}>›</span>
            </div>
          </>
        )}

        {/* ── SET SELECTION ── */}
        {step === "set" && (
          <>
            <h1 style={S.pageTitle}>Choose a set</h1>
            <p style={S.pageSub}>Each set has 10 questions · 5 min timer</p>
            <div style={S.setGrid}>
              {sets.map(([key, set], i) => (
                <div
                  key={key}
                  style={S.setBtn(hoveredSet === i)}
                  onClick={() => startSet(set)}
                  onMouseEnter={() => setHoveredSet(i)}
                  onMouseLeave={() => setHoveredSet(null)}
                >
                  <div style={S.setNum}>Set {i + 1}</div>
                  <div style={S.setRange}>Q{i * 10 + 1}–{(i + 1) * 10}</div>
                </div>
              ))}
            </div>
            <Btn onClick={() => setStep("category")}>← Back</Btn>
          </>
        )}

        {/* ── QUIZ ── */}
        {step === "quiz" && selectedSet.length > 0 && (
          <div style={S.quizCard}>
            <div style={S.quizHeader}>
              <span style={S.qCounter}>
                Question {currentQ + 1} / {selectedSet.length}
              </span>
              <span style={S.timerBadge(timerWarn)}>
                ⏱ {mins}:{secs}
              </span>
            </div>

            <p style={S.qText}>{selectedSet[currentQ].q}</p>

            <div>
              {selectedSet[currentQ].options.map((op, i) => {
                const selected = userAnswers[currentQ] === op;
                const hov = hoveredOpt === i;
                return (
                  <button
                    key={i}
                    style={S.optBtn(selected, hov)}
                    onClick={() => selectAnswer(op)}
                    onMouseEnter={() => setHoveredOpt(i)}
                    onMouseLeave={() => setHoveredOpt(null)}
                  >
                    <span style={S.optLetter(selected)}>
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span>{op}</span>
                  </button>
                );
              })}
            </div>

            <div style={S.progressWrap}>
              <div style={S.progressFill(((currentQ + 1) / selectedSet.length) * 100)} />
            </div>

            <div style={S.quizFooter}>
              <Btn
                onClick={() => setCurrentQ((q) => q - 1)}
                disabled={currentQ === 0}
              >
                ← Prev
              </Btn>
              {currentQ === selectedSet.length - 1 ? (
                <Btn onClick={handleSubmit} variant="success">
                  Submit ✓
                </Btn>
              ) : (
                <Btn onClick={() => setCurrentQ((q) => q + 1)} variant="primary">
                  Next →
                </Btn>
              )}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {step === "result" && (
          <>
            <div style={S.scoreCard}>
              <div>
                <span style={S.scoreBig}>{score}</span>
                <span style={S.scoreDenom}> / {selectedSet.length}</span>
              </div>
              <div style={S.scoreHint}>+1 correct · −1 wrong · 0 skipped</div>
              <div style={S.resultBarWrap}>
                <div style={S.resultBarFill(pct)} />
              </div>
              <div style={{ fontSize: 13, color: "#64748B" }}>{pct}%</div>
            </div>

            {selectedSet.map((q, i) => {
              const ua = userAnswers[i];
              const state = ua === q.answer ? "correct" : ua ? "wrong" : "skip";
              return (
                <div key={i} style={S.reviewItem(state)}>
                  <p style={S.reviewQ}>{i + 1}. {q.q}</p>
                  <div style={S.answerRow}>
                    <span>
                      <span style={S.pill("correct")}>Correct</span>
                      <strong>{q.answer}</strong>
                    </span>
                    <span>
                      <span style={S.pill(state === "skip" ? "skip" : state)}>
                        {state === "skip" ? "Skipped" : "Your answer"}
                      </span>
                      <strong>{ua || "Not answered"}</strong>
                    </span>
                  </div>
                  {q.explanation && (
                    <div style={S.explBox}>
                      <div style={S.explLabel}>Explanation</div>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={S.resultActions}>
              <Btn onClick={() => setStep("set")}>Choose another set</Btn>
              <Btn onClick={() => setStep("category")}>← Categories</Btn>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quizes;