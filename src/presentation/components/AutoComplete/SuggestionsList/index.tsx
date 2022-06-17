import * as S from "./styles";
import Text from "../../../components/Text";

export type filteredSuggestionsProps = {
  filteredSuggestions: string[];
  activeSuggestionIndex: number;
  onClick: () => void;
};

export default function SuggestionsListComponent({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
}: filteredSuggestionsProps) {
  return filteredSuggestions.length ? (
    <ul className={S.suggestionsList}>
      {filteredSuggestions.map((suggestion, index) => {
        return (
          <li
            className={S.suggestions({
              suggestionActive: index === activeSuggestionIndex,
            })}
            key={suggestion}
            onClick={onClick}
          >
            <Text>{suggestion}</Text>
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
