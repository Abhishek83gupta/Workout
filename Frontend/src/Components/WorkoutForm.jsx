import React, { useState } from "react";
import axios from 'axios'
import {useWorkoutsContext} from '../Hooks/useWorkoutsContext.js'

function WorkoutForm() {
  const {dispatch} = useWorkoutsContext()

  const [title, setTitle] = useState("");
  const [load, setload] = useState("");
  const [reps, setreps] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    axios.post('/api/workouts',workout)
     .then((response)=>{
      
      const response_data = response.data

      if (response.status === 200) {
              setTitle("");
              setload("");
              setreps("");
              setError(null);
              console.log("New workout added",response_data);
              dispatch({type: 'CREATE_WORKOUT', payload:response_data})
            }
     })
     .catch((err)=>{
      setError(err.response.data.error)
     })
  };

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const workout = { title, load, reps };

  //   try {
  //     const response = await axios.post("/api/workouts", workout);

  //     if (response.status === 200) {
  //       setTitle("");
  //       setload("");
  //       setreps("");
  //       setError(null);
  //       console.log("New workout added", response.data);
  //     }
  //   } catch (error) {
  //     setError(error.response.data.error);
  //   }
  // };


    // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const workout = { title, load, reps };

  //   const response = await fetch("/api/workouts", {
  //     method: "POST",
  //     body: JSON.stringify(workout),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const json = await response.json();

  //   if (!response.ok) {
  //     setError(json.error);
  //   }

  //   if (response.ok) {
  //     setTitle("");
  //     setload("");
  //     setreps("");
  //     setError(null);
  //     console.log("New workout added", json);
  //   }
  // };



  return (
    <div className="w-1/4 flex">
      <form onSubmit={handleSubmit} className="m-8">
        <h3 className="font-bold text-xl mb-4">Add a New Workout</h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Exercise Title:
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Load (in kg):
          </label>
          <input
            type="number"
            onChange={(e) => setload(e.target.value)}
            value={load}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Reps:</label>
          <input
            type="number"
            onChange={(e) => setreps(e.target.value)}
            value={reps}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Workout
        </button>

        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
}

export default WorkoutForm;
