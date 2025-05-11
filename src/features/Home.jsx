import "features/Home.css";

const Home = () => {
    const skillSections = [
      {
        title: "AWS Cloud",
        skills: [
          "8+ years of experience in Full Stack Application Development with MEAN Stack and AWS Cloud including AWS Healthlake for sensitive data processing",
          "Developed new Lambda functions and enhanced existing ones for performance and timeout resilience",
          "Integrated Lambda with API Gateway, S3, SNS, SQS, and DynamoDB, utilizing efficient structuring",
          "Upgraded AWS services to maintain compatibility and reduce technical debt",
          "Implemented role-based access control for secure data operations",
          "Created reusable AWS libraries to centralize logic and streamline development"
        ]
      },
      {
        title: "Client Side Development",
        skills: [
          "Built user interfaces using Angular, React, and Vue",
          "Created new UI components following DRY principles and added descriptive inline documentation",
          "Addressed accessibility issues and implemented UI security based on user roles",
          "Wrote automated UI tests using Jest, Karma, Jasmine, and Mocha"
        ]
      },
      {
        title: "Server Side Development",
        skills: [
          "Built RESTful APIs using Node.js and Express",
          "Replaced underperforming endpoints with optimized Lambda-based implementations",
          "Created shared backend libraries/packages to reduce duplication and centralize logic",
          "Upgraded Node versions and resolved obsolete/quarantined package issues"
        ]
      },
      {
        title: "Database",
        skills: [
          "Experience with MySQL, PostgreSQL, and MongoDB",
          "Wrote and optimized complex SQL queries, views, and stored procedures",
          "Added indexing and join optimizations for performance improvements",
          "Structured and queried DynamoDB for scalable NoSQL solutions"
        ]
      },
      {
        title: "Security & Access Control",
        skills: [
          "Integrated authentication and authorization libraries into backend APIs",
          "Implemented entitlement checks across endpoints to mitigate penetration vulnerabilities",
          "Developed role-based access controls on both UI and backend systems"
        ]
      },
      {
        title: "DevOps & CI/CD",
        skills: [
          "Built and maintained Azure DevOps pipelines for automated build/release processes",
          "Managed release branches and promoted artifacts to production",
          "Triggered automatic deployments in lower environments",
          "Updated pipeline tasks to support upgraded Node versions and enforce test coverage"
        ]
      },
      {
        title: "Testing & Quality Assurance",
        skills: [
          "Wrote comprehensive unit and integration tests across frontend and backend",
          "Used Jest, Mocha, Chai, Karma, Jasmine, and Postman for testing",
          "Maintained 80%+ code coverage and published results in pipelines",
          "Contributed to code reviews and enforced team coding standards and branch hygiene"
        ]
      },
      {
        title: "Software Development Practices",
        skills: [
          "Followed TDD, Agile, and SSDLC methodologies across projects",
          "Experienced in requirements gathering, system design, development, and support",
          "Participated in regular tool and tech evaluations for continuous improvement"
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          "Strong problem-solving and analytical skills",
          "Effective communicator and team player",
          "Skilled at multitasking and project delivery under tight deadlines and budgets"
        ]
      }
    ];
  
    return (
      <div className="skills-container">
        <h1>Architect & Full Stack Engineer</h1>
        
        {skillSections.map((section, index) => (
          <section key={index} className="skill-section">
            <h2>{section.title}</h2>
            <ul>
              {section.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  };
  
  export default Home;