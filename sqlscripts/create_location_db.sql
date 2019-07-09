CREATE TABLE locationdatabase (
  `locationid` BIGINT,
  `accountid` BIGINT NULL,
  `description` VARCHAR(255) NULL,
  `latitude` DOUBLE,
  `longitude` DOUBLE,
  `opacity` INT NULL,
  `archived` INT NULL,
  `updatedate` BIGINT NULL
  ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
