export function LeftRail() {
  return (
    <div className="hidden md:flex absolute z-[3] left-[18px] top-1/2 -translate-y-1/2 flex-col gap-5 text-[7px] tracking-[.16em] text-[#c6c1ba] [writing-mode:vertical-rl]">
      <span>THE WEEKND</span>
      <span>ARCHIVE 01—∞</span>
      <span>LOS ANGELES / NIGHT MODE</span>
    </div>
  );
}

export function RightRail() {
  return (
    <div className="hidden md:flex absolute z-[3] right-[18px] top-1/2 -translate-y-1/2 rotate-180 flex-col gap-5 text-[7px] tracking-[.16em] text-[#c6c1ba] [writing-mode:vertical-rl]">
      <span className="flex items-center">
        SIGNAL: STRONG <i className="signal-dot animate-blink" />
      </span>
      <span>REC ●</span>
      <span>STEREO / 82%</span>
    </div>
  );
}
