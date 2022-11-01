import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";


const Analysis = () => {
    const container = useRef(null)
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer:'svg',
        loop: true,
        autoplay:true,
        animationData:require('../images/animations/work in progress.json')

      })
    }, [])
  return (
    <div>
        <div className="container work-in-progress-lottie" ref={container}>

        </div>
        <div className="work-in-progress-title">
            Work in progress....
        </div>
    </div>
  )
}

export default Analysis