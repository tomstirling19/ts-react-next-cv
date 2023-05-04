import heroImage from '@public/hero-image.png';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import styled from 'styled-components';

const HeroImage = styled.div`
    position: relative;
    height: 90vh;
    background-size: cover;
    background-position: center;
    object-fit: cover;
`;

const HeroContent = styled(Container)`
    display: flex;
    align-content: center;
    height: 100%;
    width: auto !important;
`;

const HeroText = styled.h1`
    color: white;
    font-size: 3.25rem;
    font-weight: bold;
    line-height: 1.5;
    text-shadow: 0 0 25px #000050;
`;

const Hero = () => {
    return (
        <HeroImage style={{ backgroundImage: `url(${heroImage})` }}>
            <HeroContent className='page-container hero-content'>
                <div>
                    <HeroText>
                        <span>Hello, I am</span><br />
                        <Typed
                            strings={['Thomas Stirling', 'a software engineer', 'a machine learning and AI enthusiast', 'a film, fashion and art enjoyer',]}
                            typeSpeed={50}
                            backSpeed={25}
                            backDelay={1250}
                            loop
                            cursorChar={' _'}
                        />
                    </HeroText>
                </div>
            </HeroContent>
        </HeroImage>
    );
};

export default Hero;
