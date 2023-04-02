BEGIN TRANSACTION;

DROP TABLE IF EXISTS establishment, app_user;
DROP SEQUENCE IF EXISTS est_id;

CREATE TABLE establishment (
	est_id SERIAL NOT NULL,
	name VARCHAR(30) NOT NULL,
	street VARCHAR(30) NOT NULL,
	city VARCHAR(20) NOT NULL,
	zip VARCHAR(5),
	website VARCHAR(50) NOT NULL,
	outdoor_seating BOOLEAN,
	est_type VARCHAR(15),
	known_for VARCHAR(150),
	CONSTRAINT PK_establishment PRIMARY KEY (est_id)
);

CREATE TABLE app_user (
	user_id VARCHAR(36) NOT NULL,
	username VARCHAR(20) UNIQUE NOT NULL,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	date_of_birth DATE NOT NULL,
	PRIMARY KEY (user_id),
	CONSTRAINT UQ_username UNIQUE (username)
);

CREATE TABLE reviews (
	review_id VARCHAR(36) NOT NULL,
	est_id INT,
	username VARCHAR(20) NOT NULL,
	date VARCHAR(10) NOT NULL,
	star_rating VARCHAR(1) NOT NULL,
	review VARCHAR(150) NOT NULL,
	recommendations VARCHAR(100),
	PRIMARY KEY (review_id),
	CONSTRAINT FK_username FOREIGN KEY (username) REFERENCES app_user(username),
	CONSTRAINT FK_est_id FOREIGN KEY (est_id) REFERENCES establishment(est_id)
);

COMMIT;
ROLLBACK;

INSERT INTO establishment (name, street, city, zip, website, outdoor_seating, est_type, known_for)
VALUES ('Decades', '438 N Queen St', 'Lancaster', '17603', 'https://www.decadeslancaster.com', true, 'restaurant', 'craft cocktails, arcade games, and bowling');
INSERT INTO establishment (name, street, city, zip, website, outdoor_seating, est_type, known_for)
VALUES ('Horse Inn', '540 E Fulton St', 'Lancaster', '17602', 'https://horseinnlancaster.com', false, 'restaurant', 'tips & toast, historical venue, James Beard nominee');
INSERT INTO establishment (name, street, city, zip, website, outdoor_seating, est_type, known_for)
VALUES ('The Belvedere', '402 N Queen St', 'Lancaster', '17603', 'https://www.belvederelancaster.com', true, 'restaurant', 'live jazz, piano bar');
INSERT INTO establishment (name, street, city, zip, website, outdoor_seating, est_type, known_for)
VALUES ('Mad Chef Craft Brewing', '2023 Miller Rd', 'East Petersburg', '17520', 'https://www.madchefcraftbrewing.com', true, 'brewpub', 'craft beer, french fries');

SELECT * FROM establishment;