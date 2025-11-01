import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trash2, Clock, Pill, Repeat } from 'lucide-react';
import { Reminder } from '@/pages/DashboardPage';

interface ReminderListProps {
  reminders: Reminder[];
  onDelete: (id: string) => void;
}

const ReminderList: React.FC<ReminderListProps> = ({ reminders, onDelete }) => {
  if (reminders.length === 0) {
    return (
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Your Daily Schedule</h2>
        <p className="text-xl text-muted-foreground">You have no reminders scheduled. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold tracking-tight mb-8 text-center md:text-left">Your Daily Schedule</h2>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {reminders.map((reminder) => (
          <Card key={reminder.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Pill className="text-sky-600" />
                {reminder.medicineName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-lg">
              <p className="flex items-center gap-3"><Clock size={20} className="text-muted-foreground" /> <strong>Time:</strong> {reminder.time}</p>
              <p className="flex items-center gap-3"><Repeat size={20} className="text-muted-foreground" /> <strong>Frequency:</strong> {reminder.frequency}</p>
              <p><strong>Dosage:</strong> {reminder.dosage}</p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" onClick={() => onDelete(reminder.id)} className="w-full">
                <Trash2 className="mr-2 h-5 w-5" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReminderList;
