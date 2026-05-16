using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace dolgozat_b
{
    class Jatekos
    {
        public int Helyezes {  get; set; }
        public string Nev {  get; set; }
        public string Orszag { get; set; }
        public int Nyeremeny { get; set; }

        public Jatekos(string sor)
        {
            string[] darabok = sor.Split(';');
            Helyezes = int.Parse(darabok[0]);
            Nev = darabok[1];
            Orszag = darabok[2];
            Nyeremeny = int.Parse(darabok[3]);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] sorok = File.ReadAllLines("snooker.txt");
            List<Jatekos> jatekosok = new List<Jatekos>();
            for(int i = 1; i < sorok.Length; i++)
            {
                Jatekos j = new Jatekos(sorok[i]);
                jatekosok.Add(j);
            }
            #region 2. feladat
            Console.WriteLine($"2. feladat: A versenyzők száma: {jatekosok.Count}");
            #endregion

            #region 3. feladat
            Console.Write("3. feladat: ");
            bool van = false;
            foreach (var j in jatekosok)
            {
                if(j.Orszag == "Lengyelország")
                {
                    van = true;
                    Console.WriteLine("Szerepel a listán lengyel játékos!");
                }
            }

            if (!van)
            {
                Console.WriteLine("Nem szerepel a listán lengyel játékos!");
            }
            #endregion

            #region 4. feladat
            int nyeremeny = 0;
            int db = 0;
            Console.Write("4. feladat: ");
            foreach(var j in jatekosok)
            {
                if(j.Orszag == "Kína" && j.Nyeremeny > 0)
                {
                    db++;
                    nyeremeny = j.Nyeremeny;
                    int szazalek = (int)Math.Round((double)(100 * nyeremeny) / db);
                    Console.WriteLine($"{szazalek:f2}%");
                    break;
                }
            }

            #endregion

            #region 5. feladat
            Console.Write("5.feladat: ");
            foreach(var j in jatekosok)
            {
                if(j.Helyezes == 2)
                {
                    Console.WriteLine($"{j.Nev}");
                }
            }


            #endregion

            #region 6. feladat
            #endregion
        }
    }
}
