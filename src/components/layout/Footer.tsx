
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, Check } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">Steven Dannenmann, CPA</h3>
            <p className="mb-6 text-primary-foreground/80">
              Expert tax solutions designed for individuals, business owners, and real estate investors.
            </p>
            <div className="flex items-center mb-3">
              <Check className="h-5 w-5 mr-2 text-accent" />
              <span>35+ Years Experience</span>
            </div>
            <div className="flex items-center mb-3">
              <Check className="h-5 w-5 mr-2 text-accent" />
              <span>30,000+ Tax Returns Prepared</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-accent" />
              <span>Personalized Service</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/small-business-accounting" className="hover:text-accent transition-colors duration-200">
                  Small Business Accounting
                </Link>
              </li>
              <li>
                <Link to="/business-tax-preparation" className="hover:text-accent transition-colors duration-200">
                  Business Tax Preparation
                </Link>
              </li>
              <li>
                <Link to="/individual-tax-pricing" className="hover:text-accent transition-colors duration-200">
                  Individual Tax Services
                </Link>
              </li>
              <li>
                <Link to="/worksheets" className="hover:text-accent transition-colors duration-200">
                  Worksheets & Checklists
                </Link>
              </li>
              <li>
                <Link to="/tax-center" className="hover:text-accent transition-colors duration-200">
                  Tax Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200">
                  About Steve
                </Link>
              </li>
              <li>
                <Link to="/fees" className="hover:text-accent transition-colors duration-200">
                  Fees & Pricing
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="hover:text-accent transition-colors duration-200">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent" />
                <p>7310 Ritchie Hwy, Suite 317<br />Glen Burnie, MD 21061</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:4107611313" className="hover:text-accent transition-colors duration-200">
                  (410) 761-1313
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:Stevedcpa@gmail.com" className="hover:text-accent transition-colors duration-200">
                  Stevedcpa@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-3 mt-1 text-accent" />
                <p>Monday – Friday<br />9:30 am – 5:30 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>© {currentYear} Steven Dannenmann, CPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
