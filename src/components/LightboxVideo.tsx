import { useEffect, useRef, useState } from "react";

interface LightboxVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

export function LightboxVideo({ src, poster, alt, className = "" }: LightboxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    const playAttempt = v.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        // Autoplay with sound was blocked -- fall back to a muted start so
        // playback still begins; the user can unmute from the control bar.
        v.muted = true;
        setMuted(true);
        v.play().catch(() => {});
      });
    }
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seekFromClientX = (clientX: number) => {
    const v = videoRef.current;
    const bar = barRef.current;
    if (!v || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    v.currentTime = ratio * duration;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={alt}
        loop
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onClick={togglePlay}
        className="max-h-[70svh] w-auto cursor-pointer object-contain"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-[#131110e6] to-transparent px-3 pb-2.5 pt-8">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="flex h-8 w-8 shrink-0 items-center justify-center text-ivory transition-colors hover:text-clay"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <rect x="2" y="1" width="2.6" height="10" />
              <rect x="7.4" y="1" width="2.6" height="10" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M2 1.5v9l8-4.5-8-4.5Z" />
            </svg>
          )}
        </button>

        <div
          ref={barRef}
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex={0}
          onClick={(e) => seekFromClientX(e.clientX)}
          onTouchStart={(e) => seekFromClientX(e.touches[0].clientX)}
          className="h-1.5 flex-1 cursor-pointer touch-none bg-[#f6f2ea40]"
        >
          <div className="h-full bg-clay" style={{ width: `${progress}%` }} />
        </div>

        <span className="shrink-0 text-[11px] font-bold tabular-nums text-ivory">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex h-8 w-8 shrink-0 items-center justify-center text-ivory transition-colors hover:text-clay"
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 10v4h3l4 4V6l-4 4H4Z" fill="currentColor" />
              <path d="M15.5 9.5l4 4M19.5 9.5l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 10v4h3l4 4V6l-4 4H4Z" fill="currentColor" />
              <path d="M15.5 9a3.5 3.5 0 0 1 0 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M18 6.5a7 7 0 0 1 0 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
