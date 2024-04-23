import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const GRID_LAST_PAGE = 3;

export function Swiper({ currentPage, setCurrentPage, viewType }) {
  const goToPreviousPage = () => setCurrentPage((prevPage) => prevPage - 1);
  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  return (
    <>
      <StyledButton className="left-btn" onClick={goToPreviousPage} hidden={viewType === 'grid' && currentPage === 0}>
        <LeftOutlined />
      </StyledButton>
      <StyledButton className="right-btn" onClick={goToNextPage} hidden={viewType === 'grid' && currentPage === GRID_LAST_PAGE}>
        <RightOutlined />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  top: 40%;
  font-size: 50px;
  width: 50px;
  z-index: 1;
  color: #909090;
  
  &.right-btn {
    right: -10%;
  }

  &.left-btn {
    left: -10%;
  }
`;
