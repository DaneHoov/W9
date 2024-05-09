class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      if (this.length === this.capacity) {
        this.capacity++;
      }
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }
}

module.exports = DynamicArray;
