import React from "react";
import "../styles/Pokemon.scss";

export const Pokemon = (props) => {
  const pokemonName = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <div class="pokemonCard-wrap">
      <div class="pokemonCard-wrapper">
        <div class="pokemonCard" style={typeToColor(props.type)}>
          <h4 class="pokemonNumber">#{props.number}</h4>
          <h4 class="pokemonName">{pokemonName}</h4>

          <div class="img-wrap img-1">
            <img src={props.image} alt="" />
          </div>
          <div className="pokemonType" style={typeToColor(props.type)}>
            <a
              href={typeToLink(props.type)}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              {props.type}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      return "https://bulbapedia.bulbagarden.net/wiki/Bug_(type)";
    case "dark":
      return "https://bulbapedia.bulbagarden.net/wiki/Dark_(type)";
    case "dragon":
      return "https://bulbapedia.bulbagarden.net/wiki/Dragon_(type)";
    case "electric":
      return "https://bulbapedia.bulbagarden.net/wiki/Electric_(type)";
    case "fairy":
      return "https://bulbapedia.bulbagarden.net/wiki/Fairy_(type)";
    case "fighting":
      return "https://bulbapedia.bulbagarden.net/wiki/Fighting_(type)";
    case "fire":
      return "https://bulbapedia.bulbagarden.net/wiki/Fire_(type)";
    case "flying":
      return "https://bulbapedia.bulbagarden.net/wiki/Flying_(type)";
    case "grass":
      return "https://bulbapedia.bulbagarden.net/wiki/Grass_(type)";
    case "ground":
      return "https://bulbapedia.bulbagarden.net/wiki/Ground_(type)";
    case "ice":
      return "https://bulbapedia.bulbagarden.net/wiki/Ice_(type)";
    case "normal":
      return "https://bulbapedia.bulbagarden.net/wiki/Normal_(type)";
    case "poison":
      return "https://bulbapedia.bulbagarden.net/wiki/Poison_(type)";
    case "psychic":
      return "https://bulbapedia.bulbagarden.net/wiki/Psychic_(type)";
    case "rock":
      return "https://bulbapedia.bulbagarden.net/wiki/Rock_(type)";
    case "steal":
      return "https://bulbapedia.bulbagarden.net/wiki/Steel_(type)";
    case "water":
      return "https://bulbapedia.bulbagarden.net/wiki/Water_(type)";
    case "???":
      return "https://bulbapedia.bulbagarden.net/wiki/%3F%3F%3F_(type)";
    default:
      return "";
  }
};
