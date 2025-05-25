
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button'; // Adjusted path
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <ExclamationTriangleIcon className="h-24 w-24 text-mukesa-red mb-6" />
      <h1 className="text-5xl font-bold text-mukesa-blue mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-mukesa-text-muted mb-8">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go Back to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;