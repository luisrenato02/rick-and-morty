import * as S from "./styles";
interface BtnPrevNextProps {
  prevPage: string;
  nextPage: string;
  setPage: (value: string) => void;
  page: string;
  totalPage: string;
}

export const BtnPrevNext = ({
  prevPage,
  nextPage,
  setPage,
  page,
  totalPage,
}: BtnPrevNextProps) => {
  return (
    <S.GroupButtons>
      <S.Button
        prevPage={prevPage}
        nextPage={nextPage}
        type="prev"
        onClick={() => prevPage && setPage(prevPage)}
      >
        ◀
      </S.Button>
      <span>
        {page ? page : 1}/{totalPage}
      </span>
      <S.Button
        prevPage={prevPage}
        nextPage={nextPage}
        type="next"
        onClick={() => nextPage && setPage(nextPage)}
      >
        ▶
      </S.Button>
    </S.GroupButtons>
  );
};
