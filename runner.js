'use strict';

const tests = [];

function test(name, fn) {
    const fn1 = async () => {
        try {
            await fn();
            return [name, true];
        } catch (e) {
            return [name, false];
        }
    };
    tests.push({name, func: fn1});
}

function run() {
    Promise
        // Start all tests
        .all(tests.map(({func}) => func()))
        // Get the results
        .then(results => {
            process.exit(results.filter(res => res[1]).length);
        });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { test, run, delay };
