import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reminderSchema, ReminderFormValues } from '@/schemas/reminderSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';

interface ReminderFormProps {
  onSave: (data: ReminderFormValues) => void;
}

const ReminderForm: React.FC<ReminderFormProps> = ({ onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReminderFormValues>({
    resolver: zodResolver(reminderSchema),
  });

  const onSubmit = (data: ReminderFormValues) => {
    onSave(data);
    reset();
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-3xl">Add New Reminder</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="medicineName">Medicine Name</Label>
            <Input id="medicineName" {...register('medicineName')} />
            {errors.medicineName && <p className="text-sm text-red-500">{errors.medicineName.message}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dosage">Dosage (e.g., 1 pill)</Label>
              <Input id="dosage" {...register('dosage')} />
              {errors.dosage && <p className="text-sm text-red-500">{errors.dosage.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" {...register('time')} />
              {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="frequency">Frequency</Label>
            <Select id="frequency" {...register('frequency')}>
              <option>Daily</option>
              <option>Twice a Day</option>
              <option>Weekly</option>
            </Select>
            {errors.frequency && <p className="text-sm text-red-500">{errors.frequency.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">SMS Phone Number</Label>
            <Input id="phoneNumber" type="tel" placeholder="e.g. +1234567890" {...register('phoneNumber')} />
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <Button type="submit" size="lg" className="w-full text-lg">+ Save Reminder</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReminderForm;
