//* If you have initializing process, you can do it here.
class AppBuilder {
    constructor() {
        //!Date
        this.initializeDatePrototype();

        //!Number
        this.initializeNumberPrototype();
    }

    initializeDatePrototype = () => {
        Date.prototype.addHours = function (h) {
            this.setHours(this.getHours() + h);
            return this;
        };
    }

    initializeNumberPrototype = () => {
        Number.prototype.abbreviateNumber = function (number) {
            var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

            var tier = Math.log10(Math.abs(number)) / 3 | 0;

            if (tier == 0) return number;

            return (number / Math.pow(10, tier * 3)).toFixed(0) + SI_SYMBOL[tier];
        }
    }
}

export default AppBuilder;