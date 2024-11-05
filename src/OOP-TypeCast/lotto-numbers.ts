function generateLottoNumber(): number {
    const randomNumber = Math.random();
    console.log(randomNumber);
    const lottoNumber = Math.floor(randomNumber*49) + 1 
    console.log(`Die generierte Zufallszahl lautet ${lottoNumber}.`);
    if (lottoNumber > 49){
        throw new Error("Ein Fehler wird ausgelöst")
    }
    return lottoNumber;
    }
    
function generateLottoSchein(): number[] {
    const lottoResults: number[] = [];
    while (lottoResults.length < 7){
            const lottoNumber = generateLottoNumber();
            if(!lottoResults.includes(lottoNumber)){
                lottoResults.push(lottoNumber)
            }
        }
        return lottoResults
}

const lottoSchein = generateLottoSchein();
console.log("Generierter Lottoschein", lottoSchein);


