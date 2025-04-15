using Microsoft.EntityFrameworkCore;
using Travel.Models;

namespace Travel.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions<ContactDbContext> options)
            : base(options)
        {
        }

        public DbSet<ContactForm> ContactForms { get; set; }
    }
}
