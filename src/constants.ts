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
    id: '7',
    title: 'MUKESA - IEEE Picnic',
    date: '2025-10-18',
    location: 'Ololua Nature Trail',
    description: 'Join us for a fun and relaxing picnic co-hosted by MUKESA and the IEEE MMU Student Branch at the beautiful Ololua Nature Trail. A great opportunity to network, socialize, and enjoy nature. The contribution is KES 399 per person.',
    imageUrl: 'https://picsum.photos/seed/event7/600/400',
    bannerImageUrl: 'https://picsum.photos/seed/event7banner/1200/400',
    type: EventType.UPCOMING,
    sponsors: [
      { name: 'IEEE MMU Student Branch', logoUrl: '/images/MMUK SB LOGO NL.png' },
      { name: 'MUKESA', logoUrl: '/images/MUKESA_LOGO.png' }
    ],
    registrationLink: '#'
  },

  {
    id: '6',
    title: 'CiVEXPO 2025',
    date: '2025-10-03',
    time: '8:30 AM - 4:20 PM onwards',
    location: 'Multimedia University of Kenya Conference Hall',
    description: 'A premier event for civil engineering students, featuring technical talks, keynote speeches from industry leaders, project presentations, and a panel discussion on the future of engineering. Connect with professionals, learn about emerging trends, and explore career pathways.',
    imageUrl: '/images/Screenshot 2025-10-02 192557.png',
    bannerImageUrl: '/images/Screenshot 2025-10-02 192557.png',
    type: EventType.UPCOMING,
    speakers: [
      { name: 'Salim Mohamed', title: 'Alumni UON', imageUrl: 'https://picsum.photos/seed/speaker4/100/100' },
      { name: 'Eng. Jennifer Jelagat', title: 'KURA', imageUrl: 'https://picsum.photos/seed/speaker5/100/100' },
      { name: 'QS Fidelis Maiba', title: 'CEO, Batir Constructions LTD', imageUrl: '/images/WhatsApp Image 2025-10-02 at 10.35.35_fb58f2e8.jpg' },
      { name: 'DR. Elisha Akech Ochungo', title: 'G&A Consultants', imageUrl: '/images/Dr Elisha Aketch Ochungo.png' },
      { name: 'DR. Martin Wafula', title: 'DPhil Candidate Oxford University', imageUrl: '/images/Dr Wachoye Martin Wafula.png' },
      { name: 'Ms. Mary Abungu', title: 'TIMCON Associates LTD', imageUrl: 'https://picsum.photos/seed/speaker9/100/100' },
    ],
    agenda: [
      { time: '8:30 AM - 9:00 AM', topic: 'Arrival & Registration' },
      { time: '9:00 AM - 9:30 AM', topic: 'Opening Ceremony', speaker: 'Organizing Committee, Faculty Rep, DVC Academics' },
      { time: '9:30 AM - 10:00 AM', topic: 'Technical Talk: Sustainable Engineering - Fibreglasses', speaker: 'Salim Mohamed' },
      { time: '10:00 AM - 10:30 AM', topic: 'Keynote: Career Pathways for Young Engineers', speaker: 'Eng. Jennifer Jelagat & Eng. Doreen' },
      { time: '10:30 AM - 11:00 AM', topic: 'IEK Future Leaders Session - Technical Talks', speaker: 'Diana Rose & Sammy Arisa' },
      { time: '11:00 AM - 11:30 AM', topic: 'ACEK Future Leaders Session' },
      { time: '11:30 AM - 12:00 PM', topic: 'Technical Talk: Materials of Tomorrow', speaker: 'QS Fidelis Maiba' },
      { time: '12:00 PM - 12:30 PM', topic: 'TIMCON Associates LTD Session', speaker: 'Ms. Mary Abungu' },
      { time: '12:30 PM - 1:00 PM', topic: 'Keynote: Entrepreneurship in Engineering & Mentorship', speaker: 'DR. Elisha Akech Ochungo' },
      { time: '1:00 PM - 2:00 PM', topic: 'Lunch Break' },
      { time: '2:00 PM - 2:30 PM', topic: 'Opportunities in Student Led Associations (Presentations)', speaker: 'ACES KU, CSA TUK, ACES UON' },
      { time: '2:30 PM - 3:00 PM', topic: 'Projects Presentation' },
      { time: '3:00 PM - 4:00 PM', topic: 'Panel Discussion: The Future Engineer – Skills, Innovation, and Adaptability' },
      { time: '4:00 PM - 4:20 PM', topic: 'Awards & Recognition Ceremony' },
      { time: '4:20 PM Onwards', topic: 'Closing Ceremony & Photo Session' },
    ],

sponsors: [
      { name: 'Kenya Urban Roads Authority (KURA)', logoUrl: '/images/KURA.png' },
      { name: 'Institution of Engineers of Kenya (IEK)', logoUrl: '/images/IEK.png' },
      { name: 'IEK-FL', logoUrl: '/images/IEK FL.png' },
      { name: 'ACEK FL', logoUrl: '/images/future leaders kenya.png' },
      { name: 'ACES KU', logoUrl: '/images/ACES KU.png' },
      { name: 'CSA TUK', logoUrl: '/images/CSA.png' },
      { name: 'ACES UON', logoUrl: '/images/ACES UON.jpg' },
      { name: 'The Lads', logoUrl: '/images/The Lads.png' },
      { name: 'Innovate-Her', logoUrl: '/images/Innovate-Her.png' },
    ],

    registrationLink: 'https://luma.com/b623wq9s'
  },
  {
    id: '2',
    title: '8th Engineers Dinner',
    date: 'TBC',
    time: 'TBC',
    location: 'TBC',
    description: 'Wrapping up the year in style.',
    imageUrl: '/images/dinner.png',
    bannerImageUrl: '/images/dinner banner.png',
    type: EventType.UPCOMING,
   
  },
  {
    id: '3',
    title: 'MMU Innovation Week 2025',
    date: '2025-03-17',
    time: 'All Day',
    location: 'MMU, Pavillion B',
    description: 'A showcase of student innovations and talks from industry leaders..',
    imageUrl: '/images/TECHNOVATION WEEK.png',
    bannerImageUrl: '/images/innovation week banner.png',
    type: EventType.PAST,
  sponsors: [
      { name: 'IEEE MMU Student Branch', logoUrl: '/images/MMUK SB LOGO NL.png' },
      { name: 'MUKESA', logoUrl: '/images/MUKESA_LOGO.png' },
      { name: 'The Lads', logoUrl: '/images/The Lads.png' },
      { name: 'Innovate-Her', logoUrl: '/images/Innovate-Her.png' },
      { name: 'AWIT', logoUrl: '/images/AWIT.png' },
      { name: 'maabara bunifu', logoUrl: '/images/maabara bunifu.png' },
      { name: 'Microsoft', logoUrl: '/images/microsoft.png' },
      { name: 'REREC', logoUrl: '/images/REREC.png' },
      { name: 'Safaricom', logoUrl: '/images/safaricom.png' },
      { name: 'Google', logoUrl: '/images/google.png' },
      { name: 'Geek SSters', logoUrl: '/images/geek ssters.png' },
      { name: 'sanasana', logoUrl: '/images/sanasana.png' },
      { name: 'Zindua School', logoUrl: '/images/Zindua school.png' },
    ],
    registrationLink: '#'
  },
  {
    id: '4',
    title: 'MUKESA Football Tournament 2025',
    date: '2025-02-17',
    time: '10:00 AM - 04:00 PM',
    location: 'MMU Stadium',
    description: 'Breaking class monotony through football and fun games.',
    imageUrl: '/images/MUKESA FOOTBALL TOURNAMENT.png',
    bannerImageUrl: '/images/football tournament banner.png',
    type: EventType.PAST,

    sponsors: [
      { name: 'IEEE MMU Student Branch', logoUrl: '/images/MMUK SB LOGO NL.png' },
      { name: 'MUKESA', logoUrl: '/images/MUKESA_LOGO.png' }
    ],

    registrationLink: '#'
  },
  {
    id: '5',
    title: 'Ongoing: ThinkTank by The Lads',
    date: 'Ongoing',
    time: 'Every Tuesday',
    location: 'Lecture Room 3',
    description: 'Up-skilling students over a refreshing cup of coffee.',
    imageUrl: '/images/thinktank dp.png',
    bannerImageUrl: '/images/thinktank banner.png',
    type: EventType.ONGOING,

    sponsors: [
      { name: 'IEEE MMU Student Branch', logoUrl: '/images/MMUK SB LOGO NL.png' },
      { name: 'MUKESA', logoUrl: '/images/MUKESA_LOGO.png' }
    ],

    registrationLink: '#'
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
export const MERCH_CONTACT_EMAIL = "mukesa1819@gmail.com";
export const REGISTRATION_CONTACT_EMAIL = "mukesa1819@gmail.com";


export const MOCK_MERCH_ITEMS: MerchItem[] = [
  { id: 'm1', name: 'MUKESA Logo T-Shirt', description: 'Comfortable cotton T-Shirt with the official MUKESA logo. Available in S, M, L, XL.', price: 'KES 1200', imageUrl: '/images/shirt.png', category: 'Apparel' },
  { id: 'm2', name: 'MUKESA Engineering Hoodie', description: 'Warm and stylish hoodie, perfect for those late-night study sessions. Features "Engineer" print.', price: 'KES 2500', imageUrl: '/images/hoodie.png', category: 'Apparel' },
  { id: 'm3', name: 'MUKESA Branded Mug', description: 'Start your day right with a MUKESA coffee mug. "Powered by Caffeine & Code" tagline.', price: 'KES 800', imageUrl: '/images/mug.png', category: 'Accessories' },
  { id: 'm4', name: 'MUKESA Notebook & Pen Set', description: 'Premium notebook and pen set for your brilliant ideas and schematics.', price: 'KES 700', imageUrl: '/images/notebook.png', category: 'Stationery' },
  { id: 'm5', name: 'MUKESA Cap', description: 'Stylish cap with embroidered MUKESA emblem.', price: 'KES 900', imageUrl: '/images/cap.png', category: 'Accessories' },
];