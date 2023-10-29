import { useRef, useState, useEffect } from "react";
import {
  VideoContainer,
  Controls,
  ProgressBar,
  ProgressBarFill,
} from "./StyledPlayer";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <VideoContainer>
        <video ref={videoRef} controls={false} width={"100%"}>
          <source src="/fargo.mp4" type="video/mp4"></source>
          <source src="/fargo.webm" type="video/webm"></source>
        </video>
        <Controls>
          <button onClick={handleRewind}>Rewind</button>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleFastForward}>Fast Forward</button>
          <button onClick={handleRestart}>Restart</button>
          <button onClick={handleFullscreen}>Fullscreen</button>
          <ProgressBar>
            <ProgressBarFill $progress={progress}></ProgressBarFill>
          </ProgressBar>
        </Controls>
      </VideoContainer>
    </div>
  );
}
