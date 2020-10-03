'use strict';

const { test, run, delay } = require('./runner');

test('Create a permit', async (l) => {
    l.testMessage(`Open url: http://google.com`);
    l.testMessage(`Type text: blah blah`);
    l.testMessage(`Click search button`);
    l.testMessage(`Check blah blah`);
    l.testMessage(`Check blah blah 2`);
});

test('Create a isolation', async (l) => {
    l.testMessage(`Open url: http://google.com/isolation`);
    await delay(200);
    l.testMessage(`Type text: blah blah isolation`);
    await delay(500);
    l.testMessage(`Click search button isolation`);
    await delay(1000);
    l.testMessage(`Check blah blah isolation`);
    l.testMessage(`Check blah blah isolation 2`);
});

test('Dummy test', async () => {
    await delay(15000);
});

test('Create a certificate', async (l) => {
    l.testMessage(`Open url: http://google.com/certificate`);
    await delay(200);
    l.testMessage(`Type text: blah blah certificate`);
    await delay(500);
    l.testMessage(`Click search button certificate`);
    await delay(1000);
    l.testMessage(`Check blah blah certificate`);
    l.testMessage(`Check blah blah certificate 2`);
});

test('Create a calendar', async (l) => {
    l.testMessage(`Open url: http://google.com/calendar`);
    await delay(200);
    l.testMessage(`Type text: blah blah calendar`);
    await delay(500);
    l.testMessage(`Click search button calendar`);
    await delay(1000);
    l.testMessage(`Check blah blah calendar`);
    l.testMessage(`Check blah blah calendar 2`);
});

run();
