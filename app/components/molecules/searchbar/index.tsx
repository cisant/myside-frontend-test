import React, { useState } from "react";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";
import {
  ClearButton,
  SearchBarButton,
  SearchBarWrapper,
  SearchContainer,
} from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const clearFilter = () => {
    setQuery("");
  };

  return (
    <SearchBarWrapper>
      <Label htmlFor="search">Search Products by Title</Label>
      <SearchContainer>
        <Input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
        {query !== "" && <ClearButton onClick={clearFilter}>Clear</ClearButton>}
      </SearchContainer>
    </SearchBarWrapper>
  );
};
