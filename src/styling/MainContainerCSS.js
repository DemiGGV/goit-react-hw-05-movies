import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// /*
//  * Стили компонента SharedLayout
//  */
export const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding-bottom: 24px;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 50px;
  margin-bottom: 16px;
  box-shadow: 0px 11px 5px -4px rgba(34, 60, 80, 0.3);
  > nav {
    display: flex;
  }
`;
export const MenuLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: orangered;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;

// // /*
// //  * Стили компонента SearchForm
// //  */
export const SearchHead = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 64px;
  padding: 10px 50px;
  color: #fff;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://images.freeimages.com/fic/images/icons/989/ivista_2/256/search.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0 20px;
  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;

// /*
//  * Стили компонента Movies, Home
//  */
export const Title = styled.h2`
  padding: 10px 50px;
`;
export const MoviesStyled = styled.ul`
  padding: 10px 50px;
  list-style-type: none;
  li {
    margin-bottom: 4px;
  }
`;
export const Message = styled.p`
  padding: 10px 50px;
`;
// /*
//  * Стили компонента MovieDetails
//  */
export const MovieDetailsSection = styled.section`
  padding: 10px 50px;
`;
export const ButtonBack = styled.button`
  margin-bottom: 20px;
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #eee;
  color: 0;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;
export const MovieDetailsStyled = styled.section`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  align-items: center;
`;
export const MoviePoster = styled.img`
  border-radius: 10px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

// /*
//  * Стили компонента Cast
//  */
export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  p {
    text-align: center;
  }
`;
// /*
//  * Стили компонента Cast
//  */
export const ReviewList = styled.ul`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  p {
    text-align: left;
  }
`;
