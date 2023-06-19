import React from "react";
import { styled } from "styled-components";

const Map = () => {
  const MapWrapper = styled.section`
    width: 100%;
    height: 95vh;
  `;
  return (
    <>
      <MapWrapper>
        <div
          class="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            class="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none !important",
              height: "100%",
              width: "100%",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=fateh jang ghosia madrissa chasa wali dheri&t=&z=14&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://2yu.co">2yu</a>

            <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
          </div>
        </div>
      </MapWrapper>
    </>
  );
};

export default Map;
