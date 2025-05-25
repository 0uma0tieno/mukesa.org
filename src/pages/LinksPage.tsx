
import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; // Adjusted path
import { EXTERNAL_LINKS_DATA } from '../constants'; // Adjusted path
import { ExternalLink } from '../types'; // Adjusted path
import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/24/outline';

const LinkCard: React.FC<{ link: ExternalLink }> = ({ link }) => {
  const IconComponent = link.icon || LinkIcon;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-mukesa-bg-alt p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <div className="flex items-start">
        <IconComponent className="h-8 w-8 text-mukesa-red mr-4 mt-1 flex-shrink-0 group-hover:text-mukesa-blue transition-colors" />
        <div>
          <h3 className="text-xl font-semibold text-mukesa-blue group-hover:underline mb-1">{link.name}</h3>
          {link.description && <p className="text-sm text-mukesa-text-muted mb-2">{link.description}</p>}
          <span className="text-xs text-mukesa-red group-hover:text-mukesa-blue transition-colors inline-flex items-center">
            Visit Site <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

const LinksPage: React.FC = () => {
  return (
    <SectionWrapper title="Resources & External Links" subtitle="Connect with affiliated organizations, university resources, and other helpful engineering platforms.">
      {EXTERNAL_LINKS_DATA.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {EXTERNAL_LINKS_DATA.map(link => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-mukesa-text-muted py-10">
          No external links to display at the moment.
        </p>
      )}
       <div className="mt-12 text-center bg-mukesa-bg-alt p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold text-mukesa-blue mb-3">Suggest a Resource</h4>
        <p className="text-mukesa-text-muted mb-4">Know a valuable resource that should be listed here? Let us know!</p>
        <a href="mailto:links@mukesa.example.com" className="text-mukesa-red hover:underline font-medium">Submit a Link</a>
      </div>
    </SectionWrapper>
  );
};

export default LinksPage;