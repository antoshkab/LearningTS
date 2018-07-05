using System.Data.Entity;

namespace PhoneBook.WebApi.Models
{
    public class PhoneBookDb : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }


        static PhoneBookDb()
        {
            Database.SetInitializer(new PhoneBookInitializer());
        }
    }
}