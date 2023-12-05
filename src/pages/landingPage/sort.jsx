import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import data from "../../utils/data";
import review from "../../images/img/review.png";

export default function Sort() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [modalData, setModalData] = useState(null);

  // Function to handle filter selection
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };

  // Adjusted filter logic
  const filteredData = data.filter((item) => {
    if (!search) return true;
    const searchTerm = search.toLowerCase();

    // a helper function to check if a field starts with the search term
    const startsWithSearchTerm = (fieldValue) => fieldValue.toLowerCase().startsWith(searchTerm);
    item?.title?.toLowerCase()?.startsWith(search.toLowerCase())

    // If no filter is selected, search across all fields
    if (!selectedFilter) {
      return (
        startsWithSearchTerm(item.title) ||
        startsWithSearchTerm(item.author) ||
        startsWithSearchTerm(item.year_of_publication) ||
        startsWithSearchTerm(item.country_of_author)
      );
    }

    // Search based on selected filter
    switch (selectedFilter) {
      case "Name of Author":
        return item.author.toLowerCase().startsWith(searchTerm);
      case "Title of Book":
        return item.title.toLowerCase().startsWith(searchTerm);
      case "Year of Publication":
        return item.year_of_publication.toLowerCase().startsWith(searchTerm);
      case "Country of Origin":
        return item.country_of_author.toLowerCase().startsWith(searchTerm);
      default:
        return true;
    }
  });

  return (
    <div>
      <div className="laptop:mt-40 tablet:mt-20 mt-10 flex laptop:flex-row flex-col justify-between laptop:items-center w-full">
        <div className="flex flex-wrap items-center gap-4">
          <p className="header text-lg font-bold">Filter By:</p>
          {["Name of Author", "Title of Book", "Year of Publication", "Country of Origin"].map((filter) => (
            <FilterCard
              key={filter}
              item={filter}
              isSelected={selectedFilter === filter}
              onFilterSelect={handleFilterSelection}
            />
          ))}
        </div>
        <div className="search flex items-center justify-between laptop:w-2/6 tablet:w-4/6 laptop:mt-0 mt-8 p-2 border border-black rounded-full">
          <input placeholder="Search" className="searchInput w-full" onChange={(e) => setSearch(e.target.value)} />
          <button>
            <IoSearch color="#6C63FF" />
          </button>
        </div>
      </div>
      {/* books diplay section beginning */}
      <div className="mt-14 w-full">
        <div className="flex flex-wrap laptop:justify-between justify-center laptop:gap-20 gap-14">
          {filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className="bookCard rounded-lg"
                onClick={() => {
                  toggleModal();
                  setModalData(item);
                }}
              >
                <img src={item.photo} alt="book" className="bookImage rounded-lg" />
                <p className="title text-base font-bold mt-2 ml-1 w-72 capitalize">{item.title}</p>
                <p className="text-base mt-2 ml-1 capitalize">{item.author}</p>
                <div className="flex flex-wrap mb-2">
                  <div className="year flex items-center justify-center w-auto pl-2 pr-2 p-1 mt-1 ml-1 border-2 rounded-2xl">
                    <p className="text-xs font-bold">{item.year_of_publication}</p>
                  </div>
                  <div className="country flex items-center justify-center w-auto pl-2 pr-2 p-1 mt-1 ml-4 border-2 rounded-2xl">
                    <p className="text-xs font-bold capitalize">{item.country_of_author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* modal beginning */}
        {modal && modalData && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}>
              <div className="modal-content bg-white w-1/2 h-auto p-4 pr-20 pl-20 rounded-lg">
                <div className="flex mt-5">
                  <img src={modalData?.photo} alt="book" className="w-24 h-40 rounded-lg mt-2" />
                  <div className="ml-5">
                    <p className="title font-bold text-2xl capitalize">{modalData?.title}</p>
                    <p className="text-sm mt-3">{modalData?.author}</p>

                    {modalData.genre.map((genre) => {
                      return (
                        <div key={genre.genreId} className="flex gap-4 mt-3">
                          <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                            <p className="text-xs font-semibold capitalize">{genre.first}</p>
                          </div>
                          <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                            <p className="text-xs font-semibold capitalize">{genre.second}</p>
                          </div>
                          <div className="genre flex items-center justify-center w-auto pl-3 pr-3 p-1 border rounded-2xl">
                            <p className="text-xs font-semibold capitalize">{genre.third}</p>
                          </div>
                        </div>
                      );
                    })}

                    <img src={review} alt="review" className="mt-3 w-32 " />
                  </div>
                  <button className="h-8 absolute right-10" onClick={toggleModal}>
                    <IoMdClose className="text-4xl cursor-pointer" color="#6C63FF" />
                  </button>
                </div>
                <p className="mt-6 text-sm pb-10">{modalData?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const FilterCard = ({ item, isSelected, onFilterSelect }) => {
  return (
    <button
      className={`flex items-center w-auto pl-2 pr-2 py-1 border bg-transparent rounded-2xl ${
        isSelected ? "bg-blue-400" : "bg-transparent"
        // isSelected ? "text-white" : "bg-transparent"
      }`}
      onClick={() => onFilterSelect(item)}
    >
      <p className="filterItem text-sm">{item}</p>
    </button>
  );
};
