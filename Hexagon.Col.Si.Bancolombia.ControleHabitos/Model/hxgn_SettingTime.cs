using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
    public class hxgn_SettingTime
    {
        [Key]
        public int idSettingTime { get; set; }
        [ForeignKey("hxgn_Settings")]
        public int idSettings { get; set; }
        public string DayOfTheWeek { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public bool isActive { get; set; }
        public DateTime? CreationDate { get; set; }
        public int CreationUser { get; set; }

        public hxgn_Settings hxgn_Settings { get; set; }

    }
}
