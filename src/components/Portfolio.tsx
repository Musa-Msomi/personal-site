// You might want to move this to a separate data file later (e.g., experienceData.ts)

const mainEmployer = {
  company: "Capitec",
  period: "May 2025 - Present",
  role: "Software Engineer II: Backend",
  overview: "Working on microservices and event-driven architecture as part of the Credit Nexus team, focusing on Credit Products development and implementation."
};

const previousEmployer = {
  company: "DVT",
  period: "February 2022 - April 2025",
  role: "Software Engineer",
  overview: "Provided software development consulting services to various clients, specialising in backend (and frontend) development with .NET technologies."
};

const currentExperience = [
  {
    role: "Software Engineer II: Backend",
    company: "Capitec - Credit Nexus Team",
    period: "May 2025 - Present",
    responsibilities: [
      "Contributing to microservices and event-driven architecture backend development",
      "Working on Credit Products line within the Credit Nexus team",
      "Developing and maintaining services using modern cloud-native technologies"
    ],
    techStack: [".NET 8", "AWS", "Kubernetes", "Rancher", "Argo", "Apache Kafka", "PostgreSQL"]
  }
];

const experience = [
  {
    role: "Intermediate Software Engineer",
    company: "Stash by Liberty",
    period: "October 2024 - April 2025",
    responsibilities: [
      "Maintained and enhanced existing APIs to ensure optimal performance and compatibility",
      "Developed new APIs for mobile team consumption, supporting Android, iOS, and Huawei platforms",
      "Designed and optimised stored procedures for efficient data handling",
      "Implemented and managed background job scheduling and processing using Hangfire",
      "Maintenance and improvement of the Stash admin portal"
    ],
    techStack: ["ASP.NET MVC", "ASP.NET", "Hangfire", "Redis", "SQL Server", "Azure"]
  },
  {
    role: "Intermediate Software Engineer",
    company: "Telesure Investment Holdings",
    period: "July 2024 - August 2024",
    responsibilities: [
      "Developed a web application to transition campaign management from Excel to online platform",
      "Built functionalities for various user roles to manage campaigns",
      "Integrated external Contact API for real-time status updates",
      "Implemented secure user authentication and role-based access control",
      "Managed deployment via Docker and Rancher with Azure DevOps CI",
      "Coordinated SMTP configurations for email notifications",
      "Created comprehensive documentation for future developers"
    ],
    techStack: [
      "Blazor Server",
      "MudBlazor",
      "SQL Server",
      "Docker",
      ".NET 8",
      "Microsoft Identity",
      "Azure DevOps"
    ],
    achievements: [
      "Successfully moved campaign management processes online within two months",
      "Created scalable database structure replacing Excel-based system",
      "Delivered on-time project completion meeting all requirements"
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "Imperial InSync Solutions",
    period: "February 2024 - May 2024",
    responsibilities: [
      "Contributed to monolithic to microservices architecture transition",
      "Developed backend services and Blazor WASM interfaces",
      "Implemented robust data integrity checks",
      "Created services for Excel data processing using NPOI",
      "Developed user interfaces using Telerik UI for Blazor"
    ],
    techStack: [
      "Blazor",
      ".NET 8",
      "Cosmos DB",
      "Azure DevOps",
      "Docker",
      "Redis",
      "Dapr",
      "CQRS",
      "Carter",
      "XUnit",
      "Moq"
    ],
    achievements: [
      "Enabled transition to scalable architecture",
      "Enhanced data integrity through robust validation",
      "Contributed to successful MVP launch"
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Sun International",
    period: "November 2023 - January 2024",
    responsibilities: [
      "Developed and exposed APIs for the frontend team",
      "Collaborated with frontend team for data requirements",
      "Enhanced website capabilities through API integration",
      "Implemented resilience patterns using Polly"
    ],
    techStack: [
      "Umbraco CMS",
      "Azure DevOps",
      "SQL Server",
      ".NET 6",
      "Polly",
      "ASP.NET Core",
      "ASP.NET Web API"
    ],
    achievements: [
      "Improved development efficiency through robust API design",
      "Successfully delivered project components on time"
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "DVT",
    period: "May 2023 - November 2023",
    responsibilities: [
      "Developed internal applications and services",
      "Participated in code reviews",
      "Contributed to new features and bug fixes"
    ],
    techStack: [
      ".NET 6",
      ".NET 8",
      "Azure DevOps",
      "Blazor",
      "Angular",
      "SQL Server",
      "ASP.NET Core",
      "ASP.NET Web API"
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "DVT (Contracted to Ecentric Payment Systems)",
    period: "February 2023 - May 2023",
    responsibilities: [
      "Maintained existing systems",
      "Implemented new features",
      "Backend development support"
    ],
    techStack: [
      "ASP.NET Core",
      "C#",
      "Swagger",
      "SQL Server",
      "Docker",
      "ASP.NET Web API",
      "Azure",
      "Bash"
    ]
  },
  {
    role: "Graduate Software Engineer",
    company: "DVT",
    period: "February 2022 - February 2023",
    responsibilities: [
      "Developed APIs for events web application",
      "Integrated with Microsoft Graph API",
      "Implemented CQRS pattern for performance optimization"
    ],
    techStack: [
      ".NET 6",
      "Microsoft Graph",
      "SQL Server",
      "Azure DevOps",
      "Azure AD",
      "Azure Service Bus",
      "CQRS",
      "Swagger",
      "Postman",
      "Entity Framework"
    ],
    achievements: [
      "Successfully launched events management application",
      "Improved system efficiency through CQRS implementation"
    ]
  },
  {
    role: "Graduate Software Engineer",
    company: "Ecentric Payment Systems",
    period: "August 2022 - January 2023",
    responsibilities: [
      "Fixed backend and frontend bugs",
      "Developed test automation tool using WebdriverIO",
      "Built APIs and frontend screens",
      "Managed database tasks and stored procedures",
      "Implemented encryption/decryption and webhook messaging"
    ],
    techStack: [
      ".NET 4.8",
      ".NET 6",
      "AngularJS",
      "WebDriverIO",
      "SQL Server"
    ],
    achievements: [
      "Improved system reliability through bug fixes",
      "Developed E2E tests expanding system capabilities"
    ]
  }
];

// The component with updated structure
function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-8">Professional Experience</h2>

        {/* Current Employer Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-2xl font-semibold text-blue-600">{mainEmployer.company}</h3>
            <p className="text-gray-600">{mainEmployer.period}</p>
            <p className="text-lg font-medium mt-2">{mainEmployer.role}</p>
          </div>
          <p className="text-gray-700">{mainEmployer.overview}</p>
        </div>

        {/* Current Experience Section */}
        <h3 className="text-2xl font-semibold mb-6">Current Role</h3>
        <div className="space-y-8 mb-12">
          {currentExperience.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="text-gray-600">{job.company} • {job.period}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, i) => (
                    <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      tech.includes('AWS') ? 'bg-orange-100 text-orange-800' :
                      tech.includes('Kubernetes') || tech.includes('Rancher') || tech.includes('Argo') ? 'bg-blue-100 text-blue-800' :
                      tech.includes('.NET') ? 'bg-purple-100 text-purple-800' :
                      tech.includes('Kafka') ? 'bg-red-100 text-red-800' :
                      tech.includes('PostgreSQL') ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Employer Card */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 mb-12">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-2xl font-semibold text-gray-600">{previousEmployer.company}</h3>
            <p className="text-gray-500">{previousEmployer.period}</p>
            <p className="text-lg font-medium mt-2">{previousEmployer.role}</p>
          </div>
          <p className="text-gray-600">{previousEmployer.overview}</p>
        </div>

        {/* Previous Consulting Experience Section */}
        <h3 className="text-2xl font-semibold mb-6">Previous Client Engagements</h3>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="text-gray-600">
                      {job.company.includes('DVT') ? job.company : `${job.company} (DVT Consultant)`} • {job.period}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {job.achievements && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, i) => (
                    <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      tech.includes('Azure') ? 'bg-blue-100 text-blue-800' :
                      tech.includes('.NET') ? 'bg-purple-100 text-purple-800' :
                      tech.includes('Docker') ? 'bg-cyan-100 text-cyan-800' :
                      tech.includes('SQL') ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio