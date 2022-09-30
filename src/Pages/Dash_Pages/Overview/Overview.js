import classes from "./Overview.module.css";
import graph from "../../../assets/graph.svg";
import viewimage from "../../../assets/dash_image.svg";
import booklist from "../../../assets/booklist.svg";
import jay from "../../../assets/jayprofile.svg";

const Overview = () => {
  return (
    <div className={classes.Overview}>
      <div className={classes.Overview_left}>
        <div className={classes.welcome}>
          <h2>Welcome Admin</h2>

          <div className={classes.box}>

            <div className={classes.sect}>
              <div className={classes.deluxe}>
                <h2>6%</h2>
                <div className={classes.book}>
                  <div className={classes.num}>
                    <h5>14</h5>
                    <p>Booked</p>
                  </div>
                  <div className={classes.num}>
                    <h5>5</h5>
                    <p>Checked-In</p>
                  </div>
                </div>
              </div>
              <h3>Deluxe Suites</h3>
            </div>

            <div className={classes.sect}>
              <div className={classes.King}>
                <h2>15%</h2>
                <div className={classes.book}>
                  <div className={classes.num}>
                    <h5>25</h5>
                    <p>Booked</p>
                  </div>
                  <div className={classes.num}>
                    <h5>11</h5>
                    <p>Checked-In</p>
                  </div>
                </div>
              </div>
              <h3>Kings' Suites</h3>
            </div>

          </div>
        
        <div className={classes.but}>
            <button>
                Add new suite
            </button>
        </div>

        <div className={classes.graph}> 
            <img  src={graph} alt="graph"/>
        </div>

        </div>
      </div>


      <section className={classes.Overview_right}>
          <div className={classes.dash_right}>
              <figure>
                      <img  src={viewimage} alt ="viewimage"/>
              </figure>

              <div className={classes.list}>
                <h3>Booking List</h3>
                <img src={booklist} alt="booklist"/>
              </div>

              <div className={classes.bookbrief}>
                    <div className={classes.details}>
                      <div>
                          <img src={jay} alt="jay"/>
                      </div>
                          <div>
                            <h6>Jay Melody</h6>
                            <p>1 guest</p>
                          </div>
                    </div>
                    <div className={classes.date}>
                      <p>01-07-22</p>
                      <h6>Paid</h6>
                    </div>
              </div>

              <div className={classes.bookbrief}>
                    <div className={classes.details}>
                      <div>
                          <img src={jay} alt="jay"/>
                      </div>
                          <div>
                            <h6>Daniel Smiths</h6>
                            <p>3 guest</p>
                          </div>
                    </div>
                    <div className={classes.dates}>
                      <p>05-07-22</p>
                      <h6>Pending</h6>
                    </div>
              </div>

              <div className={classes.bookbrief}>
                    <div className={classes.details}>
                      <div>
                          <img src={jay} alt="jay"/>
                      </div>
                          <div>
                            <h6>Dexie Cornelius</h6>
                            <p>0 guest</p>
                          </div>
                    </div>
                    <div className={classes.date}>
                      <p>07-07-22</p>
                      <h6>Paid</h6>
                    </div>
              </div>
                  <h3>View All</h3>
          </div>

      </section>

      
    </div>
  );
};

export default Overview;
