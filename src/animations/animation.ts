import { keyframes } from "@mui/system";

// Variables génériques CSS pour les propriétés communes
const commonTransformGeneric = `
  transform: scale(1);
`;

const commonTransformHoverGeneric = `
  transform: scale(1.1);
`;

const commonZoomInOutOne = `
  background-color: #ff6900;
  color: white;
`;

const commonZoomInOutTwo = `
  color: #ff6900;
  border-color: #ff6900;
`;

// Keyframes définis avec des variables CSS pour une animation générique avec transformation et couleur de fond
export const zoomInOutGenericOne = keyframes`
  0% {
    ${commonTransformGeneric}
    ${commonZoomInOutOne}
  }
  50% {
    ${commonTransformHoverGeneric}
    ${commonZoomInOutOne}
  }
  100% {
    ${commonTransformGeneric}
    ${commonZoomInOutOne}
  }
`;

// Keyframes définis avec des variables CSS pour une animation générique avec transformation et couleur de bordure
export const zoomInOutGenericTwo = keyframes`
  0% {
    ${commonTransformGeneric}
    ${commonZoomInOutTwo}
  }
  50% {
    ${commonTransformHoverGeneric}
    ${commonZoomInOutTwo}
  }
  100% {
    ${commonTransformGeneric}
    ${commonZoomInOutTwo}
  }
`;

// Keyframes définis avec des variables CSS pour une animation générique avec transformation uniquement
export const zoomInOutGeneric = keyframes`
  0% {
    ${commonTransformGeneric}
  }
  50% {
    ${commonTransformHoverGeneric}
  }
  100% {
    ${commonTransformGeneric}
  }
`;
