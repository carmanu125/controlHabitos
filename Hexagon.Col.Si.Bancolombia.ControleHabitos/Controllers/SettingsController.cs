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
    public class SettingsController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public SettingsController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Settings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Settings>>> Gethxgn_Settings()
        {
            try
            {
                return await _context.hxgn_Settings.ToListAsync();

            }catch(Exception e)
            {

            }
            return null;
        }

        // GET: api/Settings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Settings>> Gethxgn_Settings(int id)
        {
            try
            {


                //var hxgn_Settings = await _context.hxgn_Settings.FindAsync(id);
                var hxgn_Settings = await _context.hxgn_Settings
                    .Where(b => b.idSettings == id)
                           .Include(b => b.SettingTime)
                           .Include(b => b.SettingUser)
                           .FirstOrDefaultAsync();

                if (hxgn_Settings == null)
                {
                    return NotFound();
                }

                return hxgn_Settings;
            }catch(Exception e)
            {
                return null;
            }
        }

        // PUT: api/Settings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Settings(int id, hxgn_Settings hxgn_Settings)
        {
            if (id != hxgn_Settings.idSettings)
            {
                return BadRequest();
            }

            _context.Entry(hxgn_Settings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_SettingsExists(id))
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

        // POST: api/Settings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Settings>> Posthxgn_Settings(hxgn_Settings hxgn_Settings)
        {

            hxgn_Settings.CreationDate = DateTime.Now;
            // cambiar cuando llegue desde el front
            hxgn_Settings.CreationUser = 2;

            _context.hxgn_Settings.Add(hxgn_Settings);
            try
            {
                await _context.SaveChangesAsync();
            }catch(Exception e)
            {

            }

            return CreatedAtAction("Gethxgn_Settings", new { id = hxgn_Settings.idSettings }, hxgn_Settings);
        }

        // DELETE: api/Settings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Settings>> Deletehxgn_Settings(int id)
        {
            var hxgn_Settings = await _context.hxgn_Settings.FindAsync(id);
            if (hxgn_Settings == null)
            {
                return NotFound();
            }

            _context.hxgn_Settings.Remove(hxgn_Settings);
            await _context.SaveChangesAsync();

            return hxgn_Settings;
        }

        private bool hxgn_SettingsExists(int id)
        {
            return _context.hxgn_Settings.Any(e => e.idSettings == id);
        }
    }
}
