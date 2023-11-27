import React, { useState } from "react";
// import { IoSearch } from "react-icons/io5";
import data from "../../utils/data";

export default function Sort() {
  const [search, setSearch] = useState("");
  // console.log(search); //print input
  return (
    <div>
      <div className="laptop:mt-40 tablet:mt-20 mt-10 flex laptop:flex-row flex-col justify-between laptop:items-center w-full">
        <div className="flex flex-wrap items-center gap-4">
          <p className="header text-lg font-bold">Filter By:</p>
          <FilterCard
            item="Name of Author" //Author name
          />
          <FilterCard
            item="Title of Book" //Book title
          />
          <FilterCard
            item="Year of Publication" //year of release
          />
          <FilterCard
            item="Country of Origin" //country
          />
        </div>
        <div className="search flex items-center justify-between laptop:w-2/6 tablet:w-4/6 laptop:mt-0 mt-8 p-2 border border-black rounded-full">
          <input
            placeholder="Search"
            className="searchInput w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button>
            <IoSearch color="#6C63FF" />
          </button> */}
        </div>
      </div>
      {/* books diplay section beginning */}
      <div className="mt-14 w-full">
        <div className="flex flex-wrap laptop:justify-between justify-center laptop:gap-20 gap-14">
          {data
            .filter((item) => {
              return (
                search.toLowerCase() === "" ||
                Object.values(item).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(search)
                )
              );
            })
            .map((item) => {
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
                      <p className="text-xs font-bold">
                        {item.country_of_author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const FilterCard = (props) => {
  return (
    <button className="flex items-center w-auto pl-2 pr-2 p-1 border bg-transparent rounded-2xl">
      <p className="filterItem text-sm">{props.item}</p>
    </button>
  );
};
