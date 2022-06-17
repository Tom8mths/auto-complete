import * as S from "./styles";

import Container from "../../components/Container";

export type BaseProps = {
  children?: React.ReactNode;
  paddingTop?: boolean;
};

export default function Base({ paddingTop = true, children }: BaseProps) {
  return (
    <section>
      <Container>
        <div className={S.wrapper({ paddingTop })}>{children}</div>
      </Container>
    </section>
  );
}
