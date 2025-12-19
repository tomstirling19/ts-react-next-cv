import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

type NavigationBarProps = {
    navbarColour: string;
};

type StyledNavLinkProps = ComponentPropsWithoutRef<'button'> & {
    borderRight?: boolean;
};

type Theme = { expanded: boolean };

const NavbarContainer = styled.div<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>>`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
`;

const StyledNavbar = styled(Navbar) <ComponentPropsWithoutRef<'div'>>`
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

const StyledNavbarToggle = styled(Navbar.Toggle) <ComponentPropsWithoutRef<'button'>>`
    display: none;
    margin-bottom: 0.5rem;
    min-width: 3rem !important;
    max-width: 3rem;
    border: 0.125rem solid #1e2f538f !important;
    background-color: #1e2f538f !important;
    border-radius: 0.5rem;
    padding: 0.4rem;

    .navbar-toggler-icon {
        margin-top: 2rem !important;
    }

    @media (max-width: 40.75rem) {
        display: block;
    }
`;

const StyledNavbarCollapse = styled.div<ComponentPropsWithoutRef<'div'>>`
    display: none;

    @media (max-width: 40.75rem) {
        display: ${(props) => ((props.theme as Theme).expanded ? 'block' : 'none')} !important;
        background-color: #1e2f538f !important;
        border-radius: 0.5rem;
        border: 0.125rem solid #1e2f538f !important;
    }

    @media (min-width: 40.875rem) {
        display: block !important;
    }
`;

const StyledNav = styled.nav<ComponentPropsWithoutRef<'nav'>>`
    display: flex;
    flex-direction: row !important;
    padding: 0.2rem;
    border-radius: 1.25rem !important;
`;

const StyledNavLink = styled.button<StyledNavLinkProps>`
    display: flex;
    padding: 0 1rem !important;
    background: none;
    border: none;
    font-family: inherit;
    line-height: 1rem !important;
    font-size: 0.9rem !important;
    cursor: pointer;

    &:hover {
        font-weight: 600;
        text-decoration: none !important;
    }

    &.first-navlink {
        padding-left: 0 !important;
    }

  ${({ borderRight }) => borderRight && 'border-right: 0.0625rem solid currentColor;'}

    @media (max-width: 40.75rem) {
        text-align: left;
        color: #ffffff !important;
        margin: 0.05rem;

        &.first-navlink {
        padding-left: 1rem !important;
        }
    }

    @media (max-width: 24rem) {
        letter-spacing: 0;
        font-size: 0.75rem !important;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const DownloadLink = styled.div<ComponentPropsWithoutRef<'div'>>`
    display: flex;
    position: absolute;
    width: max-content;
    padding: 0.15rem 1rem !important;
    margin-left: 23rem;
    cursor: pointer;

    @media (max-width: 40.75rem) {
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
        cursor: pointer;

        &:hover {
        font-weight: 600;
        text-decoration: none !important;
        }
    }

    &:hover button {
        font-weight: 600;
    }

    svg:hover + button {
        font-weight: 600;
    }
`;

const NavigationBar = ({ navbarColour }: NavigationBarProps) => {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => setExpanded((v) => !v);

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
            <NavbarContainer className="page-container">
                <StyledNavbar className={expanded ? 'navbar-expanded' : ''} expand="lg" fixed="top">
                    <StyledNavbarToggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
                        <FaBars color="white" style={{ marginTop: '0.2rem' }} />
                    </StyledNavbarToggle>

                    <StyledNavbarCollapse id="basic-navbar-nav">
                        <StyledNav className="nav-row">
                            <StyledLink href="/">
                                <StyledNavLink
                                    className="primary-text first-navlink"
                                    borderRight
                                    aria-current={router.pathname === '/' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    01 : Home
                                </StyledNavLink>
                            </StyledLink>

                            <StyledLink href="/cv">
                                <StyledNavLink
                                    className="primary-text"
                                    borderRight
                                    aria-current={router.pathname === '/cv' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    02 : CV
                                </StyledNavLink>
                            </StyledLink>

                            <StyledLink href="/projects">
                                <StyledNavLink
                                    className="primary-text"
                                    aria-current={router.pathname === '/projects' ? 'page' : undefined}
                                    style={{ color: textColour }}
                                >
                                    03 : Projects
                                </StyledNavLink>
                            </StyledLink>
                        </StyledNav>
                    </StyledNavbarCollapse>

                    <DownloadLink onClick={downloadCV}>
                        <FontAwesomeIcon icon={faDownload} size="1x" style={{ color: textColour }} />
                        <button className="primary-text" style={{ color: textColour }}>
                            Download CV
                        </button>
                    </DownloadLink>
                </StyledNavbar>
            </NavbarContainer>
        </ThemeProvider>
    );
};

export default NavigationBar;
