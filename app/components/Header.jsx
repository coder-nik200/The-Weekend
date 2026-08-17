export default function Header() {
  return (
    <header className="mt-[27px] md:mt-0 text-center md:text-left [text-shadow:0_3px_20px_#000]">
      <p className="text-[7px] md:text-[9px] tracking-[.24em] m-0 mb-1 md:mb-2 text-[#d9d5ce]">MIDNIGHT BROADCAST / SIDE A</p>
      <h1 className="font-display font-normal m-0 text-[64px] md:text-[clamp(84px,10vw,168px)] leading-[.67] tracking-[.035em]">
        THE
        <br />
        <em className="not-italic text-blood [text-shadow:2px_0_#070707] md:[text-shadow:3px_0_#070707]">WEEKND</em>
      </h1>
      <p className="font-serif italic text-[12px] md:text-[16px] mt-3 mb-0 md:mt-4">After Hours / Midnight / Archive</p>
    </header>
  );
}
