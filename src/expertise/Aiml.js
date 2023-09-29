import React from "react";
import "./Aiml.css";

const Aiml = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="container d-flex justify-content-between align-items-center">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="logo d-flex">
                <img
                  className="logo-main"
                  src="./images/main-logo.png"
                  alt="logo"
                  width={100}
                />
                <h4 className="logo-text" style={{ textAlign: "center" }}>
                  <span className="data">
                    Data<span className="observe">Observe</span>{" "}
                  </span>
                </h4>
              </div>
              <ul class="navbar-nav justify-content-around">
                <li class="nav-item dropdown expertise">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Expertise
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Industries
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Insights
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <button className="contact">contact</button>
          </div>
        </div>
      </div>
      <div className="enterprise">
        <div
          style={{
            display: "inline-flex",
            minHeight: "1080px",
            padding: "153px 676px 100px 255px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            AI & Machine Learning
          </p>
          <h4
            style={{
              color: "white",
              fontSize: "35px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "57px",
            }}
          >
            Leverage the power of AI and ML to build Predictive Solutions that
            upscale your business
          </h4>
          <button
            style={{
              display: "flex",
              height: "61px",
              maxWidth: "255px",
              padding: "20px 46px 21px 48px",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              marginTop: "70px",
              borderRadius: "5px",
            }}
          >
            <span
              style={{
                color: "#FF4925",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "19px",
              }}
            >
              Talk to us now
            </span>{" "}
            <i
              className="fa fa-long-arrow-right"
              style={{
                width: "23px",
                fontSize: "29px",
                flexShrink: "0",
                color: "#FF4925",
              }}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4 style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}>
          Our Expertise in AWS AI and ML Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          With over 40 years of combined industry experience, our Artificial
          Intelligence services and Machine Learning services are tailored to
          set you on the path of operational excellence and holistic growth.
        </p>
      </div>
      <div>
        <div class="card-deck" style={{ margin: "5px 0px 0px 0px" }}>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 1 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 2 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 3 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 4 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 5 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h4
            style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}
          >
            Our Case Studies
          </h4>
        </div>
        <div
          class="card mb-3 mt-5"
          style={{
            backgroundColor: "#1A4AB9",
            maxWidth: "800px",
            borderRadius: "20px",
          }}
        >
          <div
            class="row no-gutters"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "spacebetween",
            }}
          >
            <div class="col-md-4">
              <img
                src="./images/video-wp (1).png"
                className="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>
                  Build A Undified Augmented Analytics decision intelligence
                  platform
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  Learn how we created to self-service ,predective,insights
                  platform driven by an adaptive machine learning engine which
                  helps improve decision making
                </p>
                <p class="card-text" style={{ color: "white" }}>
                  <small>
                    Read case study
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </small>
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src="./images/accede.png"
                    alt=""
                    style={{ width: "60px" }}
                  />
                  <img
                    src="./images/solakhen.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                  <img
                    src="./images/grbeco.png"
                    alt=""
                    style={{ width: "60px" }}
                  />
                  <img
                    src="./images/srdsystems.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3 className="cloud-head">Benefits</h3>
          <p style={{ width: "700px" }}>
            DataObserve is the fastest-growing Business Intelligence & Data
            Analytics company with strong expertise in Data lake solutions, Data
            Warehouse Engineering, Data Migration & Modernization.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/accurate.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "80px" }}
                />
                <h5>Accurate forecasts</h5>

                <p className="arrowtext text-justify">
                  Insights uncovered by our ML solutions can help companies
                  detect and prevent major risks before they occur. They can
                  also anticipate demand spikes and market changes and prepare
                  for them accordingly.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="images/personal.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "76px", height: "76px" }}
                />
                <h5>Personalization</h5>

                <p className="arrowtext text-justify">
                  Drive sales and close more deals by providing a more
                  personalized experience to your customers. ML models can
                  identify purchasing patterns and provide recommendations based
                  on the inputs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/automation.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "59px" }}
                />
                <h5>Predictive maintenance</h5>

                <p className="arrowtext text-justify">
                  Collect data from sensors and equipment to identify patterns
                  and anticipate the time that a piece of equipment is most
                  likely to fail so that it can be prevented.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/predictive.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "73px" }}
                />
                <h5>Predictive maintenance</h5>

                <p className="arrowtext text-justify">
                  Collect data from sensors and equipment to identify patterns
                  and anticipate the time that a piece of equipment is most
                  likely to fail so that it can be prevented.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/cyber.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "76px" }}
                />
                <h5>Cybersecurity</h5>

                <p className="arrowtext text-justify">
                  Get rid of cyber attacks once and for all. Cybersecurity
                  backed by AI technologies can identify cyber threats quickly
                  and deal with them in real time.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="card mb-3 mt-5"
              style={{
                backgroundColor: "#1A4AB9",
                maxWidth: "100%",
                borderRadius: "20px",
              }}
            >
              <div
                class="row no-gutters"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "spacebetween",
                }}
              >
                <div class="col-md-1"></div>
                <div class="col-md-8">
                  <div class="card-body d-flex">
                    <div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Make the most out of cloud Capabilities with DataObserve
                        Advance
                      </h5>
                      <p
                        class="card-text"
                        style={{ color: "white", width: "500px" }}
                      >
                        Simplify your cloud-powered business transformation with
                        a host of DataObserve cloud services, including
                        consulting, optimization, migration, & modernization.
                        Our team of cloud experts is here to guide you.
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          width: "200px",
                          border: "none",
                          height: "55px",
                          margin: "42px",
                          borderRadius: "6px",
                        }}
                      >
                        Talk to us now{" "}
                        <i
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="cloud-head"> What Makes Us Stand Out</h3>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/proven.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "73px", height: "76px" }}
                />
                <h5>Proven AI/ML Success</h5>

                <p className="arrowtext text-justify">
                  DataObserve is a reliable Machine Learning partner, with our
                  AWS/Azure validation confirming our competence in handling
                  AI/ML applications. Our handpicked consultants bring extensive
                  experience gained from serving a wide range of customers
                  across diverse industries worldwide.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/dedicated.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "73px", height: "76px" }}
                />
                <h5>Dedicated Team</h5>

                <p className="arrowtext text-justify">
                  Our in-house ML experts have worked with some of the most
                  popular AI/ML services provided by AWS & Azure including
                  Amazon Forecast, SageMaker, Synapse, ADF, and more. Our
                  dedicated team ensures that your business is transformed for
                  the digital age.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/advanced.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "73px", height: "76px" }}
                />
                <h5>Advanced Tools</h5>

                <p className="arrowtext text-justify">
                  Our experienced AI and Machine Learning services experts
                  utilize futuristic tools and technology to help your
                  organization reach its full potential. Turn your ideas into
                  reality with AWS AI and ML services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-center" style={{ border: "0px" }}>
        <div class="card-body faq-class">
          <h5 class="card-title" style={{ color: "white" }}>
            FAQs
          </h5>
          <div
            class="accordion"
            id="accordionExample"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingOne"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What is AWS cloud migration?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingTwo"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How to migrate data from on-premise to AWS Cloud?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What are AWS cloud migration services?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Why do enterprises need to migrate to the AWS Cloud?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What are benefits of migrating to AWS cloud?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Why choose DataObserve for AWS cloud migration?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 shadow-sm rounded">
              <div>
                <div className="card">
                  <div class="card-body1">
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* {/ <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> /} */}
                    <p className="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true">
                      <span classname="hello">hello@dataserve.io</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 shadow-sm">
              <div>
                <div>
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control name" />
                      <label>Work Email</label>
                      <input type="text" className="form-control name" />
                      <label>Contact Number</label>
                      <input type="text" className="form-control name" />

                      <button className="contact-us-2">Contact Us</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER START --> */}
      <div class="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Company</h1>
                <ul>
                  <li>About Us</li>
                  <li>People and Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Services</h1>
                <ul>
                  <li>Cloud transformation</li>
                  <li>Data Engineering</li>
                  <li>Data Analytics and BI</li>
                  <li>AI & Machine Learning</li>
                  <li>evOps-as-a-service</li>
                  <li>Application Modernization</li>
                  <li>Talent as a Service</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Industries</h1>
                <ul>
                  <li>Life sciences and Pharma</li>
                  <li>Media & Entertainment</li>
                  <li>Gaming and gambling</li>
                </ul>
                <h1 className="footer-heading">Products</h1>
                <ul>
                  <li>Data Observability</li>
                  <li>Health EM</li>
                  <li>DataSense</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Insights</h1>
                <ul>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                  <li>Ebooks</li>
                  <li>Webinars & Videos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="contain">
          <div class="clearfix"></div>
        </div>
      </div>
      {/* <!-- END OF FOOTER --> */}
    </div>
  );
};

export default Aiml;
