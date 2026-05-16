-- Gyakorló feladatok - SELECT utasítások
-- Speed Measurements Database - Query Exercises
-- speed_measurements adatbázishoz

-- ========================================
-- EGYSZERŰ LEKÉRDEZÉSEK (FROM)
-- ========================================

-- 1. Listázd ki az összes tulajdonost!
SELECT * FROM owners;

-- 2. Listázd ki az összes járművet!
SELECT * FROM vehicles;

-- 3. Listázd ki az összes mérési helyszínt!
SELECT * FROM locations;

-- 4. Listázd ki az összes mérőeszközt!
SELECT * FROM measuring_devices;

-- 5. Listázd ki az összes mérést!
SELECT * FROM measurements;


-- ========================================
-- ALIAS HASZNÁLATA
-- ========================================

-- 6. Listázd ki a tulajdonosok nevét és email címét magyar oszlopnevekkel!
SELECT name AS név, email AS Email FROM owners;
SELECT name név, email Email FROM owners;

-- 7. Listázd ki a járművek rendszámát és márkáját magyar oszlopnevekkel!
SELECT license_plate AS rendszám, brand AS márka FROM vehicles;
SELECT license_plate AS 'Az autó rendszáma', brand AS 'Autó márka' FROM vehicles;

-- 8. Listázd ki a mérések sebességét "Mért sebesség" néven!
SELECT measured_speed AS 'Mért sebesség' FROM measurements;


-- ========================================
-- WHERE FELTÉTELEK
-- ========================================

-- 9. Melyik helyszínek sebességkorlátja 50 km/h?
SELECT * FROM locations WHERE speed_limit = 50;

-- 10. Listázd ki azokat a járműveket, amelyek 2021-ben vagy később készültek!
SELECT * FROM vehicles WHERE year_of_manufacture >= 2021;

-- 11. Melyik mérések esetén haladta meg a mért sebesség a 80 km/h-t?


-- 12. Listázd ki a budapesti helyszíneket!
SELECT * FROM locations WHERE city = 'Budapest';

-- 13. Melyik tulajdonosok születtek 1995 előtt?
SELECT * FROM owners WHERE birth_date < '1995-01-01';

-- 14. Listázd ki a fekete színű járműveket!
SELECT * FROM vehicles WHERE color = 'fekete';

-- 15. Melyik bírságok vannak még kifizetetlenül?
SELECT * FROM fines WHERE paid = FALSE;
SELECT * FROM fines WHERE paid = 0;

-- 16. Listázd ki azokat a méréseket, amelyek 2024 februárjában történtek!
SELECT * FROM measurements WHERE measurement_date >= '2024-02-01' 
AND measurement_date <= '2024-02-29';
SELECT * FROM measurements WHERE measurement_date BETWEEN '2024-02-01' 
AND '2024-02-29';

-- 17. Melyik mérőeszközök típusa "radar"?
SELECT * FROM measuring_devices WHERE device_type = 'radar';

-- 18. Listázd ki azokat a helyszíneket, ahol a sebességkorlát 60 
-- km/h vagy annál nagyobb!
SELECT * FROM locations WHERE speed_limit >= 60;


-- ========================================
-- WHERE ÉS TÖBB FELTÉTEL (AND, OR, NOT)
-- ========================================

-- 19. Listázd ki a budapesti helyszíneket, ahol a sebességkorlát 50 km/h!
SELECT * FROM locations WHERE city = 'Budapest' AND speed_limit = 50;

-- 20. Melyik járművek BMW vagy Audi márkájúak?
SELECT * FROM vehicles WHERE brand = 'BMW' OR brand = 'Audi';
SELECT * FROM vehicles WHERE brand IN('BMW', 'Audi', 'Ford');

-- 21. Listázd ki azokat a méréseket, ahol a sebesség 70 és 90 km/h között volt!
SELECT * FROM measurements WHERE measured_speed BETWEEN 70 AND 90;
SELECT * FROM measurements WHERE measured_speed >= 70 AND measured_speed <= 90;

-- 22. Melyik bírságok összege nagyobb mint 40000 Ft ÉS 
-- még nincsenek kifizetve?
SELECT * FROM fines WHERE amount > 40000 AND paid = FALSE;

-- 23. Listázd ki a fehér vagy fekete járműveket!
SELECT * FROM vehicles WHERE color = 'fehér' OR color = 'fekete';


-- ========================================
-- ORDER BY (RENDEZÉS)
-- ========================================

-- 24. Listázd ki a tulajdonosokat név szerint ABC sorrendben!
SELECT * FROM owners ORDER BY name;
SELECT * FROM owners ORDER BY name ASC;

-- 25. Listázd ki a járműveket gyártási év szerint csökkenő sorrendben!
SELECT * FROM vehicles ORDER BY year_of_manufacture DESC;

-- 26. Melyik mérések történtek, rendezve a mért sebesség szerint 
-- csökkenő sorrendben?
SELECT * FROM measurements ORDER BY measured_speed DESC;

-- 27. Listázd ki a bírságokat összeg szerint növekvő sorrendben!
SELECT * FROM fines ORDER BY amount;

-- 28. Rendezd a helyszíneket város, majd utca szerint ABC sorrendben!
SELECT * FROM locations ORDER BY city ASC, street ASC;

-- 29. Listázd ki a méréseket dátum szerint csökkenő, majd időpont szerint növekvő sorrendben!
SELECT * FROM measurements ORDER BY measurement_date DESC, measurement_time ASC;

-- 30. Listázd ki név szerint az utolsó 5 tulajdonost!
SELECT * FROM owners ORDER BY name LIMIT 5;

-- 31. Listázd ki a 3 legmagasabb mért sebességű mérést!
SELECT * FROM measurements ORDER BY measured_speed DESC LIMIT 3;

-- 32. Kérdezd le a 10 legfiatalabb autót!
SELECT * FROM vehicles ORDER BY year_of_manufacture DESC LIMIT 10;

-- 32. Kérdezd le a 10 legöregebb autót!
SELECT * FROM vehicles ORDER BY year_of_manufacture LIMIT 10;

-- 