var SeqExec = (function () {
    'use strict';
    
    function SeqExec() { }
    
    return SeqExec;
}());

SeqExec.chain = function (callback) {
    'use strict';

    var queue = [], // очередь запланированных функций
        // Универсальный метод для навешивания обработчиков:
        then = function (foo) {
            queue.push(foo); // запланировать функцию
            var promise = {
                then: then // на promise можно навешивать коллбэки
            };
            return promise;
        };
    
    // Функция resume() исполняет следующую по порядку запланированную функцию.
    function resume() {
        var foo = queue.shift(); // извлечь первый элемент
        if (foo) {
            foo(resume); // выполнить запланированную функцию
        }
    }
    
    // setTimeout с нулевым интервалом - это единственный способ выполнить функцию отложено.
    setTimeout(resume, 0);
    
    return then(callback);

    // Внешний код, получив специальный объект promise, навешивает на него обработчики.
};

SeqExec.loop = function (loopBodyCallback, stopConditionCallback) {
    'use strict';

    var promise = SeqExec.chain(function iteration(nextIteration) {
        if (!stopConditionCallback()) {
            promise.then(iteration);
            loopBodyCallback(nextIteration);
        }
    });
};
