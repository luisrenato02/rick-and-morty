import * as S from "./styles";
interface TitleProps {
  title: string;
  page: string;
  totalpage: string;
}
export const Title = ({ page, totalpage, title }: TitleProps) => {
  return (
    <S.Title>
      <h1>{title}</h1>
      <h1>
        PAGE {page ? page : 1} FROM {totalpage}
      </h1>
    </S.Title>
  );
};
