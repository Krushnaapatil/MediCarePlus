import { z } from 'zod';

export const reminderSchema = z.object({
  medicineName: z.string().min(1, { message: "Medicine name is required." }),
  dosage: z.string().min(1, { message: "Dosage is required." }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Invalid time format (HH:MM)." }),
  frequency: z.enum(["Daily", "Twice a Day", "Weekly"]),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
});

export type ReminderFormValues = z.infer<typeof reminderSchema>;
