'use strict';

class Test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    noteAll() : void {
        console.log(this.name);
    }
}

setTimeout(() => {
    const test = new Test('Vovandes');
    test.noteAll();
}, 1000);
