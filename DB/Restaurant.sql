-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: NewRestaurantDB
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Feedbacks`
--

DROP TABLE IF EXISTS `Feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Feedbacks` (
  `feedbackId` int NOT NULL AUTO_INCREMENT,
  `restaurantId` int NOT NULL,
  `Comment` varchar(100) NOT NULL,
  PRIMARY KEY (`feedbackId`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Feedbacks`
--

LOCK TABLES `Feedbacks` WRITE;
/*!40000 ALTER TABLE `Feedbacks` DISABLE KEYS */;
INSERT INTO `Feedbacks` VALUES (4,1,'This is post'),(5,1,'This is post'),(6,1,'This is post'),(7,1,'This is post'),(8,1,'This is post'),(9,1,'This is post'),(10,1,'This is post'),(11,1,'This is post'),(12,1,'This is post'),(13,1,'This is post'),(14,1,'This is post'),(15,1,'This is post'),(16,1,'This is post'),(17,1,'This is post'),(18,1,'This is post'),(19,1,'This is post'),(20,1,'This is post'),(21,1,'This is post'),(22,1,'This is post'),(23,1,'This is post'),(24,1,'This is post'),(25,1,'This is post'),(26,1,'This is post'),(27,1,'This is post'),(28,1,'This not post'),(29,1,'This not posdasdasdasdasdas'),(30,2,'Hi'),(31,2,'Hi'),(32,2,'dsds'),(33,2,'dsds'),(34,2,'dsds'),(35,2,'dsds'),(36,2,'dsds'),(37,2,'dsds'),(38,2,'dsds'),(39,4,''),(40,4,'dasdas');
/*!40000 ALTER TABLE `Feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurants`
--

DROP TABLE IF EXISTS `Restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `rating` float NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`name`,`country`,`city`,`image`,`latitude`,`longitude`,`rating`,`address`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurants`
--

LOCK TABLES `Restaurants` WRITE;
/*!40000 ALTER TABLE `Restaurants` DISABLE KEYS */;
INSERT INTO `Restaurants` VALUES (1,'Italian','Italy','Rome','street 12',0.1,12.4964,41.9028,'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg'),(2,'German','Germany','Berlin','berlin',5,13.405,52.52,'https://www.sortiraparis.com/images/80/91874/582826-photos-le-cafe-de-l-homme.jpg'),(3,'French','France','Paris','french street',4,2.34901,48.8647,'https://media-cdn.tripadvisor.com/media/photo-s/1d/14/19/ee/terrace-view.jpg'),(4,'Armenian Kitchen','Armenia','Yerevan','Komitas',3,44.5035,40.1772,'https://media-cdn.tripadvisor.com/media/photo-s/18/0c/6f/52/open-air.jpg'),(5,'Chineese','China','Honk Kong','some street',5,114.177,22.3027,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgfo7iSMUY0dQd6wEAtm7WlFCsBgxnAHUPQ&usqp=CAU'),(6,'Tokyo','Japan','Tokyo','Tokyo street',2,139.839,35.6528,'https://d3ulc7s3nchmqx.cloudfront.net/MLs_CyizGi-VqLRXAQJ4gbT8pQYUL2ujNuICasKgwvs_720.jpg');
/*!40000 ALTER TABLE `Restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-28 12:21:03
