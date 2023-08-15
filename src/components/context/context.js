import { useContext, useState,createContext, useEffect, useRef } from 'react';
import getGrid from "../../utils/startingGrid";

//The mode we're in, either building walls or setting the starting cell.
// The algorithm that we will run.
// The grid which we will equal by default to the grid returned by the function we already created.
// Determining if we're editing or not.
// For the starting and target node coordinates.
// Determining that we want to run the algorithm and clear the grid when changed using useEffect (A separate state for each that, when we change its value, we run a useEffect with an appropriate side effect).
const context = createContext()

export const useParams=()=>{
    return useContext(context)
}

export const ParamsProvider = ({children}) => {
      const [mode,setMode] = useState(null)
      const [algo,setAlgo] = useState('')
      const [run,setRun] = useState(false)
      const [grid,setGrid] = useState(getGrid(50,25))
      const [editing,setEditFlag] = useState(false)
      const [res,setRes] = useState(false)
      const start=useRef({x:25,y:12})
      const end=useRef({x:48,y:23})
 
      useEffect(()=>{
        restart()
      },[res]);

      function restart(){
        setGrid(getGrid(50,25));
      }


      return (<div>
       <context.Provider value=
       {
        {mode,
        setMode,
        algo,
        setAlgo,
        run,
        setRun,
        grid,
        setGrid,
        editing,
        setEditFlag,
        res,
        setRes,
        run,
        setRun,
        start,
        end
    }
       }
       >
        {children}
       </context.Provider>
      </div>)

}