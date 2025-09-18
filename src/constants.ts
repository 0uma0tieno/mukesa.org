import { NavLinkItem, EventItem, EventType, ProjectItem, MemberItem, NewsArticle, AchievementItem, ExternalLink, MerchItem } from './types';
import { AcademicCapIcon, BeakerIcon,  TrophyIcon, BriefcaseIcon } from '@heroicons/react/24/outline'; // Using heroicons for variety

export const NAVIGATION_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About MUKESA', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Projects & Papers', path: '/projects' },
  //{ name: 'News & Trends', path: '/news' },
  { name: 'Our Team', path: '/team' },
  { name: 'Merch', path: '/merch' }, 
  { name: 'Join Us', path: '/register' },
  { name: 'Resources & Links', path: '/links' },
  
];

export const MOCK_EVENTS: EventItem[] = [
  { 
    id: '1', 
    title: 'CivExpo 2025', 
    date: '2025-10-15', 
    time: '09:00 AM - 05:00 PM', 
    location: 'MMU Main Campus', 
    description: 'An event to link Civil engineering students to industry experts.', 
    imageUrl: '/images/civ expo.png', 
    type: EventType.UPCOMING, 
    speakers: [
      { name: 'Jane Doe', title: 'Senior Civil Engineer at BuildIt Ltd.', imageUrl: '/images/jane.png' },
      { name: 'John Smith', title: 'Project Manager at InfraWorks', imageUrl: '/images/john.png' }
    ],
    agenda: [
      { time: '09:00 AM', topic: 'Registration & Welcome Address' },
      { time: '10:00 AM', topic: 'Keynote Speech by Jane Doe', speaker: 'Jane Doe' },
      { time: '11:00 AM', topic: 'Panel Discussion: Future of Civil Engineering', speaker: 'John Smith' },
    ],
    registrationLink: '#',
   
  },
  { 
    id: '2', 
    title: 'MUKESA Annual Dinner 2025', 
    date: '2025-11-05', 
    time: '07:00 PM - 11:00 PM', 
    location: 'MMU Dining Hall', 
    description: 'Wrapping up the year in style.', 
    imageUrl: '/images/dinner.png', 
    type: EventType.UPCOMING, 
    speakers: [
      { name: 'Alice Johnson', title: 'Event Host and MC', imageUrl: '/images/alice.png' },
    ],
    agenda: [
      { time: '07:00 PM', topic: 'Welcome Drinks' },
      { time: '08:00 PM', topic: 'Dinner Service' },
    ],
    registrationLink: '#',
  },
  { 
    id: '3', 
    title: 'MMU Innovation Week 2025', 
    date: '2025-03-17', 
    time: 'All Day', 
    location: 'MMU Campus', 
    description: 'A showcase of student innovations and talks from industry leaders..', 
    imageUrl: '/images/TECHNOVATION WEEK.png', 
    type: EventType.PAST, 
    speakers: [
      { name: 'Dr. Emily Carter', title: 'Expert in Educational Technology', imageUrl: '/images/emily.png' },
      { name: 'Prof. Alan Turing', title: 'Pioneer in Computer Science', imageUrl: '/images/alan.png' }
    ],
    agenda: [
      { time: '09:00 AM', topic: 'Opening Ceremony' },
      { time: '10:00 AM', topic: 'Panel Discussion: The Future of Tech' },
    ],
    registrationLink: '#',
  },
  { 
    id: '4', 
    title: 'MUKESA Football Tournament 2025', 
    date: '2025-02-17', 
    time: '10:00 AM - 04:00 PM', 
    location: 'MMU Sports Field', 
    description: 'Breaking class monotony through football and fun games.', 
    imageUrl: '/images/MUKESA FOOTBALL TOURNAMENT.png', 
    type: EventType.PAST, 
    speakers: [
      { name: 'Coach Mike', title: 'Local Football Coach and Trainer', imageUrl: '/images/coach_mike.png' },
    ],
    agenda: [
      { time: '10:00 AM', topic: 'Match Kick-off' },
      { time: '12:00 PM', topic: 'Halftime Break' },
    ],
    registrationLink: '#',
  },
  { 
    id: '5', 
    title: 'Ongoing: ThinkTank by The Lads', 
    date: 'Ongoing', 
    time: 'Every Saturday', 
    location: 'MMU Cafeteria', 
    description: 'Up-skilling students over a refreshing cup of coffee.', 
    imageUrl: '/images/thinktank dp.png', 
    type: EventType.ONGOING, 
    speakers: [
      { name: 'Various Industry Experts', title: 'Guest speakers from various tech industries.', imageUrl: '/images/guest_speaker.png' },
    ],
    agenda: [
      { time: '10:00 AM', topic: 'Networking & Coffee' },
      { time: '11:00 AM', topic: 'Skill Development Session' },
    ],
    registrationLink: '#',
  },
];

