
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import SectionWrapper from '../components/SectionWrapper';
import { EventItem } from '../types';
import { CalendarDaysIcon, ArrowLeftIcon, MapPinIcon, ClockIcon, TicketIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { events } = useContent();

  const event = events.find((e: EventItem) => e.id === eventId);

  // If no event is found with the given ID, show a user-friendly "not found" message.
  if (!event) {
    return (
        <SectionWrapper title="Event Not Found">
            <div className="text-center">
                <p className="text-xl text-gray-600 dark:text-mukesa-gray-text mb-8">
                    Sorry, we couldn't find the event you're looking for.
                </p>
                <Link to="/events" className="inline-flex items-center text-mukesa-red hover:underline font-semibold">
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to All Events
                </Link>
            </div>
        </SectionWrapper>
    );
  }

  // If the event is found, render its details.
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/events" className="inline-flex items-center font-semibold text-mukesa-blue hover:text-mukesa-red dark:text-mukesa-blue dark:hover:text-mukesa-red transition-colors duration-300">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to All Events
          </Link>
        </div>

        <div className="bg-white dark:bg-mukesa-gray-dark p-6 sm:p-8 rounded-xl shadow-2xl">
          {event.imageUrl && (
            <img src={event.imageUrl} alt={event.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 bg-gray-200 dark:bg-mukesa-black" />
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-mukesa-blue dark:text-white mb-6">{event.title}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-gray-700 dark:text-mukesa-gray-text border-t border-b border-gray-200 dark:border-mukesa-black py-6">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
              <div>
                <strong className="block text-gray-800 dark:text-white">Date</strong>
                {event.date}
              </div>
            </div>
            {event.time && (
              <div className="flex items-center">
                <ClockIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
                <div>
                  <strong className="block text-gray-800 dark:text-white">Time</strong>
                  {event.time}
                </div>
              </div>
            )}
            {event.location && (
              <div className="flex items-center">
                <MapPinIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
                <div>
                  <strong className="block text-gray-800 dark:text-white">Location</strong>
                  {event.location}
                </div>
              </div>
            )}
          </div>

          {event.registrationLink && (
            <div className="my-8 text-center">
              <Button variant="primary" size="lg" onClick={() => window.open(event.registrationLink, '_blank')} className="shadow-lg">
                <TicketIcon className="h-6 w-6 mr-2 inline" /> Register for this Event
              </Button>
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-mukesa-blue dark:text-white mt-8 mb-4 border-b-2 border-mukesa-red pb-2">About the Event</h2>
          <p className="text-lg text-gray-700 dark:text-mukesa-gray-text leading-relaxed whitespace-pre-wrap">
            {event.description}
          </p>

          {event.speakers && event.speakers.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-mukesa-blue dark:text-white mt-10 mb-4 border-b-2 border-mukesa-red pb-2">Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.speakers.map(speaker => (
                  <div key={speaker.name} className="text-center bg-gray-50 dark:bg-mukesa-black p-4 rounded-lg shadow-md">
                    <img src={speaker.imageUrl || `https://i.pravatar.cc/150?u=${speaker.name}`} alt={speaker.name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-mukesa-blue" />
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{speaker.name}</h3>
                    <p className="text-sm text-mukesa-red">{speaker.title}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {event.agenda && event.agenda.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-mukesa-blue dark:text-white mt-10 mb-4 border-b-2 border-mukesa-red pb-2">Event Agenda</h2>
              <ul className="space-y-4">
                {event.agenda.map(item => (
                  <li key={item.time} className="flex flex-col sm:flex-row p-4 bg-gray-50 dark:bg-mukesa-black rounded-lg shadow-sm">
                    <div className="font-bold text-mukesa-blue w-full sm:w-40 mb-2 sm:mb-0 flex-shrink-0">{item.time}</div>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800 dark:text-white">{item.topic}</p>
                      {item.speaker && <p className="text-sm text-gray-600 dark:text-mukesa-gray-text">with {item.speaker}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EventDetailsPage;