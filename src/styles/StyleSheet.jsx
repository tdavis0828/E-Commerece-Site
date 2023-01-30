import styled from "styled-components";

// Styling for Pages
export const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  & .products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    margin: auto;
  }
`;

// Styling for components
export const StyledNavbar = styled.nav`
  height: 80px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  & a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  & input {
    width: 450px;
    height: 35px;
    border-radius: 10px;
    border: none;
    text-align: center;
  }
`;

export const StyledBanner = styled.section`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #f7efe5;

  & span {
    font-weight: 500;
    font-size: 1.1rem;
    color: red;
  }
`;

export const StyledSlider = styled.section`
  height: 60px;
  width: 100%;
  display: flex;
  justofy-content: center;
  align-items: center;
`;

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  & img {
    height: 200px;
    width: 200px;
    margin: 0.5rem;
  }
  & p {
    margin: 0.5rem;
    &.price {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  & .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & input {
      width: 40px;
      text-align: center;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    & button {
      padding: 0.5rem;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      &.add-btn {
        font-size: 1rem;
        background: #ededed;
        border: 1px solid #000;
        border-radius: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
