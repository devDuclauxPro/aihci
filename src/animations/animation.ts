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
/*
// Generique animation
*/

// Variables Generique CSS pour les propriétés communes
const commonTransformGeneric = {
  transform: "scale(1)",
};

const commonTransformHoverGeneric = {
  transform: "scale(1.1)",
};

const commonZoomInOutOne = `
  background-color: #ff6900;
  color: white;
`;

const commonZoomInOutTwo = `
  color: #ff6900;
  border-color: #ff6900;
`;

// Keyframes définis avec des variables CSS
export const zoomInOutGenericOne = keyframes`
  0% {
    ${commonTransformGeneric};
    ${commonZoomInOutOne};
  }
  50% {
    ${commonTransformHoverGeneric};
    ${commonZoomInOutOne};
  }
  100% {
    ${commonTransformGeneric};
    ${commonZoomInOutOne};
  }
`;
export const zoomInOutGenericTwo = keyframes`
  0% {
    ${commonTransformGeneric};
    ${commonZoomInOutTwo};
  }
  50% {
    ${commonTransformHoverGeneric};
    ${commonZoomInOutTwo};
  }
  100% {
    ${commonTransformGeneric};
    ${commonZoomInOutTwo};
  }
`;

export const zoomInOutGeneric = keyframes`
 0% {
    ${commonTransformGeneric};
  }
  50% {
    ${commonTransformHoverGeneric};
  }
  100% {
    ${commonTransformGeneric};
  }
`;
