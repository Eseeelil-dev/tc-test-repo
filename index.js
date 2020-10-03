'use strict';

const { test, run, delay } = require('./runner');

function logBlock() {
    console.log(`##teamcity[blockOpened name='Start (block)' description='Starting test run' flowId='0']`);
    testMessage('', `Start (block) Start tests`, 0);
    testMessage('', `Start (block) User agent chrome`, 0);
    testMessage('', `Start (block) Test count 10`, 0);
    console.log(`##teamcity[blockClosed name='Start (block)' flowId='0']`);
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

test('Create a permit', async (logStream) => {
    logStream.testMessage(`Open url: http://google.com`);
    await delay(205);
    logStream.testMessage(`Type text: blah blah`);
    logStream.testMessage(`Click search button`);
    await delay(10);
    logStream.testMessage(`Check blah blah`);
});

test('Create a isolation', async (logStream) => {
    logStream.testMessage(`Open url: http://google.com/isolation`);
    await delay(200);
    logStream.testMessage(`Type text: blah blah isolation`);
    await delay(13);
    logStream.testMessage(`Click search button isolation`);
    logStream.testMessage(`Check blah blah isolation`);
});

run();
