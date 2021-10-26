// let padre= document.getElementById("ensalada");
// let base=document.getElementById("base");

// function generarOpciones(parametro,opcion){
//     let inner;
// for (const elemento of opcion){
//     inner+=`opcion value ${elemento}`;
// }
// parametro.innerHTML=inner;
// }
// generarOpciones(padre,opcionensalada);
// generarOpciones(base,opcionbase);

document.getElementById("ingresarUsuario").onclick=guardarUsuario;
function guardarUsuario(e){
    let usuario=evento.target.parentElement;
    localStorage.setItem("nombre",usuario.children[0].value);
    localStorage.setItem("contraseña",usuario.children[1].value);
console.log(localStorage);
var i=0;
while(i<=3){
    usuario.removeChild(usuario.children[i]);
    console.log("se borro")
    i++
}
}



//INFORMACION JSON
// let opcion_zapatos = json_zapatos; //console.log(opcion_zapatos);
// let opcion_sneakers = json_sneakers; //console.log(opcion_sneakers);
// let productoArray = [].concat(json_zapatos,json_sneakers); //console.log(productoArray);
// // OPCIONES SELECT
console.log(document.getElementById("divPadre").children[0])
function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("producto").value;
console.log(cod);}

// let zapatos = document.getElementById('zapatos').selected;
// console.log(zapatos);
// let sneakers = document.getElementById('sneakers').selected;
// console.log(sneakers)
// let todo = document.getElementById('todo').selected;
// FUNCION SELECTED()
 function selected(){
    let seleccion = document.getElementById('opcion').value;
    console.log(seleccion)
 	if (seleccion == "todo") {
        console.log("funciona todo") 
        //console.log(productoArray);
 	}
 		else if ( seleccion == "zapatos"){
            console.log("funciona el zapatos") 
            //console.log(opcion_zapatos);
             
 		}
 		 else if (seleccion == "sneakers") {
            console.log("funciona sneakers")  
            //console.log(opcion_sneakers);
 		 }
 }



/*  ESTO NO ME SALE, NO ENTIENDO PORQUE */

// let contenedor = document.getElementById("container");
// let parrafoNuevo = document.createElement("p");
// parrafoNuevo.innerHTML = "Vamos a ver si sale bien";

// contenedor.appendChild(parrafoNuevo); 



// //Splash
// // setTimeout( function() {
// //     document.getElementById("splash").style.display = "none";
// // }, 2000);


// //Global vars
// //JSON
// let globalVars = '{"inflation12m":52.5, "blueDollar12m":212.4, "blueDollarToday":144, "oficialDollarToday":82.1, "oficialDollar12m":121.1, "dollarTax":1.65}';
// //OBJECTS
// const inflation12m = JSON.parse(globalVars).inflation12m;
// const blueDollar12m = JSON.parse(globalVars).blueDollar12m;
// const blueDollarToday = JSON.parse(globalVars).blueDollarToday;
// const oficialDollarToday = JSON.parse(globalVars).oficialDollarToday;
// const oficialDollar12m = JSON.parse(globalVars).oficialDollar12m;
// const dollarTax = JSON.parse(globalVars).dollarTax;

// //TEST
// console.log(inflation12m);
// console.log(blueDollar12m);
// console.log(blueDollarToday);
// console.log(oficialDollarToday);
// console.log(oficialDollar12m);
// console.log(dollarTax);


// //Object constructor function
// class InvestmentAsset {
//     constructor (newAssettName, newAnnualYield, newEntityName, newEntityTipe, newInvestmentType, newAssetCurrency) {
//         this.assetName = newAssettName;
//         this.annualYield = newAnnualYield;
//         this.entityName = newEntityName;
//         this.entityType = newEntityTipe;
//         this.investmentType = newInvestmentType;
//         this.assetCurrency = newAssetCurrency;
//     }
// }


