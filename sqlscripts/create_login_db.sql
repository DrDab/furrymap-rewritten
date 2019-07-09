CREATE TABLE userdatabase (
  `id` BIGINT,
  `username` VARCHAR(255),
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `gender` TINYINT NULL,
  `language` VARCHAR(255) NULL,
  `countryflag` VARCHAR(255) NULL,
  `profilepicid` VARCHAR(255) NULL,
  `archived` TINYINT) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
