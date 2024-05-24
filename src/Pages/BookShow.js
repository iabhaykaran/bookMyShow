import NavBar from "../components/NavBar";
import Recommend from "../components/Recommend";
import Upcoming from "../components/Upcoming";
// import Recommens from "../components/Recommend";

export default function BookShow() {
  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          padding: "20px",
        }}
      >
        <h2>Recommended Shows</h2>

        <div
          className="scroll"
          style={{ display: "flex", overflowX: "scroll" }}
        >
          <Recommend />
        </div>

        <div
          style={{
            marginTop: "20px",
            

            maxWidth: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2>Upcoming events</h2>
          <Upcoming />
        </div>
      </div>
    </div>
  );
}
