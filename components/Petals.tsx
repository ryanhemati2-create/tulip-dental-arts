/**
 * CSS-only falling petals for the hero. Values are deterministic (no random)
 * so the server and client render identically — avoids hydration mismatch.
 */
const PETALS = [
  { left: "6%", delay: "0s", duration: "13s", scale: 0.7, opacity: 0.5 },
  { left: "14%", delay: "4s", duration: "17s", scale: 1.0, opacity: 0.35 },
  { left: "23%", delay: "8s", duration: "12s", scale: 0.6, opacity: 0.6 },
  { left: "32%", delay: "2s", duration: "19s", scale: 1.2, opacity: 0.3 },
  { left: "41%", delay: "6s", duration: "15s", scale: 0.8, opacity: 0.45 },
  { left: "50%", delay: "10s", duration: "14s", scale: 0.9, opacity: 0.4 },
  { left: "59%", delay: "1s", duration: "18s", scale: 1.1, opacity: 0.32 },
  { left: "68%", delay: "7s", duration: "12s", scale: 0.65, opacity: 0.55 },
  { left: "77%", delay: "3s", duration: "16s", scale: 1.0, opacity: 0.38 },
  { left: "85%", delay: "9s", duration: "13s", scale: 0.75, opacity: 0.5 },
  { left: "92%", delay: "5s", duration: "20s", scale: 1.15, opacity: 0.28 },
  { left: "97%", delay: "11s", duration: "15s", scale: 0.6, opacity: 0.5 },
];

export default function Petals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `scale(${p.scale})`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
