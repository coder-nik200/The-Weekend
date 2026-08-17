'use client';

import { useBroadcastPlayer, QUOTES } from './hooks/useBroadcastPlayer';
import YouTubeMount from './components/YouTubeMount';
import Backdrop from './components/Backdrop';
import HeroImage from './components/HeroImage';
import { Shade, Scanlines, Grain } from './components/Overlays';
import { LeftRail, RightRail } from './components/Rails';
import TopLine from './components/TopLine';
import Header from './components/Header';
import ArchiveCard from './components/ArchiveCard';
import RecordedBadge from './components/RecordedBadge';
import Quote from './components/Quote';
import Player from './components/Player';

export default function Home() {
  const {
    playing,
    current,
    duration,
    volume,
    muted,
    clock,
    quote,
    glitching,
    recorded,
    playlist,
    activeIndex,
    track,
    playPause,
    previousVideo,
    nextVideo,
    seek,
    changeVolume,
    toggleMute,
    triggerGlitch
  } = useBroadcastPlayer();

  return (
    <main className={`relative isolate overflow-hidden bg-[#070707] min-h-[100svh] h-[100svh] md:h-auto md:min-h-screen font-mono ${glitching ? 'animate-flicker' : ''}`}>
      <YouTubeMount />

      <Backdrop />
      <HeroImage glitching={glitching} onTrigger={triggerGlitch} />
      <Shade />
      <Scanlines />
      <Grain />

      <LeftRail />
      <RightRail />

      <section
        className="relative z-[2] min-h-[100svh] h-full md:h-auto md:min-h-screen flex flex-col
          w-full max-w-[1400px] mx-auto
          px-5 md:px-16 lg:px-24
          pt-[calc(16px+env(safe-area-inset-top))] md:pt-10
          pb-[calc(12px+env(safe-area-inset-bottom))] md:pb-12"
      >
        <TopLine clock={clock} />

        <div className="mt-[27px] md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-10">
          <Header />
          <ArchiveCard />
        </div>

        <RecordedBadge recorded={recorded} clock={clock} />

        <div className="mt-auto md:mt-16 mx-auto w-full md:max-w-[560px] flex flex-col gap-3 md:gap-6">
          <Quote text={QUOTES[quote]} quoteKey={quote} />
          <Player
            playing={playing}
            current={current}
            duration={duration}
            volume={volume}
            muted={muted}
            playlist={playlist}
            activeIndex={activeIndex}
            track={track}
            playPause={playPause}
            previousVideo={previousVideo}
            nextVideo={nextVideo}
            seek={seek}
            changeVolume={changeVolume}
            toggleMute={toggleMute}
          />
        </div>
      </section>
    </main>
  );
}
