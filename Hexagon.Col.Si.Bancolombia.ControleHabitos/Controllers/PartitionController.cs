using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hexagon.Col.Si.Bancolombia.ControleHabitos.Data;
using Hexagon.Col.Si.Bancolombia.ControleHabitos.Model;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartitionController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public PartitionController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Partition
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Partition>>> Gethxgn_Partition()
        {
            return await _context.hxgn_Partition.ToListAsync();
        }

        // GET: api/Partition/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Partition>> Gethxgn_Partition(int id)
        {
            var hxgn_Partition = await _context.hxgn_Partition.FindAsync(id);

            if (hxgn_Partition == null)
            {
                return NotFound();
            }

            return hxgn_Partition;
        }

        // PUT: api/Partition/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Partition(int id, hxgn_Partition hxgn_Partition)
        {
            if (id != hxgn_Partition.idPartition)
            {
                return BadRequest();
            }

            _context.Entry(hxgn_Partition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_PartitionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Partition
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Partition>> Posthxgn_Partition(hxgn_Partition hxgn_Partition)
        {
            hxgn_Partition.CreationDate = DateTime.Now;

            _context.hxgn_Partition.Add(hxgn_Partition);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gethxgn_Partition", new { id = hxgn_Partition.idPartition }, hxgn_Partition);
        }

        // DELETE: api/Partition/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Partition>> Deletehxgn_Partition(int id)
        {
            var hxgn_Partition = await _context.hxgn_Partition.FindAsync(id);
            if (hxgn_Partition == null)
            {
                return NotFound();
            }

            _context.hxgn_Partition.Remove(hxgn_Partition);
            await _context.SaveChangesAsync();

            return hxgn_Partition;
        }

        private bool hxgn_PartitionExists(int id)
        {
            return _context.hxgn_Partition.Any(e => e.idPartition == id);
        }
    }
}
