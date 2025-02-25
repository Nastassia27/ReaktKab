import {Meta, StoryObj} from '@storybook/react';

import Rating, {RatingValueType} from './Rating';
import React from "react";
import {action} from '@storybook/addon-actions';

export default  {
    title: 'Rating',
    component: Rating,
};



const onChangeCallback=action("onChange");

export const EmptyStar=()=>{
    return(
        <div> <Rating value={0} onClick={()=>{}}/>
            </div>
    )
}
export const FiveRating = ()=>{
    return(
        <div> <Rating value={5} onClick={()=>{}}/>
            </div>
    )
}

export const Star = ()=>{
    const [rating, setRating] = React.useState<RatingValueType>(0);
    return(
        <div> <Rating value={rating} onClick={setRating}/>
            </div>
    )
}

