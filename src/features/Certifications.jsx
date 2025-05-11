import associateArchitect from 'assets/aws-certified-solutions-architect-associate.png'
import cloudPractitioner from 'assets/aws-certified-cloud-practitioner.png'


const Certifications = () => {
    return (
        <div>
            <h1>Certifications</h1>
            <p>Here are some of my certifications:</p>
            <ul>
                <li>Certified Kubernetes Administrator (CKA)</li>
                <li>AWS Certified Solutions Architect - Associate</li>
                <li>Google Cloud Professional Cloud Architect</li>
                <li>Microsoft Certified: Azure Solutions Architect Expert</li>
                <li>HashiCorp Certified: Terraform Associate</li>
            </ul>
            <link rel="preload" as="image" href={associateArchitect} />
        <link rel="preload" as="image" href={cloudPractitioner} />
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
};

export default Certifications;