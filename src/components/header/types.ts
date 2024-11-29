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
  title: string;
  contact: Contact;
  profileImage: string;
}

export interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
}
