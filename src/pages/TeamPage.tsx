
import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; 
import { MOCK_MEMBERS } from '../constants'; 
import { MemberItem } from '../types'; 

const MemberCard: React.FC<{ member: MemberItem }> = ({ member }) => {
  return (
    <div id={member.id} className="bg-mukesa-bg-alt rounded-xl shadow-xl text-center p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <img 
        src={member.imageUrl || `https://picsum.photos/seed/${member.id}/200/200`} 
        alt={member.name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-mukesa-blue" 
      />
      <h3 className="text-xl font-semibold text-mukesa-blue mb-1">{member.name}</h3>
      <p className="text-mukesa-red font-medium mb-2">{member.position}</p>
      {member.bio && <p className="text-sm text-mukesa-text-muted line-clamp-3">{member.bio}</p>}
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <SectionWrapper title="Meet Our Executive Team" subtitle="The dedicated student leaders steering MUKESA towards its goals.">
      {MOCK_MEMBERS.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_MEMBERS.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-mukesa-text-muted py-10">
          Team information is currently being updated. Please check back soon!
        </p>
      )}
      <div className="mt-12 text-center bg-mukesa-bg-alt p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold text-mukesa-blue mb-3">Interested in Leadership?</h4>
        <p className="text-mukesa-text-muted mb-4">MUKESA holds annual elections for executive positions. It's a great opportunity to develop leadership skills and contribute to the engineering student community.</p>
        <a href="mailto:elections@mukesa.example.com" className="text-mukesa-red hover:underline font-medium">Learn more about elections</a>
      </div>
    </SectionWrapper>
  );
};

export default TeamPage;