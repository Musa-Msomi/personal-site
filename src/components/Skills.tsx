function Skills() {
  const skillCategories = {
    backend: {
      title: "Backend Development",
      skills: [
        { name: "ASP.NET Core", proficiency: "Advanced" },
        { name: "C#", proficiency: "Advanced" },
        { name: "Web API", proficiency: "Advanced" },
        { name: ".NET 6/8", proficiency: "Advanced" },
        { name: "Entity Framework Core", proficiency: "Advanced" },
      ]
    },
    database: {
      title: "Database & Storage",
      skills: [
        { name: "SQL Server", proficiency: "Advanced" },
        { name: "Cosmos DB", proficiency: "Intermediate" },
        { name: "Redis", proficiency: "Intermediate" },
      ]
    },
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "Blazor", proficiency: "Advanced" },
        { name: "MudBlazor", proficiency: "Advanced" },
        { name: "Angular", proficiency: "Basic" },
        { name: ".NET MVC", proficiency: "Intermediate" },
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure", proficiency: "Advanced" },
        { name: "Azure DevOps", proficiency: "Advanced" },
        { name: "Docker", proficiency: "Intermediate" },
        { name: "CI/CD", proficiency: "Intermediate" },
      ]
    },
    architecture: {
      title: "Architecture & Patterns",
      skills: [
        { name: "Microservices", proficiency: "Intermediate" },
        { name: "CQRS", proficiency: "Advanced" },
        { name: "Clean Architecture", proficiency: "Advanced" },
        { name: "SOLID Principles", proficiency: "Advanced" },
      ]
    },
    tools: {
      title: "Tools & Other",
      skills: [
        { name: "Git", proficiency: "Advanced" },
        { name: "Swagger", proficiency: "Advanced" },
        { name: "Postman", proficiency: "Advanced" },
        { name: "Hangfire", proficiency: "Basic" },
        {name:"Bash",proficiency:"Advanced"}
      ]
    }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      skill.proficiency === 'Expert' ? 'bg-green-100 text-green-800' :
                      skill.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills