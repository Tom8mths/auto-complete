type SuggestionsProps = {
  suggestionActive: boolean;
};

export const noOptions = `
  w-72
  border-2
  border-purple-500
  text-left
  p-2
`

export const suggestionsList = `
  w-72
  border-2
  border-purple-500
`

export const suggestions = ({ suggestionActive }: SuggestionsProps) => `
  w-100
  text-left
  hover:bg-purple-500
  p-2
  ${suggestionActive ? '' : ''}
`;

export const highlightedString = `
  bg-green-500
`
