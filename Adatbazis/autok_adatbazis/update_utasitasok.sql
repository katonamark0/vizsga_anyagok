UPDATE cars
SET price = 5800000
WHERE license_plate = 'ABC-123';

UPDATE cars
SET mileage = mileage + 10000
WHERE year = 2020;

UPDATE brands
SET founded_year = 1936
WHERE name = 'Toyota';

UPDATE cars
SET mot_expiry = '2025-12-31'
WHERE year = 2017;

UPDATE cars
SET price = price - 500000
WHERE mileage > 100000;

UPDATE categories
SET name = 'limuzin'
WHERE id = 1;

UPDATE cars
SET engine_capacity = NULL
WHERE fuel_type_id = 3;

UPDATE brands
SET founded_year = founded_year + 1
WHERE founded_year < 1900;

UPDATE colors
SET name = 'gyöngyházfehér'
WHERE id = 1;

UPDATE models
SET production_end = NULL
WHERE name = 'Golf';

UPDATE cars
SET price = price * 0.8
WHERE price > 10000000;

UPDATE cars
SET power = 200
WHERE model_id = 5;

UPDATE cars
SET purchase_date = '2020-01-01'
WHERE purchase_date IS NULL;

UPDATE cars
SET power = power + 5
WHERE engine_capacity >= 2000;

UPDATE models
SET production_start = 1965
WHERE name = 'Corolla';

UPDATE cars
SET purchase_date = '2021-06-15'
WHERE color_id = 5;

UPDATE cars
SET mileage = mileage - 15000
WHERE year = 2022;

UPDATE countries
SET name = 'Nippon'
WHERE name = 'Japán';

UPDATE cars
SET price = price * 1.10
WHERE fuel_type_id = 4;

UPDATE brands
SET website = 'www.bmw.com'
WHERE name = 'BMW';
