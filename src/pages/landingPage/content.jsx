import React from "react";
import book2 from "../../images/img/books/book2.jpg";
import book3 from "../../images/img/books/book3.webp";
import book4 from "../../images/img/books/book4.webp";

export default function content() {
  return (
    <div className="flex laptop:flex-row flex-col justify-between items-center w-full mt-4">
      <div className="laptop:w-5/12 w-12/12 text-left">
        <p className="contentHeader tablet:text-6xl text-3xl font-bold">
          Books Haven, Home of the Best Books
        </p>
        <p className="mt-4 tablet:text-base text-sm">
          Vestibulum lorem erat, interdum non rhoncus nec, porttitor quis elit.
          Integer dignissim arcu nec elit ultricies, vel semper massa eleifend.
          Sed non arcu at purus sodales ultricies. Aliquam fermentum nunc a enim
          congue, at egestas erat congue.
        </p>
      </div>
      <div className="laptop:w-5/12 w-full tablet:flex laptop:mt-0 mt-10 tablet:flex-row flex-col laptop:gap-10 mob:hidden items-center justify-between">
        <div className="">
          <img src={book4} alt="book1" className="h-72 w-52 rounded-lg" />
        </div>
        <div className="flex laptop:flex-col tablet:flex-row flex-col w-2/3 items-center justify-between">
          <div className="">
            <img src={book3} alt="book3" className="h-72 w-52 rounded-lg" />
          </div>
          <div className="laptop:mt-4">
            <img src={book2} alt="book2" className="h-72 w-52 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
