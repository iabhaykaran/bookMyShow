import React, { useEffect, useState } from "react";

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setEvents(data.events);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container">
        {events.map((event) => {
          // Extract file ID from imgUrl
          const urlParts = event.imgUrl.split("/");
          const fileId = urlParts[urlParts.length - 2];
          return (
            <>
              <div className="Card  column" key={event.index}>
                <div
                  className="img-box"
                  style={{
                    backgroundImage: `url("https://drive.google.com/thumbnail?id=${fileId}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="content">
                  <div style={{ padding: "2px 10px" }} className="sub">
                    <h5 style={{ fontWeight: "550px", fontSize: "15px" }}>
                      {event.eventName.slice(0, 15)}
                    </h5>
                  </div>
                  <div
                    className="sub"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "2px 10px",
                    }}
                  >
                    <p style={{ color: "grey", fontSize: "14px" }}>
                      {event.cityName}
                    </p>
                    <p style={{ color: "grey", fontSize: "14px" }}>
                      {event.weather} |{" "}
                      {Number(event.distanceKm / 100).toFixed(0)}
                      Km
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
