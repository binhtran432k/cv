/**
 * @template T
 */
class Heap {
  /**
   * @param {T[]?} arr
   */
  constructor(arr) {
    /** @type {T[]} */
    this.data = [];
    if (arr) {
      arr.forEach((x) => this.add(x));
    }
  }

  /**
   * @param {number} i
   */
  shiftUp(i) {
    const parentI = Math.floor((i - 1) / 2);
    if (this.data[i] < this.data[parentI]) {
      [this.data[i], this.data[parentI]] = [this.data[parentI], this.data[i]];
      this.shiftUp(parentI);
    }
  }

  /**
   * @param {number} i
   */
  shiftDown(i) {
    const leftChildI = i * 2 + 1;
    const rightChildI = leftChildI + 1;
    const parentI = i;
    const v = this.data[i];

    if (this.data[leftChildI] < v || this.data[rightChildI] < v) {
      const childI = function () {
        if (this.data[leftChildI] < v && this.data[rightChildI] < v) {
          return this.data[leftChildI] < this.data[rightChildI]
            ? leftChildI
            : rightChildI;
        } else {
          return this.data[leftChildI] < v ? leftChildI : rightChildI;
        }
      }.call(this);
      this.data[parentI] = this.data[childI];
      this.data[childI] = v;
      this.shiftDown(childI);
    }
  }

  /**
   * @param {T} v
   */
  add(v) {
    this.data.push(v);
    this.shiftUp(this.data.length - 1);
  }

  /**
   * @param {T} v
   */
  remove() {
    const rem = this.data[0];
    if (this.data.length < 2) {
      this.data.pop();
    } else {
      this.data[0] = this.data.pop();
    }
    this.shiftDown(0);
    return rem;
  }

  peek() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
}

export default Heap;
