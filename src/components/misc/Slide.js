import React from 'react'
import { Carousel } from 'react-bootstrap'
import { slideBar1, slideBar2, slideBar3 } from '../../assets'

const Slide = () => {
    return(
        <Carousel id="news">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slideBar1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slideBar2}
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slideBar3}
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Slide