const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (code in countryList) {
//     console.log(code , countryList[code])
// }

window.addEventListener("load", async () => {
        updateExchange();
})


 for(let select of dropdowns) {
    for(currentCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currentCode;
        newOption.value=currentCode;

        if(select.name === "from" && currentCode ==="USD")
        {
            newOption.selected ="selected";
        }
        else if (select.name === "to" && currentCode === "INR") {
            newOption.selected ="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (e)=>{
        updateFlag(e.target);
    })
 }

 let updateExchange = async () => {
    let amount = document.querySelector("form input");
    let amountValue = amount.value;
    console.log(amountValue);

    if(amountValue === "" || amountValue < 1){
        amountValue=1;
        amount.value= 999;
    }

    //console.log(fromCurr.value , toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    //console.log(data);

    let rate = data[toCurr.value.toLowerCase()].toFixed(2);
    
    console.log("Rate",rate);

    let finalAmount = amount.value * rate;

    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
 }


 const updateFlag = (ele) => {
    let currecyCode = ele.value;
    //console.log(currecyCode);
    let countryCode = countryList[currecyCode];
    //console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let image = ele.parentElement.querySelector('img');
    image.src = newSrc ;
 }

 button.addEventListener("click", (event) => {
    event.preventDefault();
    updateExchange();
    
 })

