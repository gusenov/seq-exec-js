/*jslint node:true */

(function () {
    'use strict';

    var SeqExec;

    if (typeof window === 'undefined') {
        SeqExec = require('./seq-exec');
    } else {
        SeqExec = window.SeqExec;
    }

    SeqExec.chain(function (next) {
        console.log("Example 1:");
        console.log("1");
        next(); // перейти к исполнению следующей функции в цепочке
    }).then(function (next) {
        console.log("2");
        next(); // перейти к исполнению следующей функции в цепочке
    }).then(function (next) {
        console.log("3");
    });
    
}());