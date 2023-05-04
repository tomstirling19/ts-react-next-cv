import ProjectData from '@/src/data/projectData.json';
import { splitSummaryIntoParagraphs } from '@/src/helpers/common';
import ProjectItem from '@/src/shared-components/ListItem';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
`;

const ProjectContent = styled.div`
    width: 100%;
`;

const ProjectRow = styled.div`
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

const ProjectTitle = styled.h1`
    padding-top: 8rem;
    font-size: 2.5rem;
`;

const Projects = () => {
    const { projectsList } = ProjectData;

    return (
        <ProjectsContainer className='page-container'>
            <ProjectTitle className='header-text projects-title'>Projects.</ProjectTitle>
            <ProjectContent>
                <div className='row'>
                    {projectsList.map((item, index) => (
                        <ProjectRow key={index}>
                            <ProjectItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
                        </ProjectRow>
                    ))}
                </div>
            </ProjectContent>
        </ProjectsContainer>
    );
};

export default Projects;
