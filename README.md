# Класс **[SeqExec](seq-exec.js#L1)** и его методы

Файл *[seq-exec.js](seq-exec.js)* содержит класс **[SeqExec](seq-exec.js#L1)** предназначенный для организации последовательного исполнения JS-функций посредством механизма обратного вызова.

Методы класса **[SeqExec](seq-exec.js#L1)**:

| Название метода         | Описание                                                                         |
| ----------------------- | -------------------------------------------------------------------------------- |
| [chain](seq-exec.js#L9) | Позволяет объединить функции в цепочку из последовательно выполняющихся функций. |
| [loop](seq-exec.js#L38) | Позволяет последовательно выполнить серию повторяющихся операций.                |

# Примеры

## Простой пример: цепочка последовательно выполняющихся функций

В нижеприведённом примере ключевую роль играет вызов функции **next()**, только после которого происходит переход к исполнению следующей функции:

```js
SeqExec.chain(function (next) {
    console.log("1");
    next(); // перейти к исполнению следующей функции в цепочке
}).then(function (next) {
    console.log("2");
    next(); // перейти к исполнению следующей функции в цепочке
}).then(function (next) {
    console.log("3");
});
```

Вывод:

```text
$ node example1.js
Example 1:
1
2
3
```

## Простой пример: циклы

В качестве простого примера, демонстрирующего суть метода **SeqExec.loop(loopBodyCallback, stopConditionCallback)** можно привести альтернативную реализацию циклов для JavaScript, без использования конструкций **for** и **while**:

```js
var idx = 1;
SeqExec.loop(function loopBody(cont) {
    console.log(idx);
    idx += 1;
    cont(); // continue
}, function stopCondition() {
    return idx > 10 ? true : false;
});
```

Вывод:

```text
$ node example2.js
Example 2:
1
2
3
4
5
6
7
8
9
10
``` 

# Установка в свой проект

```bash
$ npm install seq-exec --save
```

# Публикация npm-пакета

Фиксация изменений:

```bash
$ git add .
$ git commit -S -m "0.0.1"
$ git tag -s v0.0.1 -m 'signed 0.0.1 tag'
```

или

```bash
$ npm version patch
```

Отправка на [github.com](https://github.com/gusenov/seq-exec-js):

```bash
$ git push --tags origin master:master
```

Отправка на [npmjs.com](https://www.npmjs.com/package/seq-exec):

```bash
$ npm login
$ npm config ls
$ npm publish
```

# Дополнительные пояснения к коду

ООП в JavaScript:

- [stackoverflow.com/questions/7694501/class-vs-static-method-in-javascript](https://stackoverflow.com/questions/7694501/class-vs-static-method-in-javascript)

Синхронность и асинхронность в JavaScript:

- [stackoverflow.com/questions/2035645/when-is-javascript-synchronous](https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous)
- [stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other](https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other)
- [stackoverflow.com/questions/1859185/how-to-force-sequential-javascript-execution](https://stackoverflow.com/questions/1859185/how-to-force-sequential-javascript-execution)

Промисы:

- [learn.javascript.ru/promise](https://learn.javascript.ru/promise)
- [artemdemo.me/blog/как-делаются-promise-в-javascript](http://artemdemo.me/blog/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D1%8E%D1%82%D1%81%D1%8F-promise-%D0%B2-javascript/)

Создание npm-пакета:

- [docs.npmjs.com/getting-started/publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [docs.npmjs.com/misc/developers](https://docs.npmjs.com/misc/developers)
- [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
- [spdx.org/licenses](https://spdx.org/licenses/)
- [eladnava.com/publishing-your-first-package-to-npm](https://eladnava.com/publishing-your-first-package-to-npm/)
- [gist.github.com/coolaj86/1318304#getting-started-with-npm-as-a-developer](https://gist.github.com/coolaj86/1318304#getting-started-with-npm-as-a-developer)

Node.js:

- [stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js](https://stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js)

JSLint:

- [jslint.com/help.html](http://www.jslint.com/help.html)

Git:

- [git-scm.com/book/en/v2/Git-Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
