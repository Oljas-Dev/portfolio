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

  animation: ${smoothAppear} ${(props) => props.$sec}s var(--easing);

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
  title0: "::Wild Oasis - Interactive Dashboard for Data Visualization",
  paragraph0:
    "The Wild Oasis Dashboard is a powerful and intuitive tool for monitoring and visualizing key data metrics. This project highlights my ability to develop robust, data-driven web applications with a focus on clarity, usability, and performance.",
  subheading0: "Features",
  paragraphStrong1: {
    strong: "--Interactive Charts: ",
    text: "Display dynamic charts and graphs for an engaging and insightful user experience.",
  },
  paragraphStrong2: {
    strong: "--Data Filtering: ",
    text: "Enable users to filter and customize displayed data for targeted analysis.",
  },
  paragraphStrong3: {
    strong: "--Dark and Light Modes: ",
    text: "Provides users with the ability to toggle between themes, ensuring a comfortable viewing experience in different lighting conditions.",
  },
  paragraphStrong30: {
    strong: "--User Login Form: ",
    text: "Includes a secure and elegant login form, demonstrating authentication features and user access management.",
  },
  paragraphStrong31: {
    strong: "--Responsive Design: ",
    text: "Designed to adapt seamlessly to any screen size, ensuring accessibility across devices.",
  },
  paragraphStrong32: {
    strong: "--Clean UI: ",
    text: "Minimalistic and organized interface for effortless navigation and information retrieval.",
  },
  subheading1: "Technologies and Techniques",
  paragraphStrong4: {
    strong: "--React: ",
    text: "Built using reusable components and modern hooks to optimize performance and maintainability.",
  },
  paragraphStrong5: {
    strong: "--Styled Components: ",
    text: "Leveraged for component-level styling, enabling dynamic theme switching and easily customizable designs.",
  },
  paragraphStrong6: {
    strong: "--Chart.js/React Chart Libraries: ",
    text: "Integrated for rendering interactive and visually appealing data charts.",
  },
  paragraphStrong7: {
    strong: "--Mock Data Integration: ",
    text: "Utilized React Context API for efficient state handling throughout the application.",
  },
  paragraphStrong70: {
    strong: "--State Management: ",
    text: "Employed mock APIs to simulate real-world data scenarios and improve development realism.",
  },
  subheading2: "Skills Enhanced",
  paragraphStrong8: {
    strong: "--Theming with Styled Components: ",
    text: "Mastered implementing dark and light mode functionality.",
  },
  paragraphStrong9: {
    strong: "--Data Visualization: ",
    text: "Gained expertise in designing and implementing dynamic visual representations of data. Gained experience in creating dynamic user interfaces with reusable components.",
  },
  paragraphStrong10: {
    strong: "--Authentication Basics: ",
    text: "Enhanced skills in creating secure and user-friendly login mechanisms.",
  },
  paragraphStrong11: {
    strong: "--UI/UX Optimization: ",
    text: "Strengthened my ability to create user-centric designs for dashboards and data tools.",
  },
  paragraphStrong12: {
    strong: "--Responsive Design Mastery: ",
    text: "Further honed my skills in creating adaptive layouts for diverse screen resolutions.",
  },
  paragraph1:
    "Check out the live demo at Wild Oasis Dashboard (link below) to experience streamlined data visualization, elegant theming, and secure user interaction. Just in case login data: oljas@example.com, password: 1111",
  link0: {
    a: "https://wild-oasis-five-indol.vercel.app/dashboard",
    text: "world wise app",
  },
  tags: ["react", "styled components", "tanstack"],
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
          <StyledArticle $sec="1.2" $width="90%" ref={topRef}>
            <StyledH2>{article?.articleTitle}</StyledH2>
            <img src={article?.high_res} />
          </StyledArticle>
          <StyledArticle $sec="1.5" $width="90%">
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
          <StyledArticle $sec="1.2">
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
