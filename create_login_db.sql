CREATE TABLE userdatabase (
  `id` BIGINT,
  `username` VARCHAR(255),
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `gender` TINYINT NULL,
  `language` VARCHAR(255) NULL,
  `countryflag` VARCHAR(255) NULL,
  `profilepicid` VARCHAR(255) NULL) CHARACTER SET utf8 COLLATE utf8_general_ci;
