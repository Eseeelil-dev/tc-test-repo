'use strict';

const tests = [];

function timestamp() {
    return new Date().toISOString().substr(11, 12);
}

class LogStream {
    constructor(name) {
        this.name = name;
        this.messages = [];
    }

    testStarted() {
        this.messages.push(`##teamcity[testStarted name='${timestamp()} ${this.name} (Test)' flowId='${this.name}']`);
    }

    testFinished(duration) {
        this.messages.push(`##teamcity[testFinished name='${timestamp()} ${this.name} (Test)' duration='${duration}' flowId='${this.name}']`);
    }

    testMessage(message) {
        this.messages.push(`##teamcity[message text='${timestamp()} ${this.name}: ${message} (Message)' flowId='${this.name}']`);
    }

    flush() {
        for (const msg of this.messages) {
            console.log(msg);
        }
    }
}

function test(name, fn) {
    const fn1 = async () => {
        let logStream = new LogStream(name);
        let passed = false;
        let startedTime = Date.now();
        try {
            logStream.testStarted();
            await fn(logStream);
            passed = true;
        } catch (e) {
        }
        logStream.testFinished(Date.now() - startedTime);
        logStream.flush();
        return [name, passed];
    };
    tests.push({name, func: fn1});
}

function run() {
    Promise
        // Start all tests
        .all(tests.map(({func}) => func()))
        // Get the results
        .then(_ => {
            process.exit(0);
        });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { test, run, delay };
