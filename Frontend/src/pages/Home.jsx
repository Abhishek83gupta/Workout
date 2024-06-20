import { useEffect } from "react";
import axios from "axios";
import { WorkoutDetails, WorkoutForm } from "../Components/index.js";
import { useWorkoutsContext } from "../Hooks/useWorkoutsContext.js";

function Home() {

  const {workouts, dispatch} = useWorkoutsContext()

  const fetchWorkouts = () => {
   axios.get('/api/workouts')
   .then((response)=>{
    const response_data = response.data
    dispatch({type : "SET_WORKOUTS", payload : response_data})
   })
   .catch((err)=>{
    console.log("Cannot fetch the data",err);
   })
  };


  // const fetchWorkouts = async () => {
  //    const { data } = await axios.get('/api/workouts')    // object Destructure
  //    setWorkouts(data)
  // };

  // const fetchWorkouts = async () => {
  //   const reponse = await fetch("/api/workouts");
  //   const json = await reponse.json();

  //   if (reponse.ok) {
  //     setWorkouts(json);
  //   }
  // };

  useEffect(() => {
    fetchWorkouts();
  },[dispatch]);

  return (
    <div className="home flex">
      <div className="workouts w-screen">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} /> // prop
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
