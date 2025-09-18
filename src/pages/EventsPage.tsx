import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { useContent } from '../contexts/ContentContext'; // Import useContent to get live data
import { EventItem, EventType } from '../types';
import { CalendarDaysIcon, CheckCircleIcon, ClockIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  let typeIcon;
  let typeColorClass;
  switch(event.type) {
    case EventType.UPCOMING:
      typeIcon = <CalendarDaysIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColorClass = "text-mukesa-blue dark:text-mukesa-blue";
      break;
    case EventType.PAST:
      typeIcon = <CheckCircleIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColorClass = "text-green-500 dark:text-green-400";
      break;
    case EventType.ONGOING:
      typeIcon = <ClockIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColorClass = "text-yellow-500 dark:text-yellow-400";
      break;
    default:
      typeIcon = <InformationCircleIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColorClass = "text-gray-500 dark:text-gray-400";
  }

  return (
    <div id={event.id} className="bg-white dark:bg-mukesa-gray-dark rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {event.imageUrl && (
        <div className="w-full h-56 bg-gray-200 dark:bg-mukesa-black">
          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className={`flex items-center text-sm font-medium mb-2 ${typeColorClass}`}>
          {typeIcon}
          {event.type} - {event.date}
        </div>
        <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-3">{event.title}</h3>
        <p className="text-gray-700 dark:text-mukesa-gray-text text-base mb-4 flex-grow line-clamp-4">{event.description}</p>
        <Link to={`/events/${event.id}`} className="mt-auto self-start">
          <Button variant="secondary" size="sm" aria-label={`Learn more about ${event.title}`}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};


const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventType>(EventType.UPCOMING);
  // Get events from the context instead of static constants
  const { events } = useContent(); 

  // Filter events from the live context based on the active tab
  const filteredEvents = events.filter(event => event.type === activeTab);

  const tabButtonClasses = (tabType: EventType) => 
    `px-6 py-3 font-medium rounded-t-lg transition-colors duration-300 focus:outline-none ${
      activeTab === tabType 
        ? 'bg-mukesa-blue text-white' 
        : 'bg-gray-200 dark:bg-mukesa-black text-gray-700 dark:text-mukesa-gray-text hover:bg-mukesa-red hover:text-white dark:hover:bg-mukesa-red dark:hover:text-white'
    }`;
    
  const tabContainerClasses = "mb-8 flex justify-center border-b-2 border-gray-300 dark:border-mukesa-gray-dark";


  return (
    <SectionWrapper title="MUKESA Events" subtitle="Discover workshops, seminars, competitions, and social gatherings.">
      <div className={tabContainerClasses}>
        <button onClick={() => setActiveTab(EventType.UPCOMING)} className={tabButtonClasses(EventType.UPCOMING)}>Upcoming</button>
        <button onClick={() => setActiveTab(EventType.ONGOING)} className={tabButtonClasses(EventType.ONGOING)}>Ongoing</button>
        <button onClick={() => setActiveTab(EventType.PAST)} className={tabButtonClasses(EventType.PAST)}>Past</button>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 dark:text-mukesa-gray-text py-10">
          No {activeTab.toLowerCase()} events to display at the moment. Check back soon!
        </p>
      )}
    </SectionWrapper>
  );
};

export default EventsPage;