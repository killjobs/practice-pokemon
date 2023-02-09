const TYPE_COLOR = {
    "default" : "#FFF",
    "normal" : "#C2C2A1",
    "flying" : "#BAB0D5",
    "ghost" : "#735797",
    "dark" : "#333",
    "steel" : "#CCCCDE",
    "ground" : "#B1736C",
    "poison" : "#7C538C",
    "grass" : "#48D0B0",
    "fire" : "#FB6C6C",
    "electric" : "#FFD86F",
    "fairy" : "#F469A9",
    "bug" : "#C3CE75",
    "fighting" : "#D6B591",
    "water" : "#609FB5",
    "psychic" : "#9B7FA6",
    "ice" : "#7FCCEC",
    "rock" : "#A6AAB6",
    "dragon" : "#F9BE00",
    "unknown" : "#F9BE00",
    "shadow" : "#F9BE00"};

export const TypeColor = (pokemonType,level) => {
    let colorSelected = {};
    let opacityColor = 0.4;
    let color = {};

    if(level === 0){
        colorSelected = TYPE_COLOR[pokemonType];
        color = {backgroundColor: colorSelected};
    }else if(level === 1){
        colorSelected = TYPE_COLOR["default"];
        color = {backgroundColor: colorSelected,
                opacity:opacityColor,
                color:"#000",
                fontWeight:"bolder"
            };
    }else{
        colorSelected = TYPE_COLOR[pokemonType];
        color = {backgroundColor: colorSelected,
                color:"#000",
                fontWeight:"bolder"
            };
    }
    return color;
};

export const ColorButton = () =>{
    let buttonColor = {
        backgroundColor: "rgb(0, 140, 227)",
        color: "#fff",
        borderRadius: "10px",
        transition: "0.5s"
    };
    return buttonColor;
}