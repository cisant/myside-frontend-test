import React, { useState } from "react";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";
import { SearchBarButton, SearchBarWrapper, SearchContainer } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchBarWrapper>
      <Label htmlFor="search">Search Products</Label>
      <SearchContainer>
        <Input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
      </SearchContainer>
    </SearchBarWrapper>
  );
};
