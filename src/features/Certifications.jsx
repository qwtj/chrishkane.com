import "features/Certifications.css";
import associateArchitect from 'assets/aws-certified-solutions-architect-associate.png'
import cloudPractitioner from 'assets/aws-certified-cloud-practitioner.png'
import w3c from 'assets/w3c.png'
const Certifications = () => {
    return (
        <section className="certifications-section">
            <h1 className="certifications-heading">Certifications</h1>
            <ul className="certifications-list">
              <li>
                <h2>AWS Certified Cloud Practitioner</h2>
                <img src={cloudPractitioner} alt="AWS Certified Cloud Practitioner" />
              </li>
              <li>
                <h2>AWS Certified Solutions Architect - Associate</h2>
                <img src={associateArchitect} alt="AWS Certified Solutions Architect - Associate" />
              </li>
              <li>
                <h2>WAI0.1x: Introduction to Web Accessibility, issued by edX</h2>
                <img src={w3c} alt="WAI0.1x: Introduction to Web Accessibility, issued by edX" />
              </li>
            </ul>
        </section>
    );
};

export default Certifications;