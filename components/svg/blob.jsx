import React from "react";

function Blob(props) {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <clipPath id="shape">
            <path
              id="blob"
              d="M464.5,300Q458,350,425.5,389.5Q393,429,341,425Q289,421,251,417.5Q213,414,167.5,412Q122,410,91.5,375.5Q61,341,42.5,295.5Q24,250,36.5,201.5Q49,153,79,113Q109,73,157,63Q205,53,254,35.5Q303,18,324.5,74Q346,130,375,153Q404,176,437.5,213Q471,250,464.5,300Z"
              fill="#d1d8e0"
            />
          </clipPath>
        </defs>
        <image
          x={0}
          y={0}
          width="100%"
          height="100%"
          clipPath="url(#shape)"
          xlinkHref="https://source.unsplash.com/5PVXkqt2s9k/500x500"
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  );
}

export default Blob;
