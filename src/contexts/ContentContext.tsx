
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { EventItem, NewsArticle, ProjectItem, AchievementItem, MemberItem, MerchItem, ExternalLink } from '../types';
import { MOCK_EVENTS, MOCK_NEWS, MOCK_PROJECTS, MOCK_ACHIEVEMENTS, MOCK_MEMBERS, MOCK_MERCH_ITEMS, EXTERNAL_LINKS_DATA } from '../constants';


interface ContentContextType {
  events: EventItem[];
  updateEvents: (data: EventItem[]) => void;
  news: NewsArticle[];
  updateNews: (data: NewsArticle[]) => void;
  projects: ProjectItem[];
  updateProjects: (data: ProjectItem[]) => void;
  achievements: AchievementItem[];
  updateAchievements: (data: AchievementItem[]) => void;
  members: MemberItem[];
  updateMembers: (data: MemberItem[]) => void;
  merch: MerchItem[];
  updateMerch: (data: MerchItem[]) => void;
  links: ExternalLink[];
  updateLinks: (data: ExternalLink[]) => void;
}



/**
 * Retrieves an item from localStorage. If it doesn't exist or there's an error,
 * it returns the provided fallback data.
 * @param key - The key in localStorage.
 * @param fallback - The default data to return if localStorage is empty or fails.
 */
const getInitialState = <T,>(key: string, fallback: T[]): T[] => {
    try {
        const item = window.localStorage.getItem(key);
        // If an item is found in storage, parse it. Otherwise, return the mock data.
        return item ? JSON.parse(item) : fallback;
    } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
        return fallback;
    }
};

/**
 * Saves a value to localStorage.
 * @param key - The key in localStorage.
 * @param value - The value to save (will be stringified).
 */
const setStorage = <T,>(key:string, value: T[]) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
    }
}

// --- Context Definition ---
const ContentContext = createContext<ContentContextType | undefined>(undefined);

// --- Provider Component ---
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize state for each content type, trying to load from localStorage first,
    // and falling back to thedata  from constants.ts.
    const [events, setEvents] = useState<EventItem[]>(() => getInitialState('mukesa-events', MOCK_EVENTS));
    const [news, setNews] = useState<NewsArticle[]>(() => getInitialState('mukesa-news', MOCK_NEWS));
    const [projects, setProjects] = useState<ProjectItem[]>(() => getInitialState('mukesa-projects', MOCK_PROJECTS));
    const [achievements, setAchievements] = useState<AchievementItem[]>(() => getInitialState('mukesa-achievements', MOCK_ACHIEVEMENTS));
    const [members, setMembers] = useState<MemberItem[]>(() => getInitialState('mukesa-members', MOCK_MEMBERS));
    const [merch, setMerch] = useState<MerchItem[]>(() => getInitialState('mukesa-merch', MOCK_MERCH_ITEMS));
    const [links, setLinks] = useState<ExternalLink[]>(() => getInitialState('mukesa-links', EXTERNAL_LINKS_DATA));

    // --- Updater Functions ---
    // These functions update the component state AND persist the changes to localStorage.
    const updateEvents = (data: EventItem[]) => { setEvents(data); setStorage('mukesa-events', data); };
    const updateNews = (data: NewsArticle[]) => { setNews(data); setStorage('mukesa-news', data); };
    const updateProjects = (data: ProjectItem[]) => { setProjects(data); setStorage('mukesa-projects', data); };
    const updateAchievements = (data: AchievementItem[]) => { setAchievements(data); setStorage('mukesa-achievements', data); };
    const updateMembers = (data: MemberItem[]) => { setMembers(data); setStorage('mukesa-members', data); };
    const updateMerch = (data: MerchItem[]) => { setMerch(data); setStorage('mukesa-merch', data); };
    const updateLinks = (data: ExternalLink[]) => { setLinks(data); setStorage('mukesa-links', data); };
    
    // The value object contains all the state and updater functions to be provided to consuming components.
    const value = {
        events, updateEvents,
        news, updateNews,
        projects, updateProjects,
        achievements, updateAchievements,
        members, updateMembers,
        merch, updateMerch,
        links, updateLinks
    };

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    );
};

// --- Custom Hook for easy consumption ---
// This hook simplifies accessing the context's value in components.
export const useContent = (): ContentContextType => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
