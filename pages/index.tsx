import Bio from '@/src/components/Bio';
import Hero from '@/src/components/Hero';
import Footer from '@/src/shared-components/Footer';
import NavigationBar from '@/src/shared-components/Navbar';
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
    return (
        <>
            <NavigationBar />
            <IndexContainer>
                <IndexContent>
                    <Hero />
                    <Bio />
                </IndexContent>
            </IndexContainer>
            <Footer />
        </>
    );
};

export default Index;
