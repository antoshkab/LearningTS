using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace PhoneBook.WebApi.Models
{
    public class Contact
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [Required]
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("number")]
        public string Number { get; set; }

        [JsonProperty("comment")]
        public string Comment { get; set; }
    }
}