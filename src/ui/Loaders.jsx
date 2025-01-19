import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

// .theme_color_light {
//   --color-bg-default: rgb(230, 230, 230);

//   --light: 255, 255, 255;
//   --shadow: 0, 0, 0;
//   --light-mod: 1;
//   --shadow-mod: 1;
// }

//   &__waves {
//     opacity: 0;

//     &,
//     &::before,
//     &::after {
//       --scale: 0.7;
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       width: 100%;
//       height: 100%;
//       border-radius: 99em;
//     transform: translate(-50%, -50%) scale(1);
//     }

//     &::before, &::after {
//       content: '';
//       box-shadow:
//         inset -14px -21px 20px -10px rgba(var(--light), calc(1 * var(--light-mod))),
//         inset 14px 21px 20px -10px rgba(var(--shadow), calc(0.4 * var(--shadow-mod))),
//         inset 10px 15px 20px -10px rgba(var(--light), calc(1 * var(--light-mod))),
//         inset -20px -30px 12px -32px rgba(var(--shadow), calc(0.4 * var(--shadow-mod))),
//         inset -20px -30px 40px -20px rgba(var(--shadow), calc(0.3 * var(--shadow-mod))),
//         -10px -15px 16px -2px rgba(var(--light), calc(1 * var(--light-mod))),
//         12px 18px 12px -18px rgba(var(--shadow), calc(0.4 * var(--shadow-mod))),
//         13px 20px 20px -12px rgba(var(--shadow), calc(0.2 * var(--shadow-mod)));
//     }
//   }

/* Состояния ..................... */
//  &:hover {
//     --button-content-color: var(--color-active-hover);
//     cursor: pointer;
//   }

//   /* &:focus, */

//   &:focus:hover {
//     &::after {
//       animation: ButtonInnerShadowAnimation 0.8s ease both;
//     }
//     & .button__play {
//       animation: PlayMainAnimation 0.8s ease;

//       &::before {
//         animation: PlayBeforeAnimation 0.8s ease;
//       }

//       &::after {
//         animation: PlayAfterAnimation 0.8s ease;
//       }
//     }

//     & .button__waves {
//       animation: WaveMainAnimation 2s linear both;

//       &::before {
//         animation: WaveBeforeAnimation 1.1s 0.1s linear both;
//       }

//       &::after {
//         animation: WaveBeforeAnimation 0.9s 0.55s linear both;
//       }
//     }
//   }

//   &:focus:active, &:focus:active:hover {
//     &::after,
//     & .button__play,
//     & .button__play::before,
//     & .button__play::after,
//     & .button__waves,
//     & .button__waves::before,
//     & .button__waves::after {
//       animation-name: none !important;
//     }
//   }
// }

// @keyframes ButtonInnerShadowAnimation {
//   0% { opacity: 0; }
//   50% { opacity: 1; }
//   100% { opacity: 0; }
// }

// @keyframes PlayMainAnimation {
//   50% {
//     --button-content-color: var(--color-active-pressed);
//     transform: translate(-50%, -50%) scale(0.94);
//     box-shadow:
//       0 0 16px -3px var(--button-content-color),
//       inset -1.2px -0.8px 1px 0.8px rgba(var(--light), calc(0.24 * var(--light-mod))),
//       inset 1.2px 0.8px 1px 0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       inset 1.2px 1.2px 1px -0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       $engrave,
//       inset 0 1px 3px 3px var(--button-content-color);
//   }
// }

// @keyframes PlayBeforeAnimation {
//   50% {
//     box-shadow:
//       0 0 16px -3px var(--button-content-color),
//       inset 1.2px -0.8px 1px 0.8px rgba(var(--light), calc(0.24 * var(--light-mod))),
//       inset -1.2px 0.8px 1px 0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       inset 1.2px 1.2px 1px -0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       $engrave,
//       inset 0 0px 3px 3px var(--button-content-color);
//   }
// }

// @keyframes PlayAfterAnimation {
//   50% {
//     box-shadow:
//       0 0 16px -3px var(--button-content-color),
//       inset -1.2px 0px 1px 0.8px rgba(var(--light), calc(0.24 * var(--light-mod))),
//       inset 1.2px -1.2px 1px 0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       inset 1.2px 1.2px 1px -0.8px rgba(var(--shadow), calc(0.12 * var(--shadow-mod))),
//       $engrave,
//       inset 0 0px 3px 3px var(--button-content-color);
//   }
// }

// @keyframes WaveMainAnimation {
//   30% { opacity: 1; }
// }

// @keyframes WaveBeforeAnimation {
//   0% {
//     opacity: 0;
//     transform: translate(-50%, -50%) scale(1);
//   }
//   30% { opacity: 1; }
//   100% {
//     opacity: 0;
//     transform: translate(-50%, -50%) scale(1.8);
//   }
// }

const WaveMainAnimation = keyframes`
  30% { opacity: 1; }
}`;

const WaveBeforeAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  30% { opacity: 1; }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(5);
  }
`;

const StyledLoader = styled.div`
  filter: blur(0.8rem);
  --scale: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 20rem;
  border-radius: 99em;
  transform: translate(-50%, -50%) scale(1);

  animation: ${WaveMainAnimation} 2s infinite both;

  &:before,
  &:after {
    --scale: 0.7;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 99em;
    transform: translate(-50%, -50%) scale(1);
  }

  &:before,
  &:after {
    content: "";
    box-shadow: inset -14px -21px 20px -10px rgba(var(--light), calc(1 *
              var(--light-mod))),
      inset 14px 21px 20px -10px rgba(var(--shadow), calc(0.4 *
              var(--shadow-mod))),
      inset 10px 15px 20px -10px rgba(var(--light), calc(1 * var(--light-mod))),
      inset -20px -30px 12px -32px rgba(var(--shadow), calc(0.4 *
              var(--shadow-mod))),
      inset -20px -30px 40px -20px rgba(var(--shadow), calc(0.3 *
              var(--shadow-mod))),
      -10px -15px 16px -2px rgba(var(--light), calc(1 * var(--light-mod))),
      12px 18px 12px -18px rgba(var(--shadow), calc(0.4 * var(--shadow-mod))),
      13px 20px 20px -12px rgba(var(--shadow), calc(0.2 * var(--shadow-mod)));
  }

  &:before {
    animation: ${WaveBeforeAnimation} 1.1s 0.1s infinite both;
  }

  &:after {
    animation: ${WaveBeforeAnimation} 0.9s 0.55s infinite both;
  }
`;

function Loaders() {
  return (
    <Container>
      <StyledLoader />
    </Container>
  );
}

export default Loaders;
