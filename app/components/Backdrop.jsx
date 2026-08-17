export default function Backdrop() {
  return (
    <div
      className="absolute -inset-[9%] md:-inset-[6%] bg-[url('/weeknd-wallpaper.jpeg')] md:bg-[url('/weeknd-collage.jpeg')]
        bg-center bg-cover blur-[20px] brightness-[.32] md:blur-[36px] md:brightness-[.34] md:saturate-[.75] scale-105"
      aria-hidden="true"
    />
  );
}
