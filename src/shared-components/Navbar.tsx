import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styled, { ThemeProvider } from 'styled-components';

interface StyledNavLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    borderRight?: boolean;
}

type NavigationBarProps = {
    navbarColour: string;
}

const NavbarContainer = styled.div`
    flex-direction: column;
    align-items: flex-start !important;
`;

const StyledNavbar = styled(Navbar)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    flex-direction: column !important;
    position: absolute;
    z-index: 1;
    top: 0;
    margin-top: 5rem !important;
    padding-right: 2rem;
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
    display: none;
    margin-bottom: .5rem;
    min-width: 3rem !important;
    max-width: 3rem;
    border: 0.125rem solid #1E2F538F !important;
    background-color: #1E2F538F !important;
    border-radius: .5rem;
    padding: .4rem;

    .navbar-toggler-icon {
        margin-top: 2rem !important;
    }

    @media (max-width: 40.75rem) {
        display: block;
    }
`;

const StyledNavbarCollapse = styled.div`
  display: none;

  @media (max-width: 40.75rem) {
    display: ${props => props.theme.expanded ? 'block' : 'none'} !important;
    background-color: #1E2F538F !important;
    border-radius: .5rem;
    border: 0.125rem solid #1E2F538F !important;
  }

  @media (min-width: 40.875rem) {
    display: block !important;
  }
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row !important;
    padding: .2rem;
    border-radius: 1.25rem !important;
`;

const StyledNavLink = styled.button<StyledNavLinkProps>`
    display: flex;
    padding: 0 1rem !important;
    background: none;
    border: none;
    font-family: inherit;
    line-height: 1rem !important;
    font-size: .9rem !important;
    
    &:hover {
        font-weight: 600;
        text-decoration: none !important;
    }

    &.first-navlink {
        padding-left: 0 !important;
    }

    &.no-underline {
        text-decoration: none;
    }

    ${({ borderRight }) => borderRight && 'border-right: 0.0625rem solid currentColor;'}

    @media(max-width: 40.75rem) {
        text-align: left;
        color: #FFFFFF !important;
        margin: .05rem;

        &.first-navlink {
            padding-left: 1rem !important;
        }
    }

    @media(max-width: 24rem) {
        letter-spacing: 0;
        font-size: .75rem !important;
    }
`;

const DownloadLink = styled.div<StyledNavLinkProps>`
    display: flex;
    position: absolute;
    width: max-content;
    padding: 0.15rem 1rem !important;
    margin-left: 23rem;

    @media(max-width: 40.75rem) {
        margin-top: 0.5rem;
        margin-left: 4rem !important;
        text-align: left;
    }

    button {
        background: none;
        border: none;
        font-family: inherit;
        line-height: 1rem !important;
        font-size: 0.9rem !important;
        padding: 0.05rem 0.05rem 0.05rem 1rem;

        &:hover {
        font-weight: 600;
        text-decoration: none !important;
        }
    }

    &:hover {
        button {
            font-weight: 600;
        }
    }

    svg:hover + button {
        font-weight: 600;
    }
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ navbarColour }) => {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);
    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const downloadCV = () => {
        const cv = '/data/thomas-stirling-cv25.pdf';
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'thomas-stirling-cv25.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const textColour = router.pathname === '/' ? navbarColour : undefined;

    return (
        <ThemeProvider theme={{ expanded }}>
            <NavbarContainer className='page-container'>
                <StyledNavbar
                    className={`${expanded ? 'navbar-expanded' : ''}`}
                    expand='lg'
                    fixed='top'
                >
                    <StyledNavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNavbar}>
                        <FaBars color='white' style={{ marginTop: '.2rem' }} />
                    </StyledNavbarToggle>
                    <StyledNavbarCollapse id='basic-navbar-nav'>
                        <StyledNav className='nav-row'>
                            <Link href='/' passHref style={{ textDecoration: 'none' }}>
                                <StyledNavLink
                                    className='primary-text first-navlink'
                                    borderRight
                                    onClick={() => router.push('/')}
                                    aria-current={router.pathname === '/' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    01 : Home
                                </StyledNavLink>
                            </Link>
                            <Link href='/cv' passHref style={{ textDecoration: 'none' }}>
                                <StyledNavLink
                                    className='primary-text'
                                    borderRight
                                    onClick={() => router.push('/cv')}
                                    aria-current={router.pathname === '/cv' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    02 : CV
                                </StyledNavLink>
                            </Link>
                            <Link href='/projects' passHref style={{ textDecoration: 'none' }}>
                                <StyledNavLink
                                    className='primary-text'
                                    onClick={() => router.push('/projects')}
                                    aria-current={router.pathname === '/projects' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    03 : Projects
                                </StyledNavLink>
                            </Link>
                        </StyledNav>
                    </StyledNavbarCollapse>
                    <DownloadLink onClick={() => downloadCV()}>
                        <FontAwesomeIcon icon={faDownload} size='1x' style={{ color: textColour }} />
                        <button
                            className='primary-text'
                            aria-current={router.pathname === '/projects' ? 'page' : undefined}
                            style={{ color: textColour }}
                        >
                            Download CV
                        </button>
                    </DownloadLink>
                </StyledNavbar>
            </NavbarContainer>
        </ThemeProvider>
    );
};

export default NavigationBar;
