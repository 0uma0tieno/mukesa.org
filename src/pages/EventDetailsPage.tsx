import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_EVENTS } from '../constants'; // Use MOCK_EVENTS
import SectionWrapper from '../components/SectionWrapper';
import { EventItem } from '../types';
import { CalendarDaysIcon, ArrowLeftIcon, MapPinIcon, ClockIcon, TicketIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  // Reverted to MOCK_EVENTS to find the specific event, ensuring the page works.
  const event = MOCK_EVENTS.find((e: EventItem) => e.id === eventId);

  // If no event is found with the given ID, show a user-friendly "not found" message.
  if (!event) {
    return (
        <SectionWrapper title="Event Not Found">
            <div className="text-center py-10">
                <ExclamationTriangleIcon className="h-20 w-20 text-mukesa-red mx-auto mb-6" />
                <p className="text-xl text-gray-600 dark:text-mukesa-gray-text mb-8">
                    Sorry, we couldn't find an event with that ID. It might have been moved or removed.
                </p>
                <Link to="/events">
                    <Button variant="primary">
                        <ArrowLeftIcon className="h-5 w-5 mr-2 inline" />
                        Back to All Events
                    </Button>
                </Link>
            </div>
        </SectionWrapper>
    );
  }

  const isInternalLink = event.registrationLink && event.registrationLink.startsWith('/');

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
          {(event.bannerImageUrl || event.imageUrl) && (
            <img 
              src={event.bannerImageUrl || event.imageUrl} 
              alt={`${event.title} banner`} 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 bg-gray-200 dark:bg-mukesa-black" 
            />
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-mukesa-blue dark:text-black mb-6">{event.title}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-gray-700 dark:text-mukesa-gray-text border-t border-b border-gray-200 dark:border-mukesa-black py-6">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
              <div>
                <strong className="block text-gray-800 dark:text-black">Date</strong>
                {event.date}
              </div>
            </div>
            {event.time && (
              <div className="flex items-center">
                <ClockIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
                <div>
                  <strong className="block text-gray-800 dark:text-black">Time</strong>
                  {event.time}
                </div>
              </div>
            )}
            {event.location && (
              <div className="flex items-center">
                <MapPinIcon className="h-8 w-8 mr-3 text-mukesa-red flex-shrink-0" /> 
                <div>
                  <strong className="block text-gray-800 dark:text-black">Location</strong>
                  {event.location}
                </div>
              </div>
            )}
          </div>

          {event.registrationLink && (
            <div className="my-8 text-center">
              {isInternalLink ? (
                <Link to={event.registrationLink}>
                  <Button variant="primary" size="lg" className="shadow-lg">
                    <TicketIcon className="h-6 w-6 mr-2 inline" /> Register for this Event
                  </Button>
                </Link>
              ) : (
                <Button variant="primary" size="lg" onClick={() => window.open(event.registrationLink, '_blank', 'noopener,noreferrer')} className="shadow-lg">
                  <TicketIcon className="h-6 w-6 mr-2 inline" /> Register for this Event
                </Button>
              )}
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-mukesa-blue dark:text-black mt-8 mb-4 border-b-2 border-mukesa-red pb-2">About the Event</h2>
          <p className="text-lg text-gray-700 dark:text-mukesa-gray-text leading-relaxed whitespace-pre-wrap">
            {event.description}
          </p>

          {event.speakers && event.speakers.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-mukesa-blue dark:text-black mt-10 mb-4 border-b-2 border-mukesa-red pb-2">Speakers</h2>
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
              <h2 className="text-2xl font-bold text-mukesa-blue dark:text-black mt-10 mb-4 border-b-2 border-mukesa-red pb-2">Event Agenda</h2>
              <ul className="space-y-4">
                {event.agenda.map(item => (
                  <li key={item.time} className="flex flex-col sm:flex-row p-4 bg-gray-50 dark:bg-mukesa-black rounded-lg shadow-sm text-black dark:text-black">
                    <div className="font-bold text-mukesa-blue dark:text-mukesa-blue w-full sm:w-40 mb-2 sm:mb-0 flex-shrink-0">{item.time}</div>
                    <div className="flex-grow">
                      <p>
                        {item.topic}
                        {item.speaker && (
                          <span className="block text-sm font-normal text-gray-600 dark:text-mukesa-gray-text">
                            with {item.speaker}
                          </span>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {event.sponsors && event.sponsors.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-mukesa-blue dark:text-black mt-10 mb-4 border-b-2 border-mukesa-red pb-2">Our Sponsors & Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {event.sponsors.map(sponsor => (
                  <div key={sponsor.name} className="bg-gray-50 dark:bg-mukesa-black p-4 rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <img 
                      src={sponsor.logoUrl} 
                      alt={`${sponsor.name} logo`} 
                      className="max-h-20 w-full object-contain" 
                      title={sponsor.name}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EventDetailsPage;