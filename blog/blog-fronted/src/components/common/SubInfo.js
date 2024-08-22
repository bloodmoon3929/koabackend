import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { formatDistanceToNow } from 'date-fns';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;
const options = {
  community: '커뮤니티',
  knowledge: '지식',
  qna: '질문',
  announcement: '공지',
};
const SubInfo = ({ username, publishedDate, hasMarginTop, subject }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          {subject ? <Link to={`/${username}`}>{username}</Link> : <span>{username}</span>}
          
        </b>
      </span>
      {
        subject ? <span>{options[subject]}</span> : null
      }
      <span>{formatDistanceToNow(new Date(publishedDate))} ago</span>
    </SubInfoBlock>
  );
};

export default SubInfo;