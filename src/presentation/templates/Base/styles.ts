type WrapperProps = {
  paddingTop?: boolean;
};

export const wrapper = ({ paddingTop }: WrapperProps) => `
  flex
  ${paddingTop ? 'pt-5' : ''}
`;
