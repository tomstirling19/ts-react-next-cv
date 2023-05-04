import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

interface StyledNavLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    borderRight?: boolean;
}

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

    @media (max-width: 641px) {
        display: block;
    }

    min-width: 6rem !important;
    max-width: 6rem;
    border: 2px solid rgba(150, 180, 255, 1) !important;
    background-color: rgba(150, 180, 255, 0.75) !important;
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
    @media (max-width: 991px) {
        background-color: rgba(150, 180, 255, 0.95) !important;
    }
`;

const StyledNav = styled.nav`
    flex-direction: row !important;
    display: flex;
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

    ${({ borderRight }) => borderRight && 'border-right: 1px solid currentColor;'}
`;

const NavigationBar = () => {
    const router = useRouter();

    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledNavbar
            className={`${expanded ? 'navbar-expanded' : ''}`}
            expand='lg'
            expanded={expanded}
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
                        >
                            02 : CV
                        </StyledNavLink>
                    </Link>
                    <Link href='/projects' passHref style={{ textDecoration: 'none' }}>
                        <StyledNavLink
                            className='primary-text'
                            onClick={() => router.push('/projects')}
                            aria-current={router.pathname === '/projects' ? 'page' : undefined}
                        >
                            03 : Projects
                        </StyledNavLink>
                    </Link>
                </StyledNav>
            </StyledNavbarCollapse>
        </StyledNavbar>
    );
};

export default NavigationBar;
