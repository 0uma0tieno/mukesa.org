
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { useContent } from '../contexts/ContentContext'; 
import { NewsArticle } from '../types';
import { NewspaperIcon, CalendarDaysIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const NewsArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  return (
    <div id={article.id} className="bg-white dark:bg-mukesa-gray-dark rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {article.imageUrl && (
         <div className="w-full h-56 bg-gray-200 dark:bg-mukesa-black">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
          <CalendarDaysIcon className="h-4 w-4 mr-1 text-mukesa-red" /> {article.date}
          {article.source && <span className="ml-2 pl-2 border-l border-gray-300 dark:border-mukesa-gray-dark">Source: {article.source}</span>}
        </div>
        <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-3">{article.title}</h3>
        <p className="text-gray-700 dark:text-mukesa-gray-text text-base mb-4 flex-grow line-clamp-4">{article.summary}</p>
        {article.fullStoryLink && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.open(article.fullStoryLink, '_blank')}
            className="mt-auto self-start border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white dark:border-mukesa-red dark:text-mukesa-red dark:hover:bg-mukesa-red dark:hover:text-white"
          >
            Read Full Story <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 inline" />
          </Button>
        )}
      </div>
    </div>
  );
};

const NewsPage: React.FC = () => {
  
  const { news } = useContent();

  return (
    <SectionWrapper title="Engineering News & Trends" subtitle="Stay informed about the latest developments and breakthroughs in the engineering world.">
       <div className="mb-10 bg-gray-50 dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-lg flex items-center">
            <NewspaperIcon className="h-10 w-10 text-mukesa-red mr-4 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-semibold text-mukesa-blue dark:text-mukesa-blue">Stay Current</h3>
                <p className="text-gray-700 dark:text-mukesa-gray-text">
                    The field of engineering is constantly evolving. We curate relevant news and insights to keep you ahead of the curve.
                </p>
            </div>
        </div>
      {news.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(article => (
            <NewsArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 dark:text-mukesa-gray-text py-10">
          No nws articles to display at the moment. Check back soon for the latest updates!
        </p>
      )}
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-mukesa-gray-text">Want to contribute or suggest a news source? <a href="mailto:news@mukesa.example.com" className="text-mukesa-red hover:underline">Contact us!</a></p>
      </div>
    </SectionWrapper>
  );
};

export default NewsPage;
