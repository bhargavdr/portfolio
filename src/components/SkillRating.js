import React from 'react'
import { Rating, Typography } from '@mui/material';

function SkillRating({name, value, src}) {
  return (
    <div className="ratingCard">
      <img src={src} alt={name}></img>
      <Typography component="legend">{name}</Typography>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        value={value}
        readOnly
      />
    </div>
  );
}

export default SkillRating;