import React, { useCallback } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import { useLocation, useNavigate } from 'react-router';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 8px;
`;

const PageNumber = styled.div``;

const buildLink = ({ page }) => {
  const query = qs.stringify({ page });
  return `?${query}`; // 여기서 `/`는 기본 경로를 나타내며 필요에 따라 조정할 수 있습니다.
};

const CommentsPagination = ({ page, lastPage }) => {
  const navigator = useNavigate();
  const location = useLocation();

  const onGoNextPage = useCallback(() => {
    navigator(location.pathname + buildLink({ page: page + 1 }));
  }, [page, navigator, location]);

  const onGoPreviousPage = useCallback(() => {
    navigator(location.pathname + buildLink({ page: page - 1 }));
  }, [page , navigator, location]);

  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        onClick={onGoPreviousPage}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        onClick={onGoNextPage}
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default CommentsPagination;