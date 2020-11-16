import React from 'react';

import ExerciseSummary from './ExerciseSummary';
import { Link } from 'react-router-dom';

const ExerciseList = ({exercises}) => {
    return(
        <div>          
            { exercises && exercises.map(exercise => {
                return(
                    <Link to={'/exercise/' + exercise.id} className="exerciselinks"><ExerciseSummary exercise={exercise} key={exercise.id}/><br></br></Link>
                )
            })}

        </div>

    )
}

export default ExerciseList;