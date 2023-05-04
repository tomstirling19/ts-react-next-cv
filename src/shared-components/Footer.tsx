import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin-top: 6rem !important;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem !important;
    }
`;

const Footer = () => {
    return (
        <FooterContainer className='page-container primary-text'>
            <p>&copy; Thomas Stirling, 2023.</p>
        </FooterContainer>
    );
};

export default Footer;
