import { typeTranslatorConstants } from "../constants/typeTranslatorConstants";

const typeToColor = (type) => {
  switch (type) {
    case "bug":
      return { backgroundColor: "rgba(247, 253, 161, 0.5)" };
    case "dark":
      return { backgroundColor: "rgba(117, 117, 117, 0.5)" };
    case "dragon":
      return { backgroundColor: "rgba(156, 162, 252, 0.5)" };
    case "electric":
      return { backgroundColor: "rgba(253, 244, 116, 0.5)" };
    case "fairy":
      return { backgroundColor: "rgba(255, 197, 236, 0.5)" };
    case "fighting":
      return { backgroundColor: "rgba(211, 65, 65, 0.318)" };
    case "fire":
      return { backgroundColor: "rgba(250, 161, 120, 0.5)" };
    case "flying":
      return { backgroundColor: "rgba(196, 165, 211, 0.5)" };
    case "grass":
      return { backgroundColor: "rgba(160, 235, 170, 0.5)" };
    case "ground":
      return { backgroundColor: "rgba(204, 170, 120, 0.5)" };
    case "ice":
      return { backgroundColor: "rgba(198, 251, 255, 0.5)" };
    case "normal":
      return { backgroundColor: "rgba(246, 248, 212, 0.5)" };
    case "poison":
      return { backgroundColor: "rgba(205, 115, 250, 0.5)" };
    case "psychic":
      return { backgroundColor: "rgba(231, 170, 226, 0.5)" };
    case "rock":
      return { backgroundColor: "rgba(175, 135, 98, 0.5)" };
    case "steal":
      return { backgroundColor: "rgba(211, 65, 65, 0.318)" };
    case "water":
      return { backgroundColor: "rgba(129, 216, 250, 0.5)" };
    case "???":
      return { backgroundColor: "rgba(126, 187, 169, 0.5)" };
    default:
      return { backgroundColor: "rgba(255, 255, 255, 0.5)" };
  }
};

const typeToLink = (type) => {
  switch (type) {
    case "bug":
      return typeTranslatorConstants[0].link;
    case "dark":
      return typeTranslatorConstants[1].color;
    case "dragon":
      return typeTranslatorConstants[2].color;
    case "electric":
      return typeTranslatorConstants[3].color;
    case "fairy":
      return typeTranslatorConstants[4].color;
    case "fighting":
      return typeTranslatorConstants[5].color;
    case "fire":
      return typeTranslatorConstants[6].color;
    case "flying":
      return typeTranslatorConstants[7].color;
    case "grass":
      return typeTranslatorConstants[8].link;
    case "ground":
      return typeTranslatorConstants[9].link;
    case "ice":
      return typeTranslatorConstants[10].link;
    case "normal":
      return typeTranslatorConstants[11].link;
    case "poison":
      return typeTranslatorConstants[12].link;
    case "psychic":
      return typeTranslatorConstants[13].link;
    case "rock":
      return typeTranslatorConstants[14].link;
    case "steal":
      return typeTranslatorConstants[15].link;
    case "water":
      return typeTranslatorConstants[16].link;
    case "???":
      return typeTranslatorConstants[17].link;
    default:
      return typeTranslatorConstants[18].link;
  }
};

export default { typeToColor, typeToLink };
