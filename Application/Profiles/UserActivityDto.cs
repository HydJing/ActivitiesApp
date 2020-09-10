using System;

namespace Application.Profiles
{
    public class UserActivityDto
    {
        public Guid id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
    }
}