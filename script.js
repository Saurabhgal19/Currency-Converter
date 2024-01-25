const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");

// for (code in countryList) {
//     console.log(code , countryList[code])
// }

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


 const updateFlag = (ele) => {
    let currecyCode = ele.value;
    //console.log(currecyCode);
    let countryCode = countryList[currecyCode];
    //console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
 }