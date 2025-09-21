export default function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 opacity-80">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 rounded bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[var(--accent)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
