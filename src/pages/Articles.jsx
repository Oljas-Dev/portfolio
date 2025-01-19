import { useRef } from "react";

import Decoration from "../ui/Decoration";
import Modal from "../ui/Modal";
import { ArticleContainer, StyledOptions } from "../Variables/Variables";
import ArticleGroup from "../ui/ArticleGroup";
import { useDesignElements } from "../services/useDesignElements";
import Loaders from "../ui/Loaders";

function Articles() {
  const { devArticles: articles, isLoadingArticles: isLoading } =
    useDesignElements();

  const topRef = useRef(null);

  if (isLoading) return <Loaders />;

  return (
    <Decoration>
      <Decoration.Main>
        <StyledOptions $mode="secondary" ref={topRef}>
          <Modal>
            <Modal.Options mode="secondary" path="/options" />
          </Modal>
          <ArticleContainer>
            {articles?.map((article, i) => (
              <ArticleGroup key={article.id} article={article} i={i} />
            ))}
          </ArticleContainer>
        </StyledOptions>
      </Decoration.Main>
    </Decoration>
  );
}

export default Articles;
