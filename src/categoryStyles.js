const styles = {
  Frontend: { icon: "💻", badge: "bg-pine/10 text-pine" },
  Backend: { icon: "⚙️", badge: "bg-sun/25 text-amber-800" },
  Tools: { icon: "🧰", badge: "bg-ink/10 text-ink" },
  Design: { icon: "🎨", badge: "bg-coral/10 text-coral" },
  "Soft Skills": { icon: "💬", badge: "bg-sage text-pine-dark" },
};

export function getCategoryStyle(category) {
  return styles[category] || { icon: "📘", badge: "bg-sage text-pine" };
}
