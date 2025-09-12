
import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; 
import { AcademicCapIcon, LightBulbIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  return (
    <SectionWrapper title="About MUKESA" subtitle="Fostering Engineering Excellence at Multimedia University of Kenya.">
      <div className="space-y-12 text-lg text-gray-700 dark:text-mukesa-gray-text">
        <div className="bg-white dark:bg-mukesa-gray-dark p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-4 flex items-center">
            <RocketLaunchIcon className="h-8 w-8 mr-3 text-mukesa-red" />
            Our Mission
          </h3>
          <p>
            To be a dynamic student-led organization that champions academic excellence, practical innovation, and professional development among engineering students at Multimedia University of Kenya. We strive to create a vibrant community that supports, inspires, and equips students for successful careers in engineering and technology.
          </p>
        </div>

        <div className="bg-white dark:bg-mukesa-gray-dark p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-4 flex items-center">
            <LightBulbIcon className="h-8 w-8 mr-3 text-mukesa-red" />
            Our Vision
          </h3>
          <p>
            To cultivate a generation of innovative and ethically-minded engineers who are well-prepared to tackle local and global challenges, drive technological advancement, and contribute significantly to society.
          </p>
        </div>

        <div className="bg-white dark:bg-mukesa-gray-dark p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-4">What We Do</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 mr-3 mt-1 text-mukesa-red flex-shrink-0" />
              <span>Organize workshops, seminars, and guest lectures by industry experts to enhance technical knowledge and practical skills.</span>
            </li>
            <li className="flex items-start">
              <UsersIcon className="h-6 w-6 mr-3 mt-1 text-mukesa-red flex-shrink-0" />
              <span>Facilitate networking opportunities with professionals, alumni, and peers through events, mentorship programs, and industrial visits.</span>
            </li>
            <li className="flex items-start">
              <LightBulbIcon className="h-6 w-6 mr-3 mt-1 text-mukesa-red flex-shrink-0" />
              <span>Promote innovation and research by supporting student projects, competitions, and participation in conferences.</span>
            </li>
            <li className="flex items-start">
              <RocketLaunchIcon className="h-6 w-6 mr-3 mt-1 text-mukesa-red flex-shrink-0" />
              <span>Advocate for student interests within the faculty and university, ensuring a conducive learning environment.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-mukesa-gray-dark p-8 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-4">Join Our Community!</h3>
            <p className="mb-6 text-gray-700 dark:text-mukesa-gray-text">
                Become a part of MUKESA and unlock a world of opportunities. Whether you're looking to learn, network, innovate, or lead, MUKESA is the place for you.
            </p>
            <a href="#/register" className="inline-block bg-mukesa-red text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Become a Member
            </a>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AboutPage;
