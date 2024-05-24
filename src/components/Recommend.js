import "../App.css";

import React, { useEffect, useState } from "react";

const Recommend = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
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
    <div style={{ display: "flex" }}>
      {events.map((event) => {
        // Extract file ID from imgUrl
        const urlParts = event.imgUrl.split("/");
        const fileId = urlParts[urlParts.length - 2];
        return (
          <>
            <div
              className="RecommendCard"
              style={{
                backgroundImage: `url("https://drive.google.com/thumbnail?id=${fileId}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

                marginRight: "1px",
              }}
            >
              <div
                className="rcmndCard"
                style={{
                  marginTop: "200px",
                  width: "260px",
                  padding: "5px",

        
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3 style={{}}>{event.eventName.slice(0, 13)}</h3>
                  <p style={{ fontSize: "13px" }}>
                    {new Date(event.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "13px" }}>
                    {/* <img src="loca.png" width="18px" height="15px" alt="bgbg" /> */}
                    {event.cityName}
                  </p>

                  <p style={{ fontSize: "13px" }}>
                    {event.weather}| {Number(event.distanceKm / 100).toFixed(0)}
                    Km
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Recommend;
