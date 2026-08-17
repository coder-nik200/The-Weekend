export default function TopLine({ clock }) {
  return (
    <div className="flex justify-between text-[8px] md:text-[9px] tracking-[.14em] text-[#e7e2da]">
      <span>{clock || '—'}</span>
      <span className="flex items-center gap-0">
        FM 103.7 · SIGNAL STRONG <i className="signal-dot animate-blink" />
      </span>
    </div>
  );
}
