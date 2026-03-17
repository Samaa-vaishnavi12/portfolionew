import { useEffect } from "react";

export default function GlitterEffect() {
  useEffect(() => {
    const createGlitter = (x: number, y: number) => {
      const count = 6;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.className = "glitter-dot";

        // random spread
        const angle = Math.random() * 360;
        const dist  = Math.random() * 40 + 10;
        const dx    = Math.cos((angle * Math.PI) / 180) * dist;
        const dy    = Math.sin((angle * Math.PI) / 180) * dist;
        const size  = Math.random() * 5 + 3;

        const colors = [
          "#a7b9ff", "#c8d7ff", "#ffffff",
          "#be9fff", "#82d2ff", "#ffb3e6",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        dot.style.cssText = `
          left: ${x}px;
          top:  ${y}px;
          width:  ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 ${size + 2}px 1px ${color};
          --dx: ${dx}px;
          --dy: ${dy}px;
        `;

        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 700);
      }
    };

    const onScroll = () => {
      // random x across viewport, y near current scroll position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight + window.scrollY;
      createGlitter(x, y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
