import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { NavBack, StyledOptions } from "../Variables/Variables";
import { useDesignElements } from "../services/useDesignElements";
import AdaptedText from "../ui/AdaptedText";

const DevArticleContext = createContext();

const DevArticle = ({ children }) => {
  const { portfolioArticles, devArticles } = useDesignElements();
  const articleId = useParams();

  const article = (item) =>
    item?.find((article) => article.id === Number(articleId.articleId));
  return (
    <DevArticleContext.Provider
      value={{ portfolioArticles, devArticles, article }}
    >
      {children}
    </DevArticleContext.Provider>
  );
};

function Development(link) {
  const { article, portfolioArticles } = useContext(DevArticleContext);
  const articleId = article(portfolioArticles);
  return (
    <StyledOptions $mode="secondary" $gap="2rem">
      <NavBack to={link.link} $display="none" />
      <AdaptedText article={articleId} name="dev" />
    </StyledOptions>
  );
}

function Library(link) {
  const { article, devArticles } = useContext(DevArticleContext);
  const articleId = article(devArticles);
  return (
    <StyledOptions $mode="secondary" $gap="2rem">
      <NavBack to={link.link} $display="none" />
      <AdaptedText article={articleId} name="library" />
    </StyledOptions>
  );
}

DevArticle.Development = Development;
DevArticle.Library = Library;

DevArticle.propTypes = {
  children: PropTypes.any,
};

export default DevArticle;
