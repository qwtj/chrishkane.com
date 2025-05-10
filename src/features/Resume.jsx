import AppleLogo from 'assets/Apple_Computer_Logo_rainbow.png'
import DellLogo from 'assets/Dell-Logo-PNG-03197-300x300.png'
import AdGiant from 'assets/Ad-Giants-2019-Logo-Stack.png'
import GenMZ from 'assets/genmz.png'
import Z from 'assets/zoccamlogo.png'
import Samsung from 'assets/samsung-logo.png'
import ThirdID from 'assets/3rdid.jpeg'
import TI from 'assets/ti.png'
import UNT from 'assets/unt.png'


function ResumeSection(props) {
    return (
      <div>
        <section className="Resume-section">
          <div className="Resume-section-background"></div>
          <div className="Resume-corp-pic-container">
            <img src={props.img} alt="corp logo" className="Resume-pic" style={ props.style } />
            <h3 className="Resume-corp">{props.corpName}</h3>
          </div>
          <div className="Resume-intro">
            <h4 className="Resume-name">
              {props.position}
            </h4>
            <article className="Resume-article">
              <p className="Resume-job">
                {props.children}
              </p>
            </article>
          </div>
        </section>
      </div>
    )
  }
  
  function Resume() {
    return (
      <div className="App">
        <div className="Resume">
          <main className="Resume-main">
            <header className="Resume-header">
              <div className="Resume-section-background"></div>
              <div className="Resume-intro">
                <h1 className="Resume-name">
                  Christopher Kane
                </h1>
                <article className="Resume-article">
                  <p style={{ fontSize: '.6em' }}>
                  I am a seasoned Senior Engineering Manager with over a decade
                  of extensive experience in architecting and delivering
                  complex, scalable, and secure full-stack solutions across
                  major cloud platforms including AWS, Google Cloud, and Azure.
                  </p>
                  <p style={{ fontSize: '.6em' }}>
                   My professional journey is marked by a robust track record
                   in designing, deploying, and optimizing enterprise-level
                   applications, particularly emphasizing secure, reliable, and
                   efficient codebases. I excel in modern programming languages
                   and frameworks with significant expertise in full-stack
                   development encompassing Angular, React, Vue.js, Node.js, and
                   particularly mobile native platforms such as Swift and
                   Objective-C, as demonstrated by my recent leadership in
                   developing ZOCCAM's native iOS and Android applications.
                  </p>
                  <p style={{ fontSize: '.6em' }}>
                  My technical approach places a strong emphasis on CI/CD
                  practices, Infrastructure as Code (IaC) with tools like
                  Terraform, AWS CDK, and CloudFormation, and I have implemented
                  comprehensive automation solutions via Jenkins, GitHub Actions,
                  and Azure DevOps pipelines. Security remains integral to my
                  development methodology, underpinned by proactive enforcement
                  of rigorous security standards and practices, ensuring code
                  stability, reusability, and scalability.
                  </p>
                  <p style={{ fontSize: '.6em' }}>
                  Beyond my technical capabilities, my strengths include
                  exceptional soft skills that facilitate effective team
                  leadership, mentorship, and client relationship management,
                  particularly in coordinating both onsite and offshore teams.
                  I pride myself on clear, strategic communication and the
                  ability to align technical outcomes with client expectations
                  and broader business objectives. Moving forward, I am seeking
                  opportunities where I can leverage my expertise in cloud
                  architecture and software engineering to lead innovative
                  projects, drive technological advancement, and contribute
                  significantly to the strategic goals of forward-thinking
                  organizations.
                  </p>
                </article>
              </div>
            </header>
            <ResumeSection corpName="Apple" img={ AppleLogo } style={{ padding : '.6em' }} position="Senior Software Engineer">
                Full Stack Engineer back at Apple.<br/>
                Built out VueJS client, NodeJS+Swagger+Express Server-Side<br/>
                Built AWS Cloud Infrastructure suing Cloud Development Kit.<br/>
                App a content management system.
            </ResumeSection>
            <ResumeSection corpName="Dell" img={ DellLogo } position="Senior Software Engineer">
                MacOS and iOS engineering for the Dell Data Guardian app and
                security extensions.
            </ResumeSection>
            <ResumeSection corpName="AdGiants" img={ AdGiant } position="Senior Software Engineer">
              React with Redux social network with content
              centric Ul and integration with 3rd party
              distribution services.
            </ResumeSection>
            <ResumeSection corpName="GenMZ" img={ GenMZ } style={{ padding : '.6em' }} position="Senior Software Engineer">
              Lead the team to first integrated release.
              Participated in ongoing design discussions with 3d animation team.
              Developed iOS application with unity.
            </ResumeSection>
            <ResumeSection corpName="ZOCCAM" img={ Z }  style={{ padding : '.6em' }} position="Platform Architect / Lead">
              Deliver & redesign personal check transfer system in 30 days.
              Support initial Azure infrastruture and Xamarin Mobile Apps.
              Develop iOS application in Swift and push to store.
              Developer Android application in Java and push to store.
              Build server side AWS infrastructure and JAVA Spring Boot App.
              Hire and lead a small engineering team.
            </ResumeSection>
            <ResumeSection corpName="Apple" img={ AppleLogo } style={{ padding : '.6em' }} position="Senior Software Engineer">
              Collaborate cross teams to analyze bug reports and produce fixes
              Root cause and fix issues related to OS frameworks and hardware
              changes
              Git based repos and Radar for development tracking
            </ResumeSection>
            <ResumeSection corpName="Samsung" img={ Samsung } position="Soffware Engineer">
              Utilize third party libraries such as Google's Protobuff and Boost
              for C++ dev Linux
              Assist and develop a web front end in AngularJS with Javascript
              Develop web services in C/C++ Node modules to interact with
              hardware
            </ResumeSection>
            <ResumeSection corpName="Texas Instruments" img={ TI } position="Software Engineer">
              Support and prototype Widevine for external customers on ARM
              Android ARM board bring up and upgrade support
              Develop and support OMAP & M-Shield technology development JAG &
              low-level hardware analysis
              Understanding of Roots of Trust and PKI
            </ResumeSection>
            <ResumeSection corpName="Univ. of North Texas" style={{ padding : '.6em' }} img={ UNT }position="Network Technician">
              Administrate & support of Windows Server 2008, Linux, MacOS
              Troubleshoot and fix end user issues with hardware and software
              Support faculty on-site and aide in application developments
            </ResumeSection>
            <ResumeSection corpName="United States Army" style={{ padding : '.6em' }} img={ ThirdID } position="Combat Medic">
              Operation Iraqi Freedom<br/>
              Team Leadership skills<br/>
              First Iraqi Election security
            </ResumeSection>
  
            <footer></footer>
          </main>
          {/* <header className="App-header">
            <img src={resume} className="App-resume" alt="resume" />
            <a
              className="App-link"
              href="/"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </header> */}
        </div>
      </div>
    );
  }

  export default Resume;