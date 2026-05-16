using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace konyvkiadas
{
    internal class Program
    {
        class Kiadas
        {
            public int Ev { get; set; }
            public int NegyedEv { get; set; }
            public string Eredet { get; set; }
            public string Leiras { get; set; }
            public int Peldany { get; set; }

            public Kiadas(string sor)
            {
                string[] darabok = sor.Split(';');
                Ev = int.Parse(darabok[0]);
                NegyedEv = int.Parse(darabok[1]);
                Eredet = darabok[2];
                Leiras = darabok[3];
                Peldany = int.Parse(darabok[4]);
            }

            public void KiIr()
            {
                Console.WriteLine($"|{Ev}|{NegyedEv}|{Eredet}|{Leiras}|{Peldany}|");
            }

        }            
        static void Main(string[] args)
        {
            List<Kiadas> kiadasok = new List<Kiadas>();
            string[] sorok = File.ReadAllLines("kiadas.txt");
            for (int i = 0; i < sorok.Length; i++)
            {
                Kiadas k = new Kiadas(sorok[i]);
                kiadasok.Add(k);
            }

            Console.WriteLine("Írja be a szerző nevét: ");
            string szerzo = Console.ReadLine();

            int db = 0;

            foreach (var k in kiadasok)
            {
                if (k.Leiras.Contains(szerzo))
                {
                    db++;
                }
            }

            if(db == 0)
            {
                Console.WriteLine("Nincs ilyen nevű szerző!");
            }
            else
            {
                Console.WriteLine($"{db} könyvkiadás");
            }

            Kiadas max = kiadasok[0];

            foreach (var k in kiadasok)
            {
                if(k.Peldany > max.Peldany)
                {
                    max = k;
                }
            }

            Console.WriteLine("A legnagyobb példányú könyv: ");
            max.KiIr();

            HashSet<int> evek = new HashSet<int>();

            foreach (var k in kiadasok)
            {
                evek.Add(k.Ev);
            }

            Console.WriteLine("Év|Darab|Példány");
            Console.WriteLine("__|_____|_______");

            foreach (var e in evek)
            {
                db = 0;
                int pld = 0;
                foreach (var k in kiadasok)
                {
                    if(k.Ev == e)
                    {
                        db++;
                        pld += k.Peldany;
                    }
                }

                Console.WriteLine($"{e}|{db,-5}|{pld}");
            }

            StreamWriter sw = new StreamWriter("leiner.md", false, Encoding.UTF8);
            sw.WriteLine("|Év|Könyv|Példány|");
            sw.WriteLine("|:---:|:---|---:|");
            foreach (var k in kiadasok)
            {
                if (k.Leiras.Contains("Leiner Laura"))
                {
                    sw.WriteLine($"|{k.Ev}|{k.Leiras}|{k.Peldany}|");
                }
            }
            sw.Close();
        }
    }
}
