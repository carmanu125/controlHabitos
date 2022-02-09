using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_Calendar
    {
        [Key]
        public int idCalendar { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public bool isActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }
    }
}
