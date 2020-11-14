import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import thumbsTransparent from '../images/thumbs-trasnsparent.png';
import oneStar from '../images/rating-1.svg';
import twoStar from '../images/rating-2.svg';
import threeStar from '../images/rating-3.svg';
import fourStar from '../images/rating-4.svg';
import fiveStar from '../images/rating-5.svg';

const ReviewTitle = styled.div`
  > h4 {
    display: inline-block;
    font-family: Roboto;
    font-weight: 600;
    font-size: 16px;
    color: #333333;
  }
`;

const AuthorInfo = styled.p`
  margin: 5px 0;
  > span {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
  }
`;

const ListStyle = styled.li`
  list-style: none;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
  > p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #555555;
    margin-top: -6px;
    margin-bottom: 20px;
  }
  .liked {
    display: inline-block;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
  }
`;
const LikeButton = styled.button`
  &:hover {
    color: #163977;
    border-color: #163977;
  }
  &:focus {
    background-color: #0E70BE;
    > span {
      display: none;
    }
    > img {
      padding: inherit;
    }
  }

  background: #ffffff;
  cursor: pointer;
  border: 0.1rem solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 0.1rem 0 0 #dddddd;
  padding: 1px 11px;
  margin-right: 0.5rem;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  > span {
    padding-top: 12px;
    padding-right: 1px;
    float: left;
  }
`;

const starPicker = {
  1: oneStar,
  2: twoStar,
  3: threeStar,
  4: fourStar,
  5: fiveStar,
};

const ReviewEntry = ({
  author, body, title, stars, likes, createdate, id,
}) => (
  <ListStyle key={id}>
    <ReviewTitle>
      <span>
        <img src={starPicker[stars]} alt="" />
      </span>
      <h4>{title}</h4>
    </ReviewTitle>
    <AuthorInfo>
      <span>
        By
        {' '}
        {author}
        on
        {' '}
        {createdate}
      </span>
    </AuthorInfo>
    <p>
      {body}
    </p>
    <footer>
      <LikeButton type="button">
        <span>{likes}</span>
        <img src={thumbsTransparent} alt="" height="35px" />
      </LikeButton>
      {/* <span className="liked">You liked it!</span> */}
    </footer>
  </ListStyle>
);

ReviewEntry.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdate: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,

};

export default ReviewEntry;
