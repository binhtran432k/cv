export interface Link {
  value: string;
  url: string;
}

export interface User {
  firstName: string;
  middleName?: string;
  lastName: string;
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
  description?: string[];
}
