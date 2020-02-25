import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slide = () => {
    return(
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/r2MwdZz/VALKYRIE-CUP-DEFAULT.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/PMCCd77/CASTERS-ABICHU-SCYTHE.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.ibb.co/YXHLY34/2-KRAKEN.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Slide