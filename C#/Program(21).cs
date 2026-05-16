using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ciklusok_gyakoras
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Olvassunk be számokat, amíg 0-t nem írnak be, írjuk ki a számok összegét:
            int osszeg = 0; //Változó az összeg tárolásához.
            int a = 0;
            do
            {
                Console.Write("Következő szám: ");
                a = Convert.ToInt32(Console.ReadLine());
                osszeg += a;
            } while (a != 0);

            Console.WriteLine($"A számok összege {osszeg}");

            //Generáljunk 100 db 1 és 50 közé eső véletlen számot!
            //Írjuk ki, hogy hány darab páros volt közöttük

            Random r = new Random();
            int darab = 0;
            for (int i = 1; i <= 100; i++)
            {
                int vel = r.Next(1, 51);
                Console.Write($"{vel}, ");
                if (vel % 2 == 0)
                {
                    darab++;
                }
            }
            Console.WriteLine($"A generált számok között {darab} darab páros volt.");

            //Olvassuk be egy osztály tanulóinak magasságát!
            //A beolvasás végét -1 beírásával jelezzük!
            //Írjuk ki, hogy hányadik tanuló a legmagasabb, és hány cm magas

            int magassag = 0; //A beolvasott magasság.
            int ssz = 0;  //A személy sorszáma.
            int max = 0;  //A legnagyobb magasság.
            int maxi = 0; //A legnagyobb magasság sorszáma.
            do
            {
                Console.Write("Következő magasság: ");
                magassag = Convert.ToInt32(Console.ReadLine());
                ssz++;
                if (magassag > max)
                {
                    max = magassag;
                    maxi = ssz;
                }
            }while(magassag != -1 );

            Console.WriteLine($"A legmagasabb {maxi}-edik, a magassága {max} cm.");

            Console.WriteLine();
            Console.WriteLine("_______________________");

            //Olvassunk be egy számot (n)
            //Írjuk ki az első n db négyzetszámot
            Console.Write("Írja be n értékét:");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Az első {n} négyzetszám: ");
            for (int i = 1; i <= n; i++)
            {
                Console.Write($"{i * i}, ");
            }


            //1-es csoport dolgozat megoldása:
            Console.WriteLine("Kérem az életkorodat: ");
            int kor = Convert.ToInt32(Console.ReadLine());
            int kor2 = int.Parse(Console.ReadLine());
            Console.WriteLine($"Te {kor} éves vagy.");
        }
    }
}
