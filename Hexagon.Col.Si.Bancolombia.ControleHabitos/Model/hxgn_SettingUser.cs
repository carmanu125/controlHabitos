using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_SettingUser
    {
        [Key]
        public int idSettingUser { get; set; }
        [ForeignKey("hxgn_Settings")]
        public int idSettings { get; set; }
        public int idUser { get; set; }
        public bool isArm { get; set; }
        public bool isDisarm { get; set; }
        public bool isActive { get; set; }
        public DateTime? CreationDate { get; set; }
        public int CreationUser { get; set; }

        public hxgn_Settings hxgn_Settings { get; set; }

    }
}
