import classes from "./Bookings.module.css";
import recent_bookings from "../../../assets/recent_bookings.svg"

const Bookings = () => {
  return (
    <div className={classes.books}>
            <h3>Confirm Bookings</h3>
        <section>
            <div className={classes.input}>
                <h4>Enter Reference number</h4>
                <input type="text" placeholder="123-4533-OJHD"/>
                <button>Confirm</button>
            </div>
            <div className={classes.status}>
                <div className={classes.grid}>
                <h4>Name: <span>Adexie Paulina</span></h4>
                <h4>Room: <span>Deluxe Suites</span></h4>
                <h4>Gender: <span>Male</span></h4>
                <h4>Guests: <span>2 guests</span></h4>
                </div>
                <h4 className={classes.Reference}>Reference No: <span> 123-4533-OJHD </span></h4>
                <h4 className={classes.pay}>Payment Status: <span> Pending </span></h4>
            </div>
        </section>

        <div className={classes.history}>
            <h5>Recent Bookings</h5>
            <img src={recent_bookings} alt="recent_bookings" />
            <h6>No Booking History</h6>
            <p>Your recent bookings will occur when you perform a trasaction</p>
        </div>

    </div>
  )
}

export default Bookings