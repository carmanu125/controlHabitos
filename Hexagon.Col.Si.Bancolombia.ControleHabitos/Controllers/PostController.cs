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
    public class PostController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public PostController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Post
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Post>>> Gethxgn_Post()
        {
            return await _context.hxgn_Post.ToListAsync();
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Post>> Gethxgn_Post(int id)
        {
            var hxgn_Post = await _context.hxgn_Post.FindAsync(id);

            if (hxgn_Post == null)
            {
                return NotFound();
            }

            return hxgn_Post;
        }

        // PUT: api/Post/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Post(int id, hxgn_Post hxgn_Post)
        {
            if (id != hxgn_Post.idPost)
            {
                return BadRequest();
            }

            _context.Entry(hxgn_Post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_PostExists(id))
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

        // POST: api/Post
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Post>> Posthxgn_Post(hxgn_Post hxgn_Post)
        {
            try
            {
                hxgn_Post.CreationDate = DateTime.Now;
                _context.hxgn_Post.Add(hxgn_Post);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {

            }
            

            return CreatedAtAction("Gethxgn_Post", new { id = hxgn_Post.idPost }, hxgn_Post);
        }

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Post>> Deletehxgn_Post(int id)
        {
            var hxgn_Post = await _context.hxgn_Post.FindAsync(id);
            if (hxgn_Post == null)
            {
                return NotFound();
            }

            _context.hxgn_Post.Remove(hxgn_Post);
            await _context.SaveChangesAsync();

            return hxgn_Post;
        }

        private bool hxgn_PostExists(int id)
        {
            return _context.hxgn_Post.Any(e => e.idPost == id);
        }
    }
}
