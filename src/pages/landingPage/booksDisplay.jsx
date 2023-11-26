import React from "react";
import data from "../../utils/data";

export default function booksDisplay() {
  return (
    <div className="mt-14 w-full">
      <div className="flex flex-wrap justify-between gap-20">
        {data.map((item) => {
          return (
            <div key={item.id} className="bookCard rounded-lg">
              <img
                src={item.photo}
                alt="book"
                className="bookImage rounded-lg"
              />
              <p className="title text-base font-bold mt-2 ml-1 w-64">
                {item.title}
              </p>
              <p className="text-base mt-2 ml-1 ">{item.author}</p>
              <div className="flex flex-wrap mb-2">
                <div className="year flex items-center justify-center w-auto pl-2 pr-2 p-1 mt-1 ml-1 border-2 rounded-2xl">
                  <p className="text-xs font-bold">
                    {item.year_of_publication}
                  </p>
                </div>
                <div className="country flex items-center justify-center w-auto pl-2 pr-2 p-1 mt-1 ml-4 border-2 rounded-2xl">
                  <p className="text-xs font-bold">{item.country_of_author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
