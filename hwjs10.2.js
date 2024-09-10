var text = "Wonderful Joyful Happiness Time Task Apple";
var result = text.match(/\b[^aA]{6,}\b/g);
console.log(result); // ["Wonderful", "Joyful"]
