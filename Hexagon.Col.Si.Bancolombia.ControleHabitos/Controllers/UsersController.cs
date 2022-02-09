using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hexagon.Col.Si.Bancolombia.ControleHabitos.Data;
using Hexagon.Col.Si.Bancolombia.ControleHabitos.Model;
using Microsoft.Extensions.Configuration;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace Hexagon.Col.Si.Bancolombia.ControleHabitos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataBaseContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(DataBaseContext context, IConfiguration configuration)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<hxgn_Users>>> Gethxgn_Users()
        {
            return await _context.hxgn_Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<hxgn_Users>> Gethxgn_Users(int id)
        {
            var hxgn_Users = await _context.hxgn_Users.FindAsync(id);

            if (hxgn_Users == null)
            {
                return NotFound();
            }

            return hxgn_Users;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthxgn_Users(int id, hxgn_Users hxgn_Users)
        {
            if (id != hxgn_Users.idUsers)
            {
                return BadRequest();
            }

            _context.Entry(hxgn_Users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!hxgn_UsersExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<hxgn_Users>> Posthxgn_Users(hxgn_Users hxgn_Users)
        {
            try
            {
                hxgn_Users.CreationDate = DateTime.Now;
                _context.hxgn_Users.Add(hxgn_Users);
                await _context.SaveChangesAsync();

            }catch(Exception e)
            {

            }


            return CreatedAtAction("Gethxgn_Users", new { id = hxgn_Users.idUsers }, hxgn_Users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<hxgn_Users>> Deletehxgn_Users(int id)
        {
            var hxgn_Users = await _context.hxgn_Users.FindAsync(id);
            if (hxgn_Users == null)
            {
                return NotFound();
            }

            _context.hxgn_Users.Remove(hxgn_Users);
            await _context.SaveChangesAsync();

            return hxgn_Users;
        }

        private bool hxgn_UsersExists(int id)
        {
            return _context.hxgn_Users.Any(e => e.idUsers == id);
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<hxgn_Users> Login(hxgn_Users model)
        {



            //    // Tu código para validar que el usuario ingresado es válido

            //    // Asumamos que tenemos un usuario válido
            //    var user = new hxgn_Users
            //    {
            //        Name = "Eduardo",
            //        Login = "admin@kodoti.com",
            //        idUsers = 2
            //    };

            //    // Leemos el secret_key desde nuestro appseting
            //    var secretKey = _configuration.GetValue<string>("SecretKey");
            //    var key = Encoding.ASCII.GetBytes(secretKey);

            //    // Creamos los claims (pertenencias, características) del usuario
            //    var claims = new[]
            //    {
            //    new Claim(ClaimTypes.NameIdentifier, model.idUsers.ToString()),
            //    new Claim(ClaimTypes.Email, user.Login)
            //};

            //    var tokenDescriptor = new SecurityTokenDescriptor
            //    {
            //        Subject = claims,
            //        // Nuestro token va a durar un día
            //        Expires = DateTime.UtcNow.AddDays(1),
            //        // Credenciales para generar el token usando nuestro secretykey y el algoritmo hash 256
            //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            //    };

            //    var tokenHandler = new JwtSecurityTokenHandler();
            //    var createdToken = tokenHandler.CreateToken(tokenDescriptor);

            //return tokenHandler.WriteToken(createdToken);

           
            var hxgn_Users = await _context.hxgn_Users
                .Where(m => m.Login == model.Login && m.Password == model.Password)
                .FirstOrDefaultAsync();

            if (hxgn_Users == null)
            {
                return null;
            }

            return hxgn_Users;

        }
    }
}
