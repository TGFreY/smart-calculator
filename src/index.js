class SmartCalculator {
    constructor(initialValue) {
        this.total = initialValue;
    }

    add(number) {
        this.total += "+" + number;
        return this;
    }

    subtract(number) {
        this.total += "-" + number;
        return this;
    }

    multiply(number) {
        this.total += "*" + number;
        return this;
    }

    devide(number) {
        this.total += "/" + number;
        return this;
    }

    pow(number) {
        this.total += "**" + number;
        return this;
    }
    valueOf() {
        return eval(this.total);
    }
}

module.exports = SmartCalculator;
