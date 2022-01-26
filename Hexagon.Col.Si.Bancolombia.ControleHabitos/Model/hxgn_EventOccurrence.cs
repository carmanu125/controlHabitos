using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_EventOccurrence
    {
        [Key]
        public int idEventOccurrence { get; set; }
        public int idAccounts { get; set; }
        public string OriginalNotification { get; set; }
        public string OrderTPC { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }
    }
}
