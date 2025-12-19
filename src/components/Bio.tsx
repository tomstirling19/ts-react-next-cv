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

const BioTextContent = styled.div`
    margin-top: 2rem;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 6rem;
    width: auto;

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
        align-self: flex-start;
    }

    @media (max-width: 27rem) {
        a {
            margin-right: 1rem;
        }
    }

    @media (max-width: 23.5rem) {
        a {
            margin-right: .75rem;
        }
    }

    @media (max-width: 21rem) {
        a {
            margin-right: .5rem;
        }
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
                        My name is Thomas Stirling.
                        I hold a Master’s degree in Computer Science from the University of Leeds (MEng & BSc, First-Class Honours).
                    </p>
                    <p>
                        My greatest interests lie in AI, ML, data, and application development.
                        I’m enthusiastic with all things tech and try to stay updated with the latest industry developments.
                    </p>
                    <BioTextContent className='primary-text'>
                        <p>Right now, I am working on:</p>
                        <ul>
                            <li>
                                Developing <strong>Bamboo</strong> — a language learning mobile app using Go and React Native.
                            </li>
                            <li>
                                Strengthening my skills in machine learning model development (LLMs, neural networks).
                            </li>
                            <li>
                                Learning to design and deploy end-to-end ML systems, with a focus on tooling, orchestration, and scalability.
                            </li>
                            <li>
                                Staying up to date with breakthroughs in AI/ML research and infrastructure development.
                            </li>
                        </ul>
                    </BioTextContent>
                    <BioTextContent>
                        <p>My non-tech related interests include:</p>
                        <ul>
                            <li>
                                Playing tennis - I try and play as much as I can, but the UK weather does its best to stop me.
                            </li>
                            <li>
                                Fashion - I’m particularly interested in Japanese casual and outdoor wear.
                            </li>
                            <li>  
                                Art and Sketching - Stupid doodles and badly drawn things.
                            </li>
                            <li>
                                Gaming - My playtime in some games is something I shouldn’t discuss.
                            </li>
                        </ul>
                    </BioTextContent>
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
