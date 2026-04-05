import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../LottieAnimation/LottieAnimation';
function Apps() {
  
   const container = useRef(null)
   
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../office.json')
    })
  }, [])

  return (
    <div className='lottie' ref={container}></div>
  );
}

export default Apps;
