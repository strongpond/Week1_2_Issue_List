import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const ListItem = ({ idx, number, title, comments, user, created_at }) => {
  const date = dayjs(created_at);
  const createDate = date.format("YYYY년 MM월 DD일");

  return (
    <>
      {idx === 4 && (
        <ItemWrapper>
          <ImgBox>
            <img src="/images/ad_wanted.webp" />
          </ImgBox>
        </ItemWrapper>
      )}
      <ItemWrapper>
        <ItemContent>
          <ItemTitle>
            #{number}&nbsp;{title}
          </ItemTitle>
          <DescBox>
            <Desc>작성자: {user},&nbsp;</Desc>
            <Desc>작성일: {createDate}</Desc>
          </DescBox>
        </ItemContent>
        <ItemComment>코멘트 : {comments}</ItemComment>
      </ItemWrapper>
    </>
  );
};

export default ListItem;

const ItemWrapper = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "row")};
  margin-top: 10px;
  padding: 30px;
  width: 50vw;
  border: 1px solid black;
`;

const ImgBox = styled.div`
  display: flex;
  object-fit: cover;
`;

const ItemContent = styled.div`
  ${({ theme }) => theme.flex("center", "flex-start", "column")};
`;

const ItemTitle = styled.p``;

const DescBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Desc = styled.p``;

const ItemComment = styled.div``;
