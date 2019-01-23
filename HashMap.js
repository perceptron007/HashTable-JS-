let hash = require('string-hash');

class DumbMap {

  constructor() {
    this.list = [];
  }

  get (x) {
    return this.list[hash(x)];
  }

  set (x, y) {
    this.list[hash(x)] = y;
  }
}

let m = new DumbMap()

m.set('a', 1)
m.get('a');
console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')
