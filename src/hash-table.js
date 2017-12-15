/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax, LinkedList } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.loopList((item) => {
        this.insert(item.data.keys().next().value, item.data.get(item.data.keys().next().value));
      });
    });
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }
  insert(key, value) {
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);
    if (!bucket) bucket = new LinkedList();

    if (bucket.containsNode(key)) {
      bucket = bucket.updateNode(key, value);
    }
    bucket.insertNode(key, value);
    this.storage.set(index, bucket);
  }
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);

    if (bucket && bucket.containsNode(key)) {
      bucket = bucket.removeNode(key);
      this.storage.set(index, bucket);
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let retrieved;
    if (bucket && bucket.containsNode(key)) {
      retrieved = bucket.retrieveNode(key);
    }
    return retrieved ? retrieved.data.get(key) : undefined;
  }
}

module.exports = HashTable;
