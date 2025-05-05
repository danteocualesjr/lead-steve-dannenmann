
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  BookOpen,
  CheckCircle,
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from '@/components/ui/FeatureCard';

const SmallBusinessAccounting = () => {
  return (
    <div>
      <PageHeader 
        title="Small Business Accounting"
        subtitle="Comprehensive accounting services to help your business thrive"
      />
      
      {/* Intro Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl italic text-foreground/80 text-center mb-10">
              "As a small business owner you have more important things to do than to keep your own books. We take care of your books for you, so you can get back to the job of running your business and generating profits."
            </blockquote>
            <p className="text-lg mb-6">
              Steve offers comprehensive accounting services for small businesses, providing you with the financial clarity and insights you need to make informed decisions and focus on growth.
            </p>
            <p className="text-lg mb-6">
              Our small business accounting services provide a solid foundation for your financial management, giving you the time and peace of mind to concentrate on what you do best—running your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Small Business Accounting Services"
            subtitle="Comprehensive solutions tailored to your business needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BarChart className="h-8 w-8" />}
              title="Bank Reconciliation"
              description="Regular reconciliation of all business accounts to ensure accuracy and identify discrepancies."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8" />}
              title="Income Statements"
              description="Detailed profit and loss statements showing your revenue and expenses over specific periods."
            />
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8" />}
              title="Balance Sheets"
              description="Comprehensive overview of your business assets, liabilities, and equity at any given time."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="General Ledger Maintenance"
              description="Meticulous record-keeping of all financial transactions for accurate accounting and reporting."
            />
            <FeatureCard 
              icon={<MessageSquare className="h-8 w-8" />}
              title="Unlimited Consultations"
              description="Ongoing support and advice to help you understand your financial position and make informed decisions."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-8 w-8" />}
              title="Customized Reporting"
              description="Financial reports tailored to your specific business needs and goals."
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Benefits of Professional Accounting Services"
                subtitle="Why outsourcing your accounting makes sense for your business"
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Save Valuable Time</h3>
                    <p className="text-foreground/70">Focus on running and growing your business while we handle the numbers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Reduce Errors</h3>
                    <p className="text-foreground/70">Professional accounting minimizes mistakes that could cost your business money.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Financial Clarity</h3>
                    <p className="text-foreground/70">Gain clear insights into your financial position to make better business decisions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Tax Preparation Ready</h3>
                    <p className="text-foreground/70">Well-maintained books make tax preparation more efficient and less stressful.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-foreground/70">Receive professional advice on financial strategies to improve your business.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Common Accounting Mistakes</h3>
              <p className="mb-6">Download our free guide:</p>
              <div className="p-6 bg-secondary rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-2">7 Costly Accounting Mistakes Business Owners Make</h4>
                <p className="text-foreground/70 mb-4">Learn how to avoid common pitfalls that could be costing your business money.</p>
                <Button className="button-outline w-full">
                  <Link to="/worksheets" className="flex items-center justify-center">
                    Download Free Guide <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-foreground/60 italic text-center">
                No email required. Instant download.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Business Accounting?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Contact Steve today to discuss how our small business accounting services can help your business thrive.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessAccounting;
