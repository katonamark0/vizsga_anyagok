using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace lotto_jatek
{
    internal class Program
    {
        static Random rnd = new Random();
        static void Main(string[] args)
        {
            bool ujra;

            do
            {
                Console.Clear();
                Console.WriteLine("Lottó Játék");
                Console.WriteLine("Válassz lottótipust: ");
                Console.WriteLine("1 - 5 szám 1 és 90 között");
                Console.WriteLine("2 - 6 szám 1 és 45 között");
                Console.WriteLine("3 - 7 szám 1 és 35 között");

                int darab = 0;
                int maxSzam = 0;

                while (true)
                {
                    Console.WriteLine("Választás (1 - 3): ");
                    string valasz = Console.ReadLine();

                    if (valasz == "1") { darab = 5; maxSzam = 90; break; }
                    if (valasz == "2") { darab = 6; maxSzam = 45; break; }
                    if (valasz == "3") { darab = 7; maxSzam = 35; break; }

                    Console.WriteLine("Hibás választás!");

                }

                List<int> GepSzamok = Sorsolas(darab, maxSzam);

                List<int> felhaSzamok = Bekero(darab, maxSzam);

                int talalat = GepSzamok.Intersect(felhaSzamok).Count();

                Console.WriteLine("\n A gép számai: " + string.Join(",", GepSzamok));
                Console.WriteLine("A te számaid" + string.Join(",", felhaSzamok));
                Console.WriteLine($"Találatok száma: {talalat}");


                Console.WriteLine("Nyeremény: " + Nyeremeny(talalat, darab));

                Console.WriteLine("\n Szeretnél újra játszani? (i/n): ");
                ujra = Console.ReadLine().ToLower() == "i";

                System.Threading.Thread.Sleep(2000);
                Console.Clear();

                Console.WriteLine("Kezdj új játékot!");

                System.Threading.Thread.Sleep(2000);
                Console.Clear();

                Console.WriteLine("Persze, hogy akarsz");

                System.Threading.Thread.Sleep(2000);
                Console.Clear();

                Console.WriteLine("Tudom, hogy akarod: Gamba = JÓ");
            }
            while (ujra);

        }

        static List<int> Sorsolas(int darab, int maxSzam)
        {
            HashSet<int> szamok = new HashSet<int>();

            while (szamok.Count < darab)
            {
                szamok.Add(rnd.Next(1, maxSzam + 1));
            }

            return szamok.OrderBy(x => x).ToList();
        }

        static List<int> Bekero(int darab, int maxSzam)
        {
            HashSet<int> szamok = new HashSet<int> ();

            Console.WriteLine($"\n Adj meg {darab} különböző számot 1 és {maxSzam} között:  ");

            while (szamok.Count < darab)
            {
                Console.WriteLine($"({szamok.Count + 1}. szám): ");
                if (int.TryParse(Console.ReadLine(), out int szam))
                {
                    if(szam >= 1 && szam <= maxSzam)
                    {
                        if(!szamok.Add(szam))
                            Console.WriteLine("Ezt a számot már megadtad!");
                    }
                    else
                    {
                        Console.WriteLine("Nem megfelelő tartomány!");
                    }
                }
                else
                {
                    Console.WriteLine("Érvénytelen szám!");
                }
            }
            return szamok.OrderBy(x => x).ToList();
        }

        static string Nyeremeny(int talalat, int darab)
        {
            if (talalat == darab) return "Főnyeremény!!!";
            if (talalat >= darab - 1) return "Nagy nyeremény!!!";
            if (talalat >= darab - 2) return "Kis nyeremény!!!";
            return "Sajnos nem nyert :(";


          

        }

          
    }
}
