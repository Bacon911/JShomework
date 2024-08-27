let obj = {
    name: 'Михайло',
    age: 29,
    occupation: 'тестувальник',
    
    getInfo: function() {
        for (let key in this) {
            if (this.hasOwnProperty(key) && key !== 'getInfo') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};
obj.getInfo();
obj.newProperty = 'Нова властивість!';
obj.getInfo();
