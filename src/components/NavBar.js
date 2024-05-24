// import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div style={{
      padding:"2px 15px"
      }}>
        <div >
          <h1 className="name" >Booking.com</h1>
        
        </div>

      </div>
      <div className="navbar  scroll ">
        <li>
          <a>LiveShows</a>
        </li>
        <li>
          <a>Streams</a>
        </li>
        <li>
          <a>Movies</a>
        </li>

        <li>
          <a>Plays</a>
        </li>

        <li>
          <a>Events</a>
        </li>
        <li>
          <a>Sports</a>
        </li>
        <li>
          <a>Activities</a>
        </li>
      </div>
    </div>
  );
}
