
import type { ElementType } from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export enum EventType {
  UPCOMING = 'Upcoming',
  PAST = 'Past',
  ONGOING = 'Ongoing',
}

export interface Speaker {
  name: string;
  title: string;
  imageUrl?: string;
}

export interface AgendaItem {
  time: string;
  topic: string;
  speaker?: string;
}

export interface Sponsor {
  name: string;
  logoUrl: string; 
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  imageUrl?: string; 
  bannerImageUrl?: string; 
  type: EventType;
  speakers?: Speaker[];
  agenda?: AgendaItem[];
  sponsors?: Sponsor[];
  registrationLink?: string;
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
  detailsLink?: string; 
}

export interface ExternalLink {
    id: string;
    name: string;
    url: string;
    description?: string;
    icon?: ElementType;
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: string; 
  imageUrl?: string;
  category: 'Apparel' | 'Accessories' | 'Stationery';

}