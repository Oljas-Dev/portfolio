import styled from "styled-components";
import PropTypes from "prop-types";
import { useRef } from "react";

import { smoothAppear } from "../keyframes/Keyframes";
import { StyledParagraph, Tags } from "../Variables/Variables";
import AdaptedParagraph from "./AdaptedParagraph";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  margin-bottom: 10rem;
  position: relative;

  div {
    margin-top: 1rem;
  }
`;

const StyledArticle = styled.article`
  background-color: var(--color-elements);
  width: 80%;
  height: 100%;

  padding: 2rem;
  border-radius: 5px;

  animation: ${smoothAppear} ${(props) => props.$sec}s ease-out;

  img {
    width: 100%;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 60%;
  }
  @media only screen and (max-width: 31.25em) {
    width: ${(props) => props.$width || "50%"};
  }
  @media only screen and (max-width: 25em) {
    width: ${(props) => props.$width || "40%"};
  }
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
`;

const StyledH3 = styled.h3`
  font-size: 2.5rem;
  text-align: left !important;
  color: var(--color-h2) !important;
  margin-top: 3rem;
`;

const StyledPre = styled.pre`
  background-color: var(--color-formsBack);
  color: inherit;
  font-size: ${(props) => props.$fontSize || "16px"};
  overflow-x: hidden;

  width: 100%;
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 5px;

  @media only screen and (max-width: 62.5em) {
    overflow-x: scroll;
  }
  @media only screen and (max-width: 43.75em) {
    font-size: 14px;
    text-align: left;
  }
`;

const StyledA = styled.a`
  font-size: 1.5rem;
  text-align: left;
  color: var(--color-mtext);
  background-color: var(--color-formsBack);

  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: var(--color-borders);
  }
`;

const t = {
  title0: "::Fast React Pizza Website",
  paragraph0:
    "Welcome to a pizza ordering application built with React.js and styled with Tailwind CSS. It was a lot of fun for me to work on this website. This project demonstrates my skills in:",
  paragraphStrong1: {
    strong: "--Component-based architecture: ",
    text: "Building reusable UI components for a scalable application.",
  },
  paragraphStrong2: {
    strong: "--State management: ",
    text: "Handling complex data flow and user interactions using React's state management techniques.",
  },
  paragraphStrong3: {
    strong: "--API integration: ",
    text: "Integrating with a mock API to fetch and display menu items, process orders, and manage user interactions.",
  },
  paragraphStrong4: {
    strong: "--Responsive design: ",
    text: "Creating a user-friendly interface that adapts seamlessly to different screen sizes.",
  },
  paragraphStrong5: {
    strong: "--Rapid prototyping: ",
    text: "Leveraging Tailwind CSS's utility-first approach to quickly build and style the application's UI.",
  },
  paragraph1: "Go ahead and check this project out in the link below! ",
  link0: {
    a: "",
    text: "pizza project",
  },
  tags: ["react", "tailwind"],
};

t.stringified = JSON.stringify(t, null, 2);

console.log(t.stringified);

function AdaptedText({ article, name }) {
  const topRef = useRef(null);

  const articleText = article?.articleText;

  const adaptedContent = [];

  const dev = name === "dev";
  const library = name === "library";

  for (let key in articleText) {
    if (key.startsWith("title")) {
      adaptedContent.push({ type: "title", text: articleText[key] });
    } else if (key.startsWith("paragraphStrong")) {
      adaptedContent.push({
        type: "paragraphStrong",
        strong: articleText[key].strong,
        text: articleText[key].text,
      });
    } else if (key.startsWith("paragraph")) {
      adaptedContent.push({ type: "paragraph", text: articleText[key] });
    } else if (key.startsWith("subheading")) {
      adaptedContent.push({ type: "subheading", text: articleText[key] });
    } else if (key.startsWith("code")) {
      adaptedContent.push({ type: "code", text: articleText[key] });
    } else if (key.startsWith("link")) {
      adaptedContent.push({
        type: "link",
        a: articleText[key].a,
        text: articleText[key].text,
      });
    } else if (key === "tags") {
      adaptedContent.push({ type: "tags", tags: articleText[key] });
    }
  }

  return (
    <>
      {dev && (
        <Container>
          <StyledArticle $sec="0.5" $width="90%" ref={topRef}>
            <StyledH2>{article?.articleTitle}</StyledH2>
            <img src={article?.high_res} />
          </StyledArticle>
          <StyledArticle $sec="0.7" $width="90%">
            {adaptedContent.map((item, index) => {
              if (item.type === "title") {
                return (
                  <StyledH2 key={index} ref={topRef}>
                    {item.text}
                  </StyledH2>
                );
              } else if (item.type === "paragraph") {
                return (
                  <StyledParagraph key={index}>{item.text}</StyledParagraph>
                );
              } else if (item.type === "paragraphStrong") {
                return <AdaptedParagraph key={index} item={item} />;
              } else if (item.type === "subheading") {
                return <StyledH3 key={index}>{item.text}</StyledH3>;
              } else if (item.type === "code") {
                return <StyledPre key={index}>{item.text}</StyledPre>;
              } else if (item.type === "link") {
                return (
                  <StyledA href={item.a} key={index} target="_blank">
                    {item.text}
                  </StyledA>
                );
              } else if (item.type === "tags") {
                return (
                  <div key={index}>
                    {item.tags.map((tag, i) => (
                      <Tags key={i}>#{tag}</Tags>
                    ))}
                  </div>
                );
              }
            })}
          </StyledArticle>
        </Container>
      )}

      {library && (
        <Container>
          <StyledArticle $sec="0.5">
            {adaptedContent.map((item, index) => {
              if (item.type === "title") {
                return (
                  <StyledH2 key={index} ref={topRef}>
                    {item.text}
                  </StyledH2>
                );
              } else if (item.type === "paragraph") {
                return (
                  <StyledParagraph key={index}>{item.text}</StyledParagraph>
                );
              } else if (item.type === "paragraphStrong") {
                return <AdaptedParagraph key={index} item={item} />;
              } else if (item.type === "subheading") {
                return <StyledH3 key={index}>{item.text}</StyledH3>;
              } else if (item.type === "code") {
                return <StyledPre key={index}>{item.text}</StyledPre>;
              } else if (item.type === "link") {
                return (
                  <StyledA href={item.a} key={index} target="_blank">
                    {item.text}
                  </StyledA>
                );
              }
            })}
          </StyledArticle>
        </Container>
      )}
    </>
  );
}

AdaptedText.propTypes = {
  article: PropTypes.array,
  name: PropTypes.string,
};

export default AdaptedText;
