import MobileVideo from '/public/media/videos/mobile.mp4'
import DesktopVideo from '/public/media/videos/video.mp4'
import MutedIcon from '../../inconComponents/Muted.jsx'
import UnmutedIcon from '../../inconComponents/Unmuted.jsx'
import './Hero.css'
import { useState, useRef } from 'react';

function Hero() {

  const [isMuted,setIsMuted] = useState(true);

  const videoRef = useRef(null)

  const toggleMute = () => {
    if(videoRef.current){
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const mutedRef = useRef(null);
  const unmutedRef = useRef(null);

  return (
    <>
      <section className='hero'>
        <video ref={videoRef} className='hero-video' autoPlay loop muted controls={false} poster='./assets/VideoHero/video-cover.webp'>
          <source src={MobileVideo}  media='(max-width: 768px)' type='video/mp4'/>
          <source src={DesktopVideo} media='(min-width: 768px)' type='video/mp4' />
        </video>
        <div className='buttons-video-container'>
          <div className='toggle-sound' onClick={toggleMute}>
            <div ref={mutedRef} className={`box-sound-item box-sound-item--muted ${isMuted ? 'active' : ''}`}>
              <MutedIcon />
            </div>
            <div ref={unmutedRef} className={`box-sound-item box-sound-item--umuted ${!isMuted ? 'active' : ''}`}>
              <UnmutedIcon />
            </div>
          </div>
          <div className='scroll-animation'>
            <span className='ball'></span>
          </div>
        </div>
        <div className='tag-container'>
          <div className='tag-box'>
            <span className='tag'>#ILMAESTRODELGELATO</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
