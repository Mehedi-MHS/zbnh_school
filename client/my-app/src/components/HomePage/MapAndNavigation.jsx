import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from '../custom/CustomLink';

const NavigationBox = ({ icon, name, url }) => (
  <div className="group cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-md border border-gray-200 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 min-h-[120px]">
    {/* Icon */}
    <div className="mb-3 p-3 rounded-lg bg-gray-50 group-hover:bg-blue-100 transition-all duration-300 text-gray-600 group-hover:text-blue-500">
      {icon}
    </div>
    
    {/* Label */}
    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center transition-colors duration-300">
      {name}
    </span>
  </div>
);

const MapAndNavigation = () => {
  const navItems = [
    {
      name: "Notice",
      url: "notice",
      icon: <CircleNotificationsIcon />,
    },
    {
      name: "Teachers",
      url: "teachers",
      icon: <CoPresentIcon />,
    },
    {
      name: "Students",
      url: "students",
      icon: <GroupsIcon />,
    },
    {
      name: "Gallery",
      url: "gallery",
      icon: <InsertPhotoIcon />,
    },
    {
      name: "About School",
      url: "about",
      icon: <InfoIcon />,
    },
    {
      name: "News & Events",
      url: "News",
      icon: <NewspaperIcon />,
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        <section className='w-full md:col-span-6'>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quick Navigation</h2>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {navItems.map((item, index) => (
          <Link key={index} to={item.url}>
          <NavigationBox
            icon={item.icon}
            name={item.name}
            url={item.url}
            data-aos="fade-up"
          />
          </Link>
        ))}
      </div>
        </section>
        <section className='w-full md:col-span-6 mx-auto'>
            <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">School Location</h2>
      </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.902682153546!2d91.1835777!3d22.9538109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a059dde75b55%3A0x599b8a57fb8b6f00!2sJamidar%20Hat%20B.N%20High%20School!5e0!3m2!1sen!2sbd!4v1756884207854!5m2!1sen!2sbd" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="fade-up"></iframe>

        </section>
    </div>
  );
};

export default MapAndNavigation;