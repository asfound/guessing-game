class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.candidate = Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;





// 409 with max value 4048
// AssertionError: expected 407 to equal 409
