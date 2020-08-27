'use strict';

function logBlock() {
    console.log(`##teamcity[blockOpened name='Start' description='Starting test run' flowId='1']`);
    console.log(`Start tests`);
    console.log(`User agent chrome`);
    console.log(`Test count 10`);
    console.log(`##teamcity[blockClosed name='Start' flowId='1']`);
}

function testSuiteStarted(name, flowId) {
    console.log(`##teamcity[testSuiteStarted name='${name}' flowId='${flowId}']`);
}

function testSuiteFinished(name, flowId) {
    console.log(`##teamcity[testSuiteFinished name='${name}' flowId='${flowId}']`);
}

function testStarted(name, flowId) {
    console.log(`##teamcity[testStarted name='${name}' flowId='${flowId}']`);
}

function testFinished(name, duration, flowId) {
    console.log(`##teamcity[testFinished name='${name}' duration='${duration}' flowId='${flowId}']`);
}

function testMessage(name, message, flowId) {
    console.log(`##teamcity[message text='${message}' flowId='${flowId}']`);
}

logBlock();
testSuiteStarted('Permit', 1);
testStarted('Create a permit', 1);
testMessage('Create a permit', `Open url: http://google.com`, 1);
testMessage('Create a permit', `Type text: blah blah`, 1);
testMessage('Create a permit', `Click search button`, 1);
testMessage('Create a permit', `Check blah blah`, 1);
testFinished('Create a permit', '12050', 1);
testSuiteFinished('Permit', 1);
