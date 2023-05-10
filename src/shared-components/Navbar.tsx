import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styled, { ThemeProvider } from 'styled-components';

interface StyledNavLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    borderRight?: boolean;
}

const NavbarContainer = styled.div`
    flex-direction: column;
    align-items: flex-start !important;
`;

const StyledNavbar = styled(Navbar)`
    justify-content: flex-start !important;
    flex-direction: row !important;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-top: 5rem !important;
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
    display: none;
    margin-bottom: .5rem;
    min-width: 6rem !important;
    max-width: 6rem;
    border: 0.125rem solid #1E2F538F !important;
    background-color: #1E2F538F !important;
    border-radius: .5rem;

    @media (max-width: 40rem) {
        display: block;
    }
`;

const StyledNavbarCollapse = styled.div`
  display: none;

  @media (max-width: 40rem) {
    display: ${props => props.theme.expanded ? 'block' : 'none'} !important;
    background-color: #1E2F538F !important;
    border-radius: .5rem;
    border: 0.125rem solid #1E2F538F !important;
  }

  @media (min-width: 40.125rem) {
    display: block !important;
  }
`;

const StyledNav = styled.nav`
    flex-direction: row !important;
    display: flex;
    padding: .2rem;
    border-radius: 1.25rem !important;
`;

const StyledNavLink = styled.button<StyledNavLinkProps>`
    display: block;
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

    @media(max-width: 40.0625rem) {
        text-align: left;
        color: #FFFFFF !important;
        
        &.first-navlink {
            padding-left: 1rem !important;
        }
    }
    `;

const NavigationBar = () => {
    const router = useRouter();

    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const textColor = router.pathname === '/' ? '#FFFFFF' : undefined;

    return (
        <ThemeProvider theme={{ expanded }}>
            <NavbarContainer className='page-container'>
                <StyledNavbar
                    className={`${expanded ? 'navbar-expanded' : ''}`}
                    expand='lg'
                    fixed='top'
                >
                    <StyledNavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNavbar}>
                        <FaBars />
                    </StyledNavbarToggle>
                    <StyledNavbarCollapse id='basic-navbar-nav'>
                        <StyledNav className='nav-row'>
                            <Link href='/' passHref style={{ textDecoration: 'none' }}>
                                <StyledNavLink
                                    className='primary-text first-navlink'
                                    borderRight
                                    onClick={() => router.push('/')}
                                    aria-current={router.pathname === '/' ? 'page' : undefined}
                                    style={{ color: textColor }}
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
                                    style={{ color: textColor }}
                                >
                                    02 : CV
                                </StyledNavLink>
                            </Link>
                            <Link href='/projects' passHref style={{ textDecoration: 'none' }}>
                                <StyledNavLink
                                    className='primary-text'
                                    onClick={() => router.push('/projects')}
                                    aria-current={router.pathname === '/projects' ? 'page' : undefined}
                                    style={{ color: textColor }}
                                >
                                    03 : Projects
                                </StyledNavLink>
                            </Link>
                        </StyledNav>
                    </StyledNavbarCollapse>
                </StyledNavbar>
            </NavbarContainer>
        </ThemeProvider>
    );
};

export default NavigationBar;
