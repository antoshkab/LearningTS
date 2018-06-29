// Функция для декорирования
function incrementCounter(target: object, propertyKey: any): void {
    let value: number = target[propertyKey];
    const getter = () => {
        value++;
        console.log(`Get: Increment counter value. New value: ${value}`);
        return value;
    };

    const setter = (newValue: number) => {
        console.log(`Set: Init counter value: ${newValue}`);
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
class Counter {
    // Вешаем деоратор
    @incrementCounter
    value: number;

    //Для инициализации начального значения
    initialize(value: number): void {
        this.value = value;
    }
}

// Проверяем
let counter = new Counter();

counter.initialize(0);
for (var i = 0; i < 5; i++) {
    console.log(counter.value);
}

counter.initialize(20);
for (var i = 0; i < 5; i++) {
    console.log(counter.value);
}