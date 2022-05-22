// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  model: 'product_tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  model: 'product_tag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
