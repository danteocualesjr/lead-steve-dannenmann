
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, BookOpen, Award, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Steve"
        subtitle="Meet the expert behind the numbers"
      />
      
      {/* Bio Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/4aa1ea90-e93e-4ebd-937d-2dc7223097d2.png" 
                alt="Steven Dannenmann, CPA" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Steven Dannenmann, CPA</h2>
              <p className="text-lg mb-6">
                Steve earned his degree from the University of Baltimore in 1989 and became a Certified Public Accountant in 1991. With over 35 years of experience in the field, he has prepared more than 30,000 tax returns for individuals and businesses.
              </p>
              <p className="text-lg mb-6">
                Steve is dedicated to staying current with tax laws, completing 80 hours of continuing education every two years to ensure his clients receive the most up-to-date advice and strategies.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">
                "Steve's goal is to help you succeed financially, offering proactive advice that makes tax season stress-free and puts more money back in your pocket."
              </blockquote>
              <p className="text-lg">
                Clients appreciate his personalized approach and commitment to confidentiality and professionalism. Steve believes in building long-term relationships with his clients based on trust and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience & Qualifications */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Experience & Qualifications"
            subtitle="A foundation of expertise and continuous education"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-lg text-center">
              <Briefcase className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">35+ Years</h3>
              <p className="text-foreground/70">Professional Experience</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">University of Baltimore</h3>
              <p className="text-foreground/70">Class of 1989</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">CPA Since 1991</h3>
              <p className="text-foreground/70">Certified Professional</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">30,000+</h3>
              <p className="text-foreground/70">Tax Returns Prepared</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader 
              title="Steve's Philosophy"
              centered
            />
            <p className="text-lg mb-6">
              Steve's approach to accounting and tax preparation is rooted in the belief that personalized service makes all the difference. He takes the time to understand each client's unique financial situation and goals.
            </p>
            <p className="text-lg mb-6">
              By staying ahead of changing tax laws and regulations, Steve ensures his clients benefit from every available deduction and credit. His proactive approach helps clients plan effectively throughout the year, not just during tax season.
            </p>
            <p className="text-lg mb-10">
              Steve is committed to building lasting relationships based on trust, confidentiality, and exceptional service. His clients know they can count on him for honest advice and professional guidance year after year.
            </p>
            <Button className="button-primary">
              <Link to="/contact" className="flex items-center">
                Schedule a Consultation <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Continuing Education */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card bg-white/10 p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Commitment to Continuing Education</h2>
            <p className="text-lg mb-6">
              Tax laws and regulations are constantly changing. To provide the best possible service to his clients, Steve completes 80 hours of continuing education every two years, far exceeding the minimum requirements for CPAs.
            </p>
            <p className="text-lg mb-6">
              This dedication to ongoing education ensures that Steve remains at the forefront of tax planning strategies and compliance requirements. His clients benefit from his deep and current knowledge of tax law.
            </p>
            <p className="text-lg text-center font-semibold">
              When you work with Steve, you can be confident that you're receiving advice based on the latest tax code developments and best practices in the industry.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Steve?</h2>
          <p className="text-xl mb-8 text-foreground/80 max-w-3xl mx-auto">
            Experience the difference that personalized, expert tax services can make for your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="button-primary">
              <Link to="/contact">Contact Steve Today</Link>
            </Button>
            <Button variant="outline" className="button-outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
