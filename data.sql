-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220723.cd90930d12
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 04:53 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` varchar(200) NOT NULL,
  `name` varchar(120) NOT NULL,
  `role` varchar(20) NOT NULL,
  `code` int(20) NOT NULL,
  `score` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `name`, `role`, `code`, `score`) VALUES
('6MSKJW1xG1Qx2VSudjXI', 'Irfan5', 'Guru', 0, 0),
('9qGJ30eLDDqc5J5UJ93K', 'Irfan3', 'Guru', 0, 0),
('En-WLc1_6ttcG4YjWMs8', 'Irfan', 'Guru', 0, 0),
('gigTEpQCTj-DxNzPhlsz', 'Irfan8', 'Guru', 0, 0),
('HcV8-hYfp3mF3iPJqRT-', 'Irfan4', 'Guru', 0, 0),
('i-6HC81b2qyTsFS49mGV', 'Irfan8', 'Guru', 0, 0),
('KzCTZC01vzV1wraIuqTB', 'Irfan8', 'Guru', 0, 0),
('lyPjFBN9978EM1DizY5Z', 'Irfan7', 'Guru', 0, 0),
('OL9JBqpu9drRF-85CLuT', 'Irfan6', 'Guru', 0, 0),
('Qj3jAZ_W3xmc5LqWXtkT', 'Irfan8', 'Guru', 0, 0),
('rY-Jk_LrYAPCU6GgKNbU', 'Irfan8', 'Guru', 0, 0),
('yF5ZKv7sgFS-FmQkRY2H', 'Irfan2', 'Guru', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
