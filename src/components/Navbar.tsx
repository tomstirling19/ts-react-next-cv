// import { useState } from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa';
// import styled from 'styled-components';

// const NavigationBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   const StyledNavbar = styled(Navbar)`
//   justify-content: flex-start !important;
//   flex-direction: row !important;
// `;

//   const StyledNavbarToggle = styled(Navbar.Toggle)`
//   min-width: 6rem !important;
//   max-width: 6rem;
//   border: 2px solid rgba(150, 180, 255, 1) !important;
//   background-color: rgba(150, 180, 255, 0.75) !important;
// `;

//   const StyledNavbarCollapse = styled(Navbar.Collapse)`
//   @media (max-width: 991px) {
//     background-color: rgba(150, 180, 255, 0.95) !important;
//   }
// `;

//   const StyledNav = styled(Nav)`
//   flex-direction: row !important;
// `;

//   const StyledNavLink = styled(Nav.Link)`
//   padding: 0 1rem !important;
//   border-right-width: 1px;
//   border-right-style: solid;

//   &:hover {
//     font-weight: bold;
//   }

//   &.active {
//     background-color: rgba(150, 180, 255, 0.75);
//   }
// `;

//   return (
//     <StyledNavbar
//       className={`page-container primary-text ${expanded ? 'navbar-expanded' : ''}`}
//       expand='lg'
//       expanded={expanded}
//       fixed='top'
//     >
//       <StyledNavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNavbar}>
//         <FaBars />
//       </StyledNavbarToggle>
//       <StyledNavbarCollapse id='basic-navbar-nav'>
//         <StyledNav className='nav-row'>
//           {/* <StyledNavLink as={Link} to='/home' className={`nav-links nav-border ${expanded ? 'active' : ''}`}>01 : Home</StyledNavLink>
//           <StyledNavLink as={Link} to='/cv' className={`nav-links nav-border ${expanded ? 'active' : ''}`}>02 : CV</StyledNavLink>
//           <StyledNavLink as={Link} to='/projects' className={`nav-links ${expanded ? 'active' : ''}`}>03 : Projects</StyledNavLink> */}
//         </StyledNav>
//       </StyledNavbarCollapse>
//     </StyledNavbar>
//   );
// };

// export default NavigationBar;
