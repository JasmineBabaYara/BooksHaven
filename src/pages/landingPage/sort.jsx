import React, { useState } from "react";
// import { IoSearch } from "react-icons/io5";
import data from "../../utils/data";
import book3 from "../../images/img/books/book3.webp";
import review from "../../images/img/review.png";

export default function Sort() {
  const [search, setSearch] = useState("");
  // console.log(search); //print input

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

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
                <div
                  key={item.id}
                  className="bookCard rounded-lg"
                  onClick={toggleModal}
                >
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
        {modal && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}>
              <div className="modal-content bg-white w-1/2 h-auto p-4 pr-20 pl-20 rounded-lg">
                <div className="flex mt-5 ">
                  <img src={book3} alt="book" className="w-20 rounded-lg" />
                  <div className="ml-5">
                    <p className="title font-bold text-2xl">
                      Don’t Answer When They Call Your Name
                    </p>
                    <p className="text-sm mt-3">Ukamaka Olisakwe</p>
                    <div className="flex gap-4 mt-3">
                      <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                        <p className="text-xs font-semibold">Thriller</p>
                      </div>
                      <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                        <p className="text-xs font-semibold">Horror</p>
                      </div>
                      <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                        <p className="text-xs font-semibold">Biography</p>
                      </div>
                    </div>
                    <img
                    src={review}
                    alt="review"
                    className="mt-3 w-32 "
                  />
                  </div>
                </div>
                <p className="mt-6 text-sm pb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent tempor ut leo eu dictum. Aliquam faucibus augue
                    erat, quis vulputate erat egestas in. Duis mollis tincidunt
                    mi, sed interdum orci tristique id. Proin id velit vitae
                    neque pulvinar vulputate at quis quam. 
                    <br /> <br />Vivamus nec eros quis
                    nisi scelerisque porta. In semper nisl vel iaculis sodales.
                    Duis sit amet libero efficitur justo semper tincidunt sit
                    amet a mauris. Vivamus nec eros quis nisi scelerisque porta.
                    In semper nisl vel iaculis sodales. Duis sit amet libero
                    efficitur justo semper tincidunt sit amet a mauris.
                  </p>
              </div>
            </div>
          </div>
        )}
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
