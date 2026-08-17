"use client";

import { useEffect, useRef, useState } from "react";

const PLAYLIST_ID = process.env.NEXT_PUBLIC_PLAYLIST_ID;
export const PLAYLIST_URL = `https://music.youtube.com/playlist?list=${PLAYLIST_ID}`;

export const QUOTES = [
  "It's 2 AM. You know what to play.",
  "Some memories sound better at night.",
  "Press play. Forget the time.",
  "Welcome back to the after hours.",
  "This song knows too much.",
  "MIDNIGHT // 2000s // HEADPHONES ON",
  "THE NIGHT IS STILL YOUNG.",
];

export const formatTime = (s) =>
  !Number.isFinite(s)
    ? "0:00"
    : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function useBroadcastPlayer() {
  const player = useRef(null);
  const ready = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(82);
  const [muted, setMuted] = useState(false);
  const [clock, setClock] = useState("");
  const [quote, setQuote] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [track, setTrack] = useState({
    title: "Loading playlist…",
    author: "The Weeknd",
    video_id: "",
  });

  const refreshTrack = () => {
    if (!player.current?.getVideoData) return;
    const data = player.current.getVideoData();
    const list = player.current.getPlaylist?.() || [];
    const index = player.current.getPlaylistIndex?.() ?? 0;
    setTrack({
      title: data.title || "The Weeknd archive",
      author: data.author || "The Weeknd",
      video_id: data.video_id || list[index] || "",
    });
    setPlaylist(list);
    setActiveIndex(index);
  };

  // Clock + rotating quote
  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    tick();
    const timer = setInterval(tick, 1000);
    const messages = setInterval(
      () => setQuote((q) => (q + 1) % QUOTES.length),
      3600,
    );
    return () => {
      clearInterval(timer);
      clearInterval(messages);
    };
  }, []);

  // YouTube IFrame API bootstrap
  useEffect(() => {
    let poll;
    const init = () => {
      player.current = new window.YT.Player("youtube-player", {
        height: "1",
        width: "1",
        playerVars: {
          listType: "playlist",
          list: PLAYLIST_ID,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            ready.current = true;
            e.target.setVolume(82);
            e.target.setLoop(true);
            setTimeout(refreshTrack, 800);
          },
          onStateChange: (e) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
            setTimeout(refreshTrack, 120);
          },
        },
      });
      poll = setInterval(() => {
        if (player.current?.getCurrentTime) {
          setCurrent(player.current.getCurrentTime() || 0);
          setDuration(player.current.getDuration() || 0);
          refreshTrack();
        }
      }, 750);
    };
    if (window.YT?.Player) init();
    else {
      window.onYouTubeIframeAPIReady = init;
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => clearInterval(poll);
  }, []);

  const playPause = () => {
    if (!ready.current) return;
    playing ? player.current.pauseVideo() : player.current.playVideo();
  };
  const previousVideo = () => player.current?.previousVideo();
  const nextVideo = () => player.current?.nextVideo();
  const seek = (value) => {
    setCurrent(value);
    player.current?.seekTo(value, true);
  };
  const changeVolume = (value) => {
    setVolume(value);
    setMuted(value === 0);
    player.current?.setVolume(value);
  };
  const toggleMute = () => {
    if (!ready.current) return;
    if (muted) {
      player.current.unMute();
      player.current.setVolume(volume || 82);
      setMuted(false);
    } else {
      player.current.mute();
      setMuted(true);
    }
  };
  const pickTrack = (i) => {
    player.current?.playVideoAt(i);
    setActiveIndex(i);
  };
  const triggerGlitch = () => {
    setGlitching(true);
    setRecorded(true);
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(670, ctx.currentTime);
      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch (_) {}
    setTimeout(() => setGlitching(false), 360);
    setTimeout(() => setRecorded(false), 2500);
  };

  return {
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
    pickTrack,
    triggerGlitch,
  };
}
