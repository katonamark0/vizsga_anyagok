using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace legyen_on_is_milliomos
{
    
    internal class Program
    {
        class Kerdes
        {
            public string Kerdesek;        // A kérdés
            public string[] Valaszok;   // A 4 lehetőség TÖMB
            public char Helyes;       // A helyes válasz betűje 
            public int Nyeremeny;          // A kérdéshez tartozó nyeremény

            public Kerdes(string kerdesek, string[] valaszok, char helyes, int nyeremeny)
            {
                Kerdesek = kerdesek;
                Valaszok = valaszok;
                Helyes = helyes;
                Nyeremeny = nyeremeny;

            }
        }
        static void Main(string[] args)
        {

            //Készítette: Katona Márk, Deli Bálint
            Console.WriteLine("Köszöntjük önöket a Legyen Ön Is Milliomos 67. évadjában!!");

            // A kérdések
            Kerdes[] kerdesek =
            {
                new Kerdes(

                    "1. Melyik állat a „Süsü, a sárkány” című mese főhőse? ",
                    new string[] {"Sárkány", "Farkas", "Medve", "Tengeri szerzetes" },
                    'A',
                    10000
                ),
                new Kerdes(

                    "2. Hány napból áll egy szökőév?",
                    new string[] {"364", "365", "366", "367"},
                    'C',
                    20000
                ),

                new Kerdes(

                    "3. Melyik városban található a magyar Országház?",
                    new string[] {"Debrecen", "Budapest", "Szeged", "Nem létezik olyan, hogy Országház" },
                    'B',
                    50000
                ),

                new Kerdes(

                    "4. Ki írta a „Bánk bán” című művet?",
                    new string[] {"Petőfi Sándor", "Katona József", "Arany János", "MC Isti (hol a füled?)" },
                    'B',
                    100000

                ),

                new Kerdes(

                    "5. Melyik bolygó a Naprendszer legnagyobbika?",
                    new string[] {"Föld", "Globgorob", "Jupiter", "Szaturnusz" },
                    'C',
                    250000
                ),

                new Kerdes(

                    "6. Mi a kémiai jele az aranynak?",
                    new string[] {"Ag", "Au", "Fe", "Cu"},
                    'B',
                    500000
                ),

                new Kerdes(

                    "7. Melyik évben kezdődött a magyarországi rendszerváltás leglátványosabb eseménye, a Nagy Imre-újratemetés?",
                    new string[] {"1989", "1988", "1990", "2000"},
                    'A',
                    750000
                ),

                new Kerdes(


                    "8. Ki játszotta A Sötét Lovag-trilógiában a Jokert? (Bűn nem tudni)",
                    new string[] {"Christian Bale", "Heath Ledger", "Tom Hardy", "Gary Oldman"},
                    'B',
                    1000000
                ),

                new Kerdes(

                    "9. Mióta nem droppolt Frank Ocean?",
                    new string[] {"1 éve", "2 éve", "4 éve", "6 éve" },
                    'D',
                    1500000
                ),

                new Kerdes(

                    "10. Melyik festőművésznek van „Amerikai gótika” című híres képe?",
                    new string[] {"Vincent Van Gogh", "Pablo Picasso", "Grant Wood", "Salvador Dalí"},
                    'C',
                    2000000

                ),

                new Kerdes(

                    "11. Mi található Abraham Maslow motivációs piramisának a tetején?",
                    new string[] {"Biztonságérzet", "Önbecsülés", "Önmegvalosítás", "Társas kapcsolatok" },
                    'C',
                    5000000
                ),

                new Kerdes(

                    "12. Melyik magyar költő műve a „Tragédia” alcímű dráma?",
                    new string[] {"Vörösmarty Mihály", "Madách Imre",  "Ady Endre" },
                    'B',
                    10000000

                ),

                new Kerdes(
                    "13. Melyik ország fővárosa Ottawa?",
                    new string[] {"Ausztrália", "Kanada", "Új-Zéland", "Magyarország"},
                    'B',
                    15000000
                ),

                new Kerdes(
                    "14. Ki volt az első nő, aki repülőgépen átkelt az Atlanti-óceánon egyedül?",
                    new string[] {"Bessies Coleman", "Harriet Quimby", "Amelia Earhart", "Nem volt olyan"},
                    'C',
                    25000000
                ),

                new Kerdes(
                    "15. Melyik elemnek a rendszáma 67 a periódusos rendszerben?",
                    new string[] {"Ezüst", "Holmium", "Platina", "Higany"},
                    'B',
                    50000000
                )

            };

            int JelenlegiNyeremeny = 0;
            int biztonsaginyeremeny = 0;

            Console.WriteLine();

            for (int i = 0; i < kerdesek.Length; i++)
            {
                Console.WriteLine(kerdesek[i].Kerdesek);



                foreach (string valasz in kerdesek[i].Valaszok)
                {
                    Console.WriteLine($"\t{valasz}");
                }

                Console.WriteLine();

                Console.WriteLine("Add meg a választ (A/B/C/D) vagy M = megállás:");
                string input = Console.ReadLine().ToUpper();

                // Megállás
                if (input == "M")
                {
                    Console.WriteLine("\nMegálltál!");
                    Console.WriteLine($"Hazaviszed: {JelenlegiNyeremeny} Ft");
                    break;
                }

                // Ellenőrzés
                if (input.Length == 1 && input[0] == kerdesek[i].Helyes)
                {
                    JelenlegiNyeremeny = kerdesek[i].Nyeremeny;
                    Console.WriteLine("Helyes válasz!");
                    Console.WriteLine($"Nyereményed: {JelenlegiNyeremeny} Ft\n");

                    // Határnyeremény (5. és 10. kérdés)
                    if (i == 4 || i == 9)
                    {
                        biztonsaginyeremeny = JelenlegiNyeremeny;
                    }
                }
                else
                {
                    Console.WriteLine("\nRossz válasz!(gatya)");
                    Console.WriteLine($"Hazaviszed: {biztonsaginyeremeny} Ft");
                    break;
                }

                // Utolsó kérdés
                if (i == kerdesek.Length)
                {
                    Console.WriteLine("Gratulálok! Megnyerted a játékot!");
                    Console.WriteLine($"Főnyeremény: {JelenlegiNyeremeny} Ft");
                }
            }

            Console.WriteLine("\nJáték vége. A bizonyíték 10 másodperc múlva törlődik.");



            System.Threading.Thread.Sleep(10000);
            Console.Clear();

            Console.WriteLine("Megmondtam öcsipók!");




        }
    }
}