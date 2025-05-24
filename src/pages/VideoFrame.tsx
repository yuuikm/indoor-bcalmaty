const VideoFrame = () => (
  <div className="h-[50vh] w-full overflow-hidden">
    <video
      src="/video/video1.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    />
  </div>
);

export default VideoFrame;
