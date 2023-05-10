import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const BioContainer = styled.div`
    display: flex;
    align-items: flex-start !important;

    @media (max-width: 48rem) {
        flex-direction: column !important;
    }
`;

const LeftCol = styled.div`
    flex: 2;
    height: 100%;
    max-width: 100%;
    padding-right: 8rem;

    @media (max-width: 48rem) {
        padding-right: 0;
    }
`;

const RightCol = styled.div`
    flex: 1;
    height: 100%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 75rem) {
        width: 100%;
        max-width: 100%;
        align-items: left;
        padding-left: 0;
    }
`;

const BioTitle = styled.h1`
    padding: 0 0 1rem 0;
    font-size: 2.5rem !important;
`;

const BioText = styled.div`
    text-align: left;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 6rem;
    width: 100%;

    a {
        color: #1E2F53;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: #FBFF00;
        }
    }

    @media (max-width: 59.5rem) {
        flex-direction: row;
        align-self: center;
        width: auto;
        a {
            line-height: 0;
            margin-right: 4rem;
        }
    }

    @media (max-width: 37.5rem) {
        a {
            margin-right: 2rem;
        }
    }

    @media (max-width: 29.5rem) {
        a {
            margin-right: 1rem;
        }
        align-self: flex-start;
    }
`;

const EmailLink = styled.a`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-decoration: none;
    line-height: 3rem;

    @media (max-width: 75rem) {
        span {
            display: none;
        }
    }
`;

const Bio = () => {
    return (
        <BioContainer className='page-container'>
            <LeftCol>
                <BioTitle className='header-text'>Welcome.</BioTitle>
                <BioText className='primary-text'>
                    <p>
                        My name is Thomas Stirling (or Tom). I graduated from the University
                        of Leeds with a Masters in Computer Science (MEng & BSc Computer
                        Science - 1st Class).
                    </p>
                    <p>
                        My greatest interests lie in AI and ML, with keen interests in
                        Blockchain, Web3 and application development (Web / Mobile).
                    </p>
                    <p>I&apos;m currently:</p>
                    <ul>
                        <li>
                            Strengthening my skillset in machine learning model development
                            (LLMs, NNs).
                        </li>
                        <li>
                            Learning how to design end-to-end machine learning systems
                            (tooling, design and deployment).
                        </li>
                        <li>
                            Keeping up-to-date with breakthrough research and development
                            within the AI/ML space.
                        </li>
                        <li>
                            Working on application development within an international company.
                        </li>
                    </ul>
                </BioText>
            </LeftCol>
            <RightCol>
                <BioTitle className='header-text'>Links.</BioTitle>
                <LinksContainer>
                    <a
                        href='https://www.linkedin.com/in/thomasdstirling/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faLinkedin} size='4x' />
                    </a>
                    <a
                        href='https://github.com/tomstirling19/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faGithub} size='4x' />
                    </a>
                    <a
                        href='https://gitlab.com/tomstirling'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faGitlab} size='4x' />
                    </a>
                    <EmailLink
                        href='mailto:tomstirling19@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faEnvelope} size='4x' />
                        <span>tomstirling19@gmail.com</span>
                    </EmailLink>
                </LinksContainer>
            </RightCol>
        </BioContainer>
    );
};

export default Bio;