// //Investment Assets new Objects
// let plazoFijoTradicionalSupervielle = new InvestmentAsset("Plazo fijo tradicional",  37, "Supervielle",  "Bancos tradicionales",  "Plazo fijo", "Pesos");
// let plazoFijoTradicionalBrubank = new InvestmentAsset("Plazo fijo tradicional", 37, "Brubank", "Bancos tradicionales", "Plazo fijo", "Pesos");
// let plazoFijoTradicionalReba = new InvestmentAsset("Plazo fijo tradicional", 37, "Reba", "Bancos tradicionales", "Plazo fijo", "Pesos");
// let plazoFijoTradicionalWilobank = new InvestmentAsset("Plazo fijo tradicional", 37, "Wilobank", "Bancos tradicionales", "Plazo fijo", "Pesos");
// let plazoFijoUVASupervielle = new InvestmentAsset("Plazo fijo UVA", 1+inflation12m, "Supervielle", "Bancos tradicionales", "Plazo fijo", "Pesos");
// let fondoSupervielle = new InvestmentAsset("Fondo", 38.3, "Supervielle", "Bancos tradicionales", "Fondo", "Pesos");
// let fondoMercadoPago = new InvestmentAsset("Fondo", 26.6, "Mercado Pago", "Billeteras", "Fondo", "Pesos");
// let ruloConDolaresOficiales = new InvestmentAsset("Rulo con dólares oficiales", ((blueDollar12m / blueDollarToday) * blueDollarToday) / (88 * dollarTax), "Alguna", "Casas de cambio", "Rulos con dólares", "Dólares");
// let compraDeDolaresOficiales = new InvestmentAsset("Compra de dólares oficiales", oficialDollar12m / (88 * dollarTax), "Supervielle", "Bancos tradicionales",   "Rulos con dólares", "Dólares");
// let compraDeUsdc = new InvestmentAsset("Compra de dólares virtuales", 1.4, "Ripio", "Cripto billeteras", "Cripto monedas",  "Pesos");
// //TEST
// console.log(plazoFijoTradicionalSupervielle);
// console.log(plazoFijoUVASupervielle);
// console.log(plazoFijoTradicionalSupervielle.annualYield);
// //Sort of annualYields
// // let annualYields = [plazoFijoTradicionalSupervielle.annualYield, plazoFijoTradicionalBrubank.annualYield,
// //     plazoFijoTradicionalReba.annualYield,plazoFijoTradicionalWilobank.annualYield,plazoFijoUVASupervielle.annualYield,
// //      fondoSupervielle.annualYield, 
// //     fondoMercadoPago.annualYield,ruloConDolaresOficiales.annualYield,compraDeDolaresOficiales.annualYield,compraDeUsdc.annualYield];

// // function annualYieldRanking() {
// //     annualYields.sort( function(a, b) {
// //         return b - a;
// //     });
// //     console.table(annualYields);
// // }
// // annualYieldRanking();
// //Sort of InvestmentAssets by AnnualYields - AKA Top 10 Investment Assets
// let investmentAssets = [plazoFijoTradicionalSupervielle, plazoFijoTradicionalBrubank,plazoFijoTradicionalReba,plazoFijoTradicionalWilobank,plazoFijoUVASupervielle, 
//     fondoSupervielle, fondoMercadoPago,ruloConDolaresOficiales,compraDeDolaresOficiales,compraDeUsdc];

// function investmentAssetsRankingByAnuualYields() {
//     investmentAssets.sort(function (a, b) {
//         return b.annualYield - a.annualYield;
//     });
//     console.table(investmentAssets);
// }

// investmentAssetsRankingByAnuualYields();


// //Top 5 Investment Assets
// function investmentAssetstop5RankingByAnuualYields() {
//     const numberForRanking = 2; //get the first 5 items
//     let top5Ranking = investmentAssets.slice(0, numberForRanking);
//     console.table(top5Ranking);
// }

// investmentAssetstop5RankingByAnuualYields();


// //Filters - Investment assets in Dollars
// function showOnlyInvestmentAssetsInDollars() {
//     let onlyDollars = "Dólares";
//     let onlyInvestmentAssetsInDollars = [];
//     for (let investmentAsset of investmentAssets) {
//         for(let assetCurrency in investmentAsset){
//             if(investmentAsset[assetCurrency] == onlyDollars){
//                 onlyInvestmentAssetsInDollars.push(investmentAsset);
//             }
//         }
//     }
//     console.table(onlyInvestmentAssetsInDollars);
// }

// showOnlyInvestmentAssetsInDollars();


// //Filters - Investment assets in Pesos
// function showOnlyInvestmentAssetsInPesos() {
//     let onlyPesos = "Pesos";
//     let onlyInvestmentAssetsInPesos = [];
//     for (let investmentAsset of investmentAssets) {
//         for(let assetCurrency in investmentAsset){
//             if(investmentAsset[assetCurrency] == onlyPesos){
//                 onlyInvestmentAssetsInPesos.push(investmentAsset);
//             }
//         }
//     }
//     console.table(onlyInvestmentAssetsInPesos);
// }

// showOnlyInvestmentAssetsInPesos();


// //Filters - Investment asset Fixed term
// function showOnlyInvestmentAssetsFixedTerm() {
//     let onlyFixedTerm = "Plazo fijo";
//     let onlyInvestmentAssetsFixedTerm = [];
//     for (let investmentAsset of investmentAssets) {
//         for(let investmentType in investmentAsset){
//             if(investmentAsset[investmentType] == onlyFixedTerm){
//                 onlyInvestmentAssetsFixedTerm.push(investmentAsset);
//             }
//         }
//     }
//     console.table(onlyInvestmentAssetsFixedTerm);
// }

