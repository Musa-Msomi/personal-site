export type ContactFormData = {
    name: string;
    title: string;
    email: string;
    message: string;
    honeypot: string; // Hidden field to catch bots
    submittedAt: number; // To check submission speed
  }