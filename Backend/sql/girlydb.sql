-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 14, 2022 at 01:06 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `girlydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`) VALUES
(1, 'comestics'),
(2, 'makeup'),
(3, 'powder'),
(4, 'lotions'),
(5, 'liptick'),
(6, 'mascara');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `price` float NOT NULL DEFAULT '99.95',
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `name_3` (`name`),
  UNIQUE KEY `name_4` (`name`),
  UNIQUE KEY `name_5` (`name`),
  UNIQUE KEY `name_6` (`name`),
  UNIQUE KEY `name_7` (`name`),
  UNIQUE KEY `name_8` (`name`),
  UNIQUE KEY `name_9` (`name`),
  UNIQUE KEY `name_10` (`name`),
  UNIQUE KEY `name_11` (`name`),
  UNIQUE KEY `name_12` (`name`),
  UNIQUE KEY `name_13` (`name`),
  UNIQUE KEY `name_14` (`name`),
  UNIQUE KEY `name_15` (`name`),
  UNIQUE KEY `name_16` (`name`),
  UNIQUE KEY `name_17` (`name`),
  UNIQUE KEY `name_18` (`name`),
  UNIQUE KEY `name_19` (`name`),
  UNIQUE KEY `name_20` (`name`),
  UNIQUE KEY `name_21` (`name`),
  UNIQUE KEY `name_22` (`name`),
  UNIQUE KEY `name_23` (`name`),
  UNIQUE KEY `name_24` (`name`),
  UNIQUE KEY `name_25` (`name`),
  UNIQUE KEY `name_26` (`name`),
  UNIQUE KEY `name_27` (`name`),
  UNIQUE KEY `name_28` (`name`),
  UNIQUE KEY `name_29` (`name`),
  UNIQUE KEY `name_30` (`name`),
  UNIQUE KEY `name_31` (`name`),
  UNIQUE KEY `name_32` (`name`),
  UNIQUE KEY `name_33` (`name`),
  UNIQUE KEY `name_34` (`name`),
  UNIQUE KEY `name_35` (`name`),
  UNIQUE KEY `name_36` (`name`),
  UNIQUE KEY `name_37` (`name`),
  UNIQUE KEY `name_38` (`name`),
  UNIQUE KEY `name_39` (`name`),
  KEY `categoryId` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `product_image`, `categoryId`, `price`, `rating`) VALUES
