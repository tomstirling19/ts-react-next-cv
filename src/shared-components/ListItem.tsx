import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
  image: string;
  heading: string;
  summary: string[];
}

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 85rem) {
    flex-direction: column;
    padding: 0;
    margin-right: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-basis: 20rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-right: 10rem;
  height: auto !important;
  min-width: 0;

  @media (max-width: 85rem) {
    margin: 0;
    flex-basis: auto;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 75%;
  
  @media (max-width: 85rem) {
    max-width: 30%;
    height: auto !important;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  justify-content: center;

  @media (max-width: 85rem) {
    padding-top: 2rem;
    align-items: center;
    text-align: center;
    justify-content: left !important;
  }
`;

const ItemHeading = styled.h2`
  margin: 1rem 0 1rem 0 !important;
  font-size: 1.5rem !important;
`;

const ItemSummary = styled.p`
  margin-bottom: 0rem;
`;

const ListItem: React.FC<ListItemProps> = ({ image, heading, summary }) => {
  return (
    <ListItemWrapper>
      <ImageContainer>
        <StyledImage src={image} alt={heading} />
      </ImageContainer>
      <TextContainer>
        <ItemHeading className='header-text item-heading'>{heading}</ItemHeading>
        {summary.map((paragraph, index) => (
          <ItemSummary className='primary-text item-summary' key={index}>{paragraph}</ItemSummary>
        ))}
      </TextContainer>
    </ListItemWrapper>
  );
};

export default ListItem;
