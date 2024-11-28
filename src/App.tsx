import { useState, useEffect } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import TopSkills from './components/TopSkills'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import OtherQualifications from './components/OtherQualifications'

const resumeData = {
  header: {
    name: "M.F.M Fazrin",
    title: "MSc in Software Engineering",
    location: "Al Sadd, Doha, Qatar",
    phone: "+974 12345678",
    email: "mfmfazrin@gmail.com",
    links: {
      github: "github.com/nirzaf",
      linkedin: "linkedin.com/in/mfmfazrin",
      portfolio: "Portfolio"
    }
  },
  summary: `As a Senior Software Development Specialist at the Primary Health Care Corporation in Qatar, I develop robust, high-concurrency web applications with a strong focus on delivering a seamless and positive end-user experience.

With over a decade of software development experience, I have a proven track record of delivering high-quality solutions across diverse industries. My technical proficiency spans a wide range of technologies, and I am adept at quickly learning and adapting to new challenges.

I am seeking a challenging role where I can leverage my expertise and passion for innovation to contribute to the development of impactful software.`,
  
  topSkills: [
    "C#/.NET Core", "ASP.NET Core", "Angular", "Azure Cloud Services", 
    "SQL Server", "Microservices", "REST API", "Agile Methodologies", 
    "Leadership & Mentoring"
  ],
  
  workExperience: [
    {
      company: "Primary Health Care Corporation (Qatar)",
      position: "Software Development Specialist",
      startDate: "July 2022",
      endDate: "Present",
      description: [
        "Led the development of backend services for the Nar'aakom Mobile Application",
        "Integrated Azure Active Directory for secure authentication",
        "Optimized database query performance and implemented caching strategies",
        "Migrated legacy data to FHIR (Fast Healthcare Interoperability Resources) database",
        "Developed Open API system for third-party service integration"
      ],
      technologies: ["C#", ".NET Core", "Azure", "SQL Server", "FHIR", "REST API"]
    }
  ],
  
  education: [
    {
      institution: "Cardiff Metropolitan University",
      degree: "MSc in Software Engineering",
      startDate: "2019",
      endDate: "2021",
      duration: "2019 - 2021",
      location: "Cardiff, Wales, UK",
      description: "Focused on advanced software architecture, cloud computing, and agile methodologies"
    }
  ],
  
  otherQualifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      description: "Certification validating expertise in cloud development and Azure services"
    },
    {
      title: "IELTS Academic",
      issuer: "British Council",
      date: "2022",
      description: "Overall Band Score: 7.5"
    }
  ]
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <i className="fas fa-sun text-xl" />
        ) : (
          <i className="fas fa-moon text-xl" />
        )}
      </button>

      <div className="max-w-3xl w-full bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="w-full mx-auto px-8 py-12 space-y-8">
          <Header {...resumeData.header} />
          <Summary text={resumeData.summary} />
          <TopSkills skills={resumeData.topSkills} />
          <WorkExperience experiences={resumeData.workExperience} />
          <Education education={resumeData.education} />
          <OtherQualifications qualifications={resumeData.otherQualifications} />
        </div>
      </div>
    </div>
  )
}

export default App
