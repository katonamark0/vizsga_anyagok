using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tömbök
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Tároljunk el 100 db 1 és 5000 közötti véletlen számot

            Random r = new Random();
            int[] szamok = new int[100]; //100 elemű egézeket tároló tömb

            for(int i = 0; i < szamok.Length; i++)
            {
                szamok[i] = r.Next(1, 5001);
            }

            for(int i = 0;i < szamok.Length;i++)
            {
                Console.Write($"{szamok[i]}, ");
            }

            //Írjuk ki a páros számok átlagát!

            int osszeg = 0;
            int db = 0;

            for (int i = 0; i < szamok.Length; i++)
            {
                if (szamok[i] % 2 == 0)
                {
                    osszeg += szamok[i];
                    db++;
                }
            }

            double atlag = (double) osszeg / db;
            Console.WriteLine($"\nA páros számok átlaga {atlag:0.00}");

            //Melyik a legnagyobb szám és háynadik a sorban?

            int max = 0;
            int maxi = 0;

            for (int i = 0; i < szamok.Length; i++)
            {
                if (szamok[i] > max)
                {
                    max = szamok[i];
                    maxi = i;
                }
            }

            Console.WriteLine($"A legnagyobb szám a {max}, a {maxi + 1}-edik a sorban.");

            //Számoljuk meg, hogy hány darab 3-mal osztható szám van a sorozatban:
            db = 0;

            for (int i = 0; i < szamok.Length; i++)
            {
                if (szamok[i] % 3 == 0)
                {
                    db++;
                }
            }

            Console.WriteLine($"A számok között {db} sb 3-mal osztható van.");
            


      
        }
    }
}
