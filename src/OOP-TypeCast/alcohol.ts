type Alcohol = {
    name: string; 
    percentage: number; 
    type: string
}
type Mixer = {
    name: string; 
    type: string; 
    carbonated: boolean;
}
type Cocktail = Alcohol & Mixer;

const muayThai: Cocktail = {
    name: "MuayThai",
    percentage: 45, 
    type: "Cocktail",
    carbonated: true
}
console.log(muayThai);
