/**
 * @template T
 */
class Heap {
  /**
   * @param {(a: [T, number], b: typeof a) => boolean} compareFn
   */
  constructor(compareFn) {
    /** @type {[T, number][]} */
    this.heap = [];
    /** @type {typeof compareFn} */
    this.compareFn = compareFn;
  }

  #getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  #getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  #getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  #hasLeftChild(index) {
    return this.#getLeftChildIndex(index) < this.heap.length;
  }

  #hasRightChild(index) {
    return this.#getRightChildIndex(index) < this.heap.length;
  }

  #hasParent(index) {
    return this.#getParentIndex(index) >= 0;
  }

  #leftChild(index) {
    return this.heap[this.#getLeftChildIndex(index)];
  }

  #rightChild(index) {
    return this.heap[this.#getRightChildIndex(index)];
  }

  #parent(index) {
    return this.heap[this.#getParentIndex(index)];
  }

  #swap(indexFst, indexSnd) {
    const tmp = this.heap[indexFst];
    this.heap[indexFst] = this.heap[indexSnd];
    this.heap[indexSnd] = tmp;
  }

  #heapifyUp(index) {
    while (
      this.#hasParent(index) &&
      this.compareFn(this.heap[index], this.#parent(index))
    ) {
      const parentIndex = this.#getParentIndex(index);
      this.#swap(index, parentIndex);
      index = parentIndex;
    }
  }

  #getSmallerChildIndex(index) {
    if (
      this.#hasRightChild(index) &&
      this.compareFn(this.#rightChild(index), this.#leftChild(index))
    ) {
      return this.#getRightChildIndex(index);
    }
    return this.#getLeftChildIndex(index);
  }

  #heapifyDown(index) {
    while (this.#hasLeftChild(index)) {
      const smallerChildIndex = this.#getSmallerChildIndex(index);
      if (this.compareFn(this.heap[index], this.heap[smallerChildIndex])) {
        break;
      } else {
        this.#swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  /**
   * @param {T} v
   * @param {number} priority
   */
  add(v, priority) {
    this.heap.push([v, priority]);
    this.#heapifyUp(this.heap.length - 1);
  }

  /**
   * @param {T} v
   */
  remove() {
    const item = this.heap[0];
    if (!item) {
      return null;
    }
    if (this.heap.length < 2) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop();
    }
    this.#heapifyDown(0);
    return item[0];
  }

  peek() {
    return this.heap[0]?.[0] ?? null;
  }

  size() {
    return this.heap.length;
  }

  /**
   * @param {T} key
   * @param {number} priority
   */
  update(v, priority) {
    const i = this.heap.findIndex(([key]) => v === key);
    if (i < 0) {
      return;
    }

    const [, oldPriority] = this.heap[i];
    this.heap[i] = [v, priority];
    if (this.compareFn([v, oldPriority], [v, priority])) {
      this.#heapifyDown(i);
    } else {
      this.#heapifyUp(i);
    }
  }
}

/**
 * @template T
 * @extends Heap<T>
 */
class MinHeap extends Heap {
  constructor() {
    super(([, a], [, b]) => a < b);
  }
}

/**
 * @template T
 * @extends Heap<T>
 */
class MaxHeap extends Heap {
  constructor() {
    super(([, a], [, b]) => a > b);
  }
}

export { Heap, MinHeap, MaxHeap };
