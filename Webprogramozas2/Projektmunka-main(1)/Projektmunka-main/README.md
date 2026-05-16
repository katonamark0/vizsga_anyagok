# CSS Projektfeladat: Interaktív Kártya Galéria

## 📋 Feladat leírása

Készítsetek egy interaktív kártya galériát, ahol különböző témájú kártyákat (pl. állatok, autók, sportok, stb.) jelenítetek meg. A kártyáknak szép animációkkal és modern elrendezéssel kell rendelkezniük.

## 🎯 Követelmények

### 1. HTML struktúra
- Hozzatok létre egy `index.html` fájlt
- Használjatok szemantikus HTML elemeket (`<header>`, `<main>`, `<section>`, `<article>`, stb.)
- Minimum 6-9 kártya legyen a galériában
- Minden kártya tartalmazzon:
  - Egy képet 
  - Egy címet
  - Egy rövid leírást
  - Opcionálisan: egy gombot vagy linket

### 2. CSS követelmények

#### **Grid használata** ⭐
- A kártyák elrendezéséhez **CSS Grid**-et használjatok
- Reszponzív legyen: mobilon 1 oszlop, tableten 2 oszlop, desktopon 3 oszlop
- Használjatok `grid-template-columns` és `gap` tulajdonságokat

#### **Flexbox használata** ⭐
- A kártyák **belső elrendezéséhez** (kép, cím, leírás, gomb) **Flexbox**-ot használjatok
- A kártyák tartalma flexbox-szal legyen elrendezve (pl. függőlegesen: `flex-direction: column`)

#### **Transition animációk** ⭐
- Minden kártyán legyen **hover effekt** (amikor az egérrel ráhúzzatok)
- Használjatok **transition**-öket a következőkhöz:
  - Kártya átméretezése vagy emelkedése (pl. `transform: translateY()` vagy `scale()`)
  - Árnyék változása (`box-shadow`)
  - Szín változása (háttérszín, szövegszín)
- Minimum 2-3 különböző animációt használjatok

### 3. További követelmények
- A kártyák legyenek szépen formázva (lekerekített sarkok, árnyékok, stb.)
- Használjatok szép színpalettát
- A kód legyen rendezett és jól strukturált
- Opcionális: egy egyszerű header/navigáció az oldal tetején

## 📁 Fájl struktúra

```
projekt/
├── index.html
├── styles/
│   └── style.css
└── images/  (opcionális, ha saját képeket használtok)
    └── ...
```

## 💡 Tippek

1. **Grid beállítások:**
   ```css
   .gallery {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 20px;
   }
   ```

2. **Flexbox a kártyákon belül:**
   ```css
   .card {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
   }
   ```

3. **Transition példa:**
   ```css
   .card {
     transition: transform 0.3s ease, box-shadow 0.3s ease;
   }
   .card:hover {
     transform: translateY(-10px);
     box-shadow: 0 10px 20px rgba(0,0,0,0.2);
   }
   ```



