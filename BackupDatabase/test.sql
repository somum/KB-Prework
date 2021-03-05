-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: demospring
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `cart_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart$order_item`
--

DROP TABLE IF EXISTS `cart$order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart$order_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cart_id` bigint(20) DEFAULT NULL,
  `pid` bigint(20) DEFAULT NULL,
  `qty` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnk5yb9ckjmjpeehbfh274o145` (`cart_id`),
  CONSTRAINT `FKnk5yb9ckjmjpeehbfh274o145` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart$order_item`
--

LOCK TABLES `cart$order_item` WRITE;
/*!40000 ALTER TABLE `cart$order_item` DISABLE KEYS */;
INSERT INTO `cart$order_item` VALUES (1,1,1,3),(2,1,5,3);
/*!40000 ALTER TABLE `cart$order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (111,'This is basic','Java course 101'),(112,'This is Imp','Spring course'),(113,'This is very Important for Deep learning','Pyhton course');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (3);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item` (
  `pid` bigint(20) NOT NULL,
  `qty` bigint(20) DEFAULT NULL,
  `cart_id` bigint(20) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `FKkgu3wv2n7r2shg2wbvc4nsu7l` (`cart_id`),
  CONSTRAINT `FKkgu3wv2n7r2shg2wbvc4nsu7l` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_link` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `warranty_period` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'The fact that small metal ions (copper) lurking on the surface of the hair damage the cuticle due to overreaction with the coloring agent.','assets/ProductImagesPNG/1.png','1111','Concealer','Illumina Color ORC-12','Red','5','1 Year'),(2,'Hair that is moisturized from the heart of the hair and remains soft from the root to the tip even after it has dried. We will lead you to such a straightforward material that you can style as you wish. For normal to thick hair.','assets/ProductImagesPNG/2.png','2222','Concealer','Eljuda Emulsion +','Gray','3','6 Months'),(3,'Improve hair quality with home care. While repairing hair with 4 types of special keratin, it gives elasticity and eliminates swelling. A reactive shampoo recommended for customers who are worried about vellus hair.','assets/ProductImagesPNG/3.png','3333','Oil','link Keratin shampoo 500ml','White','5','1 Year'),(4,'Powerfully rises from the root to express delicate movement of hair tips. With strong setting power and overwhelming holding power, the hair is raised from the root to create a strong hair bundle and finish it as a mat.','assets/ProductImagesPNG/4.png','4444','Oil','Geo wax solid hold','Gold','4','8 Months'),(5,'Gives flexibility to hair that is hard and thick and easily stiff, and finishes it into a cohesive hair.','assets/ProductImagesPNG/5.png','5555','Concealer','Patagonic Oil Iseberg Moist 100','White','5','1 Year'),(6,'Treatment that does not wash away.','assets/ProductImagesPNG/6.png','6666','Concealer','Mythic oil','Gold','4','3 Months'),(7,'A transparent multi-layer color design that allows you to challenge various designs.Because it is dyed with a layer of various transparent dyes, it has a soft and clear finish regardless of brightness.','assets/ProductImagesPNG/7.png','1345','Concealer','Igora Royal Pixam F Fiberplex Color N14','Blue','4','6 Months'),(8,'For hair that is hard and difficult to move. Soft fit type. It enhances the softening power and prepares it to a more subdued state.','assets/ProductImagesPNG/8.png','1345','Oil','Eljuda MO','Blue','4','6 Months'),(9,'A two-in-one, overnight moisturizer and pigmentation treatment cream derived with natural extracts of Marigold, Sage, Vitamin E and more.','assets/ProductImagesPNG/9.png','1345','Cream','Auravedic Vedic Repair Night Cream','Blue','4','6 Months'),(10,'Boroplus Doodh Kesar Body Lotion’s unique formulation is enriched with the natural goodness of nourishing almonds and moisturizing milk cream which penetrates deep into the skin, maintains moisture balance, making skin soft and healthy.','assets/ProductImagesPNG/10.png','1345','Concealer','BOROPLUS Doodh Kesar Body Lotion','Blue','4','6 Months'),(11,'BoroPlus Antiseptic Cream is a multi-benefit cream that can be used as antiseptic cream, winter cream, night cream, moisturizer, heel repair cream, lip care solution.','assets/ProductImagesPNG/11.png','1345','Cream','Boroplus Antiseptic Cream','Blue','4','6 Months'),(12,'Hair that is moisturized from the heart of the hair and remains soft from the root to the tip even after it has dried. We will lead you to such a straightforward material that you can style as you wish. For fine hair.','assets/ProductImagesPNG/12.png','1345','Concealer','Eljuda Emulsion','Blue','4','6 Months'),(13,'Garnier BB Cream for women is an all-in-one daily moisturizer for face. It is enriched with Vitamin C, Almond Extract and Brightening minerals and helps provide the benefits of multiple skin care products in just one cream.','assets/ProductImagesPNG/13.png','880','Cream','Garnier Skin Naturals BB Cream','Brown','4','8 Months'),(14,'For women who are on the go and could use the extra minutes before stepping out, Lakme CC cream is here to the rescue. This cream acts as your everyday mini skin stylist and lets you get that perfect look of makeup + skincare for any occasion.','assets/ProductImagesPNG/14.png','1345','Cream','Lakme 9 to 5 Complexion Care Face Cream','Red','4','5 Months'),(15,'A lightweight Formula with silicones and vitamins to soften, Soothe and mattify your skin. Makeup Glides on and Stays Fresh For Hours. It Enhances the adherence to Make-Ups while used under Foundation Or Compact Powders.','assets/ProductImagesPNG/15.png','750','Concealer','Blue Heaven Studio Perfection Primer','Black','4','6 Months'),(16,'In 16 unique shades and now in 4 tubes, MAYBELLINE FIT ME FOUNDATION - MATTE+PORELESS is made to fit diverse Indian skin tones. The Fit Me Foundation is for normal to oily skin and refines pores for a natural-looking matte finish.','assets/ProductImagesPNG/16.png','650','Concealer','Maybelline New York Fit Me Matte','Brown','5','2 Months'),(17,'Bought to you from the house of Lakme Classics, The Lakme Rose Powder is a classic must-have. Blush your cheeks with this Lakme Rose Powder which has a light rosy fragrance & sunscreen to protect your soft, peachy skin.','assets/ProductImagesPNG/17.png','650','Cream','Lakme Rose Face Cream','Brown','3','4 Months'),(18,'Lotus Herbals Divine Dew Herbal Sindoor has an intense color pay off and yet is free from mercury, lead or other harmful chemicals. Lotus Herbals understands that products which need to be used daily, need to be skin friendly.','assets/ProductImagesPNG/18.png','1345','Cream','Lotus Herbals Divine Dew Herbal Sindoor','Multi','4','6 Months'),(19,'A gentle fragrance-like scent that changes in three stages, from a gentle vanilla amber scent to a soft rose lavender scent and a fresh cassis apple citrus scent.','assets/ProductImagesPNG/19.png','1100','Oil','Eljuda Grace on Serum','Cyan','2','5 Months'),(20,'Forest Butter a color treatment that supplements the color while moisturizing the hair with avocado oil that can be obtained from the avocado fruit. In addition to the excellent coloring effect.','assets/ProductImagesPNG/20.png','1100','Oil','ANAP Color Treatment Candy Pink','Cyan','4','5 Months'),(21,'Boroplus Total Results Moisturising Lotion’s unique formulation is enriched with the natural goodness of nourishing almonds and moisturizing milk cream which penetrates deep into the skin, maintains moisture balance, making skin soft and healthy.','assets/ProductImagesPNG/21.png','1440','Cream','Boroplus Doodh Kesar Body Lotion','Purple','3','6 Months'),(22,'To the men & women exposed to environmental stressors and lifestyle aggressions, Boro Plus aloe vera gel is the purest, simplest and most natural form of skin and hair care because it is 100% organic.','assets/ProductImagesPNG/22.png','680','Oil','BoroPlus Aloe Gel','Blue','4','6 Months'),(23,'A color treatment that supplements the color while moisturizing the hair with avocado oil. The color lasts for 2-3 weeks. (Depends on hair condition and leaving time)','assets/ProductImagesPNG/23.png','550','Oil','ANAP Color Treatment Bubble Gum Purple','Green','3','4 Months'),(24,'Blending our love of traditions with our powers of innovation, we bring you the time-honored Sindoor with a modern twist. Our liquid Sindoor gives you a rich, long-lasting color that doesn’t smudge, fade, or crease.','assets/ProductImagesPNG/24.png','1020','Oil','Colorbar Sindoor','White','1','4 Months'),(25,'Sport a dazzling glow, wherever you go, with the Lakmé Perfecting Liquid Foundation. An integral part of your face makeup, this liquid based foundation spreads evenly to cover spots, blemishes, dark circles and patchy skin tone.','assets/ProductImagesPNG/25.png','870','Concealer','Lakme Perfecting Liquid Foundation','Brown','5','6 Months'),(26,'Beautifulbeginswithyou it protects and perfects at the same time. A compact powder formulated with SPF 200 pa+++ to give round-the-clock sun protection against harmful UVA & UVB sun rays.','assets/ProductImagesPNG/26.png','950','Cream','Faces Canada Weightless Stay Matte Compact Vitamin E','Brown','4','6 Months'),(27,'A healthy yellow like a sunflower. It can be mixed with other color treatments to create a wide range of colors. Fresh floral scent (a blend of apple, plum, peach and lemon).','assets/ProductImagesPNG/27.png','850','Concealer','ANAP Color Treatment Bright Yellow','Multi','2','8 Months'),(28,'Lakme is India’s No.1 color cosmetics brand offering a wide range of high-end, world-class color cosmetics and skincare products. Lakme has a vast product range specially crafted by experts for the Indian skin.','assets/ProductImagesPNG/28.png','999','Makeup','Lakme Absolute Blur Perfect Makeup Primer','Black','5','6 Months'),(29,'Swiss Beauty professional and fine line liquid concealer coveted by professional artists for its luxurious texture and luminous finish. Concealer evens skin with lightweight medium to high buildable coverage.','assets/ProductImagesPNG/29.png','3200','Concealer','Swiss Beauty Professional Liquid Concealer','Black','4','8 Months'),(30,'Maybelline New York’s Colossal Mascara has a volume-pumping formula infused with collagen that guarantees a no-clump, volumized look in just one coat.','assets/ProductImagesPNG/30.png','3600','Concealer','Maybelline New York Volume Express Colossal Masacara','Yellow','2','6 Months'),(31,'Create a radiant glow with this illuminating blusher powder that highlights the skin with a sheer wash of shimmering colour The soft and shimmering colour of Swiss Beauty baked blusher and highlighter creates a natural healthy glow.','assets/ProductImagesPNG/31.png','250','Concealer','Swiss Beauty Baked Blusher & Highlighter','Pink','1','4 Months'),(32,'Suitable for all skin types.Professional Makeup Setting Spray is lightweight and comfortable while providing long lasting polished matte finishing touch.TOP the SHINE & MATTE FINISH ALL DAY! beauty just NEW OIL CONTROL FIXING SPRAY!','assets/ProductImagesPNG/32.png','515','Concealer','Rsentera Most Beautiful Trending Concealer combo with Primer','Blue','5','8 Months'),(33,'Dissolves all traces of makeup & moisturizes for soft radiant skin. Dermatologist tested. Infuses your skin with vital moisture for soft and smooth skin.','assets/ProductImagesPNG/33.png','815','Cream','Winter Cold Cream','White','4','8 Months');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  KEY `FKft3mvhp6v57j0rkcgr3jvotv2` (`cart_id`),
  CONSTRAINT `FKft3mvhp6v57j0rkcgr3jvotv2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `user_img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'test@gmail.com','Md Saiful','Islam','$2a$10$4LR/nfs31c5j7.lcMBm5POTDDBRUbI3WhwLFbtmqts1DoPwvjfhZy',''),(15,'testV1@gmail.com','Md Saiful','Islam','$2a$10$4mrM3.LMP90AYH2gF9uaceKa71lRcJArykFyjjgLN0J7g0PNIyxXi','https://lh3.googleusercontent.com/ogw/ADGmqu_inltE5qE1R9a0sILa-rmcl8ZHrm-7JFiuTx6saQ=s83-c-mo'),(16,'saiful.somum@gmail.com','Md Saiful','Islam','$2a$10$ZvTl5uUBw9PJaHMT7Hh88OkT0wE5mMCEGU7jRenPQ5H3KKo4.H.7O','https://lh3.googleusercontent.com/ogw/ADGmqu_inltE5qE1R9a0sILa-rmcl8ZHrm-7JFiuTx6saQ=s83-c-mo');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 19:35:46
