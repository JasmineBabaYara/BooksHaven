import React from "react";
import { IoSearch } from "react-icons/io5";
export default function sort() {
  return (
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
        <input placeholder="Search" className="searchInput w-full" />
        <button>
          <IoSearch color="#6C63FF" />
        </button>
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
