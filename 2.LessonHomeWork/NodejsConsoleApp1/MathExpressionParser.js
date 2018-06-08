"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathExpressionParser = /** @class */ (function () {
    function MathExpressionParser() {
    }
    MathExpressionParser.calcExpr = function (expr) {
        var result = null;
        do {
            var strArray = expr;
            expr = "";
            for (var i = 0; i < strArray.length; i++) {
                var str = strArray[i];
                var num = parseInt(str);
                if (isNaN(num)) {
                    if (strArray.indexOf("*") > -1 || strArray.indexOf("/") > -1) {
                        if (str === "+" || str === "-") {
                            expr = expr + strArray[i - 1] + str;
                        }
                        else {
                            expr = expr + this.calculate(str, parseFloat(strArray[i - 1]), parseFloat(strArray[i + 1]));
                        }
                    }
                    else {
                        result = this.calculate(str, result === null ? parseFloat(strArray[i - 1]) : result, parseFloat(strArray[i + 1]));
                    }
                    i++;
                }
            }
        } while (result === null);
        return result;
    };
    ;
    MathExpressionParser.calculate = function (expr, num1, num2) {
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
    ;
    return MathExpressionParser;
}());
exports.MathExpressionParser = MathExpressionParser;
//# sourceMappingURL=MathExpressionParser.js.map