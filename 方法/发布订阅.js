module.exports = new class {
    constructor() {
        this.pood = [];
    }
    add (func) {
        !this.pood.some(item => item === func) ? this.pood.push(func) : null
        return this;
    };
    remove (func) {
        for (let i in this.pood) {
            this.pood[i] === func ? this.pood[i] = null : null;
            break;
        }
        return this
    };
    fire (...args) {
        for (let i = 0; i < this.pood.length; i++) {
            if (typeof this.pood[i] !== 'function') {
                this.pood.splice(i, 1);
                i--;
            } else this.pood[i].call(this, ...args)
        }
    }
}