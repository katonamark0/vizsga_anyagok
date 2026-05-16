SELECT name 
FROM countries;

SELECT license_plate, year 
FROM cars;

SELECT name 
FROM brands
ORDER BY name ASC;

SELECT DISTINCT name 
FROM categories;

SELECT license_plate, price
FROM cars
ORDER BY price DESC
LIMIT 5;

SELECT license_plate, year
FROM cars
WHERE year >= 2020;

SELECT license_plate, price
FROM cars
WHERE price < 5000000;

SELECT name
FROM brands
WHERE country_id = 2;

SELECT license_plate, mileage
FROM cars
WHERE mileage > 50000;

SELECT name
FROM models
WHERE production_end IS NULL;

SELECT license_plate, year, price
FROM cars
WHERE year BETWEEN 2019 AND 2021
AND price > 6000000;
  
SELECT license_plate
FROM cars
WHERE color_id = 1
OR color_id = 3;

SELECT name, founded_year
FROM brands
WHERE founded_year < 1900;

SELECT license_plate
FROM cars
WHERE license_plate LIKE 'A%';

SELECT license_plate, engine_capacity
FROM cars
WHERE engine_capacity BETWEEN 1500 AND 2000;

SELECT COUNT(*) AS autok_szama
FROM cars;

SELECT MAX(price) AS legdragabb_ar
FROM cars;

SELECT AVG(price) AS atlag_ar
FROM cars;

SELECT MIN(mileage) AS legkevesebb_km
FROM cars;

SELECT SUM(price) AS osszes_ar
FROM cars;

SELECT model_id, COUNT(*) AS db
FROM cars
GROUP BY model_id;

SELECT color_id, AVG(price) AS atlag_ar
FROM cars
GROUP BY color_id;

SELECT year, COUNT(*) AS db
FROM cars
GROUP BY year
ORDER BY year ASC;

SELECT c.license_plate, m.name AS tipus_nev
FROM cars c
INNER JOIN models m ON c.model_id = m.id;

SELECT c.license_plate, b.name AS marka, m.name AS tipus
FROM cars c
INNER JOIN models m ON c.model_id = m.id
INNER JOIN brands b ON m.brand_id = b.id;

















