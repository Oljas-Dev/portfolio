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

//

//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const t = {
  title0: "::Beauty Blog - A Modern Platform for Beauty Enthusiasts",
  paragraph0:
    "The Beauty Blog is a visually stunning and user-friendly platform designed to captivate beauty enthusiasts and bloggers alike. This project demonstrates my ability to create an engaging website with a focus on aesthetics, functionality, and accessibility.",
  subheading0: "Features",
  paragraphStrong1: {
    strong: "--Dynamic Blog Content: ",
    text: "Display blog posts with titles, images, and summaries in a clean, attractive layout.",
  },
  paragraphStrong2: {
    strong: "--Post Categorization: ",
    text: "Organized content by categories, making it easy for users to navigate and find topics of interest.",
  },
  paragraphStrong3: {
    strong: "--Responsive Design: ",
    text: "Fully optimized for mobile, tablet, and desktop screens, ensuring a smooth browsing experience.",
  },
  subheading1: "Technologies and Techniques",
  paragraphStrong4: {
    strong: "--React: ",
    text: "Developed using reusable components and hooks for modular and efficient code.",
  },
  paragraphStrong5: {
    strong: "--CSS Modules: ",
    text: "Utilized modularized styles to achieve a consistent and maintainable design.",
  },
  paragraphStrong6: {
    strong: "--React Router: ",
    text: "Implemented for smooth navigation between pages without reloading.",
  },
  paragraphStrong7: {
    strong: "--API Integration: ",
    text: "Incorporated mock data fetching to simulate real-world content management systems.",
  },
  subheading2: "Skills Enhanced",
  paragraphStrong8: {
    strong: "--Web Design Aesthetics: ",
    text: "Sharpened my ability to create visually appealing and brand-appropriate designs.",
  },
  paragraphStrong9: {
    strong: "--React Development: ",
    text: "Gained experience in creating dynamic user interfaces with reusable components.",
  },
  paragraphStrong10: {
    strong: "--Routing and Navigation: ",
    text: "Strengthened my skills in setting up intuitive and seamless site navigation.",
  },
  paragraphStrong11: {
    strong: "--Performance Optimization: ",
    text: "Focused on delivering fast load times and an efficient user experience.",
  },
  paragraph1:
    "Explore the live demo using link below and see how beauty meets functionality! ",
  link0: {
    a: "https://beauty-blog-dusky.vercel.app/homepage",
    text: "beauty blog",
  },
  tags: ["react", "modules", "javascript"],
};

t.stringified = JSON.stringify(t, null, 2);

// console.log(t.stringified);

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
