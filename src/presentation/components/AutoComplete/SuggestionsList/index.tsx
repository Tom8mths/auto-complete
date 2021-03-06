import React from "react";
import * as S from "./styles";
import Text from "../../../components/Text";

export type filteredSuggestionsProps = {
  filteredSuggestions: string[];
  activeSuggestionIndex: number;
  searchWord: string;
  onClick?: (e: any) => void;
  itemRef: any;
};

export default function SuggestionsListComponent({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
  searchWord,
  itemRef,
}: filteredSuggestionsProps) {
  return filteredSuggestions.length ? (
    <ul className={S.suggestionsList} data-testid="list">
      {filteredSuggestions.map((suggestion, index) => {
        const startString = suggestion.substr(
          0,
          suggestion.toLowerCase().indexOf(searchWord.toLowerCase())
        );
        const endString = suggestion.substr(
          suggestion.toLowerCase().indexOf(searchWord.toLowerCase()) +
            searchWord.length
        );
        const highlightedString = suggestion.substr(
          suggestion.toLowerCase().indexOf(searchWord.toLowerCase()),
          searchWord.length
        );
        return (
          <li
            className={S.suggestions({
              suggestionActive: index === activeSuggestionIndex,
            })}
            key={suggestion}
            onClick={onClick}
            ref={(ref) => {
              itemRef.current = { ...itemRef.current, [index]: ref };
            }}
          >
            <Text>
              {startString}
              <span className={S.highlightedString}>{highlightedString}</span>
              {endString}
            </Text>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={S.noOptions}>
      <Text>No options</Text>
    </div>
  );
}
