function calculate(expr, num1, num2) {
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
}
;
var mathExpr = "1-6/2";
var result = null;
do {
    var strArray = mathExpr;
    mathExpr = "";
    for (var i = 0; i < strArray.length; i++) {
        var str = strArray[i];
        var num = parseInt(str);
        if (isNaN(num)) {
            if (strArray.indexOf("*") > -1 || strArray.indexOf("/") > -1) {
                if (str === "+" || str === "-") {
                    mathExpr = mathExpr + strArray[i - 1] + str;
                }
                else {
                    mathExpr = mathExpr + calculate(str, parseFloat(strArray[i - 1]), parseFloat(strArray[i + 1]));
                }
            }
            else {
                result = calculate(str, result === null ? parseFloat(strArray[i - 1]) : result, parseFloat(strArray[i + 1]));
            }
            i++;
        }
    }
} while (result === null);
console.log(result);
//# sourceMappingURL=app.js.map