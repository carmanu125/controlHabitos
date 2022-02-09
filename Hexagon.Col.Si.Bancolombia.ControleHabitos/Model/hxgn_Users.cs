using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_Users
    {
        [Key]
        public int idUsers { get; set; }
        public int idPost { get; set; }
        public int idPartition { get; set; }
        public string Name { get; set; }
        public bool isActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

    }
}
