import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { smoothAppear } from "../keyframes/Keyframes";
import { Tags } from "../Variables/Variables";

const StyledArticleGroup = styled(NavLink)`
  color: inherit;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  background-color: var(--color-formsBack);
  font-size: 1.6rem;

  width: 40rem;
  height: 40rem;
  padding: 0.5rem 1.5rem 1.3rem;
  border-radius: 5px;
  border-top: 1px solid var(--color-borders);
  border-right: 1px solid var(--color-borders);
  box-shadow: -2px 2px 4px rgb(0, 0, 0, 0.25);

  animation: ${smoothAppear} ${(props) => props.$sec}s ease-out;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 70%;
  background-color: ${(props) => props.$color || "var(--color-links)"};
  margin: 0 -1.5rem 0;

  overflow: hidden;

  h4 {
    font-size: 2rem !important;
    font-weight: 400;
    color: #202451;
  }
`;

const TagsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 1rem;
`;

function ArticleGroup({
  article: { id, title, preview, pictures, articleText },
  i,
}) {
  return (
    <StyledArticleGroup to={`${id}`}>
      <Container $sec={`0.${i + 4}`}>
        <div>{title}</div>
        <Preview $color={preview?.color}>
          <h4>{preview?.title}</h4>
          <img src={pictures} alt="article group" />
        </Preview>
        <TagsContainer>
          {articleText?.tags.map((tag, i) => (
            <Tags key={i}>{tag}</Tags>
          ))}
        </TagsContainer>
      </Container>
    </StyledArticleGroup>
  );
}

ArticleGroup.propTypes = {
  article: PropTypes.object,
  i: PropTypes.number,
};

export default ArticleGroup;
