import React from "react";
import { Carousel } from "react-bootstrap";

import carMacOne from "../../banner/banner1.jpg"
import carMacTwo from "../../banner/banner2.jpg"
import carMacThree from "../../banner/banner3.jpg"

function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carMacOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Car Mac</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carMacTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second Car Mac</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carMacThree}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third Car Mac</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Home;