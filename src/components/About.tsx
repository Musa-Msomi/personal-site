import TechStack from "./TechStack"
import FlipTimer from './FlipTimer'

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full">
      <h1 className="text-4xl font-bold mb-8">
          Musa Msomi - Backend Software Engineer
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Introduction */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My name is Musa Msomi and I am a backend software developer with a strong focus on the ASP.NET Core stack. 
              My experience spans various domains, including financial systems, campaign management platforms, 
              and e-commerce, providing me with a unique opportunity to rapidly grow my skills and 
              master a wide range of technologies and frameworks.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Experience & Expertise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the past few years, I've successfully delivered diverse projects, from 
              transitioning monolithic architectures to microservices to building complex web 
              applications from scratch. I specialise in developing scalable, high-performance 
              applications using .NET technologies, Blazor, and SQL Server.
            </p>
          </div>

          {/* Technical Proficiency */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Technical Proficiency</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am adept at designing and implementing APIs, integrating with third-party services, 
              and utilising cloud platforms like Azure for CI/CD and deployment. My approach to 
              software development is grounded in best practices like SOLID principles, Clean Architecture, 
              and test-driven development, ensuring high-quality software solutions.
            </p>
          </div>

          {/* Professional Philosophy */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Professional Philosophy</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm passionate about continuous learning and thrive in collaborative environments 
              where I can contribute to both team success and individual growth. I'm always looking 
              for new challenges to expand my skill set and make a meaningful impact.
            </p>
          </div>
          
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-3">Current Ventures</h3>
  <p className="text-gray-700 leading-relaxed">
    I'm currently working on several exciting startup projects that showcase my entrepreneurial spirit 
    and technical capabilities. While these projects are in development, they demonstrate my ability 
    to architect and build complete solutions from the ground up.
  </p>
  {/* We can add more details when you're ready to share them */}
</div>
<TechStack/>
<div className="mt-8">
            <FlipTimer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About