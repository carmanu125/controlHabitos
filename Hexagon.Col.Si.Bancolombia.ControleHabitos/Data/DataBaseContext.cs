using Hexagon.Col.Si.Bancolombia.ControleHabitos.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Data
{
    public class DataBaseContext:DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) :base(options)
        {

        }

        public DbSet<hxgn_Accounts> hxgn_Accounts { get; set; }

        public DbSet<hxgn_Partition> hxgn_Partition { get; set; }

        public DbSet<hxgn_Users> hxgn_Users { get; set; }

        public DbSet<hxgn_Post> hxgn_Post { get; set; }

        public DbSet<hxgn_Calendar> hxgn_Calendar { get; set; }

        public DbSet<hxgn_Settings> hxgn_Settings { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("");
        //}
    }
}
