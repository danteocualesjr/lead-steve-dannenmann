
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Users, 
  Home as HomeIcon, 
  BookOpen, 
  TrendingUp, 
  Shield,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialCard from '@/components/ui/TestimonialCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Expert Tax Solutions for Your Financial Success
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Personalized tax strategies for individuals, business owners, and real estate investors with over 35 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-primary px-8 py-4 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent z-0"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg text-center transform transition-all hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-primary">35+</h3>
              <p className="text-foreground/70">Years of Experience</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center transform transition-all hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-primary">30,000+</h3>
              <p className="text-foreground/70">Tax Returns Prepared</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center transform transition-all hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-primary">100%</h3>
              <p className="text-foreground/70">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Comprehensive Tax & Accounting Services" 
            subtitle="We offer a wide range of services to help you achieve financial success."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8" />}
              title="Individual Tax Preparation"
              description="Expert tax preparation services tailored to your unique financial situation."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8" />}
              title="Small Business Accounting"
              description="Comprehensive accounting services allowing you to focus on growing your business."
            />
            <FeatureCard 
              icon={<HomeIcon className="h-8 w-8" />}
              title="Real Estate Investor Solutions"
              description="Specialized tax strategies for property investors to maximize returns."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="Tax Planning"
              description="Proactive tax planning strategies to minimize liabilities and optimize your finances."
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8" />}
              title="Business Growth Consulting"
              description="Strategic advice to help your business thrive and reach its full potential."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8" />}
              title="Audit Representation"
              description="Professional representation during IRS audits to protect your interests."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="button-outline">
              <Link to="/fees" className="flex items-center">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Steve Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Steven Dannenmann, CPA</h2>
              <p className="text-lg mb-6 text-foreground/80">
                With over 35 years of experience and more than 30,000 tax returns prepared, Steve brings unparalleled expertise to your financial needs.
              </p>
              <p className="text-lg mb-8 text-foreground/80">
                As a Certified Public Accountant since 1991, Steve is dedicated to staying current with tax laws, completing 80 hours of continuing education every two years to ensure you receive the most up-to-date advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="button-primary">
                  <Link to="/about">Learn More About Steve</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Steven Dannenmann, CPA" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Hear from our satisfied clients about their experience working with us."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Steve's expertise saved my business thousands in taxes. His proactive approach to tax planning has been invaluable for my company's growth."
              author="Michael Johnson"
              position="Small Business Owner"
            />
            <TestimonialCard 
              quote="As a real estate investor, I needed specialized tax knowledge. Steve delivered beyond my expectations, helping me structure my investments for optimal tax efficiency."
              author="Sarah Williams"
              position="Real Estate Investor"
            />
            <TestimonialCard 
              quote="I've been working with Steve for over 10 years. His attention to detail and personalized service makes tax season stress-free for me and my family."
              author="David Thompson"
              position="Individual Client"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Schedule a consultation with Steven Dannenmann, CPA today and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Link to="/newsletter">Subscribe to Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
