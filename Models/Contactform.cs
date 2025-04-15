using System.ComponentModel.DataAnnotations;

namespace Travel.Models
{

    public class ContactForm
    {
        [Key] // ✅ Marks this as the primary key
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = "";

        [Required]
        [EmailAddress]
        public string Email { get; set; } = "";

        [Required]
        [Phone]
        public string Phone { get; set; } = "";

        [Required]
        public string StartLocation { get; set; } = "";

        [Required]
        public string Destination { get; set; } = "";

        [Required]
        public string Transport { get; set; } = "";

        [Required]
        [DataType(DataType.Date)]
        public DateTime? TravelDate { get; set; }   // ✅ Nullable

        [DataType(DataType.Time)]
        public TimeSpan? TravelTime { get; set; }   // ✅ Nullable

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "At least 1 traveler is required")]
        public int? Travelers { get; set; }         // ✅ Nullable

        public string? Message { get; set; }        // Optional

        public DateTime SubmittedAt { get; set; } = DateTime.Now;
    }
}
