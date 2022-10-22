const Category = require("./models/Category")
const Product = require("./models/Product")
const colors = require('colors');
const Variation = require("./models/Variation");
const ProductVariation = require("./models/ProductVariation");
const VariationOption = require("./models/VariationOption");
const ProductConfiguration = require("./models/ProductConfiguration");
const ShoppingCart = require("./models/ShoppingCart");
const ShoppingCartItem = require("./models/ShoppingCartItem");
const Customer = require("./models/Customer");
const Name = require("./models/Name");
const Country = require("./models/Country");
const Address = require("./models/Address");
const User = require("./models/User");
const ShopOrder = require("./models/ShopOrder");
const OrderItem = require("./models/OrderItem");
const OrderStatus = require("./models/OrderStatus");
const PaymentMethod = require("./models/PaymentMethod");


const createRelations = () => {
    // relation between product and category
    Product.belongsTo(Category);
    Category.hasMany(Product);
    console.log(colors.bgYellow('product and category in oneToMany relationship🌈'));

    //relation between product and variation
    Product.belongsToMany(Variation, {through: ProductVariation});
    Variation.belongsToMany(Product, {through: ProductVariation});
    console.log(colors.bgWhite('product and variation in manyToMany relationship🌍'));


    //relation between variation and variation_option
    VariationOption.belongsTo(Variation);
    Variation.hasMany(VariationOption);
    console.log(colors.bgRed('variation and variation_option in oneToMany relationship🌈'));

// relation between product_item and variation_option
    ShoppingCartItem.belongsToMany(VariationOption, {through: ProductConfiguration});
    VariationOption.belongsToMany(ShoppingCartItem, {through: ProductConfiguration});

    // relation between shopping_cart and shopping_cart_item
    ShoppingCart.hasMany(ShoppingCartItem);
    ShoppingCartItem.belongsTo(ShoppingCart);

    // relation between shopping_cart_item and product_item
    Product.hasMany(ShoppingCartItem);
    ShoppingCartItem.belongsTo(Product);


    // relation between customer and name
    Customer.hasOne(Name);
    Name.belongsTo(Customer);

    //relation between customer and address
    Customer.hasMany(Address);
    Address.belongsTo(Customer);

    // relation between Address and Country
    Country.hasMany(Address);
    Address.belongsTo(Country);


    // relation between customer and shopping_cart
    Customer.hasOne(ShoppingCart);
    ShoppingCart.belongsTo(Customer);


    // relation between customer and user
    User.hasOne(Customer);
    Customer.belongsTo(User);


    // relation betweeen shop_order and customer
    Customer.hasMany(ShopOrder);
    ShopOrder.belongsTo(Customer);

    // relation between shop_order and order_item
    ShopOrder.hasMany(OrderItem);
    OrderItem.belongsTo(ShopOrder);


    // relation between order_item and cart_item
    OrderItem.belongsTo(Product);
    Product.hasMany(OrderItem);

    // relation between order_status and shop_order
    OrderStatus.hasMany(ShopOrder);
    ShopOrder.belongsTo(OrderStatus);


    // relation between payment_method and shop_order

    PaymentMethod.hasMany(ShopOrder);
    ShopOrder.belongsTo(PaymentMethod);


    
}


module.exports = createRelations;