'use strict';

function logBlock() {
    console.log(`##teamcity[blockOpened name='Start (block)' description='Starting test run' flowId='0']`);
    testMessage('', `Start (block) Start tests`, 0);
    testMessage('', `Start (block) User agent chrome`, 0);
    testMessage('', `Start (block) Test count 10`, 0);
    console.log(`##teamcity[blockClosed name='Start (block)' flowId='0']`);
}

function testSuiteStarted(name, flowId) {
    if (flowId) {
        console.log(`##teamcity[testSuiteStarted name='${name} (Suite)' flowId='${flowId}']`);
    } else {
        console.log(`##teamcity[testSuiteStarted name='${name} (Suite)']`);
    }
}

function testSuiteFinished(name, flowId) {
    if (flowId) {
        console.log(`##teamcity[testSuiteFinished name='${name} (Suite)' flowId='${flowId}']`);
    } else {
        console.log(`##teamcity[testSuiteFinished name='${name} (Suite)']`);
    }
}

function testStarted(name, flowId) {
    console.log(`##teamcity[testStarted name='${name} (Test)' flowId='${flowId}']`);
}

function testFinished(name, duration, flowId) {
    console.log(`##teamcity[testFinished name='${name} (Test)' duration='${duration}' flowId='${flowId}']`);
}

function testMessage(name, message, flowId) {
    console.log(`##teamcity[message text='${name}: ${message} (Message)' flowId='${flowId}']`);
}

const tests = [
    'Create a permit',
    'Create a isolation',
];

const ids = [ 1, 2 ];

logBlock();

testStarted(tests[0], ids[0]);
testMessage(tests[0], `Open url: http://google.com`, ids[0]);

testStarted(tests[1], ids[1]);

testMessage(tests[0], `Type text: blah blah`, ids[0]);
testMessage(tests[1], `Open url: http://google.com/isolation`, ids[1]);
testMessage(tests[1], `Type text: blah blah isolation`, ids[1]);
testMessage(tests[1], `Click search button isolation`, ids[1]);
testMessage(tests[0], `Click search button`, ids[0]);
testMessage(tests[1], `Check blah blah isolation`, ids[1]);
testFinished(tests[1], '11100', ids[1]);
testMessage(tests[0], `Check blah blah`, ids[0]);
testFinished(tests[0], '12050', ids[0]);
