let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateTHB = 0.1294;
let rateUSD = 4.4130;
let rateAUD = 2.9466;
let rateHKD = 0.5626;
let rateCAD = 3.2168;
let rateNZD = 2.7521;
let rateSGD = 3.2890;
let rateEUR = 4.7109;
let rateHUF = 0.0118;
let rateCHF = 4.7477;
let rateGBP = 5.3808;
let rateUAH = 0.1258;
let rateJPY = 3.3634;
let rateCZK = 0.1963;
let rateDKK = 0.6328;
let rateISK = 3.1469;
let rateNOK = 0.4119;
let rateSEK = 0.4205;
let rateRON = 0.9572;
let rateBGN = 2.4086;
let rateTRY = 0.2322;
let rateILS = 1.2003;
let rateCLP = 0.0053;
let ratePHP = 0.0809;
let rateMXN = 0.2321;
let rateZAR = 0.2384;
let rateBRL = 0.8365;
let rateMYR = 0.9837;
let rateIDR = 0.0002;
let rateINR = 0.0534;
let rateKRW = 0.0033;
let rateCNY = 0.6408;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "THB":
            result = amount / rateTHB;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "AUD":
            result = amount / rateAUD;
            break;

        case "HKD":
            result = amount / rateHKD;
            break;

        case "CAD":
            result = amount / rateCAD;
            break;

        case "NZD":
            result = amount / rateNZD;
            break;

        case "SGD":
            result = amount / rateSGD;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "HUF":
            result = amount / rateHUF;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "UAH":
            result = amount / rateUAH;
            break;

        case "JPY":
            result = amount / rateJPY;
            break;

        case "CZK":
            result = amount / rateCZK;
            break;

        case "DKK":
            result = amount / rateDKK;
            break;

        case "ISK":
            result = amount / rateISK;
            break;

        case "NOK":
            result = amount / rateNOK;
            break;

        case "SEK":
            result = amount / rateSEK;
            break;

        case "RON":
            result = amount / rateRON;
            break;

        case "BGN":
            result = amount / rateBGN;
            break;

        case "TRY":
            result = amount / rateTRY;
            break;

        case "ILS":
            result = amount / rateILS;
            break;

        case "CLP":
            result = amount / rateCLP;
            break;

        case "PHP":
            result = amount / ratePHP;
            break;

        case "MXN":
            result = amount / rateMXN;
            break;

        case "ZAR":
            result = amount / rateZAR;
            break;

        case "BRL":
            result = amount / rateBRL;
            break;

        case "MYR":
            result = amount / rateMYR;
            break;

        case "IDR":
            result = amount / rateIDR;
            break;

        case "INR":
            result = amount / rateINR;
            break;

        case "KRW":
            result = amount / rateKRW;
            break;

        case "CNY":
            result = amount / rateCNY;
            break;

    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
}); 
