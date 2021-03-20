import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import {
  CCol,
} from "@coreui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80",
    paddingBottom: 50,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    paddingTop: 30,
  },
  media: {
    height: 200,
  },
  rootcard: {
    flexGrow: 1,
    width: "70%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "50%",
    width: "50%",
    marginTop: 15,
  },
  padding1: {
    paddingTop: 15,
    paddingLeft: 80,
    paddingRight: 70,
  },
  text: {
    fontSize: theme.typography.pxToRem(23),
    // flexBasis: "50%",
    // marginTop: 10,
  },
  topcontent: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  topname: {
    fontSize: theme.typography.pxToRem(25),
    // flexBasis: "50%",
    marginTop: 15,
  },
  padding2: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 10,
  },
}));

export default function JobDetails(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Summary of Dialogue
        </Typography> */}

        <CCol sm="12" xl="12">
          {/* Job Detail List */}
          <div className="careerfy-column-12">
            <div className="careerfy-typo-wrap">
              <figure className="careerfy-jobdetail-list">
                <span className="careerfy-jobdetail-listthumb">
                  <img
                   alt=" "
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    src="/images/avatars/avatar_2.png"
                    
                  />
                </span>
                <figcaption>
                  <h2>
                    Teacher - High School Level Math, Science &amp; SAT/ACT Prep
                  </h2>
                  <span>
                    <small className="careerfy-jobdetail-type">Freelance</small>{" "}
                    Huntington Learning Center{" "}
                    <small className="careerfy-jobdetail-postinfo">
                      Posted now
                    </small>
                  </span>
                  <ul className="careerfy-jobdetail-options">
                    <li>
                      <i className="fa fa-map-marker" /> Derry Street, London,
                      United Kingdom{" "}
                      <a href="# " className="careerfy-jobdetail-view">
                        View om Map
                      </a>
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-calendar" /> Post
                      Date: May 18, 2017
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-calendar" /> Apply
                      Before: Aug 15, 2018
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-summary" />{" "}
                      Applications 4
                    </li>
                    <li>
                      <a href="# ">
                        <i className="careerfy-icon careerfy-view" /> Views 3806
                      </a>
                    </li>
                  </ul>
                  {/* <a href="# " className="careerfy-jobdetail-btn active">
                    <i className="careerfy-icon careerfy-add-list" /> Shortlist
                  </a>
                  <a href="# " className="careerfy-jobdetail-btn">
                    <i className="careerfy-icon careerfy-envelope" /> Email Job
                  </a>
                  <ul className="careerfy-jobdetail-media">
                    <li>
                      <span>Share:</span>
                    </li>
                    <li>
                      <a
                        href="# "
                        data-original-title="facebook"
                        className="careerfy-icon careerfy-facebook-logo-in-circular-button-outlined-social-symbol"
                      />
                    </li>
                    <li>
                      <a
                        href="# "
                        data-original-title="twitter"
                        className="careerfy-icon careerfy-twitter-circular-button"
                      />
                    </li>
                    <li>
                      <a
                        href="# "
                        data-original-title="linkedin"
                        className="careerfy-icon careerfy-linkedin"
                      />
                    </li>
                  </ul> */}
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Job Detail List */}
        </CCol>

        <CCol xl={12}>
          {/* Job Detail Content */}
          <div className="careerfy-column-12">
            <div className="careerfy-typo-wrap">
              <div
                className="careerfy-jobdetail-content"
                style={{ background: "white" }}
              >
                <div className="careerfy-content-title">
                  <h2>Job Detail</h2>
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
                        Experience <small>7 Years </small>
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
                  <h2>Job Description</h2>
                </div>
                <div className="careerfy-description">
                  <p>
                    Far much that one rank beheld bluebird after outside ignobly
                    allegedly more when oh arrogantly vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud
                    meretriciously hastily dalmatian a glowered inset one
                    echidna cassowary some parrot and much as goodness some
                    froze the sullen much connected bat wonderfully on
                    instantaneously eel valiantly petted this along across
                    highhandedly much dog out the much alas evasively neutral
                    lazy reset.
                  </p>
                </div>
                <div className="careerfy-content-title">
                  <h2>What You Will Do</h2>
                </div>
                <div className="careerfy-description">
                  <p>
                    Repeatedly dreamed alas opossum but dramatically despite
                    expeditiously that jeepers loosely yikes that as or eel
                    underneath kept and slept compactly far purred sure
                    abidingly up above fitting to strident wiped set waywardly
                    far the and pangolin horse approving paid chuckled cassowary
                    oh above a much opposite far much hypnotically more
                    therefore wasp less that hey apart well like while superbly
                    orca and far hence one.
                  </p>
                  <ul className="careerfy-list-style-icon">
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" />{" "}
                      Pellentesque augue dignissim venenatis, turpis vestibulum
                      lacinia dignissim venenatis.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Mus arcu
                      euismod ad hac dui, vivamus platea netus.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Neque
                      per nisl posuere sagittis, id platea dui.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> A enim
                      magnis dapibus, nullam odio porta, nisl class.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Turpis
                      leo pellentesque per nam, nostra fringilla id.
                    </li>
                  </ul>
                </div>
                <div className="careerfy-content-title">
                  <h2>What we can offer you</h2>
                </div>
                <div className="careerfy-description">
                  <p>
                    Far much that one rank beheld bluebird after outside ignobly
                    allegedly more when oh arrogantly vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud
                    meretriciously hastily dalmatian a glowered inset one
                    echidna cassowary some parrot and much as goodness some
                    froze the sullen much connected bat wonderfully on
                    instantaneously eel valiantly petted this along across
                    highhandedly much dog out the much alas evasively neutral
                    lazy reset.
                  </p>
                  <ul className="careerfy-list-style-icon">
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Mus arcu
                      euismod ad hac dui, vivamus platea netus.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Neque
                      per nisl posuere sagittis, id platea dui.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> A enim
                      magnis dapibus, nullam odio porta, nisl class.
                    </li>
                    <li>
                      <i className="careerfy-icon careerfy-arrows22" /> Turpis
                      leo pellentesque per nam, nostra fringilla id.
                    </li>
                  </ul>
                </div>
                <div className="careerfy-content-title">
                  <h2>Required skills</h2>
                </div>
                <div className="careerfy-jobdetail-tags">
                  <a href="# ">AutoCAD</a>
                  <a href="# ">Civils</a>
                  <a href="# ">food</a>
                  <a href="# ">17th edition</a>
                  <a href="# ">electrical</a>
                  <a href="# ">engineer</a>
                  <a href="# ">engineer</a>
                  <a href="# ">engineering</a>
                  <a href="# ">dairy</a>
                  <a href="# ">projects</a>
                  <a href="# ">Maintenance engineer</a>
                </div>
              </div>
              <div className="careerfy-section-title">
                <h2>Other jobs you may like</h2>
              </div>
              <div className="careerfy-job careerfy-joblisting-classic careerfy-jobdetail-joblisting">
                <ul className="careerfy-row">
                  <li className="careerfy-column-12">
                    <div className="careerfy-joblisting-classic-wrap">
                      <figure>
                        <a href="# ">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            
                          />
                        </a>
                      </figure>
                      <div className="careerfy-joblisting-text">
                        <div className="careerfy-list-option">
                          <h2>
                            <a href="# ">Need Senior Rolling Stock Technician</a>{" "}
                            <span>Featured</span>
                          </h2>
                          <ul>
                            <li>
                              <a href="# ">@ Massimo Artemisis</a>
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-maps-and-flags" />{" "}
                              Netherlands, Rotterdam
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-filter-tool-black-shape" />{" "}
                              Sales &amp; Marketing
                            </li>
                          </ul>
                        </div>
                        <div className="careerfy-job-userlist">
                          <a href="# " className="careerfy-option-btn">
                            Freelance
                          </a>
                          <a href="# " className="careerfy-job-like">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li className="careerfy-column-12">
                    <div className="careerfy-joblisting-classic-wrap">
                      <figure>
                        <a href="# ">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            
                          />
                        </a>
                      </figure>
                      <div className="careerfy-joblisting-text">
                        <div className="careerfy-list-option">
                          <h2>
                            <a href="# ">Job in Computer Information Tech</a>
                          </h2>
                          <ul>
                            <li>
                              <a href="# ">@ Sapient</a>
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-maps-and-flags" />{" "}
                              Netherlands, Rotterdam
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-filter-tool-black-shape" />{" "}
                              Development
                            </li>
                          </ul>
                        </div>
                        <div className="careerfy-job-userlist">
                          <a
                            href="# "
                            className="careerfy-option-btn careerfy-blue"
                          >
                            Full time
                          </a>
                          <a href="# " className="careerfy-job-like">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li className="careerfy-column-12">
                    <div className="careerfy-joblisting-classic-wrap">
                      <figure>
                        <a href="# ">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            
                          />
                        </a>
                      </figure>
                      <div className="careerfy-joblisting-text">
                        <div className="careerfy-list-option">
                          <h2>
                            <a href="# ">Website Information Officer Required</a>
                          </h2>
                          <ul>
                            <li>
                              <a href="# ">@ Mindshare</a>
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-maps-and-flags" />{" "}
                              Netherlands, Rotterdam
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-filter-tool-black-shape" />{" "}
                              Telecommunication
                            </li>
                          </ul>
                        </div>
                        <div className="careerfy-job-userlist">
                          <a
                            href="# "
                            className="careerfy-option-btn careerfy-red"
                          >
                            Temporary
                          </a>
                          <a href="# " className="careerfy-job-like">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li className="careerfy-column-12">
                    <div className="careerfy-joblisting-classic-wrap">
                      <figure>
                        <a href="# ">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            
                          />
                        </a>
                      </figure>
                      <div className="careerfy-joblisting-text">
                        <div className="careerfy-list-option">
                          <h2>
                            <a href="# ">Junior Support Engineer VBA</a>{" "}
                            <span>Featured</span>
                          </h2>
                          <ul>
                            <li>
                              <a href="# ">@ Disneyland</a>
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-maps-and-flags" />{" "}
                              Netherlands, Rotterdam
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-filter-tool-black-shape" />{" "}
                              Food Services
                            </li>
                          </ul>
                        </div>
                        <div className="careerfy-job-userlist">
                          <a href="# " className="careerfy-option-btn">
                            Freelance
                          </a>
                          <a href="# " className="careerfy-job-like">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                  <li className="careerfy-column-12">
                    <div className="careerfy-joblisting-classic-wrap">
                      <figure>
                        <a href="# ">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            
                          />
                        </a>
                      </figure>
                      <div className="careerfy-joblisting-text">
                        <div className="careerfy-list-option">
                          <h2>
                            <a href="# ">
                              Technology Senior Officer Norway Office
                            </a>
                          </h2>
                          <ul>
                            <li>
                              <a href="# ">@ LK Collections</a>
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-maps-and-flags" />{" "}
                              Netherlands, Rotterdam
                            </li>
                            <li>
                              <i className="careerfy-icon careerfy-filter-tool-black-shape" />{" "}
                              Health Care
                            </li>
                          </ul>
                        </div>
                        <div className="careerfy-job-userlist">
                          <a
                            href="# "
                            className="careerfy-option-btn careerfy-green"
                          >
                            Part time
                          </a>
                          <a href="# " className="careerfy-job-like">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Job Detail Content */}
        </CCol>
      </Container>
    </React.Fragment>
  );
}
