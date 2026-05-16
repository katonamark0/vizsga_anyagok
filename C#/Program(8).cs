using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace dolgozatB
{
    internal class Program
    {
        class Part
        {
            public int Korzet {  get; set; }
            public int Szavazat { get; set; }
            public string Vezeteknev { get; set; }
            public string Keresztnev { get; set; }
            public string Partnev { get; set; }
        }
        static void Main(string[] args)
        {
            string[] sorok = File.ReadAllLines("szavazatok.txt");
            List<Part> partok = new List<Part>();

            for(int i = 0; i < sorok.Length; i++)
            {
                string[] darabok = sorok[i].Split(' ');
                Part p = new Part();
                p.Korzet = int.Parse(darabok[0]);
                p.Szavazat = int.Parse(darabok[1]);
                p.Vezeteknev = darabok[2];
                p.Keresztnev = darabok[3];
                p.Partnev = darabok[4];
                partok.Add(p);
            }

            Console.WriteLine($"1. feladat: Indult jelöltek száma: {partok.Count} db");

            int osszeg = 0;
            foreach (var p in partok)
            {
                if(p.Partnev == "HEP")
                {
                    osszeg++;
                }
            }
            Console.WriteLine($"2. feladat: A HEP jelöltjeinek a száma: {osszeg} db");


            string Nev = "";
            double min = 10000;
            foreach (var p in partok)
            {
                if(p.Szavazat < min && p.Korzet == 7)
                {
                    min = p.Szavazat;
                    Nev = p.Vezeteknev + p.Keresztnev;

                }
            }
            Console.WriteLine($"3. feladat: A 7-es körzetben a legkevesebb szavazatot elérő személy: {Nev}; {min} db szavazat ");
           

            StreamWriter sw = new StreamWriter("korzet01.txt");
            sw.WriteLine("Vezeték név; Kereszt név; Kapott szavazatok száma");
            foreach (var p in partok)
            {
                if (p.Korzet == 1)
                {
                    sw.WriteLine($"{p.Vezeteknev} {p.Keresztnev};{p.Szavazat}");
                }
            }
            sw.Close();

        }
    }
}
