
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="mt-2 text-lg text-foreground/70">
            We couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8">
          <Button className="button-primary inline-flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
