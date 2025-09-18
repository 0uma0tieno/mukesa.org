
import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper'; // Adjusted path
import { MOCK_EVENTS } from '../constants'; // Adjusted path
import { EventItem, EventType } from '../types'; // Adjusted path
import { CalendarDaysIcon, CheckCircleIcon, ClockIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button'; // Adjusted path

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  let typeIcon, typeColor;
  switch(event.type) {
    case EventType.UPCOMING:
      typeIcon = <CalendarDaysIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColor = "text-mukesa-blue";
      break;
    case EventType.PAST:
      typeIcon = <CheckCircleIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColor = "text-green-500";
      break;
    case EventType.ONGOING:
      typeIcon = <ClockIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColor = "text-yellow-500";
      break;
    default:
      typeIcon = <InformationCircleIcon className="h-5 w-5 mr-1 inline-block" />;
      typeColor = "text-mukesa-text-muted";
  }

  return (
    <div id={event.id} className="bg-mukesa-bg-alt rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {event.imageUrl && (
        <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className={`flex items-center text-sm font-medium mb-2 ${typeColor}`}>
          {typeIcon}
          {event.type} - {event.date}
        </div>
        <h3 className="text-2xl font-semibold text-mukesa-blue mb-3">{event.title}</h3>
        <p className="text-mukesa-text-muted text-base mb-4 flex-grow line-clamp-4">{event.description}</p>
        {event.detailsLink && (
          <Button variant="secondary" size="sm" onClick={() => alert('Navigate to event details (TBD)')} className="mt-auto self-start">
            Learn More
          </Button>
        )}
      </div>
    </div>
  );
};


const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventType>(EventType.UPCOMING);

  const filteredEvents = MOCK_EVENTS.filter(event => event.type === activeTab);

  const tabButtonClasses = (tabType: EventType) => 
    `px-6 py-3 font-medium rounded-t-lg transition-colors duration-300 focus:outline-none ${
      activeTab === tabType 
        ? 'bg-mukesa-blue text-white' 
        : 'bg-mukesa-bg-alt text-mukesa-text hover:bg-mukesa-red hover:text-white'
    }`;

  return (
    <SectionWrapper title="MUKESA Events" subtitle="Discover workshops, seminars, competitions, and social gatherings.">
      <div className="mb-8 flex justify-center border-b-2 border-mukesa-border">
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
        <p className="text-center text-xl text-mukesa-text-muted py-10">
          No {activeTab.toLowerCase()} events to display at the moment. Check back soon!
        </p>
      )}
    </SectionWrapper>
  );
};

export default EventsPage;