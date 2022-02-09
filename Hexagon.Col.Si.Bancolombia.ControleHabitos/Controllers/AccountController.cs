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
    public class AccountController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public AccountController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Account
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Accounts>>> Gethxgn_Accounts()
        {
            return await _context.hxgn_Accounts.ToListAsync();
        }

        // GET: api/Account/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Accounts>> Gethxgn_Accounts(int id)
        {
            var hxgn_Accounts = await _context.hxgn_Accounts.FindAsync(id);

            if (hxgn_Accounts == null)
            {
                return NotFound();
            }

            return hxgn_Accounts;
        }

        // PUT: api/Account/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Accounts(int id, hxgn_Accounts hxgn_Accounts)
        {
            if (id != hxgn_Accounts.idAccounts)
            {
                return BadRequest();
            }

            //hxgn_Accounts.CreationDate = Convert.ToDateTime(hxgn_Accounts.CreationDate.ToString("yyyy-MM-dd HH:mm"));

            _context.Entry(hxgn_Accounts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_AccountsExists(id))
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

        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Accounts>> Posthxgn_Accounts(hxgn_Accounts hxgn_Accounts)
        {
            try
            {
                DateTime dt = DateTime.Now;
                hxgn_Accounts.CreationDate = dt;

            _context.hxgn_Accounts.Add(hxgn_Accounts);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {

            }
            return CreatedAtAction("Gethxgn_Accounts", new { id = hxgn_Accounts.idAccounts }, hxgn_Accounts);
        }

        // DELETE: api/Account/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Accounts>> Deletehxgn_Accounts(int id)
        {
            var hxgn_Accounts = await _context.hxgn_Accounts.FindAsync(id);
            if (hxgn_Accounts == null)
            {
                return NotFound();
            }
            try
            {
                _context.hxgn_Accounts.Remove(hxgn_Accounts);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {

            }
            

            

            return hxgn_Accounts;
        }

        private bool hxgn_AccountsExists(int id)
        {
            return _context.hxgn_Accounts.Any(e => e.idAccounts == id);
        }
    }
}
