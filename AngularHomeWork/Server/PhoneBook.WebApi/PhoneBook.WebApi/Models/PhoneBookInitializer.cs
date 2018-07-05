using System;
using System.Data.Entity;
using AutoFixture;

namespace PhoneBook.WebApi.Models
{
    public class PhoneBookInitializer : DropCreateDatabaseIfModelChanges<PhoneBookDb>
    {
        protected override void Seed(PhoneBookDb context)
        {
            var fixuter = new Fixture();
            for (int i = 0; i < 10; i++)
            {
                var contact = fixuter.Create<Contact>();
                contact.Id = default(int);
                contact.Number = Math.Abs(contact.Name.GetHashCode())
                                     .ToString()
                                     .Substring(0, 6)
                                     .PadRight(6, '0');
                context.Contacts.Add(contact);
            }

            base.Seed(context);
        }
    }
}