import React, { useState } from "react";
import SuggestionsListComponent from "./SuggestionsList";
import * as S from "./styles";

export type AutoCompleteProps = {
  suggestions: string[];
};

export default function AutoComplete({ suggestions }: AutoCompleteProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const searchTerm = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const selectSuggestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (key: React.KeyboardEvent<HTMLDivElement>) => {
    if (input !== "") {
      if (key.code === "Enter" || key.code === "Tab") {
        setInput(filteredSuggestions[activeSuggestionIndex]);
        setFilteredSuggestions([]);
      }
    }
  };

  return (
    <>
      <input
        maxLength={50}
        type="text"
        className={S.autoComplete}
        onChange={searchTerm}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && (
        <SuggestionsListComponent
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={selectSuggestion}
          searchWord={input}
        />
      )}
    </>
  );
}
