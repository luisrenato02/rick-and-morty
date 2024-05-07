import * as S from "./styles";
interface BtnPrevNextProps {
  prevpage: string;
  nextpage: string;
  setPage: (value: string) => void;
  page: string;
  totalPage: string;
}

export const BtnPrevNext = ({
  prevpage,
  nextpage,
  setPage,
  page,
  totalPage,
}: BtnPrevNextProps) => {
  const handleSetPage = (value: string) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  return (
    <S.GroupButtons>
      <S.Button
        prevpage={prevpage}
        nextpage={nextpage}
        type="prev"
        onClick={() => prevpage && handleSetPage(prevpage)}
      >
        ◀
      </S.Button>
      <span>
        {page ? page : 1}/{totalPage}
      </span>
      <S.Button
        prevpage={prevpage}
        nextpage={nextpage}
        type="next"
        onClick={() => nextpage && handleSetPage(nextpage)}
      >
        ▶
      </S.Button>
    </S.GroupButtons>
  );
};
