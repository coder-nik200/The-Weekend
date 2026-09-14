import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Volume2,
  VolumeOff,
  Shuffle,
} from "lucide-react";
import { formatTime, PLAYLIST_URL } from "../hooks/useBroadcastPlayer";

export default function Player({
  playing,
  current,
  duration,
  volume,
  muted,
  shuffle,
  playlist,
  activeIndex,
  track,
  playPause,
  previousVideo,
  nextVideo,
  toggleShuffle,
  seek,
  changeVolume,
  toggleMute,
}) {
  const artwork = track.video_id
    ? `https://i.ytimg.com/vi/${track.video_id}/hqdefault.jpg`
    : "/weeknd-collage.jpeg";

  return (
    <section
      className="w-full md:max-w-[560px] mx-auto md:mx-0 rounded-[18px] border border-white/20 backdrop-blur-2xl
        px-3.5 md:px-6 py-3 md:py-5 pb-2.5 md:pb-4
        bg-gradient-to-br from-[rgba(22,22,24,.85)] to-[rgba(9,8,9,.71)]
        shadow-[0_12px_40px_rgba(0,0,0,.6),inset_0_0_20px_rgba(216,21,27,.07)]"
    >
      <div className="flex items-center gap-[5px] text-[7px] md:text-[8px] tracking-[.18em]">
        <i className="now-dot animate-blink !ml-0 !w-[5px] !h-[5px]" /> NOW
        PLAYING
        <span className="ml-auto text-[#aaa39b]">
          {playlist.length
            ? `${activeIndex + 1} / ${playlist.length}`
            : "PLAYLIST"}
        </span>
      </div>

      <div className="flex gap-[11px] md:gap-4 items-center my-2.5 md:my-4">
        <div
          className={`relative flex-none w-[49px] h-[49px] md:w-[64px] md:h-[64px] rounded overflow-hidden shadow-[0_0_15px_rgba(214,24,29,.33)] ${playing ? "rounded-full animate-spinslow" : ""}`}
        >
          <img
            src={artwork}
            alt="Current track artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[3px] left-[3px] right-[3px] h-[9px] flex gap-[2px] items-end">
            <b
              className={`block bg-[#f5ebe7] w-[2px] h-[3px] ${playing ? "animate-eq" : ""}`}
            />
            <b
              className={`block bg-[#f5ebe7] w-[2px] h-[3px] ${playing ? "animate-eq [animation-delay:.2s]" : ""}`}
            />
            <b
              className={`block bg-[#f5ebe7] w-[2px] h-[3px] ${playing ? "animate-eq [animation-delay:.35s]" : ""}`}
            />
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="font-display font-normal text-[21px] md:text-[28px] leading-[.9] tracking-[.05em] m-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {track.title}
          </h2>
          <p className="text-[9px] md:text-[11px] mt-1 mb-0.5 text-[#ded7cd]">
            {track.author}
          </p>
          <small className="text-[7px] md:text-[8px] text-[#aaa39b]">
            THE WEEKND · COMPLETE PLAYLIST
          </small>
        </div>
      </div>

      <input
        className="progress-range w-full h-[3px] rounded-[10px] cursor-pointer"
        type="range"
        min="0"
        max={duration || 1}
        value={Math.min(current, duration || 1)}
        onChange={(e) => seek(Number(e.target.value))}
        aria-label="Track progress"
        style={{ "--played": `${duration ? (current / duration) * 100 : 0}%` }}
      />
      <div className="flex justify-between mt-[3px] text-[7px] md:text-[8px] text-[#b6afa7]">
        <span>{formatTime(current)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-center gap-[22px] md:gap-7 my-1 mb-2 md:mb-3">
        <button
          onClick={toggleShuffle}
          aria-label={shuffle ? "Disable shuffle" : "Enable shuffle"}
          aria-pressed={shuffle}
          className={`border-0 bg-transparent text-[14px] md:text-[16px] cursor-pointer w-4 ${
            shuffle ? "text-[#ff5a5f]" : "text-[#f5eee7]"
          }`}
        >
          <Shuffle />
        </button>

        <button
          onClick={previousVideo}
          aria-label="Previous track"
          className="border-0 bg-transparent text-[#f5eee7] text-[19px] md:text-[22px] cursor-pointer w-[30px] h-[30px]"
        >
          {/* ↶ */}
          <ChevronLeft />
        </button>
        <button
          onClick={playPause}
          aria-label={playing ? "Pause" : "Play"}
          className="flex items-center justify-center text-white w-[35px] h-[35px] md:w-[46px] md:h-[46px] rounded-full border border-white/70 text-[13px] md:text-[16px] leading-none bg-[#b11920] shadow-[0_0_17px_rgba(208,29,34,.4)]"
        >
          {playing ? <Pause fill="white" /> : <Play fill="white" />}{" "}
        </button>
        <button
          onClick={nextVideo}
          aria-label="Next track"
          className="border-0 bg-transparent text-[#f5eee7] text-[19px] md:text-[22px] cursor-pointer w-[30px] h-[30px]"
        >
          {/* ↷ */}
          <ChevronRight />
        </button>
        {/* <button
          onClick={toggleShuffle}
          aria-label={shuffle ? "Disable shuffle" : "Enable shuffle"}
          aria-pressed={shuffle}
          className={`border-0 bg-transparent text-[14px] md:text-[16px] cursor-pointer w-4 ${
            shuffle ? "text-[#ff5a5f]" : "text-[#f5eee7]"
          }`}
        >
          <Shuffle />
        </button> */}
        <button
          onClick={toggleMute}
          aria-label="Toggle mute"
          className="border-0 bg-transparent text-[#f5eee7] text-[14px] md:text-[16px] cursor-pointer w-4"
        >
          {/* {muted ? '×' : '◖'} */}
          {muted ? <VolumeOff /> : <Volume2 />}
        </button>
        <input
          className="w-[55px] md:w-[80px] accent-[#ddd5cc]"
          type="range"
          min="0"
          max="100"
          value={muted ? 0 : volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          aria-label="Volume"
        />
      </div>

      <a
        className="block text-center no-underline text-[#f3ebe3] text-[7px] md:text-[9px] tracking-[.11em] border-t border-white/10 pt-2 md:pt-3 hover:text-[#ff5a5f] transition-colors"
        href={PLAYLIST_URL}
        target="_blank"
        rel="noreferrer"
      >
        OPEN COMPLETE PLAYLIST ON YOUTUBE MUSIC ↗
      </a>
    </section>
  );
}
