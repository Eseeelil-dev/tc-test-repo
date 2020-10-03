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
    console.log(`##teamcity[message text='${message} (Message)' flowId='${flowId}']`);
}

logBlock();

testStarted('Create a permit', 1);
testMessage('Create a permit', `Open url: http://google.com`, 1);

testStarted('Create a isolation', 2);

testMessage('Create a permit', `Type text: blah blah`, 1);
testMessage('Create a isolation', `Open url: http://google.com/isolation`, 2);
testMessage('Create a isolation', `Type text: blah blah isolation`, 2);
testMessage('Create a isolation', `Click search button isolation`, 2);
testMessage('Create a permit', `Click search button`, 1);
testMessage('Create a isolation', `Check blah blah isolation`, 2);
testFinished('Create a isolation', '11100', 2);
testMessage('Create a permit', `Check blah blah`, 1);
testFinished('Create a permit', '12050', 1);
