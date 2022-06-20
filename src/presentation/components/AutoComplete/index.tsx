import React, { useRef, useState } from "react";
import SuggestionsListComponent from "./SuggestionsList";
import * as S from "./styles";

export type AutoCompleteProps = {
  suggestions: string[];
  placeholder?: string;
};

export default function AutoComplete({
  suggestions,
  placeholder,
}: AutoCompleteProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const itemRefs = React.useRef<any>({});

  const [selectedItem, setSelectedItem] = useState(0);

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
    setSelectedItem(0);
  };

  const onKeyDown = (key: React.KeyboardEvent<HTMLDivElement>) => {
    if (key.code === "Enter" && input !== "") {
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setInput(filteredSuggestions[activeSuggestionIndex]);
    } else if (key.code === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setSelectedItem((prev) => Number(prev) - 1);
      const prevItem = itemRefs.current[selectedItem - 1];
      prevItem && prevItem.scrollIntoView({ block: "center" });
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (key.code === "ArrowDown") {
      if (activeSuggestionIndex + 1 === filteredSuggestions.length) {
        return;
      }
      setSelectedItem((prev) => Number(prev) + 1);
      const nextItem = itemRefs.current[selectedItem + 1];
      nextItem && nextItem.scrollIntoView({ block: "center" });
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const selectSuggestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
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
        placeholder={placeholder}
      />
      {showSuggestions && input && (
        <SuggestionsListComponent
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={selectSuggestion}
          searchWord={input}
          itemRef={itemRefs}
        />
      )}
    </>
  );
}
