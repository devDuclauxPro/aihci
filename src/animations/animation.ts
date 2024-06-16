import { keyframes } from "@mui/system";

// Variables CSS pour les propriétés communes
const commonTransform = {
  transform: "scale(1)",
};

const commonTransformHover = {
  transform: "scale(1.1)",
};

const commonZoomInOutLeft = `
  background-color: #ff6900;
  color: white;
`;

const commonZoomInOutRight = `
  color: #ff6900;
  border-color: #ff6900;
`;

// Keyframes définis avec des variables CSS
export const zoomInOutLeft = keyframes`
  0% {
    ${commonTransform};
    ${commonZoomInOutLeft};
  }
  50% {
    ${commonTransformHover};
    ${commonZoomInOutLeft};
  }
  100% {
    ${commonTransform};
    ${commonZoomInOutLeft};
  }
`;

export const zoomInOutRight = keyframes`
  0% {
    ${commonTransform};
    ${commonZoomInOutRight};
  }
  50% {
    ${commonTransformHover};
    ${commonZoomInOutRight};
  }
  100% {
    ${commonTransform};
    ${commonZoomInOutRight};
  }
`;
export const zoomInOutInternatConcours = keyframes`
  0% {
    ${commonTransform};
  }
  50% {
    ${commonTransformHover};
  }
  100% {
    ${commonTransform};
  }
`;
export const zoomInOutInternatFormTheo = keyframes`
  0% {
    ${commonTransform};
  }
  50% {
    ${commonTransformHover};
  }
  100% {
    ${commonTransform};
  }
`;
export const zoomInOutInternatRech = keyframes`
 0% {
    ${commonTransform};
  }
  50% {
    ${commonTransformHover};
  }
  100% {
    ${commonTransform};
  }
`;
