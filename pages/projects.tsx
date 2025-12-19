import type { ComponentPropsWithoutRef } from 'react';
import ProjectData from '@/src/data/projectData.json';
import { splitSummaryIntoParagraphs } from '@/src/helpers/common';
import Footer from '@/src/shared-components/Footer';
import ProjectItem from '@/src/shared-components/ListItem';
import NavigationBar from '@/src/shared-components/Navbar';
import styled from 'styled-components';

const ProjectsContainer = styled.div<ComponentPropsWithoutRef<'div'>>`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
`;

const ProjectContent = styled.div<ComponentPropsWithoutRef<'div'>>`
    width: auto;
`;

const ProjectRow = styled.div<ComponentPropsWithoutRef<'div'>>`
    padding: 5rem 0 5rem 8rem !important;
    display: flex;
    align-items: center;

    @media (max-width: 85rem) {
        padding: 6rem 0 !important;
    }

    @media (max-width: 45rem) {
        padding: 4rem 0 !important;
    }
`;

const ProjectTitle = styled.h1<ComponentPropsWithoutRef<'h1'>>`
    padding-top: 14rem;
`;

const ProjectLink = styled.a<ComponentPropsWithoutRef<'a'>>`
    text-decoration: none;
`;

const ProjectLinkContainer = styled.div<ComponentPropsWithoutRef<'div'>>``;

const Projects = () => {
    const { projectsList } = ProjectData;

    return (
        <>
            <NavigationBar navbarColour={''} />
            <ProjectsContainer className='page-container'>
                <ProjectTitle className='header-text'>Projects.</ProjectTitle>
                <ProjectContent>
                    <div className='row'>
                        {projectsList.map((item, index) => (
                            <ProjectRow key={index}>
                                <ProjectLinkContainer>
                                    <ProjectLink href={item.link}>
                                        <ProjectItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
                                    </ProjectLink>
                                </ProjectLinkContainer>
                            </ProjectRow>
                        ))}
                    </div>
                </ProjectContent>
            </ProjectsContainer>
            <Footer />
        </>
    );
};

export default Projects;
