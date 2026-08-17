export function Shade() {
  return <div className="absolute inset-0 shade-mobile md:shade-desktop" />;
}

export function Scanlines() {
  return <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.13] scanlines" />;
}

export function Grain() {
  return <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.16] grain" />;
}
