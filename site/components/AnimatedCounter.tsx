"use client";
import { useEffect, useRef, useState } from "react";

function parseValue(raw: string): { prefix: string; num: number; suffix: string; decimals: number } {
  const clean = raw.replace(/,/g, "");
  const match = clean.match(/^(\$?)([0-9.]+)(M\+|\+|M)?$/);
  if (!match) return { prefix: "", num: 0, suffix: raw, decimals: 0 };
  const prefix = match[1] || "";
  const numStr = match[2];
  const num = parseFloat(numStr);
  const suffix = match[3] || "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, num, suffix, decimals };
}

function formatNum(n: number, decimals: number): string {
  if (decimals > 0) return n.toFixed(decimals);
  const rounded = Math.round(n);
  return rounded >= 1000 ? rounded.toLocaleString("en-US") : rounded.toString();
}

export default function AnimatedCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const { prefix, num, suffix, decimals } = parseValue(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          observer.disconnect();
          const duration = 1600;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setCurrent(eased * num);
            if (elapsed < 1) requestAnimationFrame(animate);
            else setCurrent(num);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNum(current, decimals)}
      {suffix}
    </span>
  );
}
