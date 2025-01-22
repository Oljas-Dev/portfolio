import { keyframes } from "styled-components";

const headerAnimation = keyframes`
  0% {
    transform: translateX(-100rem);
    opacity: 0;
  }
  /* 80% {
    transform: translateX(-100rem);
  } */
  70% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 0.5;
  }
`;

// ------------- Color Themes -------------

const runner = keyframes`
0% {
    background-position: -100%;
  }
  100% {
    background-position: 600%;
  }
`;

// ------------- Design Elements -------------

const leftTop = keyframes`
  0% {
    transform: translateX(-70rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const leftBottom = keyframes`
  0% {
    transform: translateY(35rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const rightTop = keyframes`
  0% {
    transform: translateY(-57rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const rightBottom = keyframes`
  0% {
    transform: translateX(72rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const devAnimWest = keyframes`
  0% {
    width: 0;
  }
    35% {
      width: 0;
    }
  100% {
    width: 200%;
  }
`;

const devAnimParWest = keyframes`
  0% {
  opacity: 0;
    top: 0;
  }
    50% {
    opacity: 0;
    top: 0;
    }
  100% {
  opacity: 1;
    top: 80%;
  }
`;

const devAnimParNorth = keyframes`
  0% {
  opacity: 0;
    left: -200%;
  }
    80% {
    opacity: 0;
    left: -200%;
    }
  100% {
  opacity: 1;
    left: -100%;
  }
`;

const devAnimNorth = keyframes`
  0% {
    transform: translateY(0rem);
  }
    25% {
    transform: translateY(22rem);
    }
  100% {
    transform: translateY(22rem);
  }
`;

const devAnimParSouth = keyframes`
  0% {
  opacity: 0;
    left: -150%;
  }
    60% {
      opacity: 0;
      left: -150%;
    }
  100% {
  opacity: 1;
    left: -360%;
  }
`;

const devAnimSouth = keyframes`
  0% {
    height: 0;
  }
    60% {
      height: 0;
    }
  100% {
    height: 70%;
  }
`;

const devAnimParEast = keyframes`
  0% {
  opacity: 0;
    top: -150%;
  }
    60% {
      opacity: 0;
      top: -150%;
    }
  100% {
  opacity: 1;
    top: -320%;
  }
`;

const devAnimEast = keyframes`
  0% {
  width: 50%;
    transform: translateX(24rem);
  }
    60% {
    width: 50%;
      transform: translateX(24rem);
    }
  100% {
  width: 110%;
    transform: translateX(0rem);
  }
`;

const optionsNavigation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${(props) => props.$width || "98rem"};
  }
`;

// ------------- Pixel Elements -------------

const rotate = keyframes`
from {
transform: rotate(0deg);
}

to {
transform: rotate(360deg);
}
`;

const appear = keyframes`
 0% {
    transform: scale(10);
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const disappear = keyframes`
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const rotateReverse = keyframes`
from {
transform: rotate(360deg);
}

to {
transform: rotate(0deg);
}
`;

// ------------- Smooth appear -------------

const smoothAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const smoothAppear2 = keyframes`
  0% {
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export {
  headerAnimation,
  rightBottom,
  rightTop,
  leftBottom,
  leftTop,
  runner,
  rotate,
  appear,
  rotateReverse,
  disappear,
  devAnimParWest,
  devAnimWest,
  devAnimNorth,
  devAnimParNorth,
  devAnimParSouth,
  devAnimSouth,
  devAnimParEast,
  devAnimEast,
  optionsNavigation,
  smoothAppear,
  smoothAppear2,
};
