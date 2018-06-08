import * as math from "./MathExpressionParser"
let mathExpr = "2+2*2";
let result = math.MathExpressionParser.calcExpr(mathExpr);
console.log(result);