using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_Settings
    {
        [Key]
        public int idSettings { get; set; }
        public int idAccounts { get; set; }
        public string Comments { get; set; }
        public bool isActive { get; set; }
        public DateTime CreationDate { get; set; }
        public int CreationUser { get; set; }

        public ICollection<hxgn_SettingTime> SettingTime { get; set; }
        public ICollection<hxgn_SettingUser> SettingUser { get; set; }
    }
}
