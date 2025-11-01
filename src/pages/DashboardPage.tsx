import React, { useState, useEffect } from 'react';
import ReminderForm from '@/components/ReminderForm';
import ReminderList from '@/components/ReminderList';
import { ReminderFormValues } from '@/schemas/reminderSchema';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export interface Reminder extends ReminderFormValues {
  id: string;
}

const DashboardPage: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // --- API Stub Functions ---

  const loadReminders = async () => {
    // TODO: Implement Firebase call to fetch reminders for the logged-in user.
    console.log("Loading reminders...");
    // For now, we'll use some mock data.
    const mockData: Reminder[] = [
      { id: '1', medicineName: 'Lisinopril', dosage: '1 tablet', time: '08:00', frequency: 'Daily', phoneNumber: '+1234567890' },
      { id: '2', medicineName: 'Metformin', dosage: '1 pill', time: '20:00', frequency: 'Daily', phoneNumber: '+1234567890' },
    ];
    setReminders(mockData);
  };

  const handleSaveReminder = async (data: ReminderFormValues) => {
    // TODO: Implement Firebase call to save (create or update) a reminder.
    console.log("Saving reminder:", data);
    const newReminder: Reminder = {
      id: new Date().toISOString(), // Use a temporary unique ID
      ...data,
    };
    setReminders(prev => [...prev, newReminder]);
  };

  const handleDeleteReminder = async (id: string) => {
    // TODO: Implement Firebase call to delete a reminder by its ID.
    console.log("Deleting reminder:", id);
    setReminders(prev => prev.filter(r => r.id !== id));
  };

  // Load reminders on component mount
  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="min-h-screen bg-secondary p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-lg font-medium text-sky-600 hover:underline">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <ReminderForm onSave={handleSaveReminder} />
          </div>
          <div className="lg:w-2/3">
            <ReminderList reminders={reminders} onDelete={handleDeleteReminder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
