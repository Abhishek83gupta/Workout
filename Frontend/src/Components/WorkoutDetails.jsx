import React from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import axios from 'axios';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function WorkoutDetails({ workout }) {

  const {dispatch} = useWorkoutsContext()
   
    const handleClick = async () => {
      try {
        const response = await axios.delete('/api/workouts/' + workout._id);
        
        if (response.status === 200) {
          const response_data = response.data;
          dispatch({ type: 'DELETE_WORKOUT', payload: response_data });
        }
      } catch (err) {
        console.error('Error deleting workout:', err);
      }
    };

  return (
    <div className='mx-40 w-2/2 my-10 p-5 bg-[#fff] '>
       <h4 className='font-bold text-[#1aac83] '>{workout.title}</h4>
       <p> <strong> Load (kg) :</strong> {workout.load}</p>
       <p><strong> Reps :</strong> {workout.reps}</p>
       <p>{formatDistanceToNow(new Date (workout.createdAt))}</p>
       <button className='w-20 border border-black-600 rounded-2xl px-3 py-2 bg-red-600 text-white'
       onClick={handleClick}> delete </button>
    </div>
  ) 
}

export default WorkoutDetails
