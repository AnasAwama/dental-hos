import React, { Component } from "react";
import "../style/Blog.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class Blog extends Component {

    render() {
        return (
          <body>
            <div>
              <NavBar />
            </div>
            <>
              <TitleBaner />
            </>
            <div className="BlogContainer">
              <div className="BlogImgContainer">
                <div className="BlogImgalingment">
                  <div className="BlogImgBox">
                    <img src="https://placehold.co/300x168" alt="" />
                    <div className="DatePosition">
                      {" "}
                      <p>
                        <span> 18 </span>Jun 2018
                      </p>{" "}
                    </div>
                  </div>
                  <div className="BlogTextBox">
                    <p>
                      By <span>Doctor Name</span>
                    </p>
                    <div className="BlogBodyTextBox">
                      <h3>Blog Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tincidunt nunc lorem, nec faucibus mi facilisis
                        eget. Mauris laoreet, nisl id faucibus pellentesque,
                        mi...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="BlogImgalingment">
                  <div className="BlogImgBox">
                    <img src="https://placehold.co/300x168" alt="" />
                    <div className="DatePosition">
                      {" "}
                      <p>
                        <span> 18 </span>Jun 2018
                      </p>{" "}
                    </div>
                  </div>
                  <div className="BlogTextBox">
                    <p>
                      By <span>Doctor Name</span>
                    </p>
                    <div className="BlogBodyTextBox">
                      <h3>Blog Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tincidunt nunc lorem, nec faucibus mi facilisis
                        eget. Mauris laoreet, nisl id faucibus pellentesque,
                        mi...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BlogImgContainer">
                <div className="BlogImgalingment">
                  <div className="BlogImgBox">
                    <img src="https://placehold.co/300x168" alt="" />
                    <div className="DatePosition">
                      {" "}
                      <p>
                        <span> 18 </span>Jun 2018
                      </p>{" "}
                    </div>
                  </div>
                  <div className="BlogTextBox">
                    <p>
                      By <span>Doctor Name</span>
                    </p>
                    <div className="BlogBodyTextBox">
                      <h3>Blog Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tincidunt nunc lorem, nec faucibus mi facilisis
                        eget. Mauris laoreet, nisl id faucibus pellentesque,
                        mi...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="BlogImgalingment">
                  <div className="BlogImgBox">
                    <img src="https://placehold.co/300x168" alt="" />
                    <div className="DatePosition">
                      {" "}
                      <p>
                        <span> 18 </span>Jun 2018
                      </p>{" "}
                    </div>
                  </div>
                  <div className="BlogTextBox">
                    <p>
                      By <span>Doctor Name</span>
                    </p>
                    <div className="BlogBodyTextBox">
                      <h3>Blog Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tincidunt nunc lorem, nec faucibus mi facilisis
                        eget. Mauris laoreet, nisl id faucibus pellentesque,
                        mi...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pagination">
                <a href="#">« Previous</a>
                <a href="#" class="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next »</a>
              </div>
              
            </div>
            <Footer />
          </body>
        );
}
}export default Blog;