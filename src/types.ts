
export interface NavLinkItem {
  name: string;
  path: string;
}

export enum EventType {
  UPCOMING = 'Upcoming',
  PAST = 'Past',
  ONGOING = 'Ongoing',
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  type: EventType;
  detailsLink?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  team: string[];
  description: string;
  imageUrl?: string;
  repoLink?: string;
  paperLink?: string;
}

export interface MemberItem {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  bio?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl?: string;
  fullStoryLink?: string;
  source?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  achievedBy: string;
}

export interface ExternalLink {
    id: string;
    name: string;
    url: string;
    description?: string;
    icon?: React.ElementType;
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: string; // e.g., "KES 1500"
  imageUrl?: string;
  category: 'Apparel' | 'Accessories' | 'Stationery';
  // Optional: sizes?: string[]; colors?: string[];
}