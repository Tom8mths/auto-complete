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

  const onChange = (e: any) => {
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

  const onClick = (e: any) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  return (
    <>
      <input
        type="text"
        className={S.autoComplete}
        onChange={onChange}
        // onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && (
        <SuggestionsListComponent
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={() => onClick}
        />
      )}
    </>
  );
}
