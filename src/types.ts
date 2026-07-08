export type Page = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  metrics?: {
    value: string;
    label: string;
  };
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  stats: {
    value: string;
    label: string;
  };
}

export interface BentoItem {
  title: string;
  description: string;
  tag?: string;
  iconName: string;
  className?: string;
}
