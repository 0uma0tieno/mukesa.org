
import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; 
import { MOCK_ACHIEVEMENTS } from '../constants'; 
import { AchievementItem } from '../types'; 
import { TrophyIcon, UserCircleIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const AchievementCard: React.FC<{ achievement: AchievementItem }> = ({ achievement }) => {
  return (
    <div id={achievement.id} className="bg-mukesa-bg-alt rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {achievement.imageUrl && (
        <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-mukesa-red mb-2">
          <TrophyIcon className="h-5 w-5 mr-2" />
          <h3 className="text-2xl font-semibold text-mukesa-blue">{achievement.title}</h3>
        </div>
        <div className="flex items-center text-xs text-mukesa-text-muted mb-1">
          <UserCircleIcon className="h-4 w-4 mr-1" />
          <span>{achievement.achievedBy}</span>
        </div>
        <div className="flex items-center text-xs text-mukesa-text-muted mb-3">
          <CalendarDaysIcon className="h-4 w-4 mr-1" />
          <span>{achievement.date}</span>
        </div>
        <p className="text-mukesa-text-muted text-base mb-4 flex-grow line-clamp-4">{achievement.description}</p>
        
      </div>
    </div>
  );
};

const AchievementsPage: React.FC = () => {
  return (
    <SectionWrapper title="Student Achievements" subtitle="Celebrating the successes and milestones of MUKESA members.">
      {MOCK_ACHIEVEMENTS.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ACHIEVEMENTS.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-mukesa-text-muted py-10">
          No achievements to display at the moment. Our students are always working on something great!
        </p>
      )}
    </SectionWrapper>
  );
};

export default AchievementsPage;