using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_AppUserOperation
    {
        [Key]
        public int idAppUserOperaction { get; set; }
        public int idUser { get; set; }
        public int Operation { get; set; }
        public bool isActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }
    }
}