// showOnlyInvestmentAssetsFixedTerm();
// var prueba= document.getElementById("strategy-suggested-1-percentage-of-investment");
// console.log(prueba.innerHTML)

// //Filters - Investment asset Dollar loop
// function showOnlyInvestmentAssetsDollarLoop() {
//     let onlyDollarLoop = "Rulos con dólares";
//     let onlyInvestmentAssetsDollarLoop = [];
//     for (let investmentAsset of investmentAssets) {
//         for(let investmentType in investmentAsset){
//             if(investmentAsset[investmentType] == onlyDollarLoop){
//                 onlyInvestmentAssetsDollarLoop.push(investmentAsset);
//             }}}
//     console.table(onlyInvestmentAssetsDollarLoop);
//     //Save in session storage the first element
//     sessionStorage.setItem("FilterApplied", JSON.stringify(onlyInvestmentAssetsDollarLoop[0]));}

// showOnlyInvestmentAssetsDollarLoop();


// //Filters - Investment asset from Exchange houses
// function showOnlyInvestmentAssetsFromExchangeHouses() {
//     let onlyFromExchangeHouses = "Casas de cambio";
//     let onlyInvestmentAssetsFromExchangeHouses = [];
//     for (let investmentAsset of investmentAssets) {
//         for(let entityType in investmentAsset){
//             if(investmentAsset[entityType] == onlyFromExchangeHouses){
//                 onlyInvestmentAssetsFromExchangeHouses.push(investmentAsset);
//             }}}
//     console.table(onlyInvestmentAssetsFromExchangeHouses);
//     //Save in local storage the first element
//     localStorage.setItem("FilterApplied", JSON.stringify(onlyInvestmentAssetsFromExchangeHouses[0]));
// }

// showOnlyInvestmentAssetsFromExchangeHouses();

// // let strategyAmount = document.getElementById("strategy-amount").onchange = getAmountValue;
// // let strategyDays = document.getElementById("strategy-days").onchange = getDaysValue;
// //TEST
// //porque no queria poner un boton capturo ambos eventos y depende del tiempo en que los haga
// // let variable1= document.getElementById("variable1").addEventListener("change",function(){
// //     console.log("hola");
// //     let variable2 = document.getElementById("variable2").addEventListener("change",function(){
// //         variable1=this.value;
// //         variable2=this.value;
// //         if((variable1=="2")&&(variable2=="2")){
// //             console.log("hola funcione")
// //         }
// //     }) });
   
//     function annualYieldCalculated2(percentage1, percentage2, percentage3, asset1, asset2, asset3) {
//         console.log("estoy en la funcion");
//         console.log(fondoMercadoPago);
//         console.log(fondoMercadoPago.annualYield);
//         console.log(asset1.annualYield)
//        // console.log(asset1.annualYield);
       
//          return (
//              (percentage1 * asset1.annualYield) +
//          (percentage2 * asset2.annualYield) +
//              (percentage3 * asset3.annualYield)
//         )  }
//        annualYieldCalculated2(0.25, 0.28, 0.47,fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle);

//      function totalMoneyCalculated2() {
//          return (annualYieldCalculated2() * 1000)
//      }
   
//     //Luego, la llamada a la funcion cuando hace click en el boton:
//     document.getElementById("calcular").onclick = strategyBasedOnAmountAndDays;
//     function strategyBasedOnAmountAndDays(e) {
//         e.preventDefault();
//         console.log("hola me ejecuto")
//         var anAmountValue = document.getElementById("strategy-amount").value;
//         var aDaysValue = document.getElementById("strategy-days").value;
//         if (anAmountValue > 2000 && aDaysValue > 90) {
//             console.log(anAmountValue);
//              //25% Mercado Pago
//         var suggestedInvestmentPercentajeOfInvestment1 = 
//         document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
//         var suggestedInvestmentAssetName1 =
//          document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
//         // var suggestedInvestmentTotalMoney1 =
//         //  document.getElementById("strategy-suggested-1-total-money").innerHTML = 
//         //  ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000)))); //MANUAL
        
//         //28% Plazo fijo UVA
//         var suggestedInvestmentPercentajeOfInvestment2 =document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = 
//         (28+"%"); //MANUAL
//         var suggestedInvestmentAssetName2 =
//          document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
//         // var suggestedInvestmentTotalMoney2 =
//         //  document.getElementById("strategy-suggested-2-total-money").innerHTML = 
//         //  ("$"+thousandsSeparatorsForMoney(Math.floor(((plazoFijoUVASupervielle.annualYield)*1000)))); //MANUAL
        
