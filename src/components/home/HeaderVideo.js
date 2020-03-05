import React from 'react'
import { video } from '../../assets'

const HeaderVideo = () => {
    return (
        <div>
            <div className="video">
                <video
                autoPlay
                muted
                loop
                >
                <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="video-gradient"></div>
        </div>
      );
}

export default HeaderVideo