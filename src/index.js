class Sorter {
  constructor() {
    this.stock = [];
    this.comtaratorFunc = function (a, b) { return a - b; };
  }

  add(element) {
    this.stock.push(element);
  }

  at(index) {
    return this.stock[index];
  }

  get length() {
    return this.stock.length;
  }

  toArray() {
    return this.stock;
  }

  sort(indices) {

    var shortArray = [];
    indices.sort (
      function (a, b) { return a - b; }
    );

    for (let i = 0; i < indices.length; i++) {
      shortArray.push(this.stock[indices[i]]);
    }

    shortArray.sort(this.comtaratorFunc);

    for (let i = 0; i < indices.length; i++) {
      this.stock[indices[i]] = shortArray[i];
    }

    return this.stock;
  }

  setComparator(compareFunction) {
    this.comtaratorFunc = compareFunction;
  }
}

module.exports = Sorter;
