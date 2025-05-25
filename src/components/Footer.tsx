
import React from 'react';

// Placeholder icons for social media
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.255 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207-1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351-.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344C14.734 3.813 14.38 3.802 12 3.802zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-mukesa-bg-alt text-mukesa-text-muted border-t border-mukesa-border mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold text-lg text-mukesa-blue mb-3">MUKESA</h5>
            <p className="text-sm">
              Multimedia University of Kenya<br/>
              Engineering Students' Association<br/>
              P.O. Box 12345-00100, Nairobi, Kenya
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg text-mukesa-blue mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#/about" className="hover:text-mukesa-red transition-colors">About Us</a></li>
              <li><a href="#/events" className="hover:text-mukesa-red transition-colors">Events</a></li>
              <li><a href="#/register" className="hover:text-mukesa-red transition-colors">Join MUKESA</a></li>
              <li><a href="#/contact" className="hover:text-mukesa-red transition-colors">Contact Us (TBD)</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg text-mukesa-blue mb-3">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-mukesa-text-muted hover:text-mukesa-red transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-mukesa-text-muted hover:text-mukesa-red transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-mukesa-text-muted hover:text-mukesa-red transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-mukesa-border pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MUKESA. All Rights Reserved. Designed with ❤️ for Engineers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;