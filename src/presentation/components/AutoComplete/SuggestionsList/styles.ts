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
  max-h-96
  cursor-pointer
  select-none
  overflow-y-scroll
`

export const suggestions = ({ suggestionActive }: SuggestionsProps) => `
  w-100
  text-left
  hover:bg-purple-500
  p-2
  ${suggestionActive ? 'bg-purple-500' : ''}
`;

export const highlightedString = `
  bg-green-500
`
