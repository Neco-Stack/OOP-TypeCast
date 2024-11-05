type Result = "success" | "error" | "pending";
let newResult: Result = "success";

function handleResult(result: Result){
    switch(result){
        case "success":
            console.log("Die Projektumsetzung war erfolgreich");
            break;
        case "error":
            console.log("Die Projektumsetzung war fehlerhaft");
            break;
        case "pending":
            console.log("Die Projektumsetzung ist in Bearbeitung");
            break;
            default:
                console.log(`Der Status ${result} ist uns unbekannt`);
    }
}
handleResult("success");
handleResult("error");
handleResult("pending");
// handleResult("supi")
handleResult(newResult)
