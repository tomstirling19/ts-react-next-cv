import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import styled from 'styled-components';

type HeroProps = {
    setNavbarColour: React.Dispatch<React.SetStateAction<string>>;
}

const HeroImage = styled.div`
    position: relative;
    height: 90vh;
    background-image: url('/ts.jpg');
    background-size: cover;
    background-position: center;
    object-fit: cover;
    width: 100% !important;
`;

const HeroContent = styled(Container)`
    display: flex;
    height: 100%;
    width: auto !important;
    align-items: center;
`;

const HeroText = styled.h1`
    color: white;
    font-size: 3.3rem;
    font-weight: bold;
    line-height: 1.5;
    text-shadow: 0 0 1.5625rem #1E2F53;

    @media (max-width: 35.75rem) {
        font-size: 2.75rem;
    }

    @media (max-width: 26.75rem) {
        font-size: 2.4rem;
    }
`;

const Hero: React.FC<HeroProps> = ({ setNavbarColour }) => {
    useEffect(() => {
        const checkScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 0.9 - 6 * parseInt(getComputedStyle(document.documentElement).fontSize);

            if (scrollPosition >= threshold) {
                setNavbarColour('#666');
            } else {
                setNavbarColour('#FFFFFF');
            }
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, [setNavbarColour]);

    return (
        <HeroImage>
            <HeroContent className='page-container'>
                <div>
                    <HeroText>
                        <span>Hello, I am</span>
                        <br />
                        <Typed
                            strings={[
                                'Thomas Stirling.',
                                'a software engineer.',
                                'a machine learning and AI enthusiast.',
                                'a film, fashion and art enjoyer.',
                            ]}
                            typeSpeed={50}
                            backSpeed={25}
                            backDelay={1250}
                            loop
                            cursorChar={'_'}
                        />
                    </HeroText>
                </div>
            </HeroContent>
        </HeroImage>
    );
};

export default Hero;
