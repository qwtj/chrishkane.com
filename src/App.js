import { Routes, Route, Link } from "react-router-dom";
import resume from './resume.png'
import associateArchitect from './aws-certified-solutions-architect-associate.png'
import cloudPractitioner from './aws-certified-cloud-practitioner.png'
import AppleLogo from './Apple_Computer_Logo_rainbow.png'
import DellLogo from './Dell-Logo-PNG-03197-300x300.png'
import AdGiant from './Ad-Giants-2019-Logo-Stack.png'
import GenMZ from './genmz.png'
import Z from './zoccamlogo.png'
import Samsung from './samsung-logo.png'
import ThirdID from './3rdid.jpeg'
import TI from './ti.png'
import UNT from './unt.png'

import './css/App.css';
import { Component } from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

class Home extends Component {
  render() {
  return (
    <div className="App">
      <link rel="preload" as="image" href={associateArchitect} />
      <link rel="preload" as="image" href={cloudPractitioner} />
      <link rel="preload" as="image" href={resume} />
      <header className="App-header">
        <div className="certifications">
          <a
            href="https://www.credly.com/badges/3821b7d4-8993-4e28-9569-2a8dedb83b8a/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* ample rectangle */}
            <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <filter id="cloudPractioner">
                  <feImage xlinkHref={cloudPractitioner} />
                </filter>
                <filter id="MyFilter" filterUnits="userSpaceOnUse"
                      x="0" y="0"
                      width="100%" height="100%">
                   {/* offsetBlur */}
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
                  <feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>
                  {/* litPaint */}
                  <feSpecularLighting in="blur" surfaceScale="4" specularConstant=".75"
                                      specularExponent="100" lightingColor="#999999"
                                      result="specOut">
                    <fePointLight x="-5000" y="-10000" z="20000"/>
                  </feSpecularLighting>
                  <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
                  <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                              k1="0" k2="1" k3="1" k4="0" result="litPaint"/>

                  {/* merge offsetBlur + litPaint */}
                  <feMerge>
                    <feMergeNode in="offsetBlur"/>
                    <feMergeNode in="litPaint"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Graphic elements */}
              <g filter="url(#MyFilter)">
                  <rect x="10%" y="10%" height="80%" width="80%"
                  style={{filter: "url(#cloudPractioner)" }} />
              </g>
            </svg>
          </a>
          <a
            href="https://www.credly.com/badges/3821b7d4-8993-4e28-9569-2a8dedb83b8a/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* ample rectangle */}
            <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <filter id="associateArchitect">
                  <feImage xlinkHref={associateArchitect} />
                </filter>
                <filter id="MyFilter" filterUnits="userSpaceOnUse"
                      x="0" y="0"
                      width="100%" height="100%">
                   {/* offsetBlur */}
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
                  <feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>
                  {/* litPaint */}
                  <feSpecularLighting in="blur" surfaceScale="4" specularConstant=".75"
                                      specularExponent="100" lightingColor="#999999"
                                      result="specOut">
                    <fePointLight x="-5000" y="-10000" z="20000"/>
                  </feSpecularLighting>
                  <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
                  <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                              k1="0" k2="1" k3="1" k4="0" result="litPaint"/>

                  {/* merge offsetBlur + litPaint */}
                  <feMerge>
                    <feMergeNode in="offsetBlur"/>
                    <feMergeNode in="litPaint"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Graphic elements */}
              <g filter="url(#MyFilter)">
                  <rect x="10%" y="10%" height="80%" width="80%"
                  style={{filter: "url(#associateArchitect)" }} />
              </g>
            </svg>
          </a>
        </div>
        <p className="name">
          Chris H Kane
        </p>
        <a
          className="App-link"
          href="resume"
          rel="noopener noreferrer"
        >
          Peek Resume
        </a>
      </header>
    </div>
  );
}}

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

export default App;
