import Bio from '@/src/components/Bio';
import Hero from '@/src/components/Hero';
import NavigationBar from '@/src/components/Navbar';
import Footer from '@/src/shared-components/Footer';
import styled from 'styled-components';

const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    width: auto !important;
`;

const IndexContent = styled.div`
    justify-content: left !important;
`;

const Index = () => {
    return (
        <IndexContainer>
            <Hero />
            <IndexContent className='page-container'>
                <NavigationBar />
                <Bio />
                <Footer />
            </IndexContent>
        </IndexContainer>
    );
};

export default Index;
