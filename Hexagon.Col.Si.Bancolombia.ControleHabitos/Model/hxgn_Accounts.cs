using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Model
{
	[Table("hxgn_Accounts")]
    public class hxgn_Accounts
	{
		[Key]
		public int idAccounts { get; set; }
		public string Code { get; set; }
		public string AccountNumber { get; set; }
		public string Name { get; set; }
		public string Mun { get; set; }
		public string State { get; set; }
		public string Location { get; set; }
		public decimal Latitude { get; set; }
		public decimal Longitude { get; set; }
		public string InitialServiceHours { get; set; }
		public string FinalServiceHours { get; set; }
		public string Comments { get; set; }
		public bool IsActive { get; set; }
		public DateTime CreationDate { get; set; }
		public int CreationUser { get; set; }

	}
}
