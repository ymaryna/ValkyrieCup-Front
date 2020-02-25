import React from 'react'

const HeaderVideo = () => {
    return (
        <div>
            <div className="video" style={{margin: '-7px', width: '101%'}}>
                <video
                autoPlay
                muted
                loop
                style={{
                    width: "100%",
                    left: 0,
                    top: 0
                }}
                >
                <source src="http://localhost:3000/valkyriecup-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div style={{
                height: '100px',
                backgroundImage: 'linear-gradient(to bottom, rgba(25,25,25,0), rgba(25,25,25,1))',
                marginTop: '-105px',
                position: 'sticky',
                width: '110%'
                }}>
            </div>
        </div>
      );
}

export default HeaderVideo