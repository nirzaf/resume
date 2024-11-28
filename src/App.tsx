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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 z-50"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <i className="fas fa-sun text-xl" />
        ) : (
          <i className="fas fa-moon text-xl" />
        )}
      </button>

      {/* Main Container */}
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[90%] 2xl:max-w-[80%] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative w-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
            
            {/* Content */}
            <div className="relative w-full px-6 md:px-12 lg:px-16 py-12 space-y-10">
              <Header {...resumeData.header} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <Summary text={resumeData.summary} />
                  <TopSkills skills={resumeData.topSkills} />
                  <Education education={resumeData.education} />
                </div>
                
                <div className="space-y-8">
                  <WorkExperience experiences={resumeData.workExperience} />
                  <OtherQualifications qualifications={resumeData.otherQualifications} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
