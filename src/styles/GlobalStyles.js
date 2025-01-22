import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}

:root {
// ---------- colors and themes ----------

&, &.olive-theme {
 --color-mgradient1: #778559;
 --color-mgradient2: #C2D49C;
 --color-mtext: #E0F8AE;
 --color-elements: #C3DC8F;
 --color-links: #6B7A4B;
 --color-btngradient1: #536233;
 --color-btngradient2: #7C8B5C;
 --color-btnstroke1: #34382A;
 --color-btnstroke2: #7AA61E;
 --color-dashes: #87946B;
 --color-plus: #9EB176;
 --color-plus-hover: #ADC182;
 --color-borders: #F2FFD6;
 --color-h2: #6B7A4B;
 --color-p: #7C8B5C;
 --color-inactive: #9BA685;
 --color-formsBack: #9BAA79;

 // ---------- loader ----------
  --light: 170, 188, 132;
  --shadow: 120, 132, 94;
  --light-mod: 1;
  --shadow-mod: 1;
}

&.metallic-theme {
  --color-mgradient1: #8A8875;
 --color-mgradient2: #E0DDCA;
 --color-mtext: #FAF8E9;
 --color-links: #6D6B5D;
 --color-btngradient1: #4E4A36;
 --color-btngradient2: #E7D03D;
 --color-dashes: #827F6C;
 --color-plus: #CBC59F;
 --color-plus-hover: #F5F2E1;
 --color-h2: #6D6B5D;
 --color-p: #615F51;
 --color-borders: #FFFFFF;
 --color-btnstroke1: #34342D;
 --color-btnstroke2: #F4F2E1;
 --color-elements:rgb(227, 226, 211);
 --color-inactive: #DAD9D3;
 --color-formsBack: #2C2C25;

 // ---------- loader ----------
  --light: 224, 221, 202; // mgradient2
  --shadow: 138, 136, 117; // mgradient1
  --light-mod: 0.5;
  --shadow-mod: 0.8;
}

&.dark-theme {
  --color-mgradient1: #202630;
 --color-mgradient2: #2E3339;
 --color-mtext: #E8EAE9;
 --color-links: #8C8C8C;
 --color-btngradient1: #116164;
 --color-btngradient2: #5F31CB;
 --color-dashes: #279F83;
 --color-plus: #9B93FE;
 --color-plus-hover: #E1DEFF;
 --color-h2: #E8EAE9;
 --color-p:rgb(206, 206, 206);
 --color-borders: #D4FFF6;
 --color-btnstroke1: #151444;
 --color-btnstroke2: #99A5F5;
 --color-elements:rgba(58, 151, 128, 1);
 --color-inactive: #CABEBE;
 --color-formsBack: #1C2028;

 // ---------- loader ----------
  --light: 17, 97, 100; // mgradient2
  --shadow: 32, 38, 1; // mgradient1
  --light-mod: 1;
  --shadow-mod: 0.8;
}

 // ---------- radius ----------

 --radius-full: 50%;
 --radius-sm: 0.5rem;

 transition: all 0.2s linear;

  // ---------- linear animation ----------

  --elastic-easing: linear(0, 0.218 2.1%, 0.862 6.5%, 1.114, 1.296 10.7%, 1.346, 1.37 12.9%, 1.373, 1.364 14.5%, 1.315 16.2%, 1.032 21.8%, 0.941 24%, 0.891 25.9%, 0.877, 0.869 27.8%, 0.87, 0.882 30.7%, 0.907 32.4%, 1.012 38.3%, 1.036, 1.046 42.7% 44.1%, 1.042 45.7%, 0.996 53.3%, 0.988, 0.984 57.5%, 0.985 60.7%, 1.001 68.1%, 1.006 72.2%, 0.998 86.7%, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: 100em) {
    font-size: 56.25%;
  }
  @media only screen and (max-width: 87.5em) {
    font-size: 50%;
  }
  @media only screen and (max-width: 43.75em) {
    font-size: 45%;
  }
  @media only screen and (max-height: 43.75em) {
    font-size: 45%;
  }
  @media only screen and (max-width: 31.25em) {
    font-size: 40%;
  }
  @media only screen and (max-height: 31.25em) {
    font-size: 40%;
  }
  @media only screen and (max-width: 25em) {
    font-size: 35%;
  }
}

body {
  font-family: "Jost", sans-serif;
  font-weight: 400;
  color: var(--color-mtext);

  height: 100%;
  line-height: 1.5;
  font-size: 2rem;

  @media only screen and (max-width: 62.5em) {
    // height: auto;
  }
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button,
a {
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
}

h1 {
@media only screen and (max-width: 25em) {
    font-size: 3.5rem;
  }
}

h2 {
    color: var(--color-h2);
}

p {
    color: var(--color-p);
}

.d-none {
display: none;
}

// ---------- Header hover effects ----------

.main em:hover {
  animation: bouncy .4s cubic-bezier(.07,1.1,.81,.11);
  cursor: pointer;
}

@keyframes bouncy {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scaleX(2.5) rotate(5deg);
  }
  40% {
    transform: scaleY(1.3) rotate(15deg);
  }
  60% {
    transform: scaleY(2) rotate(-5deg);
  }
  80% {
    transform: scaleX(1) scaleY(1) rotate(-15deg);
  }
}

@keyframes loadMinus {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }
}

.rewind {
  animation: loadMinus 0.5s ease-in;
}

// ---------- Map ----------

.map {
  height: 90%;
  @media only screen and (max-width: 43.75em) {
    width: 100%;
    height: 45rem;
  }
}
`;

export default GlobalStyles;
