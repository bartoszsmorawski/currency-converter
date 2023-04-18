{
    const calculateResult = (amount, currency) => {
        const rateTHB = 0.1294;
        const rateUSD = 4.4130;
        const rateAUD = 2.9466;
        const rateHKD = 0.5626;
        const rateCAD = 3.2168;
        const rateNZD = 2.7521;
        const rateSGD = 3.2890;
        const rateEUR = 4.7109;
        const rateHUF = 0.0118;
        const rateCHF = 4.7477;
        const rateGBP = 5.3808;
        const rateUAH = 0.1258;
        const rateJPY = 3.3634;
        const rateCZK = 0.1963;
        const rateDKK = 0.6328;
        const rateISK = 3.1469;
        const rateNOK = 0.4119;
        const rateSEK = 0.4205;
        const rateRON = 0.9572;
        const rateBGN = 2.4086;
        const rateTRY = 0.2322;
        const rateILS = 1.2003;
        const rateCLP = 0.0053;
        const ratePHP = 0.0809;
        const rateMXN = 0.2321;
        const rateZAR = 0.2384;
        const rateBRL = 0.8365;
        const rateMYR = 0.9837;
        const rateIDR = 0.0002;
        const rateINR = 0.0534;
        const rateKRW = 0.0033;
        const rateCNY = 0.6408;

        switch (currency) {
            case "THB":
                return amount / rateTHB;


            case "USD":
                return amount / rateUSD;


            case "AUD":
                return amount / rateAUD;


            case "HKD":
                return amount / rateHKD;


            case "CAD":
                return amount / rateCAD;


            case "NZD":
                return amount / rateNZD;


            case "SGD":
                return amount / rateSGD;


            case "EUR":
                return amount / rateEUR;


            case "HUF":
                return amount / rateHUF;


            case "CHF":
                return amount / rateCHF;


            case "GBP":
                return amount / rateGBP;


            case "UAH":
                return amount / rateUAH;


            case "JPY":
                return amount / rateJPY;


            case "CZK":
                return amount / rateCZK;


            case "DKK":
                return amount / rateDKK;


            case "ISK":
                return amount / rateISK;


            case "NOK":
                return amount / rateNOK;


            case "SEK":
                return amount / rateSEK;


            case "RON":
                return amount / rateRON;


            case "BGN":
                return amount / rateBGN;


            case "TRY":
                return amount / rateTRY;


            case "ILS":
                return amount / rateILS;


            case "CLP":
                return amount / rateCLP;


            case "PHP":
                return amount / ratePHP;


            case "MXN":
                return amount / rateMXN;


            case "ZAR":
                return amount / rateZAR;


            case "BRL":
                return amount / rateBRL;


            case "MYR":
                return amount / rateMYR;


            case "IDR":
                return amount / rateIDR;


            case "INR":
                return amount / rateINR;


            case "KRW":
                return amount / rateKRW;


            case "CNY":
                return amount / rateCNY;


        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }
    

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText (amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}