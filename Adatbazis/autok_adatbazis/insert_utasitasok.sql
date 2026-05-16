INSERT INTO countries (name) VALUES
('Japán'),
('Németország'),
('USA'),
('Dél-Korea'),
('Franciaország'),
('Olaszország'),
('Egyesült Királyság'),
('Svédország'),
('Csehország'),
('Spanyolország'),
('Kína'),
('India'),
('Magyarország');

INSERT INTO categories (name) VALUES
('sedan'),
('SUV'),
('hatchback'),
('kombi'),
('pickup'),
('coupe'),
('kabrió'),
('minivan'),
('crossover'),
('sportautó');

INSERT INTO colors (name) VALUES
('fehér'),
('fekete'),
('ezüst'),
('szürke'),
('piros'),
('kék'),
('zöld'),
('sárga'),
('narancs'),
('barna'),
('bordó'),
('lila'),
('arany');

INSERT INTO fuel_types (name) VALUES
('benzin'),
('dízel'),
('elektromos'),
('hibrid'),
('plugin hibrid'),
('gáz'),
('etanol'),
('biodízel');

INSERT INTO brands (name, country_id, founded_year) VALUES
('Toyota', 1, 1937),
('BMW', 2, 1916),
('Ford', 3, 1903),
('Hyundai', 4, 1967),
('Renault', 5, 1899),
('Fiat', 6, 1899),
('Volkswagen', 2, 1937),
('Mercedes-Benz', 2, 1926),
('Audi', 2, 1909),
('Honda', 1, 1948),
('Kia', 4, 1944),
('Peugeot', 5, 1810),
('Skoda', 9, 1895),
('Volvo', 8, 1927),
('Suzuki', 1, 1909);

INSERT INTO models (brand_id, name, category_id, production_start, production_end) VALUES
(1, 'Corolla', 1, 1966, NULL),
(1, 'RAV4', 2, 1994, NULL),
(2, 'X5', 2, 1999, NULL),
(2, '3 Series', 1, 1975, NULL),
(3, 'Focus', 3, 1998, 2018),
(3, 'F-150', 5, 1948, NULL),
(4, 'Tucson', 2, 2004, NULL),
(5, 'Clio', 3, 1990, NULL),
(6, '500', 3, 1957, NULL),
(7, 'Golf', 3, 1974, NULL),
(8, 'C-Class', 1, 1993, NULL),
(9, 'A4', 1, 1994, NULL),
(10, 'Civic', 3, 1972, NULL),
(13, 'Octavia', 4, 1996, NULL),
(14, 'XC60', 2, 2008, NULL);

INSERT INTO cars 
(model_id, license_plate, color_id, year, mileage, price, fuel_type_id, engine_capacity, horsepower, purchase_date, mot_expiry)
VALUES
(1, 'ABC-123', 1, 2018, 85000, 4500000, 1, 1598, 132, '2019-05-10', '2027-05-10'),
(2, 'XYZ-789', 3, 2020, 60000, 8500000, 4, 2487, 218, '2021-03-15', '2026-03-15'),
(3, 'DEF-456', 2, 2017, 120000, 9500000, 2, 2993, 265, '2018-07-20', '2026-07-20'),
(4, 'GHI-321', 4, 2019, 90000, 7800000, 1, 1998, 184, '2020-09-12', '2026-09-12'),
(5, 'JKL-654', 5, 2016, 140000, 3500000, 2, 1499, 120, '2017-04-18', '2026-04-18'),
(6, 'MNO-987', 2, 2021, 40000, 12000000, 1, 3496, 400, '2022-06-01', '2026-06-01'),
(7, 'PQR-852', 6, 2018, 110000, 6200000, 2, 1598, 136, '2019-11-11', '2026-11-11'),
(8, 'STU-159', 1, 2015, 160000, 2800000, 1, 1198, 90, '2016-02-02', '2026-02-02'),
(9, 'VWX-753', 9, 2022, 20000, 5200000, 1, 999, 70, '2023-01-15', '2027-01-15'),
(10, 'YZA-258', 3, 2019, 95000, 4800000, 2, 1598, 115, '2020-08-08', '2026-08-08'),
(11, 'BCD-369', 2, 2020, 70000, 8900000, 5, 1991, 320, '2021-05-05', '2027-05-05'),
(12, 'EFG-147', 4, 2018, 105000, 6500000, 2, 1968, 150, '2019-03-03', '2026-03-03'),
(13, 'HIJ-258', 5, 2021, 30000, 7200000, 4, 1993, 184, '2022-04-04', '2026-04-04'),
(14, 'KLM-741', 1, 2017, 130000, 4300000, 2, 1598, 110, '2018-10-10', '2026-10-10'),
(15, 'NOP-852', 6, 2023, 15000, 15000000, 3, 0, 408, '2024-01-20', '2028-01-20');






