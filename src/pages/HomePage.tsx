import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CheckCircle, MessageCircle, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featureCards = [
  {
    icon: <CheckCircle className="h-12 w-12 text-sky-600" />,
    title: "Easy Scheduling",
    description: "Quickly add medications with simple inputs for name, dosage, and time. Our intuitive interface makes it effortless."
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-sky-600" />,
    title: "Automated SMS Alerts",
    description: "Receive timely SMS reminders directly to your phone. Never worry about missing a dose again, even without the app."
  },
  {
    icon: <Users className="h-12 w-12 text-sky-600" />,
    title: "Caregiver Monitoring",
    description: "Optionally, allow family or caregivers to monitor schedules and receive alerts, ensuring a network of support."
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 mb-6">
              An Intelligent Medication Reminder System for Elderly Persons
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground">
              MediCarePlus helps you stay on track with your health, providing simple, reliable reminders for all your medications.
            </p>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">The Problem</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Managing multiple medications can be overwhelming, especially for the elderly. Forgetting a dose or taking it at the wrong time can have serious health consequences. Keeping track of complex schedules is a daily challenge.
                </p>
              </div>
              <div className="bg-sky-100 p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-sky-800 mb-4">Our Solution</h2>
                <p className="text-xl text-sky-700 leading-relaxed">
                  MediCarePlus simplifies medication management with an easy-to-use platform and automated SMS alerts. It ensures that you or your loved ones always take the right medication at the right time, providing peace of mind and promoting better health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Why Choose MediCarePlus?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-sky-100 rounded-full p-4 w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