//         //47% Fondo Supervielle
//         var suggestedInvestmentPercentajeOfInvestment3 =
//          document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
//         var suggestedInvestmentAssetName3 = 
//         document.getElementById("strategy-suggested-3-asset-name").innerHTML = 
//         (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
       
        
//         console.log("el resultado es :" +annualYieldCalculated2(0.25, 0.28, 0.47, fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle));
//         var totalAnnualYield = 
//         document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2())+"%");
//         // var totalAnnualMoney = 
//         // document.getElementById("strategy-suggested-total-annual-money").innerHTML = 
//         // ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated2()))));
//         }}
   
// // function getAmountValue() {
// //      let controlAmount=this.value;
// //     console.log(controlAmount);
// //   return controlAmount; 
// // }
// // function getDaysValue() {
// //     let controlDays=this.value
// //     console.log(this.value);
// //     return controlDays
// // }

// // let control=document.getElementById("calcular").onclick=mostrarMensaje;
// // function mostrarMensaje(){
// //     let strategyAmount = document.getElementById("strategy-amount").value;
// //     let strategyDays = document.getElementById("strategy-days").value;
// //     if ((strategyAmount==40)&&(strategyDays==20)){
// // console.log("muestro un mensaje");
// //     }else if((strategyAmount==60)&&(strategyDays==25)){
// //         console.log("muestro otro mensaje");
// //     }else{
// //         console.log("ingreso cualquier valor")
// //     }
// // }
// //Mejores inversiones - Best investment assets - HTML Manipulate
// //AssetNames
// // //1
// let investmentAssetName1 = investmentAssets[0].assetName;
// let bestInvestmentAssetName1 = document.getElementById("mejores-inversiones-1-asset-name").innerHTML = (investmentAssetName1);
// //2
// let investmentAssetName2 = investmentAssets[1].assetName;
// let bestInvestmentAssetName2 = document.getElementById("mejores-inversiones-2-asset-name").innerHTML = (investmentAssetName2);
// //3
// let investmentAssetName3 = investmentAssets[2].assetName;
// let bestInvestmentAssetName3 = document.getElementById("mejores-inversiones-3-asset-name").innerHTML = (investmentAssetName3);
// //AnnualYields
// //1
// let investmentAssetAnnualYield1 = investmentAssets[0].annualYield;
// let bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((investmentAssetAnnualYield1.toFixed(1))+"%");
// //2
// let investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
// let bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((investmentAssetAnnualYield2.toFixed(1))+"%");
// //3
// let investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
// let bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((investmentAssetAnnualYield3.toFixed(1))+"%");


// //Estrategia sugerida para invertir - Suggested strategy for invest - HTML Manipulate
// //Three elements to invest
// PercentajeOfInvestment
// //1
// let suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("estrategia-sugerida-1-percentaje-of-investment").innerHTML = (25+"%");
// //2
// let suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("estrategia-sugerida-2-percentaje-of-investment").innerHTML = (28+"%");
// //3
// let suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("estrategia-sugerida-3-percentaje-of-investment").innerHTML = (47+"%");
// //AssetNames
// //1
// let suggestedInvestmentAssetName1 = document.getElementById("estrategia-sugerida-1-asset-name").innerHTML = ("Fondo en Mercado Pago");
// //2
// let suggestedInvestmentAssetName2 = document.getElementById("estrategia-sugerida-2-asset-name").innerHTML = (investmentAssetName1);
// //3
// let suggestedInvestmentAssetName3 = document.getElementById("estrategia-sugerida-3-asset-name").innerHTML = (investmentAssetName2);
// //TotalMoney
// //1
// let suggestedInvestmentTotalMoney1 = document.getElementById("estrategia-sugerida-1-total-money").innerHTML = ("$25.000");
// //2
// let suggestedInvestmentTotalMoney2 = document.getElementById("estrategia-sugerida-2-total-money").innerHTML = ("$28.000");
// //3
// let suggestedInvestmentTotalMoney3 = document.getElementById("estrategia-sugerida-3-total-money").innerHTML = ("$47.000");
// //Total Annual Yield
// //TotalAnnualYield
// let totalAnnualYield = document.getElementById("estrategia-sugerida-total-annual-yield").innerHTML = ("+29%");
// //TotalAnnualMoney
// let totalAnnualMoney = document.getElementById("estrategia-sugerida-total-annual-money").innerHTML = ("+$29.000");

// // //Home events
// document.getElementById("view-all-button").onmouseover = console.log("Want to view all investment assets.");

// //Strategy amount and days TO FIX
// //Get values


// // document.getElementById("form-amount-and-days").onfocus = console.log("Clicked");
// // document.getElementById("strategy-amount").onfocus = console.log("Clicked");