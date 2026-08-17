export default function Quote({ text, quoteKey }) {
  return (
    <div className="text-center px-3 pb-[13px] md:pb-0 [text-shadow:0_2px_10px_#000]">
      <p key={quoteKey} className="font-serif italic m-0 mb-[7px] text-[15px] md:text-[22px] animate-quotein">
        “{text}”
      </p>
      <span className="text-[7px] md:text-[8px] tracking-[.18em] text-[#d0cbc2]">PLAYING FROM THE ARCHIVE</span>
    </div>
  );
}
