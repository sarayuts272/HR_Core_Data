import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import {
  CCol,
  CRow,
} from "@coreui/react";

export default function CandidateDetails(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        <CRow>
          <CCol sm="4" xl="4">
            <CCol>
              <aside className="careerfy-column-12">
                <div className="careerfy-typo-wrap">
                  <div className="jobsearch_candidate_info">
                    <figure>
                      <img  alt=" " src="/images/avatars/avatar_2.png" />
                    </figure>
                    <h2>
                      <a href="# ">Ariana Grande</a>
                    </h2>
                    <p>
                      Financial Supervisor at <a href="# ">Yup Studio</a>
                    </p>
                    <span>Netherlands, Rotterdam</span>
                    {/* <small>Member Since, Aug 5, 2015</small> */}
                    
                    <a href="# " className="careerfy-candidate-download-btn">
                      <i className="careerfy-icon careerfy-download-arrow" />{" "}
                      Download CV
                    </a>
                  </div>
                </div>
              </aside>
            </CCol>
          </CCol>
          <CCol sm="8" xl="8">
            <CCol>
              <div className="careerfy-column-12">
                <div className="careerfy-typo-wrap">
                  <div className="careerfy-candidate-editor">
                    <div className="careerfy-content-title">
                      <h2>About Ariana Grande</h2>
                    </div>
                    <div className="careerfy-jobdetail-services">
                      <ul className="careerfy-row">
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-salary" />
                          <div className="careerfy-services-text">
                            Offerd Salary <small>£50,000+</small>
                          </div>
                        </li>
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-social-media" />
                          <div className="careerfy-services-text">
                            Career Level <small>Manager</small>
                          </div>
                        </li>
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-briefcase" />
                          <div className="careerfy-services-text">
                            Experience <small>7 Years</small>
                          </div>
                        </li>
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-user" />
                          <div className="careerfy-services-text">
                            Gender <small>Male</small>
                          </div>
                        </li>
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-network" />
                          <div className="careerfy-services-text">
                            Industry <small>Banking</small>
                          </div>
                        </li>
                        <li className="careerfy-column-4">
                          <i className="careerfy-icon careerfy-mortarboard" />
                          <div className="careerfy-services-text">
                            Qualification <small>Master’s Degree</small>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="careerfy-content-title">
                      <h2>Candidate Description</h2>
                    </div>
                    <div className="careerfy-description">
                      <p>
                        Hello my name is Ariana Gande Connor and I’m a Financial
                        Supervisor from Netherlands, Rotterdam. In pharetra orci
                        dignissim, blandit mi semper, ultricies diam.
                        Suspendisse malesuada suscipit nunc non volutpat. Sed
                        porta nulla id orci laoreet tempor non consequat enim.
                        Sed vitae aliquam velit. Aliquam ante accumsan ac est.
                      </p>
                    </div>
                    <div className="careerfy-description">
                      <p>
                        Integer vehicula rhoncus molestie. Morbi ornare ipsum
                        sed sem condimentum, et pulvinar tortor luctus.
                        Suspendisse condimentum lorem ut elementum aliquam.
                        Mauris nec erat ut libero vulputate pulvinar. Aliquam
                        ante erat, blandit at pretium et, accumsan ac est.
                        Integer vehicula rhoncus molestie. Morbi ornare ipsum
                        sed sem condimentum, et pulvinar tortor luctus.
                        Suspendisse condimentum lorem ut elementum aliquam.
                        Mauris nec.
                      </p>
                    </div>
                  </div>
                  <div className="careerfy-candidate-title">
                    {" "}
                    <h2>
                      <i className="careerfy-icon careerfy-mortarboard" />{" "}
                      Education
                    </h2>{" "}
                  </div>
                  <div className="careerfy-candidate-timeline">
                    <ul className="careerfy-row">
                      <li className="careerfy-column-12">
                        <small>2002 - 2004</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Walters University</span>
                          <h2>
                            <a href="# ">Masters in Fine Arts</a>
                          </h2>
                          <p>
                            Fussy penguin insect additionally wow absolutely
                            crud meretriciously hastily dalmatian a glowered.
                            outside oh arrogantly vehement.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2012 - 2015</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Bachlors in Fine Arts</span>
                          <h2>
                            <a href="# ">Tommers College</a>
                          </h2>
                          <p>
                            That one rank beheld bluebird after outside ignobly
                            allegedly more when oh arrogantly vehement
                            irresistibly fussy penguin insect additionally.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2014 - 2015</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Imperieal Institute of Art Direction</span>
                          <h2>
                            <a href="# ">Diploma in Fine Arts</a>
                          </h2>
                          <p>
                            Outside ignobly allegedly more when oh arrogantly
                            vehement irresistibly fussy penguin insect
                            additionally wow absolutely crud meretriciously a
                            glowered.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="careerfy-candidate-title">
                    {" "}
                    <h2>
                      <i className="careerfy-icon careerfy-social-media" />{" "}
                      Experince
                    </h2>{" "}
                  </div>
                  <div className="careerfy-candidate-timeline">
                    <ul className="careerfy-row">
                      <li className="careerfy-column-12">
                        <small>2010 - 2012</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Atract Solutions</span>
                          <h2>
                            <a href="# ">Development Manager</a>
                          </h2>
                          <p>
                            Arrogantly vehement irresistibly fussy penguin
                            insect additionally wow absolutely crud
                            meretriciously hastily dalmatian a glowered.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2006 - 2008</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Bachlors in Fine Arts</span>
                          <h2>
                            <a href="# ">Minor Solutions</a>
                          </h2>
                          <p>
                            Far much that one rank beheld bluebird after outside
                            ignobly allegedly more when oh arrogantly vehement
                            irresistibly fussy penguin insect additionally.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2002 - 2004</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Abstraxct Max</span>
                          <h2>
                            <a href="# ">Self Employed Professional</a>
                          </h2>
                          <p>
                            Outside ignobly allegedly more when oh arrogantly
                            vehement irresistibly fussy penguin insect
                            additionally wow absolutely crud meretriciously
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="jobsearch_progressbar_wrap">
                    <div className="careerfy-row">
                      <div className="careerfy-column-6">
                        <div className="careerfy-candidate-title">
                          {" "}
                          <h2>
                            <i className="careerfy-icon careerfy-design-skills" />{" "}
                            Skills
                          </h2>{" "}
                        </div>
                        <div className="jobsearch_progressbar1" data-width={90}>
                          Sale Product
                        </div>
                        <div className="jobsearch_progressbar1" data-width={72}>
                          Google Seo
                        </div>
                        <div className="jobsearch_progressbar1" data-width={50}>
                          Listening
                        </div>
                        <div className="jobsearch_progressbar1" data-width={95}>
                          Graphic Design
                        </div>
                        <div className="jobsearch_progressbar1" data-width={75}>
                          Business Sense
                        </div>
                      </div>
                      <div className="careerfy-column-6">
                        <span className="jobsearch_progressbar_subtitle">
                          Personal Skills
                        </span>
                        <div className="jobsearch_progressbar1" data-width={90}>
                          Creativity
                        </div>
                        <div className="jobsearch_progressbar1" data-width={72}>
                          Team Group
                        </div>
                        <div className="jobsearch_progressbar1" data-width={50}>
                          Organizations
                        </div>
                        <div className="jobsearch_progressbar1" data-width={95}>
                          Flexibilty
                        </div>
                        <div className="jobsearch_progressbar1" data-width={75}>
                          Communication
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="careerfy-candidate-title">
                    {" "}
                    <h2>
                      <i className="careerfy-icon careerfy-briefcase" />{" "}
                      Portfolio
                    </h2>{" "}
                  </div>
                  <div className="careerfy-gallery careerfy-simple-gallery candidate_portfolio">
                    <ul className="careerfy-row grid">
                      <li className="grid-item careerfy-column-3">
                        {" "}
                        <a
                          href="extra-images/employer-gallery-2.jpg"
                          className="fancybox"
                          data-fancybox-group="group"
                        >
                          <img alt=" " src="/images/avatars/avatar_2.png" />
                        </a>{" "}
                      </li>
                      <li className="grid-item careerfy-column-6">
                        {" "}
                        <a
                          href="extra-images/employer-gallery-2.jpg"
                          className="fancybox"
                          data-fancybox-group="group"
                        >
                          <img alt=" " src="/images/avatars/avatar_2.png" />
                        </a>{" "}
                      </li>
                      <li className="grid-item careerfy-column-3">
                        {" "}
                        <a
                          href="extra-images/employer-gallery-2.jpg"
                          className="fancybox"
                          data-fancybox-group="group"
                        >
                          <img alt=" " src="/images/avatars/avatar_2.png" />
                        </a>{" "}
                      </li>
                      <li className="grid-item careerfy-column-3">
                        {" "}
                        <a
                          href="extra-images/employer-gallery-2.jpg"
                          className="fancybox"
                          data-fancybox-group="group"
                        >
                          <img alt=" " src="/images/avatars/avatar_2.png" />
                        </a>{" "}
                      </li>
                      <li className="grid-item careerfy-column-3">
                        {" "}
                        <a
                          href="extra-images/employer-gallery-2.jpg"
                          className="fancybox"
                          data-fancybox-group="group"
                        >
                          <img alt=" " src="/images/avatars/avatar_2.png" />
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="careerfy-candidate-title">
                    {" "}
                    <h2>
                      <i className="careerfy-icon careerfy-trophy" /> Honors
                      &amp; awards
                    </h2>{" "}
                  </div>
                  <div className="careerfy-candidate-timeline">
                    <ul className="careerfy-row">
                      <li className="careerfy-column-12">
                        <small>2007</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Yeartam</span>
                          <h2>
                            <a href="# ">Distinguished Service Award</a>
                          </h2>
                          <p>
                            Fussy penguin insect additionally wow absolutely
                            crud meretriciously hastily dalmatian a glowered.
                            outside ignobly allegedly more when vehement.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2012</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Goldtech</span>
                          <h2>
                            <a href="# ">Robin Milner Young Researcher Award</a>
                          </h2>
                          <p>
                            That one rank beheld bluebird after outside ignobly
                            allegedly more when oh arrogantly vehement
                            irresistibly fussy penguin insect additionally.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>2014</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Unodoncity</span>
                          <h2>
                            <a href="# ">Doctoral Dissertation Award</a>
                          </h2>
                          <p>
                            Outside ignobly allegedly more when oh arrogantly
                            vehement irresistibly fussy penguin insect
                            additionally wow absolutely crud meretriciously a
                            glowered.
                          </p>
                        </div>
                      </li>
                      <li className="careerfy-column-12">
                        <small>Dec 2016</small>
                        <div className="careerfy-candidate-timeline-text">
                          <span>Techzenbam</span>
                          <h2>
                            <a href="# ">Programming Languages Achievement</a>
                          </h2>
                          <p>
                            Outside ignobly allegedly more when oh arrogantly
                            vehement irresistibly fussy penguin insect
                            additionally wow absolutely hastily dalmatian a
                            glowered.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CCol>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
