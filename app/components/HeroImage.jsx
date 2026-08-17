export default function HeroImage({ glitching, onTrigger }) {
  return (
    <div
      onClick={onTrigger}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === ' ' && onTrigger()}
      aria-label="Record a midnight moment"
      className={`absolute inset-0 bg-[url('/weeknd-wallpaper.jpeg')] md:bg-[url('/weeknd-collage.jpeg')]
        bg-cover bg-center cursor-crosshair md:animate-drift ${glitching ? 'animate-glitchmove' : ''}`}
    />
  );
}
