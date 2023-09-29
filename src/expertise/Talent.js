import React from "react";
import "./Talent.css";

const Talent = () => {
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
        <div className="hire">
          <div className="container">
            <div>
              <h1
                style={{
                  height: "173px",
                  width: "583px",
                  color: "white",
                  paddingTop: "120px",
                }}
              >
                Hire “Enterprise-grade” Data & Analytics experts in next 48
                hours
              </h1>
            </div>
            <div style={{ paddingTop: "100px" }}>
              <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  padding: "15px 32px",
                  borderRadius: "5px",
                }}
              >
                Get in touch{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          width: "1210px",
        }}
      >
        <div style={{ display: "flex" }}>
          <h5
            className="text-muted"
            style={{
              textAlign: "left",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            Trusted by Leading brands and startups
          </h5>
          <img
            src="./images/bonduelle.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
          <img
            src="./images/lucernal.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
          <img
            src="./images/thermof.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
          <img
            src="./images/acco.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
          <img
            src="./images/igt1.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
          <img
            src="./images/universalm.png"
            alt="..."
            style={{ width: "153px", height: "70px" }}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <h4>What DataObserve Offers</h4>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/48.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Agility</p>
                <h4>48 Hours</h4>
                <p className="arrowtext text-justify">
                  Fast onboarding to hire the Top 3% of Talents
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/timesaved.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Time saved</p>
                <h4>85%</h4>
                <p className="arrowtext text-justify">
                  interviewing hours saved per recruitment
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/highrr.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>High retention rate</p>
                <h4>97%</h4>
                <p className="arrowtext text-justify">
                  Engagement success rates
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/enter.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Enterprise Grade Engineers</p>
                <h4>90%</h4>
                <p className="arrowtext text-justify">
                  of our In-house engineers have strong experience in working
                  with Fortune 500s
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/trust.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Trust & Reliability</p>
                <h4>100+</h4>
                <p className="arrowtext text-justify">
                  Full-time and Contract-to-Hire candidates available.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/global.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Global Team</p>
                <h4>5+</h4>
                <p className="arrowtext text-justify">
                  Global delivery centers across the USA, Canada, UK, India,
                  Netherlands, Dubai & Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bestprac">
        <div className="container">
          <div class="card" style={{ width: "26%", height: "390px" }}>
            <div class="mt-2 card-body">
              <div>
                <img
                  src="./images/ebook.png"
                  alt="..."
                  style={{ width: "70px" }}
                />
              </div>
              <h5
                class="card-title"
                style={{
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: "600px",
                  lineHeight: "27.4px",
                  letterSpacing: "-0.32px",
                }}
              >
                Best Practices for Database Migration to AWS - A guide by
                DataObserve
              </h5>
              <h6
                class="card-subtitle mb-2 text-muted"
                style={{ fontSize: "14px", marginTop: "0px" }}
              >
                Migrating a database to AWS takes time and careful planning. It
                isn’t just the database that needs migration; everything that
                uses it will need some changes.
              </h6>
              {/* <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
              <a href="#" class="card-link" style={{ fontSize: "17px" }}>
                Download{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              {/* <a href="#" class="card-link">
              Another link
            </a> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <h4>
          Hire top 1% of Global Data &<br /> Analytics Engineers
        </h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">
              <img
                src="./images/dataen.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Engineering</p>
            </div>
            <div class="col">
              <img
                src="./images/clouden.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Cloud Engineering</p>
            </div>
            <div class="col">
              {" "}
              <img
                src="./images/dataan.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Analystics & Bi</p>
            </div>
            <div class="col">
              <img
                src="./images/datasc.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Science - AI & ML</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">
              <img
                src="./images/devops.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>DevOps</p>
            </div>
            <div class="col">
              <img
                src="./images/cloudops.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>CloudOps</p>
            </div>
            <div class="col">
              <img
                src="./images/fullstack.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>FullStack Development</p>
            </div>
            <div class="col">
              <img
                src="./images/qa.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>QA Test Automation</p>
            </div>
          </div>
          <div
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          // }}
          >
            <h4>Client Testimonial</h4>
            <div
              className="row energydo"
              style={{
                height: "460px",
                padding: "40px 40px 40px 40px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="col-md-4">
                <h4
                  style={{
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "700px",
                    lineHeight: "56px",
                    letterSpacing: "1px",
                    color: "#ffff",
                  }}
                >
                  Energy Domain
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                  }}
                >
                  Advance Data Lakehouse Solution
                </p>
                <img
                  src="./images/gbr.png"
                  alt="..."
                  style={{
                    width: "194px",
                    height: "194px",
                    marginTop: "105px",
                  }}
                />
              </div>
              <div
                className="col-md-8"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <h4
                  style={{
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "700px",
                    lineHeight: "56px",
                    letterSpacing: "1px",
                    textAlign: "left",
                    color: "#ffff",
                  }}
                >
                  GBR Eco
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    width: "440px",
                    textAlign: "left",
                    color: "#ffff",
                    fontWeight: "500",
                    lineHeight: "35px",
                  }}
                >
                  From endless computing power, to reduced cycle time and easier
                  data access, the new efficiency supported by DataObserve
                  enabled us to produce timely insights about products,
                  customers, and Vendors and significantly enhance their
                  experiences.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                    marginTop: "100px",
                  }}
                >
                  Rama Krishna Raju Dandu
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                    marginTop: "-15px",
                  }}
                >
                  Chief Operating Officer, GBR Eco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          width: "1210px",
        }}
      >
        <div
          className="container row"
          style={{
            display: "flex",
          }}
        >
          <img
            className="col-md-2"
            src="./images/amgn.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/nbcu.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/universalm.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/reliance.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/bonduelle.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/greendot.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <h2>Talent as a Service</h2>
          <div className="cocreater">
            <p
              style={{
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "27px",
                width: "460px",
                marginLeft: "50%",
                marginTop: "60px",
              }}
            >
              We're introducing a new approach to hiring cloud Engineers. This
              service will help your cloud engineering team to build innovative
              digital transformation solutions.
            </p>
            <h6
              style={{
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "30px",
                marginLeft: "50%",
              }}
            >
              Meet Cocreater
            </h6>
            <button
              className="botn"
              style={{
                padding: "16px 50px 16px 50px",
                fontSize: "15px",
                color: "white",
                marginLeft: "50%",
              }}
            >
              Explore CoCreater{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
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

export default Talent;
