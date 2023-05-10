import cvData from '@/src/data/cvData.json';
import { splitSummaryIntoParagraphs } from '@/src/helpers/common';
import Footer from '@/src/shared-components/Footer';
import CvItem from '@/src/shared-components/ListItem';
import NavigationBar from '@/src/shared-components/Navbar';
import styled from 'styled-components';

const CvContainer = styled.div`
    flex-direction: column;
    align-items: flex-start !important;
`;

const CvContent = styled.div`
    width: 100%;
`;

const CvRow = styled.div`
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

const CvTitle = styled.h1`
    padding-top: 14rem;
`;

const SectionHeader = styled.h2`
    margin: 8rem 0 4rem 0;
    font-weight: 300;
`;

const Cv = () => {
    const { educationList, experienceList } = cvData;

    return (
        <>
            <NavigationBar />
            <CvContainer className='page-container'>
                <CvTitle className='header-text'>Curriculum Vitae.</CvTitle>
                <CvContent>
                    <div className='row'>
                        <div className='col-12'>
                            <SectionHeader className='header-text'>Education</SectionHeader>
                        </div>
                        {educationList.map((item, index) => (
                            <div className='col-md-6' key={index}>
                                <CvRow>
                                    <CvItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
                                </CvRow>
                            </div>
                        ))}
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <SectionHeader className='header-text'>Experience</SectionHeader>
                        </div>
                        {experienceList.map((item, index) => (
                            <div className='col-md-6' key={index}>
                                <CvRow>
                                    <CvItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
                                </CvRow>
                            </div>
                        ))}
                    </div>
                </CvContent>
            </CvContainer>
            <Footer />
        </>
    );
};

export default Cv;
