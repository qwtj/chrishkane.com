import "features/About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-heading">About</h1>
      <div className="about-content">
        <p className="about-paragraph">
          I am a seasoned Principal Engineer with over a decade of extensive experience in architecting and
          delivering complex, scalable, and secure full-stack solutions across major cloud platforms including AWS,
          Google Cloud, and Azure.
        </p>
        <p className="about-paragraph">
          My professional journey is marked by a robust track record in designing, deploying, and optimizing enterprise-
          level applications, particularly emphasizing secure, reliable, and efficient codebases. I excel in modern
          programming languages and frameworks with significant expertise in full-stack development encompassing
          Angular, React, Vue.js, Node.js, and particularly mobile native platforms such as Swift and Objective-C, as
          demonstrated by my recent leadership in developing ZOCCAM's native iOS and Android applications.  My most
          recent endeavor was learning Rust in 24 hours based on prior knowledge of C C++, Go Lang and Java.
        </p>
        <p className="about-paragraph">
          My technical approach places a strong emphasis on CI/CD practices, Infrastructure as Code (IaC) with tools
          like Terraform, AWS CDK, and CloudFormation, and I have implemented comprehensive automation solutions
          via Jenkins, GitHub Actions, and Azure DevOps pipelines. Security remains integral to my development
          methodology, underpinned by proactive enforcement of rigorous security standards and practices, ensuring
          code stability, reusability, and scalability.
        </p>
        <p className="about-paragraph">
          Beyond my technical capabilities, my strengths include exceptional soft skills that facilitate effective team
          leadership, mentorship, and client relationship management, particularly in coordinating both onsite and
          offshore teams. I pride myself on clear, strategic communication and the ability to align technical outcomes
          with client expectations and broader business objectives. Moving forward, I am seeking opportunities where I
          can leverage my expertise in cloud architecture and software engineering to lead innovative projects, drive
          technological advancement, and contribute significantly to the strategic goals of forward-thinking
          organizations.
        </p>
      </div>
    </section>
  );
};

export default About;