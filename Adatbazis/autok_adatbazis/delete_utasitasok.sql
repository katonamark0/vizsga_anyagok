DELETE FROM cars
WHERE mileage > 100000;

DELETE FROM cars
WHERE license_plate = 'PQR-444';

DELETE FROM cars
WHERE price < 3000000;

DELETE FROM brands
WHERE founded_year < 1800;

DELETE FROM cars
WHERE year = 2017;

DELETE FROM colors
WHERE name = 'lila';

DELETE FROM cars
WHERE mot_expiry < '2024-12-31';

DELETE FROM models
WHERE production_end IS NOT NULL
AND production_end < 2000;

DELETE FROM cars
WHERE engine_capacity IS NULL;

DELETE FROM cars
WHERE fuel_type_id = 2
AND year <= 2018;
