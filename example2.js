/*jslint node:true */

(function () {
    'use strict';

    var SeqExec,
        idx = 1;

    if (typeof window === 'undefined') {
        SeqExec = require('./seq-exec');
    } else {
        SeqExec = window.SeqExec;
    }

    SeqExec.loop(function loopBody(cont) {
        if (idx === 1) { console.log("Example 2:"); }
        console.log(idx);
        idx += 1;
        cont(); // continue
    }, function stopCondition() {
        return idx > 10 ? true : false;
    });
    
}());