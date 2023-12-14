import { Search, Close } from "@mui/icons-material";

import { useEffect, useRef } from "react";

import "./SearchInput.css";

const SearchInput = ({ onChange, value }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  const handleInput = (event) => {
    onChange(event.target.value);
  };

  const clearInput = () => {
    onChange("");
  };

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleInput}
        className="search-input"
      />
      <div className="search-icon">
        {value ? <Close id="clearBtn" onClick={clearInput} /> : <Search />}
      </div>
    </div>
  );
};

export { SearchInput };
