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
  & img {
    height: 75px;
    width: 75px;
  }
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
        color: #fff;
        background: #2b3a55;
        padding: 0.5rem;
        border-radius: 2px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const StyledCart = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  & .empty-cart {
    margin-top: 5rem;
    font-size: 1.25rem;
  }
`;

export const StyledCartHeader = styled.section`
  height: 10vh;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const StyledCartItem = styled.div`
  height: 20vh;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  & #item-id {
    display: none;
  }
  & div {
    display: flex;
    flex-direction: column;
    & img {
      height: 50px;
      width: 50px;
    }
    & p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }
  }
  & button {
    background: none;
    color: red;
    border: none;
    font-size: 1.15rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const StyledCartFooter = styled.div`
  height: 10vh;
  width: 100%;
  background: #fff;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & button {
    padding: 0.75rem 1.25rem;
    font-size: 1.15rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: #0081c9;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledAddedPopup = styled.div`
  height: 10vh;
  width: 100%;
  background: #03c988;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

export const StyledRemovedPopup = styled.div`
  height: 10vh;
  width: 100%;
  background: #f55050;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;
