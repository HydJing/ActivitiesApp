using AutoMapper;
using Domain;

namespace Application.Activities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ActivityDto, ActivityDto>();
            CreateMap<UserActivity, AttendeeDto>();
        }
    }
}