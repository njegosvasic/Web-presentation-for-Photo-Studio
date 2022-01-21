import React from 'react';
import {Carousel} from 'react-bootstrap';

import slika1 from '../slike/pozadina4.jpg';
import slika2 from '../slike/pozadina4.jpg';
import slika3 from '../slike/pozadina4.jpg';

export default function ImgSlider() {
    return (
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-fluid"
                        src={slika1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        opis
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slika2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                         opis
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slika3}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            opis
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    )
}