(1, 'Lotion', 'a product for girls', 'https://post.healthline.com/wp-content/uploads/2021/02/975651-The-20-Best-Calming-Beauty-Products-for-2021-732x549-Feature.jpg', 4, 100, NULL),
(2, 'Maskara', 'a beautiful product for girls beauty parfum', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-skincare-products-1656081764.jpg', 6, 46.99, NULL),
(3, 'Cream Brush', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', 'https://cache.magicmaman.com/data/photo/w1000_ci/1ec/produit-beaute-bio.jpg', 5, 99.95, NULL),
(4, 'Luvia', 'anctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,', 'https://cache.magicmaman.com/data/photo/w1000_ci/1ec/produit-beaute-bio.jpg', 1, 99.95, NULL),
(5, 'BeautyGen', 'a simple beauty product', 'https://cdn.shopify.com/s/files/1/0353/7521/8732/products/c6357c3d9599c5b0d498db17b6fde2febbd0fd929c5faffdbe9ad38500e285c1.png', 2, 99.95, NULL),
(6, 'Queen Product', 'a simple beauty product', 'https://5f20e8d85ba4f668f287-d7429abc22da772ac9a29cb8678c709d.ssl.cf1.rackcdn.com/estee-lauder-group3-srgb.jpg', 4, 99.95, NULL),
(7, 'Lippie Pencil', 'Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!', 'https://wwd.com/wp-content/uploads/2022/02/new-beauty-products-february-2022-9.jpg', 2, 50, NULL),
(8, 'Blotted Lip', 'Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.', 'https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg', 4, 65.99, NULL),
(9, 'Lippie Stix', 'Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.', 'https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg', 3, 35.99, NULL),
(10, 'Lipstick', 'All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh ', 'https://wwd.com/wp-content/uploads/2022/02/new-beauty-products-february-2022-9.jpg', 3, 21.99, NULL),
(11, 'Vernis', 'Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. An organic, cream eye color, B Smudged eliminates the inevitable uneven line from traditional eyeli', 'https://media.glamour.com/photos/5cc9bd1080911dec300bc131/master/pass/0501_nomakeup_river.jpg', 4, 31.99, NULL),
(12, 'penny lane organics', 'For fuller healthier lips! Long lasting colour! This colour is a good choice for any skin tone. It can be made lighter by wiping some off after application.Please note that our Vitamin E is extracted from non-GMO soy bean oil and therefore is gluten-free.', 'https://www.gracehairbeauty.com/wp-content/uploads/2018/05/edsfaves-041017-lede.jpg', 1, 29.95, NULL),
(13, 'Product', 'a good product', 'https://wwd.com/wp-content/uploads/2022/02/new-beauty-products-february-2022-9.jpg', 6, 19.95, 25),
(15, 'product2', 'a good product', 'https://www.gracehairbeauty.com/wp-content/uploads/2018/05/edsfaves-041017-lede.jpg', 2, 59.95, 30),
(16, 'product3', 'a simple product', 'https://media.glamour.com/photos/5cc9bd1080911dec300bc131/master/pass/0501_nomakeup_river.jpg', 6, 29.95, 50),
(17, 'product4', 'a good product', 'https://www.gracehairbeauty.com/wp-content/uploads/2018/05/edsfaves-041017-lede.jpg', 5, 29.95, 25);

-- --------------------------------------------------------

--
-- Table structure for table `product_items`
--

DROP TABLE IF EXISTS `product_items`;
CREATE TABLE IF NOT EXISTS `product_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_variations`
--

DROP TABLE IF EXISTS `product_variations`;
CREATE TABLE IF NOT EXISTS `product_variations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `variationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_variations_variationId_productId_unique` (`productId`,`variationId`),
  KEY `variationId` (`variationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email_address` (`email_address`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `email_address_2` (`email_address`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `email_address_3` (`email_address`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `email_address_4` (`email_address`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `email_address_5` (`email_address`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `email_address_6` (`email_address`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `email_address_7` (`email_address`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `email_address_8` (`email_address`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `email_address_9` (`email_address`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `email_address_10` (`email_address`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `email_address_11` (`email_address`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `email_address_12` (`email_address`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `email_address_13` (`email_address`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `email_address_14` (`email_address`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `email_address_15` (`email_address`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `email_address_16` (`email_address`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `email_address_17` (`email_address`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `email_address_18` (`email_address`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `email_address_19` (`email_address`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `email_address_20` (`email_address`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `email_address_21` (`email_address`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `email_address_22` (`email_address`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `email_address_23` (`email_address`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `email_address_24` (`email_address`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `email_address_25` (`email_address`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `email_address_26` (`email_address`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `email_address_27` (`email_address`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `email_address_28` (`email_address`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `email_address_29` (`email_address`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `email_address_30` (`email_address`),
  UNIQUE KEY `username_31` (`username`),
  UNIQUE KEY `email_address_31` (`email_address`),
  UNIQUE KEY `username_32` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email_address`, `password`, `phone_number`, `isAdmin`) VALUES
(1, 'testuser', 'test@gmail.com', '$2b$12$icAa9DUybbgHs8RT6HQZQejgT75mCkGuo.fyJPOZnSppRzEJlWjeC', 334, 0),
(4, 'testuser2', 'test1@gmail.com', '$2b$12$YHUTIRp9t8rr4L0i29kAdOIOfh2lcKABA4bfJZ1zn5jvGabLumtcK', 334, 0);

-- --------------------------------------------------------

--
-- Table structure for table `variations`
--

DROP TABLE IF EXISTS `variations`;
CREATE TABLE IF NOT EXISTS `variations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `variations`
--

INSERT INTO `variations` (`id`, `name`) VALUES
(1, 'liter'),
(2, 'color');

-- --------------------------------------------------------

--
-- Table structure for table `variation_options`
--

DROP TABLE IF EXISTS `variation_options`;
CREATE TABLE IF NOT EXISTS `variation_options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `variationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `variationId` (`variationId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `variation_options`
--

INSERT INTO `variation_options` (`id`, `value`, `variationId`) VALUES
(1, 'blue', 2),
(2, '100', 1),
(3, '200', 1),
(4, '300', 1),
(5, '400', 1),
(6, '500', 1),
(7, '1000', 1),
(8, '1100', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_items`
--
ALTER TABLE `product_items`
  ADD CONSTRAINT `product_items_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_variations`
--
ALTER TABLE `product_variations`
  ADD CONSTRAINT `product_variations_ibfk_53` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_variations_ibfk_54` FOREIGN KEY (`variationId`) REFERENCES `variations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `variation_options`
--
ALTER TABLE `variation_options`
  ADD CONSTRAINT `variation_options_ibfk_1` FOREIGN KEY (`variationId`) REFERENCES `variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
