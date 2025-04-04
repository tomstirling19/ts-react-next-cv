import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin: 6rem 0 2rem 0 !important;
    margin: 0;
    align-self: center;
    text-align: center;
    width: 100%;

    @media (max-width: 48rem) {
        font-size: 0.8rem !important;
    }
`;

const Footer = () => {
    return (
        <FooterContainer className='primary-text'>
            <p>&copy; Thomas Stirling, 2025.</p>
        </FooterContainer>
    );
};

export default Footer;
