CREATE DATABASE adatok
DEFAULT CHARACTER SET utf8
Collate utf8_hungarian_ci;

CREATE TABLE register(
    nev varchar(100),
    email varchar(200),
    password varchar(50),
    CONSTRAINT pk_register PRIMARY KEY (id)
)

