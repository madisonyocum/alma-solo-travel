"use client";

import { useEffect, useState } from "react";

const VIDEOS = [
  "https://videos.pexels.com/video-files/20156101/20156101-uhd_2560_1440_24fps.mp4",
  "https://videos.pexels.com/video-files/6814379/6814379-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/11302528/11302528-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/6989129/6989129-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/36514125/15482705_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/6248419/6248419-uhd_2560_1440_25fps.mp4",
];

const DURATION = 3000;
const FADE = 400;

export function CyclingVideoHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const n = (current + 1) % VIDEOS.length;
      setNext(n);
      setTimeout(() => {
        setCurrent(n);
        setNext(null);
      }, FADE);
    }, DURATION);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          autoPlay
          muted
          loop
          playsInline
          src={src}
          className="absolute inset-0 h-full w-full object-cover transition-opacity"
          style={{
            transitionDuration: `${FADE}ms`,
            opacity: i === current || i === next ? 1 : 0,
            zIndex: i === next ? 2 : i === current ? 1 : 0,
          }}
        />
      ))}
    </>
  );
}
