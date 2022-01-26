using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_Post
    {
        [Key]
        public int idPost { get; set; }
        public string Description { get; set; }
        public bool isActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }
    }
}
