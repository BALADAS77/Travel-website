using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Models;

namespace Travel.Controllers
{
    public class BookingController : Controller
    {
        private readonly ContactDbContext _context;

        public BookingController(ContactDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Submit(ContactForm form)
        {
            if (ModelState.IsValid)
            {
                _context.ContactForms.Add(form);
                _context.SaveChanges();

                TempData["SuccessMessage"] = "Booking submitted successfully!";
            }
            else
            {
                TempData["ErrorMessage"] = "Please fill all required fields correctly.";
            }

            return RedirectToAction("Contact", "Home");
        }

    }
}
