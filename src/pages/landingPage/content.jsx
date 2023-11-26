import React from "react";
import questionSvg from "../../images/img/questionImg.svg";

export default function content() {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="w-1/2 text-left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate
          erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique
          id. Proin id velit vitae neque pulvinar vulputate at quis quam.
          Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel
          iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt
          sit amet a mauris. Vestibulum lorem erat, interdum non rhoncus nec,
          porttitor quis elit. Integer dignissim arcu nec elit ultricies, vel
          semper massa eleifend. Sed non arcu at purus sodales ultricies.
          Aliquam fermentum nunc a enim congue, at egestas erat congue. Sed
          vestibulum malesuada ex, et rutrum lacus vehicula in. Praesent iaculis
          lectus nisi, eget fermentum arcu molestie a. Duis non auctor leo, quis
          mattis eros. Suspendisse euismod arcu a orci blandit consectetur. In
          ullamcorper blandit lorem at aliquam.
        </p>
      </div>
      <div className="h-1/2 w-1/2">
        <img src={questionSvg} alt="svg" className="h-full w-full " />
      </div>
    </div>
  );
}
