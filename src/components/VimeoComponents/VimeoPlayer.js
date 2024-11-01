const VimeoPlayer = ({ videoUrl }) => {
  return (
 
    <>
        <iframe
          src={`${videoUrl.replace('vimeo.com', 'player.vimeo.com/video')}`}
          width="65%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //   allowFullScreen
        //   style={{ position: 'absolute', top: 0, left: 0 }}
          />
          </>
  );
};

export default VimeoPlayer