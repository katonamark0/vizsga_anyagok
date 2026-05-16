using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Security.Policy;
using System.Runtime.InteropServices;
using System.Threading;

namespace Foci
{
    internal class Program
    {
        class Merkozes
        {
            public int Fordulo { get; set; }
            public int HG {  get; set; }
            public int VG { get; set; }

            //hazai feledeju golok
            public int HFG { get; set; }

            //vendeg felefeju golok
            public int VFG { get; set; }
            public string Hazai {  get; set; }
            public string Vendeg { get; set; }

            public Merkozes(string sor)
            {
                string[] darabok = sor.Split(' ');
                Fordulo = int.Parse(darabok[0]);
                HG = int.Parse(darabok[1]);
                VG = int.Parse(darabok[2]);
                HFG = int.Parse(darabok[3]);
                VFG = int.Parse(darabok[4]);
                Hazai = darabok[5];
                Vendeg = darabok[6];
            }
        }
        static void Main(string[] args)
        {
            string[] sorok = File.ReadAllLines("meccs.txt");
            List<Merkozes> merkozesek = new List<Merkozes>();

            for(int i = 1; i < sorok.Length; i++)
            {
                Merkozes m = new Merkozes(sorok[i]);
                merkozesek.Add(m);
            }
            #region "2. feladat"
            Console.Write("Írja be egy forduló számát: ");
            int ford = int.Parse(Console.ReadLine());
            foreach (var m in merkozesek)
            {
                if(m.Fordulo == ford)
                {
                    Console.WriteLine($"{m.Hazai} - {m.Vendeg}: {m.HG} - {m.VG} ({m.HFG}-{m.VFG})");
                }
            }
            #region 3. feladat
            foreach (var m in merkozesek)
            {
                if(m.HG > m.VG && m.HFG < m.VFG)
                {
                    Console.WriteLine($"{m.Fordulo} {m.Hazai}");
                }
                if (m.HG < m.VG && m.HFG > m.VFG)
                {
                    Console.WriteLine($"{m.Fordulo} {m.Vendeg}");
                }
            }
            for(int i = 0; i < sorok.Length; i++)
            {
                Merkozes m = new Merkozes(sorok[i]);
                merkozesek.Add(m);
            }

            #endregion

            Console.WriteLine("Írja be egy csapat nevét: ");
            string csapat = Console.ReadLine();

            #region 5. feladat
            int lott = 0;
            int kapott = 0;

            foreach (var m in merkozesek)
            {
                if(m.Hazai == csapat)
                {
                    lott += m.VG;
                    kapott += m.HG;
                }
            }
            Console.WriteLine($"Lőtt gólok: {lott}, kapott gólok: {kapott}");

            #endregion

            bool veretlen = true;
            foreach (var m in merkozesek)
            {
                if(m.Hazai == csapat && m.HG < m.VG)
                {
                    Console.WriteLine($"A csapat először a {m.Vendeg}-től kapott ki, a {m.Fordulo}-ban.");
                    veretlen = false;
                    break;
                }
            }
            if(veretlen == true)
            {
                Console.WriteLine("A csapat otthon veretlen maradt.");
            }

            #endregion

            #region 7. feladat
            List<string> eredmenyek = new List<string>();
            HashSet<string> kulonbozok = new HashSet<string>();

            foreach (var m in merkozesek)
            {
                string eredmeny = "";
                if(m.HG > m.VG)
                {
                    eredmeny += m.HG + "-" + m.VG;
                }
                else
                {
                    eredmeny += m.VG + "-" + m.HG;
                }

                eredmenyek.Add(eredmeny);
                kulonbozok.Add(eredmeny);
            }

            StreamWriter sw = new StreamWriter("stat.txt");
            foreach (var k in kulonbozok)
            {
                sw.Write($"{k}:");
                int db = 0;
                foreach (var e in eredmenyek)
                {
                    if (k == e)
                    {
                      db ++;  
                    }
                }
                sw.WriteLine($"{db} darab");
            }
            sw.Close();
            #endregion
        }

    }
}
