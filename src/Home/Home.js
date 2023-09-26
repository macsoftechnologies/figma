import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="bg-white">
        <div className="container d-flex justify-content-between align-items-center">
          <nav class="navbar navbar-expand-lg navbar-light">
            {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="logo d-flex">
                <img
                  className="logo-main"
                  src="./images/main-logo.png"
                  alt="logo"
                  width={100}
                />
                <h4 className="logo-text">
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

      <div>
        <img className="slide" src="./images/slide.jpg" alt="slide" />
      </div>
      <div>
        <h4 className="customers">DataObserve's Happy Customers</h4>
      </div>

      <div class="shadow p-3 mb-5 bg-white rounded container acco">
        <div className="genman">
          <img
            src="./images/Gen.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
          <img
            src="./images/genmab.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
          <img
            src="./images/igt.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
          <img
            src="./images/nbc.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
          <img
            src="./images/thermo.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
          <img
            src="./images/universal.png"
            className="App-logo"
            alt="logo"
            width={100}
          />
        </div>
      </div>
      <div>
        <h3 className="cloud-head">
          start your digital transformation journey with us
        </h3>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/uparrow.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/dataengg.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/powerbi.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/ai.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/deveops.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/application.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>cloud transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          className="component"
          src="./images/Component.png"
          alt="component"
        />
      </div>
      {/* //....cloud partners.. */}
      <div className="container">
        <div
          style={{
            color: "#505050",
            fontSize: "31.35px",
            fontFamily: "Poppins",
            fontWeight: 700,
            lineHeight: "50.16px",
            wordWrap: "break-word",
          }}
        >
          DataObserve Cloud Capabilities
        </div>
        <div
          style={{
            paddingTop: 4,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              height: 52,
              paddingRight: 54,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 904,
                color: "rgba(0, 0, 0, 0.70)",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: 400,
                lineHeight: "25.60px",
                wordWrap: "break-word",
              }}
            >
              DataObserve is the fastest-growing Cloud Transformation &amp; Data
              Analytics company with strong expertise in Data lake solutions,
              Data Warehouse Engineering, Data Migration &amp; Modernization.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10">
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "58.50px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 40,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    borderRadius: 18,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 26,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "877.50px",
                      paddingBottom: "18.39px",
                      paddingRight: "717.50px",
                      borderBottom: "1px rgba(5, 5, 5, 0.10) solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#1A4AB9",
                        fontSize: 22,
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        lineHeight: "26.40px",
                        wordWrap: "break-word",
                      }}
                    >
                      Competencies
                    </div>
                  </div>
                  <div
                    style={{
                      width: "877.50px",
                      height: "112.38px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "281.83px",
                        height: "51.19px",
                        left: 0,
                        top: 0,
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "36.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Data &amp; Analytics Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        left: "297.83px",
                        top: 0,
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        DevOps Consulting Competency
                      </div>
                    </div>
                    <div
                      style={{
                        width: "281.84px",
                        height: "51.19px",
                        left: "595.66px",
                        top: 0,
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "91.84px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Migration Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "281.83px",
                        height: "51.19px",
                        left: 0,
                        top: "61.19px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "7.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Microsoft Workloads Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "92.83px",
                        left: "297.83px",
                        top: "61.19px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        APN Immersion Days
                      </div>
                    </div>
                    <div
                      style={{
                        width: "281.84px",
                        height: "51.19px",
                        left: "595.66px",
                        top: "61.19px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "21.84px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          AWS Well-Architected Partner
                          <br />
                          Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: 18,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 26,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "877.50px",
                      paddingBottom: "18.39px",
                      paddingRight: "824.50px",
                      borderBottom: "1px rgba(5, 5, 5, 0.10) solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#1A4AB9",
                        fontSize: 22,
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        lineHeight: "26.40px",
                        wordWrap: "break-word",
                      }}
                    >
                      SDPs
                    </div>
                  </div>
                  <div
                    style={{
                      width: "877.50px",
                      height: "209.16px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        paddingRight: "65.83px",
                        left: 0,
                        top: 0,
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon Kinesis Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "87.83px",
                        left: "297.83px",
                        top: 0,
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon EMR Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "56.84px",
                        left: "595.66px",
                        top: 0,
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon Redshift Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "31.83px",
                        left: 0,
                        top: "35.59px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon DynamoDB Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        width: "281.83px",
                        height: "51.19px",
                        left: "297.83px",
                        top: "35.59px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          paddingRight: "3.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Amazon EC2 for Windows Server
                          <br />
                          Delivery
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "101.84px",
                        left: "595.66px",
                        top: "35.59px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon QuickSight
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "89.83px",
                        left: 0,
                        top: "96.78px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon RDS Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        width: "281.83px",
                        height: "51.19px",
                        left: "297.83px",
                        top: "96.78px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          paddingRight: "27.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Amazon OpenSearch Service
                          <br />
                          Delivery
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "112.84px",
                        left: "595.66px",
                        top: "96.78px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        AWS Glue Delivery
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "83.83px",
                        left: 0,
                        top: "157.97px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 0,
                              top: 0,
                              position: "absolute",
                              opacity: "0.10",
                              background: "#1A4AB9",
                            }}
                          />
                          <div
                            style={{
                              width: "7.54px",
                              height: "6.31px",
                              left: "3.84px",
                              top: "4.17px",
                              position: "absolute",
                              background: "#1A4AB9",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        AWS Lambda Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-flex justify-center align-center">
              <img
                className="image2"
                src="./images/image2.png"
                alt="image"
                width={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ..cloud partners end */}

      {/* ...data lake... */}

      <div className="datalake">
        <h4 className="lake-text">
          Switch To Future-ready Advanced Data
          <br />
          Lakehouse Solutions
        </h4>
        <p className="lake-para">
          Organizations are taking their data from various silos and aggregating
          all that data in one location to do analytics and
          <br />
          machine learning on top of that data. To get the most value from it,
          they need to leverage a modern data architecture
          <br />
          that allows them to move data between data lakes and purpose-built
          data stores easily.
        </p>
        <img src="./images/datalake.png" alt="data" width={1200} />
        <div>
          <button className="contact-us">contact us</button>
        </div>
      </div>

      {/* ....data lake end.. */}

      {/* ....circle.. */}
      <div className="circles">
        <div className="right"></div>
        <div className="left"></div>
      </div>

      {/* ....aws... */}
      <div className="technology">
        <h4 className="tech">technology platform</h4>
        <div className="container">
          <img className="aws" src="./images/aws.png" alt="aws" width={100} />

          <img
            className="aws"
            src="./images/databricks.png"
            alt="aws"
            width={100}
          />
          <img
            className="aws"
            src="./images/googlecloud.png"
            alt="aws"
            width={100}
          />
          <img className="aws" src="./images/azure.png" alt="aws" width={100} />

          <img
            className="aws"
            src="./images/snowflake.png"
            alt="aws"
            width={100}
          />
          <img
            className="aws"
            src="./images/salesforce.png"
            alt="aws"
            width={100}
          />
          <img className="aws" src="./images/tab.png" alt="aws" width={100} />
        </div>
        <div className="techtext">
          We have strong partnerships with the world's top tech companies.
        </div>
      </div>

      {/* ...talk to us... */}
      <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 shadow-sm rounded">
              <div class="">
                <div className="card">
                  <div class="card-body">
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p class="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true">
                      <span>hello@dataserve.io</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 shadow-sm">
              <div class="">
                <div className="">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ...footer... */}

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
}

export default Home;
