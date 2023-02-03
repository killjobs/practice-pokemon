const COLOR_NORMAL = "#C2C2A1";
const COLOR_FLYING = "#BAB0D5";
const COLOR_GHOST = "#735797";
const COLOR_DARK = "#333";
const COLOR_STEEL = "#CCCCDE";
const COLOR_GROUND = "#B1736C";
const COLOR_POISON = "#7C538C";
const COLOR_GRASS = "#48D0B0";
const COLOR_FIRE = "#FB6C6C";
const COLOR_ELECTRIC = "#FFD86F";
const COLOR_FAIRY = "#F469A9";
const COLOR_BUG = "#C3CE75";
const COLOR_FIGHTING = "#D6B591";
const COLOR_WATER = "#609FB5";
const COLOR_PSYCHIC = "#9B7FA6";
const COLOR_ICE = "#7FCCEC";
const COLOR_ROCK = "#A6AAB6";
const COLOR_DRAGON = "#F9BE00";
const COLOR_UNKNOWN = "#F9BE00";
const COLOR_SHADOW = "#F9BE00";

export const TypeColor = (pokemonType,level) => {
    let colorSelected = "";
    let opacityColor = 0.4;
    let color = {};
    switch (pokemonType) {
        case "normal":
        colorSelected = COLOR_NORMAL;
        break;
        case "flying":
            colorSelected = COLOR_FLYING;
            break;
        case "ghost":
            colorSelected = COLOR_GHOST;
            break;
        case "dark":
            colorSelected = COLOR_DARK;
            break;
        case "steel":
            colorSelected = COLOR_STEEL;
            break;
        case "ground":
            colorSelected = COLOR_GROUND;
            break;
        case "poison":
            colorSelected = COLOR_POISON;
            break;
        case "grass":
            colorSelected = COLOR_GRASS;
            break;
        case "fire":
            colorSelected = COLOR_FIRE;
            break;
        case "electric":
            colorSelected = COLOR_ELECTRIC;
            break;
        case "fairy":
            colorSelected = COLOR_FAIRY;
            break;
        case "bug":
            colorSelected = COLOR_BUG;
            break;
        case "fighting":
            colorSelected = COLOR_FIGHTING;
            break;
        case "water":
            colorSelected = COLOR_WATER;
            break;
        case "psychic":
            colorSelected = COLOR_PSYCHIC;
            break;
        case "ice":
            colorSelected = COLOR_ICE;
            break;
        case "rock":
            colorSelected = COLOR_ROCK;
            break;
        case "dragon":
            colorSelected = COLOR_DRAGON;
            break;
        case "unknown":
            colorSelected = COLOR_UNKNOWN;
            break;
        case "shadow":
            colorSelected = COLOR_SHADOW;
            break;
        default:
            break;
    }
    if(level === 0){
        color = {backgroundColor: colorSelected};
    }else{
        color = {backgroundColor: colorSelected, border:"1px solid black", opacity:opacityColor};
    }
    console.log("color:", color);
    return color;
};