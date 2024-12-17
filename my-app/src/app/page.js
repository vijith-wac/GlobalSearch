'use client';
import styles from "./page.module.css";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import { useState } from "react";
import useSearchResult from "../customHook/useSearchResult";
import SearchComponent from "./searchComponent";

// export default function Home() {
//   const [text, setText] = useState(""); // Search input text
//   const [offset, setOffset] = useState(0); // Pagination offset
//   const limit = 5; // Number of results per page

//   // Use the custom hook to fetch data
//   const { data, total, isLoading, error } = useSearch(text, limit, offset);

//   // Pagination handlers
//   const handleNext = () => {
//     if (offset + limit < total) setOffset((prev) => prev + limit);
//   };
//   const handlePrevious = () => setOffset((prev) => Math.max(0, prev - limit));

//   return (
//     <div className={styles.page}>
//       <Search text={text} setText={setText} setOffset={setOffset} />
//       <SearchResult results={data} isLoading={isLoading} error={error} />
//       <div>
//         <button onClick={handlePrevious} disabled={offset === 0}>
//           Previous
//         </button>
//         <button onClick={handleNext} disabled={offset + limit >= total}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

export default function Home(){
  return(
    <div>
      <SearchComponent/>
    </div>
  )
}