export const MOCK_PROJECTS: ProjectItem[] = [
  { id: '1', title: 'Home Solar Energy Monitoring System', team: ['MarkRichard W Gacira.', 'Bornface O Oduor.'], description: 'A real time home solar energy monitoring system.', imageUrl: '/images/image_1748098373003.png', repoLink: '#', paperLink: '#' },
  { id: '2', title: 'KadiLink', team: ['Ruud O Ouma.', 'Trevor M Moseti.'], description: 'NFC Based Smart Card Systems for applications in Kenyan Higher Learning Instituitions.', imageUrl: '/images/image_1748098604882.png', repoLink: '#' },
  { id: '3', title: 'Microwave Patch Antenna for Nanosatelites', team: ['Hellen R Ouma.', 'Lenox Miheso.'], description: 'A low-cost antenna to facilitate reliable communication in remote areas.', imageUrl: '/images/image_1748099505406.png', paperLink: '#' },
];

export const MOCK_MEMBERS: MemberItem[] = [
  { id: '1', name: 'MarkRichard W Gacira', position: 'Chairperson', imageUrl: '/images/mark.png', bio: 'Leads MUKESA with a vision for innovation and student empowerment.' },
  { id: '2', name: 'Stella Obieno', position: 'Vice Chairperson', imageUrl: '/images/stella.png', bio: 'Supports the chairperson and oversees internal affairs.' },
  { id: '3', name: 'Esther N Waema', position: 'Secretary', imageUrl: '/images/nduta.png', bio: 'Writes minutes and follows up on member activities.' },
  { id: '4', name: 'Mercy M Munyinyi', position: 'Treasurer', imageUrl: '/images/MERCY.png', bio: 'Oversees the financial health and planning of the association.' },
  { id: '5', name: 'Kelvian Wesale', position: 'Industry Liason', imageUrl: '/images/wesale.png', bio: 'Links the body to the industry.' },
  { id: '6', name: 'Xerxes Majimbo', position: 'Projects Coordinator', imageUrl: '/images/majimbo.png', bio: 'Manages all official communication.' },
  { id: '7', name: 'Ruud Ouma', position: 'Design Lead', imageUrl: '/images/ru.png', bio: 'Responsible for all matters design.' },
  { id: '8', name: 'Eugene Gusmao', position: 'Organizing Secretary', imageUrl: '/images/gusmao.png', bio: 'Writes minutes and follows up on member activities.' },
  { id: '9', name: 'Lewis Maina', position: 'ICT Secretary', imageUrl: '/images/maina.png', bio: 'Oversees the financial health and planning of the association.' },
  { id: '10', name: 'Malcomx D Odhiambo', position: 'Communication and Welfare', imageUrl: '/images/malcomx.png', bio: 'Ensures the club gets effective publicity.' },
];

