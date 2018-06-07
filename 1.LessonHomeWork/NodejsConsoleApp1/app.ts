function calculate(expr: string, num1: number, num2: number): number {
    switch (expr) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw Error("Невозможно распознать операцию");
    }
};

let mathExpr = "1-6/2";
let result: number = null;
do {
    let strArray = mathExpr;
    mathExpr = "";
    for (let i = 0; i < strArray.length; i++) {
        let str = strArray[i];
        let num = parseInt(str);
        if (isNaN(num)) {
            if (strArray.indexOf("*") > -1 || strArray.indexOf("/") > -1) {
                if (str === "+" || str === "-") {
                    mathExpr = mathExpr + strArray[i - 1] + str;
                } else {
                    mathExpr = mathExpr + calculate(str, parseFloat(strArray[i - 1]), parseFloat(strArray[i + 1]));
                }
            } else {
                result = calculate(str, result === null ? parseFloat(strArray[i - 1]) : result, parseFloat(strArray[i + 1]));
            }
            i++;
        }
    }
} while (result === null)
console.log(result);