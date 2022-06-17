type SuggestionsProps = {
  suggestionActive: boolean;
};

export const noOptions = `
  text-black
`

export const suggestionsList = `
  text-black
`

export const suggestions = ({ suggestionActive }: SuggestionsProps) => `
  w-4

  ${suggestionActive ? 'mr-2' : ''}
`;