export const MOCK_NEWS: NewsArticle[] = [
  { id: '1', title: 'Breakthrough in Quantum Computing', summary: 'Researchers achieve a new milestone in quantum processor stability...', date: '2024-07-28', imageUrl: 'https://picsum.photos/seed/news1/600/400', fullStoryLink: '#', source: 'Tech Review' },
  { id: '2', title: 'The Rise of Sustainable Engineering Practices', summary: 'How green technologies are reshaping the engineering landscape.', date: '2024-07-25', imageUrl: 'https://picsum.photos/seed/news2/600/400', fullStoryLink: '#', source: 'Engineering Today' },
  { id: '3', title: 'AI in Healthcare: Transforming Diagnostics', summary: 'New AI algorithms show promising results in early disease detection.', date: '2024-07-22', imageUrl: 'https://picsum.photos/seed/news3/600/400', fullStoryLink: '#', source: 'FutureTech Magazine' },
];

export const MOCK_ACHIEVEMENTS: AchievementItem[] = [
  { id: '1', title: 'IEK-FL Logo Design Contest', description: 'MUKESA team won the IEK-FL logo design Contest.', date: '2025-04-15', imageUrl: '/images/future leaders kenya.png', achievedBy: 'Ruud Ouma & MarkRichard Wahogo' },
  { id: '2', title: 'Innovation Grant Awarded', description: 'Student project on renewable energy received a prestigious innovation grant.', date: '2024-03-01', imageUrl: 'https://picsum.photos/seed/achieve2/600/400', achievedBy: 'Student A & Team' },
  { id: '3', title: 'Best Paper Award at IEEE Conference', description: 'Research paper on sustainable materials recognized at the International Conference on Environmental Engineering.', date: '2025-01-20', imageUrl: 'https://picsum.photos/seed/achieve3/600/400', achievedBy: 'Student B' },
];

export const EXTERNAL_LINKS_DATA: ExternalLink[] = [
    { id: '1', name: 'IEEE MMU Student Branch', url: '#', description: 'Connect with the IEEE community at Multimedia University.', icon: AcademicCapIcon },
    { id: '2', name: 'Innovate-Her', url: '#', description: 'Official page ESA WIE MMU-K.', icon: BeakerIcon },
    { id: '3', 'name': 'Institution of Engineers of Kenya (IEK)', url: '#', description: 'The national body for professional engineers in Kenya.', icon: BriefcaseIcon },
    { id: '4', name: 'Engineers Board of Kenya (EBK)', url: '#', description: 'Regulatory body for engineering practice in Kenya.', icon: TrophyIcon },
];

export const MPESA_PAYBILL = "522533";
export const MPESA_ACCOUNT_NUMBER = "9999444";
export const MEMBERSHIP_FEE = "KES 300";

export const MOCK_MERCH_ITEMS: MerchItem[] = [
  { id: 'm1', name: 'MUKESA Logo T-Shirt', description: 'Comfortable cotton T-Shirt with the official MUKESA logo. Available in S, M, L, XL.', price: 'KES 1200', imageUrl: '/images/shirt.png', category: 'Apparel' },
  { id: 'm2', name: 'MUKESA Engineering Hoodie', description: 'Warm and stylish hoodie, perfect for those late-night study sessions. Features "Engineer" print.', price: 'KES 2500', imageUrl: '/images/hoodie.png', category: 'Apparel' },
  { id: 'm3', name: 'MUKESA Branded Mug', description: 'Start your day right with a MUKESA coffee mug. "Powered by Caffeine & Code" tagline.', price: 'KES 800', imageUrl: '/images/mug.png', category: 'Accessories' },
  { id: 'm4', name: 'MUKESA Notebook & Pen Set', description: 'Premium notebook and pen set for your brilliant ideas and schematics.', price: 'KES 700', imageUrl: '/images/notebook.png', category: 'Stationery' },
  { id: 'm5', name: 'MUKESA Cap', description: 'Stylish cap with embroidered MUKESA emblem.', price: 'KES 900', imageUrl: '/images/cap.png', category: 'Accessories' },
];