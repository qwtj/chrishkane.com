import Header from "shared/Header";
import "features/JobHistory.css"; // Assuming you have a CSS file for styling

const jobs = [
  {
    job: "Cognizant - Project: BCBSA - Principal Software & Cloud Engineer",
    timeFrame: "2019-2025",
    longFormat:
      "Selected to design and implement a robust solution for real-time change tracking within a centralized database used across multiple operational plans for BCBSA. The primary objective was to securely store these data changes in object storage. Subsequently, leveraged AWS Glue ETL jobs to seamlessly partition and transform the data into structured CSV logs, tailored to each respective plan's requirements. This approach mirrored the principles applied in similar projects like ZOCCAM, albeit with a focus on egressing data changes securely to the respective plans for consumption via a secure FTP connection.",
    jobBullets: [
      "Implemented a robust CI/CD pipeline via Jenkins, integrated AWS CodePipeline and SAM to automate the deployment of CloudFormation stacks across multiple development stage accounts.",
      "Developed Infrastructure as Code (IaC) scripts to enable continuous deployment of a cloud stack, capturing changes to an Aurora PostgreSQL database in CSV format. Utilized Glue ETL and Lambda functions for data transformation and encryption.",
      "Created Python scripts for Glue ETL and Lambda, employing PyTest and Poetry for streamlined dependency management.",
      "Coordinating with development team by assigning tasks and ensuring smooth progress in development and testing, to deliver quality code in the stipulated timelines. Mentor the development team and provide technical guidance.",
      "Enhanced team collaboration through Microsoft Teams while promoting rigorous code review practices in Git before deploying changes.",
      "Responsible for documenting the project delivery artifacts like Unit Test cases and results.",
      "Triaging defects and include them in the planning process to balance new work and maintenance. Prioritizing the defects and discuss defect difficulty and explain the risk involved because of that. Updating the defect resolution.",
      "Configure and update build pipelines and releases in Azure DevOps. Manage and trigger build and deployments in lower environments. Contribute to Agile best practices.",
    ],
  },
  {
    job: "Cognizant - Project: Trane - Principal Software & Cloud Engineer",
    timeFrame: "2019-2025",
    longFormat:
      "Chosen for my extensive expertise in front-end development with Vue, React, and Angular frameworks to lead a team in creating a graphing application for designing Air Conditioning Systems for Trane Technologies. Became a GoJS expert to accelerate development, resulting in a successful release within 3 months. Provided critical AWS support to address performance issues. Utilized RxJs and NgRx extensively in the application, which was written in the latest Angular framework with TypeScript. Also, provided guidance to junior developers in writing better maintainable & reusable components.",
    jobBullets: [
      "Contributed to the development of the Self-Serve UI and API Application. Involved in all phases of the application development from requirement analysis, design, development, implementation, and testing of the application. Create web-based applications using Angular, Node.js, NestJS. Develop, deploy and debug cloud-based applications using AWS such as Lambdas, batch jobs and/ writing code for serverless applications. Created scripts and modified existing stored procedures to handle business functionality. Documenting the application flows and technical flows to keep a track of existing process and features.",
      "Involved in requirements analysis, sprint planning, grooming of the stories.",
      "Involved in designing technical solution, coding, unit testing and fixing defects and supporting through SIT and UAT and implementation of the project.",
      "Coordinating with development team by assigning tasks and ensuring smooth progress in development and testing, to deliver quality code in the stipulated timelines. Mentor the development team and provide technical guidance.",
      "Implementing solution using Node.js, Angular, Mocha and Jasmine for unit testing framework.",
      "Configure and update build pipelines and releases in Azure DevOps. Manage and trigger build and deployments in lower environments. Contribute to Agile best practices.",
      "Responsible for documenting the project delivery artifacts like Unit Test cases and results.",
      "Triaging defects and include them in the planning process to balance new work and maintenance. Prioritizing the defects and discuss defect difficulty and explain the risk involved because of that defect. Updating the defect resolution.",
      "Participate in grooming, estimations, retrospectives, discuss and collaborate on features.",
      "Identified and addressed performance bottlenecks in the application caused by RxJs implementations and overuse of NgRx (like redux).",
      "Storybook Framework for component reference.",
      "Led the development of critical features using GoJS to support customer design needs.",
    ],
  },
  {
    job: "Cognizant - Project: Apple - Principal Software & Cloud Engineer",
    timeFrame: "2019-2025",
    longFormat:
      "In my capacity as a Cloud Engineering/Full Stack Lead at Apple (client for Cognizant), my primary responsibility was to architect the marketing platform that serves as the nexus between marketers and talent for Apple. I spearheaded a team of five engineers, collaborating closely with Apple's MARCOM team to meet their client-side requirements. Utilized Vue.js for the client-side development and harnessed Node.js for server-side web applications. In the initial stages, I expedited the deployment of AWS infrastructure through CloudFormation. Subsequently, I transitioned our approach to leverage AWS CDK in Python, enabling the entire team to contribute effectively. Beyond this role, I undertook the crucial task of architecting the migration of other applications from legacy systems to AWS and GCP for the IS&T team.",
    jobBullets: [
      "Participated in grooming, estimations, retrospectives, discuss and collaborate on features.",
      "Gathering technical requirements and analyzing feasibility from clients.",
      "Involved in communicating with client to get clarifications.",
      "Involved in preparation of Traceability Matrix.",
      "Involved in planning and design of authorization access matrix.",
      "Involved in preparation of Unit Tests using Mocha, Chai.",
      "Developing APIs in Node.js.",
      "Developed the UI with authorization maintained.",
      "Deployment of applications on different environments.",
      "Involved in designing technical solution, coding, unit testing and fixing defects and supporting through SIT and UAT and implementation of the project.",
      "Implementing solution using Node.js, Angular, Mocha and Jasmine for unit testing framework.",
      "Developed a social-network-style platform enabling 200 Apple marketers to access and share media related to 15,000 prospective talents and contractors.",
      "Implemented a robust video streaming platform that allows seamless media uploads in various formats, prioritizing high-quality video playback even on limited bandwidth.",
      "Successfully migrated five full applications from Apple's legacy systems to the AWS cloud, including a Ruby on Rails application that involved modernizing authentication with an OAuth-based system.",
      "Architected cloud infrastructure solutions utilized by engineers across multiple teams, supporting the needs of nearly 10 teams to include EKS and ECS as well as MSK.",
    ],
  },
  {
    job: "Dell - Data Guardian - Staff Software Engineer",
    timeFrame: "2019",
    longFormat:
      "Developed and maintained Dell Data Guardian clients for macOS System Extensions and native iOS secure-viewer, adding on-device encryption, rights enforcement, and real-time policy sync with the cloud entitlement service at Dell.",
    jobBullets: [
      "Developed and maintained Dell Data Guardian clients for macOS System Extensions and native iOS secure-viewer, adding on-device encryption, rights enforcement, and real-time policy sync with the cloud entitlement service.",
      "Participated in sprint grooming, estimation, and retrospectives, collaborating with product and UX to refine Apple-platform data-protection features and ensure parity with Windows/Android agents.",
      "Engineered low-level interception hooks (Endpoint Security, FileProvider, CryptoKit) to apply EDRM controls across Finder, iWork, and Microsoft Office workflows, authoring detailed traceability and authorization-matrix documentation.",
      "Gathered and analyzed enterprise customer requirements, translating compliance mandates (HIPAA, GDPR) into macOS/iOS user stories and feasible technical designs.",
      "Architected and led a STAF-driven automation framework in Python, creating reusable libraries that run smoke, regression, and performance suites on distributed Mac mini labs and iOS simulators via Jenkins CI.",
      "Mentored a cross-functional team of engineers and SDETs, conducting code reviews, threat-model workshops, and pair-programming sessions to uplift secure-coding and automated-testing practices.",
      "Instrumented STAF pipelines with custom Python telemetry, providing real-time test analytics to Grafana dashboards and enhancing visibility into Apple-platform quality trends.",
    ],
  },
  {
    job: "GeneMZ - 3D Social Media Platform - Principal Software & Cloud  Engineer",
    timeFrame: "2018",
    longFormat:
      "Directed full-stack product delivery for a green-field mobile-and-web platform at GenMZ, defining architecture and hands-on building React front-ends, Node.js/Java Spring Boot services, and AWS infrastructure-as-code pipelines.",
    jobBullets: [
      "Directed full-stack product delivery for a green-field mobile-and-web platform, defining architecture and hands-on building React front-ends, Node.js/Java Spring Boot services, and AWS infrastructure-as-code pipelines.",
      "Guided native app releases—Swift/Objective-C for iOS and Java/Kotlin for Android—shepherding the team through store approvals and cross-platform feature parity.",
      "Championed 3-D and Unity-driven initiatives, acting as the bridge between gameplay engineers, artists, and backend developers to integrate real-time content into customer-facing experiences.",
      "Stood up CI/CD and automated test suites (GitHub Actions, Jenkins, Python-based STF automation) to enforce coding standards, regression coverage, and secure release gates.",
      "Instituted cloud-first DevOps practices, leveraging Terraform, Docker, and Kubernetes to deliver resilient, scalable, and cost-aware environments.",
      "Recruited, mentored, and performance-coached a distributed team of engineers, cultivating a culture of psychological safety, knowledge sharing, and continuous improvement.",
      "Collaborated tightly with founders, designers, and account stakeholders, translating ambiguous startup concepts into iterative roadmaps and user-validated MVPs while balancing technical debt and delivery risk.",
      "Embedded security and privacy by design, rolling out threat-modeling workshops, secure code reviews, and dependency-management policies to safeguard IP and user data.",
    ],
  },
  {
    job: "ZOCCAM - Real Estate Check Processing (X9) - Principal Software & Cloud Engineer",
    timeFrame: "2017-2018",
    longFormat:
      "Drove full-cycle product engineering for ZOCCAM’s mobile check-deposit platform, balancing strategic leadership with hands-on coding across native, web, and backend layers at ZOCCAM.",
    jobBullets: [
      "Drove full-cycle product engineering for ZOCCAM’s mobile check-deposit platform, balancing strategic leadership with hands-on coding across native, web, and backend layers.",
      "Delivered native iOS and Android apps—Swift/Objective-C and Java/Kotlin—owning everything from architecture decisions and secure image capture to App Store / Play release management.",
      "Re-architected the cloud stack, leading a green-field migration from Azure to AWS and standing up VPC-isolated Spring Boot microservices, managed databases, and encrypted object storage via infrastructure-as-code.",
      "Modernized server-side services with the Spring ecosystem, introducing RESTful and event-driven APIs that integrate with multiple banking partners for X9 clearing and secure funds transfer.",
      "Built an AngularJS operations portal so support teams could review, approve, and audit captured checks through an intuitive, role-based UI.",
      "Instituted DevSecOps pipelines (Git, Jenkins/GitHub Actions, Docker, CloudFormation/Terraform) to automate builds, tests, security scans, and zero-downtime deployments.",
      "Mentored a cross-functional team of mobile, backend, and DevOps engineers—facilitating architecture reviews, pairing sessions, and agile ceremonies to foster shared ownership and continuous learning.",
      "Collaborated with banking, compliance, and product stakeholders to translate regulatory requirements (Reg CC, NACHA X9) into resilient technical controls, threat models, and audit trails.",
      "Promoted a security-first culture, embedding encryption-at-rest/in-transit, least-privilege IAM, and automated dependency checks into the SDLC.",
    ],
  },
  {
    job: "Apple - iOS/MacOS Frameworks - Staff Software Engineer",
    timeFrame: "2013-2017",
    longFormat:
      "Drive design and implementation of compatibility shims and dyld enhancements that preserve ABI/API contracts across macOS & iOS releases at Apple.",
    jobBullets: [
      "Drive design and implementation of compatibility shims and dyld enhancements that preserve ABI/API contracts across macOS & iOS releases.",
      "Build automated validation pipelines—static analysis, symbol-diff checks, and fuzzing—to detect binary breakages early in the release cycle.",
      "Extend LLVM/Clang and linker features for new CPU instructions and hardened-runtime security while maintaining legacy binary support.",
      "Collaborate with Xcode, Core OS, and hardware teams to ensure seamless universal-binary workflows and Rosetta 2 translation paths.",
      "Diagnose performance regressions in pre-release OS builds using LLDB, Instruments, and custom profilers; deliver actionable fixes.",
      "Mentor engineers through code reviews and knowledge-sharing sessions, championing secure, testable, and reusable low-level code.",
      "Develop dashboards and in-house app store for tracking priority issues across teams and a solution to allow Apple engineers to access store apps without affecting store metrics.",
    ],
  },
  {
    job: "Samsung Research of America - ARM Embedded Systems - Senior Software Engineer",
    timeFrame: "2013",
    longFormat:
      "Architected and shipped a custom C++ host operating system for a new line of rack-mounted Arm microservers at Samsung, markedly reducing cold-boot time and serving as the firmware foundation for Samsung’s commercial microserver platform.",
    jobBullets: [
      "Architected and shipped a custom C++ host operating system for a new line of rack-mounted Arm microservers, markedly reducing cold-boot time and serving as the firmware foundation for Samsung’s commercial microserver platform.",
      "Built a remote dashboard with Node.js and AngularJS that delivers real-time health telemetry and fleet controls, enabling customers to manage large microserver deployments from a single web console.",
      "Optimized core services with Boost and Protocol Buffers, lowering serialization overhead, trimming memory footprint, and boosting data-path throughput without sacrificing stability.",
      "Delivered a responsive web UI adopted by global customers, providing live monitoring of power, thermal, and workload metrics through any standards-compliant browser.",
      "Established Git-driven CI/CD pipelines with Jenkins, static analysis, and unit testing, accelerating regression detection and supporting rapid release cycles for experimental hardware.",
      "Collaborated closely with firmware, hardware, and QA teams to diagnose and resolve OS-framework and silicon-interaction defects, ensuring platform stability for market launch.",
    ],
  },
  {
    job: "Texas Instruments - Clients: Google, B&N, Motorola, Amazon - Software Engineer",
    timeFrame: "2011-2013",
    longFormat:
      "Led board-bring-up engagements for Barnes & Noble and Google as clients of Texas Instruments, coordinating cross-disciplinary engineering teams to deliver secure, fully operational Android platforms on new TI OMAP hardware.",
    jobBullets: [
      "Led board-bring-up engagements for Barnes & Noble and Google, coordinating cross-disciplinary engineering teams to deliver secure, fully operational Android platforms on new TI OMAP hardware.",
      "Implemented TrustZone-based trusted-execution environments and secure-boot chains, fortifying device integrity and safeguarding partner content.",
      "Hardened the Android Linux kernel—integrating SELinux policy, device-tree updates, and secure page-table management—to support upcoming Android releases and emerging security requirements.",
      "Designed and optimized OpenMAX IL multimedia pipelines for high-definition playback, refining codec performance and synchronizing audio-video paths.",
      "Guided client engineering groups through platform upgrades, providing BSP patches, HAL adaptations, and user-space updates that enabled smooth adoption of future Android versions.",
      "Delivered hands-on debugging support and knowledge-transfer workshops, streamlining issue triage —from bootloaders to user space—and accelerating time-to-resolution for partner teams.",
    ],
  },
  {
    job: "University of North Texas - Software Developer",
    timeFrame: "2008-2011",
    longFormat:
      "Administered campus network infrastructure—including routers, switches, and firewalls—to provide secure, reliable connectivity for faculty, staff, and students at the University of North Texas.",
    jobBullets: [
      "Administered campus network infrastructure—including routers, switches, and firewalls—to provide secure, reliable connectivity for faculty, staff, and students.",
      "Deployed proactive monitoring and logging with Nagios and Zabbix, streamlining incident response and minimizing unplanned downtime.",
      "Designed and implemented a layered security posture using ACLs, VLAN segmentation, patch management, and endpoint hardening across macOS and Windows environments.",
      "Built automated software-deployment and imaging workflows with JAMF, Bash, and Python scripts to standardize desktop configurations and accelerate update rollouts.",
      "Diagnosed and resolved hardware, software, and network issues for on-site users, combining macOS administration skills with deep troubleshooting expertise to maintain high customer satisfaction.",
      "Collaborated with campus IT committees to document policies, manage software licensing, and guide hardware-lifecycle planning, ensuring compliance and efficient resource utilization.",
    ],
  },
];

const JobHistory = () => {
  if (!jobs || jobs.length === 0) {
    return (
      <section className="job-section">
        <Header title="Professional Experience" />
        <p className="no-jobs-message">No job history available.</p>
      </section>
    );
  }
  return (
    <section className="job-section">
      <Header title="Professional Experience" />

      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.job}</h2>
              <span className="job-timeframe">{job.timeFrame}</span>
            </div>

            <p className="job-description">{job.longFormat}</p>

            {job.jobBullets && job.jobBullets.length > 0 && (
              <ul className="job-bullets">
                {job.jobBullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="job-bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobHistory;
