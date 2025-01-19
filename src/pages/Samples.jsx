import { useRef } from "react";

import { useDesignElements } from "../services/useDesignElements";
import { ArticleContainer, StyledOptions } from "../Variables/Variables";
import ArticlePreview from "../ui/ArticleGroup";
import Modal from "../ui/Modal";
import Decoration from "../ui/Decoration";
import Loaders from "../ui/Loaders";

function Samples() {
  const { portfolioArticles: articles, isLoadingPortfolio: isLoading } =
    useDesignElements();

  const topRef = useRef(null);

  if (isLoading) {
    return <Loaders />;
  }

  return (
    <Decoration>
      <Decoration.Main>
        <StyledOptions $mode="secondary" ref={topRef}>
          <Modal>
            <Modal.Options mode="secondary" path="/options" />
          </Modal>
          <ArticleContainer>
            {articles?.map((article, i) => (
              <ArticlePreview i={i} key={article.id} article={article} />
            ))}
          </ArticleContainer>
        </StyledOptions>
      </Decoration.Main>
    </Decoration>
  );
}
export default Samples;
