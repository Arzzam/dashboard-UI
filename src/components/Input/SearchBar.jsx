import React from "react";

const SearchBar = () => {
  return (
    <div className="">
      <div class="flex w-full flex-wrap items-stretch">
        <input type="text" />

        <button
          className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          type="button"
          id="button-addon3"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
