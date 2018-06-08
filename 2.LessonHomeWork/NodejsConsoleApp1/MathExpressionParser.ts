class MathExpressionParser {
    static calcExpr(expr: string) : number {
        let result: number = null;
        do {
            let strArray = expr;
            expr = "";
            for (let i = 0; i < strArray.length; i++) {
                let str = strArray[i];
                let num = parseInt(str);
                if (isNaN(num)) {
                    if (strArray.indexOf("*") > -1 || strArray.indexOf("/") > -1) {
                        if (str === "+" || str === "-") {
                            expr = expr + strArray[i - 1] + str;
                        } else {
                            expr = expr + this.calculate(str, parseFloat(strArray[i - 1]), parseFloat(strArray[i + 1]));
                        }
                    } else {
                        result = this.calculate(str, result === null ? parseFloat(strArray[i - 1]) : result, parseFloat(strArray[i + 1]));
                    }
                    i++;
                }
            }
        } while (result === null)

        return result;
    };

    private static calculate(expr: string, num1: number, num2: number): number {
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
}

export { MathExpressionParser }