import React from "react";
import data from "../../utils/data";

export default function booksDisplay() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap">
        {data.map((item) =>{
            return(
                <div 
                key={item.id}
                >
                    <img src={item.photo} alt="book"/>
                    <p className="text-base font-bold mt-2">{item.title}</p>
                    <p className="text-sm mt-2">{item.year_of_publication} {item.author} {item.country_of_author}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

// const BookCard = (data) => {
//   return (
//     <div>
//       {/* <img /> */}
//       <p>{data.title}</p>
//       <p>{data.year_of_publication}</p>
//     </div>
//   );
// };
