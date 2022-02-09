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
    public class CalendarController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public CalendarController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Calendar
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Calendar>>> Gethxgn_Calendar()
        {

            return await _context.hxgn_Calendar.ToListAsync();
        }

        // GET: api/Calendar/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Calendar>> Gethxgn_Calendar(int id)
        {
            var hxgn_Calendar = await _context.hxgn_Calendar.FindAsync(id);

            if (hxgn_Calendar == null)
            {
                return NotFound();
            }

            return hxgn_Calendar;
        }

        // PUT: api/Calendar/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Calendar(int id, hxgn_Calendar hxgn_Calendar)
        {
            if (id != hxgn_Calendar.idCalendar)
            {
                return BadRequest();
            }

            _context.Entry(hxgn_Calendar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_CalendarExists(id))
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

        // POST: api/Calendar
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Calendar>> Posthxgn_Calendar(hxgn_Calendar hxgn_Calendar)
        {

            hxgn_Calendar.CreationDate = DateTime.Now;
            _context.hxgn_Calendar.Add(hxgn_Calendar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gethxgn_Calendar", new { id = hxgn_Calendar.idCalendar }, hxgn_Calendar);
        }

        // DELETE: api/Calendar/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Calendar>> Deletehxgn_Calendar(int id)
        {
            var hxgn_Calendar = await _context.hxgn_Calendar.FindAsync(id);
            if (hxgn_Calendar == null)
            {
                return NotFound();
            }

            _context.hxgn_Calendar.Remove(hxgn_Calendar);
            await _context.SaveChangesAsync();

            return hxgn_Calendar;
        }

        private bool hxgn_CalendarExists(int id)
        {
            return _context.hxgn_Calendar.Any(e => e.idCalendar == id);
        }
    }
}
