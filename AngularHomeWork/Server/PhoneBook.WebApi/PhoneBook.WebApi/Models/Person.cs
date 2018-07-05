namespace PhoneBook.WebApi.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Comment { get; set; }

        public int RoleId { get; set; }
    }
}