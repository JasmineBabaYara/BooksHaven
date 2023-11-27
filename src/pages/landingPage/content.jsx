import React from "react";
import book2 from "../../images/img/books/book2.jpg";
import book3 from "../../images/img/books/book3.webp";
import book4 from "../../images/img/books/book4.webp";

export default function content() {
  return (
    <div className="flex flex-row justify-between items-center w-full mt-4">
      <div className="w-5/12 text-left">
        <p className="contentHeader">Books Haven, Home of the Best Books</p>
        <p className="mt-4 ">
          Vestibulum lorem erat, interdum non rhoncus nec, porttitor quis elit.
          Integer dignissim arcu nec elit ultricies, vel semper massa eleifend.
          Sed non arcu at purus sodales ultricies. Aliquam fermentum nunc a enim
          congue, at egestas erat congue.
        </p>
      </div>
      <div className="w-5/12 flex gap-10 items-center">
        <div className="">
          <img src={book4} alt="book1" className="h-72 w-52 rounded-lg"/>
        </div>
        <div>
        <div className="">
          <img src={book3} alt="book3" className="h-72 w-52 rounded-lg"/>
        </div>
        <div className="mt-4">
          <img src={book2} alt="book2" className="h-72 w-52 rounded-lg"/>
        </div>
        </div>
      </div>
    </div>
  );
}
