CREATE TABLE locationdatabase (
  `locationid` BIGINT,
  `accountid` BIGINT,
  `username` VARCHAR (255),
  `description` VARCHAR(255) NULL,
  `profileurl` VARCHAR(255),
  `latitude` DOUBLE,
  `longitude` DOUBLE,
  `opacity` INT NULL
  ) CHARACTER SET utf8 COLLATE utf8_general_ci;
