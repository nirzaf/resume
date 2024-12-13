export interface TaglineData {
  text: string;
  prepend: string;
}

export interface NameTitleProps {
  name: string;
  taglines: TaglineData[];
}

export interface Contact {
  email: string;
  mobile: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface HeaderProps {
  name: string;
  taglines: TaglineData[];
  contact: Contact;
  profileImage: string;
}

export interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
}
