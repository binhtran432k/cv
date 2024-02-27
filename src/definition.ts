export interface Link {
  value: string;
  url: string;
}

export interface User {
  firstName: string;
  middleName?: string;
  lastName: string;
  address?: string;
  phone?: Link;
  github?: Link;
  linkedin?: Link;
  email?: Link;
  website?: Link;
  avatar?: {
    url: string;
    position?: string;
  };
  job?: string;
  summary?: string;
  quote?: {
    value: string;
    author: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface WidgetType {
  title: string;
  url?: string;
  subtitle?: string;
  location?: string;
  timeline?: string;
  items?: string[];
  imageUrl?: string;
}
