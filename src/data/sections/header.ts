import { HeaderData } from '../../types/resume';
import profileImage from '../../assets/profile.jpg';

export const headerData: HeaderData = {
  name: "Mohamed Fazrin",
  taglines: [
    {
      text: "Senior Software Development Specialist",
      prepend: "I am a"
    },
    {
      text: "Crafting spin digital experiences with code",
      prepend: "I enjoy"
    },
    {
      text: "Building innovative solutions with passion",
      prepend: "I love"
    },
    {
      text: "Transforming ideas into digital reality",
      prepend: "Focused on"
    },
    {
      text: "Creating seamless user experiences",
      prepend: "Dedicated to"
    }
  ],
  profileImage: profileImage,
  contact: {
    email: "nirzaf@gmail.com",
    mobile: "+97433253203",
    location: "Qatar",
    linkedin: "https://linkedin.com/in/mfmfazrin",
    github: "https://github.com/nirzaf",
    portfolio: "https://dotnetevangelist.net/resume"
  }
};
