import Header from "shared/Header";
import "features/JobHistory.css"; // Assuming you have a CSS file for styling

const jobs = [
    {
      "job": "Principal Engineer",
      "timeFrame": "2019-2025",
      "longFormat": "Selected to design and implement a robust solu2on for real-2me change tracking within a centralized database used across mul2ple opera2onal plans for BCBSA. The primary objec2ve was to securely store these data changes in object storage. Subsequently, leveraged AWS Glue ETL jobs to seamlessly par22on and transform the data into structured CSV logs, tailored to each respec2ve plan's requirements. This approach mirrored the principles applied in similar projects like ZOCCAM, albeit with a focus on egressing data changes securely to the respec2ve plans for consump2on via a secure FTP connec2on.",
      "jobBullets": [
        "Implemented a robust CI/CD pipeline via Jenkins, integrated AWS CodePipeline and SAM to automate the deployment of CloudForma2on stacks across mul2ple development stage accounts.",
        "Developed Infrastructure as Code (IaC) scripts to enable con2nuous deployment of a cloud stack, capturing changes to an Aurora PostgreSQL database in CSV format. U2lized Glue ETL and Lambda func2ons for data transforma2on and encryp2on.",
        "Created Python scripts for Glue ETL and Lambda, employing PyTest and Poetry for streamlined dependency management.",
        "Coordina2ng with development team by assigning tasks and ensuring smooth progress in development and tes2ng, to deliver quality code in the s2pulated 2melines. Mentor the development team and provide technical guidance.",
        "Enhanced team collabora2on through MicrosoP Teams while promo2ng rigorous code review prac2ces in GIT before deploying changes.",
        "Responsible for documen2ng the project delivery ar2facts like Unit Test cases and results.",
        "Triaging defects and include them in the planning process to balance new work and maintenance. Priori2zing the defects and discuss defect diﬃculty and explain the risk involved because of that. Upda2ng the defect resolu2on.",
        "Configure and update build pipelines and releases in Azure Dev Ops. Manage and trigger build and deployments in lower environments. Contribute to Agile best prac2ces."
      ]
    },
    {
      "job": "Principal Engineer",
      "timeFrame": "2019-2025",
      "longFormat": "Chosen for my extensive exper2se in front-end development with Vue, React, and Angular frameworks to lead a team in crea2ng a graphing applica2on for designing Air Condi2oning Systems for Trane Technologies. Became a GoJs expert to accelerate development, resul2ng in a successful release within 3 months. Provided cri2cal AWS support to address performance issues. U2lized RxJs and NgRx extensively in the applica2on, which was wriKen in the latest Angular framework with TypeScript. Also, provided guidance to junior developers in wri2ng beKer maintainable & reusable components.",
      "jobBullets": [
        "Contributed to the development of the Self-Serve UI and API Applica2on. Involved in all phases of the applica2on development from requirement analysis, design, development, implementa2on, and tes2ng of the applica2on. Create web- based applica2ons using Angular, Node JS, Nest JS. Develop, deploy and debug cloud-based applica2ons using AWS such as Lambdas, batch jobs and/ wri2ng code for serverless applica2ons. Created scripts and modified exis2ng stored procedures to handle business func2onality. Documen2ng the applica2on flows and technical flows to keep a track of exis2ng process and features.",
        "Involved in requirements analysis, sprint planning, grooming of the stories.",
        "Involved in designing technical solu2on, coding, unit tes2ng and fixing defects and suppor2ng through SIT and UAT and implementa2on of the project.",
        "Coordina2ng with development team by assigning tasks and ensuring smooth progress in development and tes2ng, to deliver quality code in the s2pulated 2melines. Mentor the development team and provide technical guidance.",
        "Implemen2ng solu2on using Node Js, Angular, Mocha and Jasmine for unit tes2ng framework.",
        "Configure and update build pipelines and releases in Azure Dev Ops. Manage and trigger build and deployments in lower environments. Contribute to Agile best prac2ces.",
        "Responsible for documen2ng the project delivery ar2facts like Unit Test cases and results.",
        "Triaging defects and include them in the planning process to balance new work and maintenance. Priori2zing the defects and discuss defect diﬃculty and explain the risk involved because of that defect. Upda2ng the defect resolu2on.",
        "Par2cipate in grooming, es2ma2ons, retrospec2ves, discuss and collaborate on features.",
        "Iden2fied and addressed performance boKlenecks in the applica2on caused by RxJs implementa2ons and overuse of NgRx (like redux).",
        "Storybook Framework for component reference.",
        "Led the development of cri2cal features using GoJs to support customer design needs."
      ]
    },
    {
      "job": "Cloud Engineering/Full Stack Lead",
      "timeFrame": "2019-2025",
      "longFormat": "In my capacity as a Cloud Engineering/Full Stack Lead at Apple (client for Cognizant), my primary responsibility was to architect the marke2ng plakorm that serves as the nexus between marketers and talent for Apple. I spearheaded a team of five engineers, collabora2ng closely with Apple's MARCOM team to meet their client-side requirements. U2lized VueJs for the client-side development and harnessed Node.js for server-side web applica2ons. In the ini2al stages, I expedited the deployment of AWS infrastructure through CloudForma2on. Subsequently, I transi2oned our approach to leverage AWS CDK in Python, enabling the en2re team to contribute eﬀec2vely. Beyond this role, I undertook the crucial task of architec2ng the migra2on of other applica2ons from legacy systems to AWS and GCP for the IS&T team.",
      "jobBullets": [
        "Participated in grooming, estimations, retrospectives, discuss and collaborate on features.",
        "Gathering technical requirements and analyzing feasibility from clients.",
        "Involve in communicating with client to get clarifications.",
        "Involved in preparation of Traceability Matrix.",
        "Involved in planning and design of authorization access matrix.",
        "Involved in preparation of Unit Tests using Mocha, Chai.",
        "Developing API’s in Nodejs.",
        "Developed the UI with authorization maintained.",
        "Deployment of applications on different environments.",
        "Involved in designing technical solution, coding, unit testing and fixing defects and supporting through SIT and UAT and implementation of the project.",
        "Implementing solution using Node Js, Angular, Mocha and Jasmine for unit testing framework.",
        "Developed a social-network-style platform enabling 200 Apple marketers to access and share media related to 15,000 prospective talents and contractors.",
        "Implemented a robust video streaming platform that allows seamless media uploads in various formats, prioritizing high-quality video playback even on limited bandwidth.",
        "Successfully migrated five full applications from Apple's legacy systems to the AWS cloud, including a Ruby on Rails application that involved modernizing authentication with an OAuth-based system.",
        "Architected cloud infrastructure solutions utilized by engineers across multiple teams, supporting the needs of nearly 10 team to include EKS and ECS as well as MSK."
      ]
    },
    {
      "job": "Staff Engineer",
      "timeFrame": "2019",
      "longFormat": "Developed and maintained Dell Data Guardian clients for macOS System Extensions and na8ve iOS secure-viewer, adding on-device encryp2on, rights enforcement, and real-2me policy sync with the cloud en2tlement service at Dell.",
      "jobBullets": [
        "Developed and maintained Dell Data Guardian clients for macOS System Extensions and na8ve iOS secure-viewer, adding on-device encryp2on, rights enforcement, and real-2me policy sync with the cloud en2tlement service.",
        "Par8cipated in sprint grooming, es8ma8on, and retrospec8ves, collabora8ng with product and UX to refine Apple-plakorm data-protec2on features and ensure parity with Windows/Android agents.",
        "Engineered low-level intercep8on hooks (Endpoint Security, FileProvider, CryptoKit) to apply EDRM controls across Finder, iWork, and MicrosoP Oﬃce workflows, authoring detailed traceability and authoriza2on-matrix documenta2on.",
        "Gathered and analyzed enterprise customer requirements, transla2ng compliance mandates (HIPAA, GDPR) into macOS/iOS user stories and feasible technical designs.",
        "Architected and led a STAF-driven automa8on framework in Python, crea2ng reusable libraries that run smoke, regression, and performance suites on distributed Mac mini labs and iOS simulators via Jenkins CI.",
        "Mentored a cross-func8onal team of engineers and SDETs, conduc2ng code reviews, threat-model workshops, and pair-programming sessions to upliP secure-coding and automated-tes2ng prac2ces.",
        "Instrumented STAF pipelines with custom Python telemetry, providing real-2me test analy2cs to Grafana dashboards and enhancing visibility into Apple-plakorm quality trends."
      ]
    },
    {
      "job": "Principal Engineer",
      "timeFrame": "2018",
      "longFormat": "Directed full-stack product delivery for a green-field mobile-and-web plakorm at GenMZ, defining architecture and hands-on building React front-ends, Node.js/Java Spring Boot services, and AWS infrastructure-as-code pipelines.",
      "jobBullets": [
        "Directed full-stack product delivery for a green-field mobile-and-web plakorm, defining architecture and hands-on building React front-ends, Node.js/Java Spring Boot services, and AWS infrastructure-as-code pipelines.",
        "Guided na8ve app releases—SwiP/Objec2ve-C for iOS and Java/Kotlin for Android—shepherding the team through store approvals and cross-plakorm feature parity.",
        "Championed 3-D and Unity-driven ini8a8ves, ac2ng as the bridge between gameplay engineers, ar2sts, and backend developers to integrate real-2me content into customer-facing experiences.",
        "Stood up CI/CD and automated test suites (GitHub Ac2ons, Jenkins, Python-based STF automa2on) to enforce coding standards, regression coverage, and secure release gates.",
        "Ins8tuted cloud-first DevOps prac8ces, leveraging Terraform, Docker, and Kubernetes to deliver resilient, scalable, and cost-aware environments.",
        "Recruited, mentored, and performance-coached a distributed team of engineers, cul2va2ng a culture of psychological safety, knowledge sharing, and con2nuous improvement.",
        "Collaborated 8ghtly with founders, designers, and account stakeholders, transla2ng ambiguous startup concepts into itera2ve roadmaps and user-validated MVPs while balancing technical debt and delivery risk.",
        "Embedded security and privacy by design, rolling out threat-modeling workshops, secure code reviews, and dependency-management policies to safeguard IP and user data."
      ]
    },
    {
      "job": "Principal Engineer",
      "timeFrame": "2017-2018",
      "longFormat": "Drove full-cycle product engineering for ZOCCAM’s mobile check-deposit plakorm, balancing strategic leadership with hands-on coding across na2ve, web, and backend layers at ZOCCAM.",
      "jobBullets": [
        "Drove full-cycle product engineering for ZOCCAM’s mobile check-deposit plakorm, balancing strategic leadership with hands-on coding across na2ve, web, and backend layers.",
        "Delivered na8ve iOS and Android apps—SwiP/Objec2ve-C and Java/Kotlin—owning everything from architecture decisions and secure image capture to App Store / Play release management.",
        "Re-architected the cloud stack, leading a green-field migra2on from Azure to AWS and standing up VPC-isolated Spring Boot microservices, managed databases, and encrypted object storage via infrastructure-as-code.",
        "Modernized server-side services with the Spring ecosystem, introducing RESTful and event-driven APIs that integrate with mul2ple banking partners for X9 clearing and secure funds transfer.",
        "Built an AngularJS opera8ons portal so support teams could review, approve, and audit captured checks through an intui2ve, role-based UI.",
        "Ins8tuted DevSecOps pipelines (Git, Jenkins/GitHub Ac2ons, Docker, CloudForma2on/Terraform) to automate builds, tests, security scans, and zero-down2me deployments.",
        "Mentored a cross-func8onal team of mobile, backend, and DevOps engineers—facilita2ng architecture reviews, pairing sessions, and agile ceremonies to foster shared ownership and con2nuous learning.",
        "Collaborated with banking, compliance, and product stakeholders to translate regulatory requirements (Reg CC, NACHA X9) into resilient technical controls, threat models, and audit trails.",
        "Promoted a security-first culture, embedding encryp2on-at-rest/in-transit, least-privilege IAM, and automated dependency checks into the SDLC."
      ]
    },
    {
      "job": "Staff Engineer",
      "timeFrame": "2013-2017",
      "longFormat": "Drive design and implementation of compatibility shims and dyld enhancements that preserve ABI/API contracts across macOS & iOS releases at Apple.",
      "jobBullets": [
        "Drive design and implementation of compatibility shims and dyld enhancements that preserve ABI/API contracts across macOS & iOS releases.",
        "Build automated validation pipelines—static analysis, symbol-diff checks, and fuzzing—to detect binary breakages early in the release cycle.",
        "Extend LLVM/Clang and linker features for new CPU instructions and hardened-runtime security while maintaining legacy binary support.",
        "Collaborate with Xcode, Core OS, and hardware teams to ensure seamless universal-binary workflows and Rosetta translation paths.",
        "Diagnose performance regressions in pre-release OS builds using LLDB, Instruments, and custom profilers; deliver actionable fixes.",
        "Mentor engineers through code reviews and knowledge-sharing sessions, championing secure, testable, and reusable low-level code.",
        "Develop dashboards and in-house app store for tracking priority issues across teams and a solution to allow Apple engineers to access store apps without effecting store metrics."
      ]
    },
    {
      "job": "Senior Software Engineer",
      "timeFrame": "2013",
      "longFormat": "Architected and shipped a custom C++ host opera2ng system for a new line of rack-mounted Arm microservers at Samsung, markedly reducing cold-boot 2me and serving as the firmware founda2on for Samsung’s commercial microserver plakorm.",
      "jobBullets": [
        "Architected and shipped a custom C++ host opera2ng system for a new line of rack-mounted Arm microservers, markedly reducing cold-boot 2me and serving as the firmware founda2on for Samsung’s commercial microserver plakorm.",
        "Built a remote dashboard with Node.js and AngularJS that delivers real-2me health telemetry and fleet controls, enabling customers to manage large microserver deployments from a single web console.",
        "Op2mized core services with Boost and Protocol Buﬀers, lowering serializa2on overhead, trimming memory footprint, and boos2ng data-path throughput without sacrificing stability.",
        "Delivered a responsive web UI adopted by global customers, providing live monitoring of power, thermal, and workload metrics through any standards-compliant browser.",
        "Established Git-driven CI/CD pipelines with Jenkins, sta2c analysis, and unit tes2ng, accelera2ng regression detec2on and suppor2ng rapid release cycles for experimental hardware.",
        "Collaborated closely with firmware, hardware, and QA teams to diagnose and resolve OS-framework and silicon-interac2on defects, ensuring plakorm stability for market launch."
      ]
    },
    {
      "job": "Software Engineer",
      "timeFrame": "2011-2013",
      "longFormat": "Led board-bring-up engagements for Barnes & Noble and Google as clients of Texas Instruments, coordinating cross-disciplinary engineering teams to deliver secure, fully operational Android platforms on new TI OMAP hardware.",
      "jobBullets": [
        "Led board-bring-up engagements for Barnes & Noble and Google, coordinating cross-disciplinary engineering teams to deliver secure, fully operational Android platforms on new TI OMAP hardware.",
        "Implemented TrustZone-based trusted-execution environments and secure-boot chains, fortifying device integrity and safeguarding partner content.",
        "Hardened the Android Linux kernel—integrating SELinux policy, device-tree updates, and secure page-table management—to support upcoming Android releases and emerging security requirements.",
        "Designed and optimized OpenMAX IL multimedia pipelines for high-definition playback, refining codec performance and synchronizing audio-video paths.",
        "Guided client engineering groups through platform upgrades, providing BSP patches, HAL adaptations, and user-space updates that enabled smooth adoption of future Android versions.",
        "Delivered hands-on debugging support and knowledge-transfer workshops, streamlining issue triage —from bootloaders to user space—and accelerating time-to-resolution for partner teams."
      ]
    },
    {
      "job": "Systems Engineering",
      "timeFrame": "2008-2011",
      "longFormat": "Administered campus network infrastructure—including routers, switches, and firewalls—to provide secure, reliable connectivity for faculty, staff, and students at the University of North Texas.",
      "jobBullets": [
        "Administered campus network infrastructure—including routers, switches, and firewalls—to provide secure, reliable connectivity for faculty, staff, and students.",
        "Deployed proactive monitoring and logging with Nagios and Zabbix, streamlining incident response and minimizing unplanned downtime.",
        "Designed and implemented a layered security posture using ACLs, VLAN segmentation, patch management, and endpoint hardening across macOS and Windows environments.",
        "Built automated software-deployment and imaging workflows with JAMF, Bash, and Python scripts to standardize desktop configurations and accelerate update rollouts.",
        "Diagnosed and resolved hardware, software, and network issues for on-site users, combining macOS administration skills with deep troubleshooting expertise to maintain high customer satisfaction.",
        "Collaborated with campus IT committees to document policies, manage software licensing, and guide hardware-lifecycle planning, ensuring compliance and efficient resource utilization."
      ]
    }
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
                    <li key={bulletIndex} className="job-bullet-item">{bullet}</li>
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