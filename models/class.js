class Factory {
  static generateCategories(id, name) {
    return new Categories(id, name);
  }
  static generateShoes(id, name, categoryId, minSize, maxSize, status) {
    return new Shoes(id, name, categoryId, minSize, maxSize, status);
  }
}

class Categories {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
class Shoes {
  constructor(id, name, categoryId, minSize, maxSize, status) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.status = status;
  }
}

module.exports = Factory;
