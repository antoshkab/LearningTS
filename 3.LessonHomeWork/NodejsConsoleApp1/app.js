var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Функция для декорирования
function incrementCounter(target, propertyKey) {
    var value = target[propertyKey];
    var getter = function () {
        value++;
        console.log("Get: Increment counter value. New value: " + value);
        return value;
    };
    var setter = function (newValue) {
        console.log("Set: Init counter value: " + newValue);
        value = newValue;
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
// Класс счетчик
var Counter = /** @class */ (function () {
    function Counter() {
    }
    //Для инициализации начального значения
    Counter.prototype.initialize = function (value) {
        this.value = value;
    };
    __decorate([
        incrementCounter
    ], Counter.prototype, "value", void 0);
    return Counter;
}());
// Проверяем
var counter = new Counter();
counter.initialize(0);
for (var i = 0; i < 5; i++) {
    console.log(counter.value);
}
counter.initialize(20);
for (var i = 0; i < 5; i++) {
    console.log(counter.value);
}
//# sourceMappingURL=app.js.map