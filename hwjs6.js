var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",
    
    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                let amount = parseInt(this[key]);
                total += amount;
            }
        }
        return total + " грн";
    },

    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                let amount = parseInt(this[key]);
                if (amount < min) {
                    min = amount;
                }
            }
        }
        return min + " грн";
    },

    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                let amount = parseInt(this[key]);
                if (amount > max) {
                    max = amount;
                }
            }
        }
        return max + " грн";
    }
};
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
