CREATE TABLE `felhasznalok` (
  id int(11) NOT NULL,
  VezetekNev varchar(50) NOT NULL,
  KeresztNev varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL
);

CREATE TABLE felhasznalo_kiadas_kategoriak(
    felhasznalo_id int NOT NULL,
    kategoria_id int NOT NULL
);

CREATE TABLE kiadas_kategoriak(
    kategoria_id int NOT NULL,
    kiadas_kategoria varchar(50) CHARSET utf8 COLLATE utf8_hungarian_ci NOT NULL,
    CONSTRAINT pk_kiadas_kategoria PRIMARY KEY (kategoria_id)
);

CREATE TABLE kiadasok(
    kiadas_id int NOT NULL,
    felhasznalo_id int NOT NULL,
    kiadas_HUF int NOT NULL,
    kiadas_datum date NOT NULL,
    kategoria_id int NOT NULL,
    kiadas_komment varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
    CONSTRAINT pk_kiadasok PRIMARY KEY(kiadas_id)
);

CREATE TABLE jovedelem(
    jovedelem_id int NOT NULL,
    felhasznalo_id int NOT NULL,
    bevetel_mennyiseg int NOT NULL,
    bevetel_datum date NOT NULL,
    kategoria_id int NOT NULL,
    CONSTRAINT pk_jovedelem PRIMARY KEY(jovedelem_id)
);




INSERT INTO kiadas_kategoriak VALUES
(1,"Élelmiszer"),
(2,"Ruha"),
(3,"Elektronika"),
(4,"Szórakozás"),
(5,"Utazás"),
(6,"Előfizetések"),
(7,"Egyéb");


ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `kiadasok`
ADD KEY `felhasznalo_id`(`felhasznalo_id`),
ADD KEY `kategoria_id`(`kategoria_id`),
ADD CONSTRAINT `fk_kiadasok1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`),
ADD CONSTRAINT `fk_kiadasok3` FOREIGN KEY (`kategoria_id`) REFERENCES `kiadas_kategoriak` (`kategoria_id`);

ALTER TABLE `jovedelem`
ADD KEY `kategoria_id` (`kategoria_id`),
ADD KEY `felhasznalo_id`(`felhasznalo_id`),
ADD CONSTRAINT `fk_jovedelem_2` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`);


ALTER TABLE `felhasznalo_kiadas_kategoriak`
ADD PRIMARY KEY (`felhasznalo_id`,`kategoria_id`),
ADD KEY `kategoria_id` (`kategoria_id`);
