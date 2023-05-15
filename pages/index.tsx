import Bio from '@/src/components/Bio';
import Hero from '@/src/components/Hero';
import Footer from '@/src/shared-components/Footer';
import NavigationBar from '@/src/shared-components/Navbar';
import { useState } from 'react';
import styled from 'styled-components';

const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    padding: 0 !important;
`;

const IndexContent = styled.div`
    width: 100%;
`;

const Index = () => {
    const [navbarColour, setNavbarColour] = useState<string>('#FFFFFF');

    return (
        <>
            <NavigationBar navbarColour={navbarColour} />
            <IndexContainer>
                <IndexContent>
                    <Hero setNavbarColour={setNavbarColour} />
                    <Bio />
                </IndexContent>
            </IndexContainer>
            <Footer />
        </>
    );
};

export default Index;
