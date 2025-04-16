import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cards.css';
import { timeAgo } from '../utils/timeAgo'
import UpvoteDisplay from './UpvoteDisplay';

const Cards = (props) => {
  const date = timeAgo(props.created_at)

  return (
    <div className="card-wrapper">
      <Link to={`/Post/${props.id}`} className="card-link">
        <div className="Card">
          <p className="card-meta">
            Posted <span>{date}</span>
          </p>
          <h3 className="card-title">{props.title}</h3>
          <UpvoteDisplay count={props.upvotes} />
        </div>
      </Link>
    </div>
  );
};

export default Cards;