import { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutContext.jsx'


export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)
 return context
}