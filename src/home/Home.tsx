import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import './css/Home.css';
import js_image from './images/js.png';
import carousel_image1 from './images/carousel/image1.jpg';
import carousel_image2 from './images/carousel/image2.jpg';
import carousel_image3 from './images/carousel/image3.jpg';
import mansonary_image1 from './images/mansonary/image1.jpg';
import mansonary_image2 from './images/mansonary/image2.jpg';
import mansonary_image3 from './images/mansonary/image3.jpg';
import mansonary_image4 from './images/mansonary/image4.jpg';
import mansonary_image5 from './images/mansonary/image5.png';
import mansonary_image6 from './images/mansonary/image6.webp';
import mansonary_image7 from './images/mansonary/image7.webp';
import mansonary_image8 from './images/mansonary/image8.jpg';
import mansonary_image9 from './images/mansonary/image9.png';
import mansonary_image10 from './images/mansonary/image10.jpg';
import mansonary_image11 from './images/mansonary/image11.png';
import mansonary_image12 from './images/mansonary/image12.jpg';
import mansonary_image13 from './images/mansonary/image13.jpg';

interface ScrollState {
    scroller: number;
}

const Home: React.FC = () => {

    const [scrollState, setScrollState] = useState<ScrollState>({ scroller: 0 });

    useEffect(() => {

        const handleScroll = () => {
            setScrollState({ scroller: document.documentElement.scrollTop });
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                const navbar = document.getElementById("navbar") ;
                if (navbar) {
                    navbar.style.top = "0";
                }
            } else {
                const navbar = document.getElementById("navbar") as HTMLElement;
                if (navbar) {
                    navbar.style.top = "-50px";
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollState])

    const activeStyle = { color: "#F15B2A" };
    
    return (
        <div>
            <div id="navbar">
                <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            </div>
            <div className="parallax-image img1">
                <div className='top-section'>
                    <Carousel>
                        <Carousel.Item>
                            <img src={carousel_image1}
                                alt="First slide"
                                width="800px"
                                height="660px"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={carousel_image2}
                                alt="Third slide"
                                width="800px"
                                height="660px"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={carousel_image3}
                                alt="Third slide"
                                width="800px"
                                height="660px"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="parallax-image img1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fillOpacity="1" d="M0,96L720,256L1440,128L1440,320L720,320L0,320Z">
                        </path>
                    </svg>
            </div>
            <div className="parallax-image img2 gap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,0L0,128L84.7,128L84.7,160L169.4,160L169.4,96L254.1,96L254.1,320L338.8,320L338.8,288L423.5,288L423.5,224L508.2,224L508.2,64L592.9,64L592.9,96L677.6,96L677.6,224L762.4,224L762.4,256L847.1,256L847.1,128L931.8,128L931.8,32L1016.5,32L1016.5,32L1101.2,32L1101.2,192L1185.9,192L1185.9,288L1270.6,288L1270.6,64L1355.3,64L1355.3,256L1440,256L1440,0L1355.3,0L1355.3,0L1270.6,0L1270.6,0L1185.9,0L1185.9,0L1101.2,0L1101.2,0L1016.5,0L1016.5,0L931.8,0L931.8,0L847.1,0L847.1,0L762.4,0L762.4,0L677.6,0L677.6,0L592.9,0L592.9,0L508.2,0L508.2,0L423.5,0L423.5,0L338.8,0L338.8,0L254.1,0L254.1,0L169.4,0L169.4,0L84.7,0L84.7,0L0,0L0,0Z">
                    </path>
                </svg>
                <div className="masonry">
                    <div className="item">
                        <img alt='' src={mansonary_image1} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image2} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image3} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image4} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image5} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image6} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image7} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image8} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt=''src={mansonary_image9} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image10} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image11} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image12} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="item">
                        <img alt='' src={mansonary_image13} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ff5500" fillOpacity="1" d="M0,64L11.4,58.7C22.9,53,46,43,69,42.7C91.4,43,114,53,137,64C160,75,183,85,206,101.3C228.6,117,251,139,274,138.7C297.1,139,320,117,343,101.3C365.7,85,389,75,411,112C434.3,149,457,235,480,229.3C502.9,224,526,128,549,80C571.4,32,594,32,617,74.7C640,117,663,203,686,208C708.6,213,731,139,754,96C777.1,53,800,43,823,69.3C845.7,96,869,160,891,197.3C914.3,235,937,245,960,240C982.9,235,1006,213,1029,192C1051.4,171,1074,149,1097,133.3C1120,117,1143,107,1166,117.3C1188.6,128,1211,160,1234,192C1257.1,224,1280,256,1303,245.3C1325.7,235,1349,181,1371,138.7C1394.3,96,1417,64,1429,48L1440,32L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className="parallax-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ff5500" fillOpacity="1" d="M0,192L11.4,202.7C22.9,213,46,235,69,202.7C91.4,171,114,85,137,64C160,43,183,85,206,117.3C228.6,149,251,171,274,197.3C297.1,224,320,256,343,277.3C365.7,299,389,309,411,288C434.3,267,457,213,480,165.3C502.9,117,526,75,549,48C571.4,21,594,11,617,21.3C640,32,663,64,686,74.7C708.6,85,731,75,754,74.7C777.1,75,800,85,823,74.7C845.7,64,869,32,891,32C914.3,32,937,64,960,117.3C982.9,171,1006,245,1029,245.3C1051.4,245,1074,171,1097,154.7C1120,139,1143,181,1166,218.7C1188.6,256,1211,288,1234,293.3C1257.1,299,1280,277,1303,224C1325.7,171,1349,85,1371,58.7C1394.3,32,1417,64,1429,80L1440,96L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z">
                    </path>
                </svg>
                <div className='bottom-section'>
                    <img alt='' src={js_image} height='700px' width='700px' />
                </div>
            </div>
        </div>
    );
}

export default Home;