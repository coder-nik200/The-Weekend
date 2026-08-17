export default function RecordedBadge({ recorded, clock }) {
  return (
    <div
      className={`absolute left-0 right-0 top-[316px] md:top-[38%] text-center text-[8px] tracking-[.16em] transition-all duration-300 [text-shadow:0_2px_10px_#000] ${
        recorded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[5px]'
      }`}
    >
      <b className="text-[#eb343b]">
        REC <i className="rec-dot animate-blink" />{' '}
      </b>{' '}
      RECORDED AT {clock}
    </div>
  );
}
