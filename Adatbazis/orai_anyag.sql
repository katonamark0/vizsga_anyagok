-- 2. feladat

SELECT muvesznev FROM eloadok
WHERE stilus != "pop"
ORDER BY muvesznev ASC;

-- 3. feladat

SELECT cim, kiadas_eve, kiadonev FROM albumok
WHERE kiadas_eve > 2010 AND ar > 5000
ORDER BY kiadas_eve ASC, ar DESC;

-- 4. feladat

SELECT muvesznev, igazi_nev, szuletesi_ev, stilus FROM eloadok
WHERE szuletesi_ev < 1980 AND stilus  IN ('rock', 'metal')
ORDER BY szuletesi_ev ASC LIMIT 5;

-- 5. feladat

SELECT muvesznev, COUNT(a.id) AS albumok_szama FROM eloadok
INNER JOIN albumok a ON a.eloadoid = eloadok.id
GROUP BY muvesznev
ORDER BY albumok_szama DESC LIMIT 5;

-- 6. feladat

SELECT  muvesznev, stilus, szuletesi_ev FROM eloadok
LEFT JOIN albumok  ON albumok.eloadoid = eloadok.id
WHERE albumok.id IS NULL
ORDER BY muvesznev;

-- 7. feladat

SELECT muvesznev, igazi_nev, szuletesi_ev FROM eloadok
WHERE stilus = (SELECT stilus FROM eloadok WHERE muvesznev = "Queen")
AND muvesznev != "Queen";

-- 8. feladat
SET SQL_SAFE_UPDATES = 0;

UPDATE albumok SET kiadonev = "Warner Music Group"
WHERE kiadonev = "Warner Bros. Records";

-- 9. feladat

DELETE FROM dalok
WHERE hossz_mp < 80;

-- 10. feladat

SELECT a.cim, kiadas_eve, sorszam, d.cim FROM albumok a
INNER JOIN dalok d ON d.albumid = a.id
INNER JOIN eloadok e ON e.id = a.eloadoid
WHERE muvesznev = "Daft Punk"
ORDER BY kiadas_eve, sorszam ASC;

-- 11. feladat

SELECT muvesznev, a.cim AS album_cim, kiadas_eve, COUNT(d.id) AS dalok_szama, AVG(d.hossz_mp) AS atlag_hossz_mp FROM eloadok e
INNER JOIN albumok a ON a.eloadoid = e.id
INNER JOIN dalok d ON d.albumid = a.eloadoid
GROUP BY muvesznev, album_cim, kiadas_eve
HAVING dalok_szama >= 5
ORDER BY dalok_szama DESC;
