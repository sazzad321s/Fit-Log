'use client';
import PlanCard from '@/components/PlanCard';
import SavedCard from '@/components/SavedCard';
import { PlanContext } from '@/context/PlanContext';
import { Iworkout } from '@/types/type';
import Link from 'next/link';
import React, { useState } from 'react';
import { useContext } from 'react';


const MyPlanPage = () => {

    const { plan,saved,buttonType,setButtonType } = useContext(PlanContext);

   const [sortBy,setSortBy] = useState<"duration" | "calories" | "rating">("duration");
   const handleToggle = (type : 'plan' | 'saved') => {
        setButtonType(type);
   }

   const sortWorkout = (workout:Iworkout[]) => {
     const sortedWorkout = [...workout];
     if(sortBy === "duration"){
        sortedWorkout.sort((a,b) => b.duration - a.duration)
     }
     else if(sortBy === "calories"){
        sortedWorkout.sort((a,b) => b.caloriesBurned - a.caloriesBurned);
     }
     else if(sortBy === "rating"){
        sortedWorkout.sort((a,b) => b.rating - a.rating);
     }
     return sortedWorkout
   }

   const currentType = buttonType === 'plan' ? plan : saved;
   const totalExercises = currentType.length;
   const totalMinutes = currentType.reduce((total,workout) => total+workout.duration,0)
   const totalCalories = currentType.reduce((total,workout) => total+workout.caloriesBurned,0)
   const sortedPlan = sortWorkout(plan);
   const sortedSaved = sortWorkout(saved);


    return (
        <div className="lg:w-300 w-auto mx-4 lg:mx-auto my-4 md:my-8">
            <h2 className='font-bold text-5xl mb-2'>MY PLAN</h2>
            <p>Cap of five lifts for today. Finish them, then load more.</p>


            {/* Dynamic Section */}
            <div className="mt-4 mb-4 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e] sm:grid-cols-3">

    {/* Exercises */}
    <div className="px-5 py-6 sm:border-r sm:border-gray-800">
        <p className="text-xs text-gray-500">
            Exercises
        </p>

        <p className="mt-1 text-3xl font-bold text-lime-400">
            {totalExercises}
        </p>
    </div>

    {/* Minutes */}
    <div className="px-5 py-6 sm:border-r sm:border-gray-800">
        <p className="text-xs text-gray-500">
            Minutes
        </p>

        <p className="mt-1 text-3xl font-bold text-white">
            {totalMinutes}
        </p>
    </div>

    {/* Calories */}
    <div className="px-5 py-6">
        <p className="text-xs text-gray-500">
            Calories
        </p>

        <p className="mt-1 text-3xl font-bold text-white">
            {totalCalories}
        </p>
    </div>

</div>

<div className='flex justify-between items-center'>

     <div className="flex w-fit items-center rounded-xl border border-gray-800 bg-[#111318] p-1">
         <button
           onClick={() => handleToggle("plan")}
            className={`rounded-xl px-6 py-2 text-sm  ${
            buttonType === "plan"
                ? "border border-gray-700 bg-[#20242c] font-semibold text-white"
                : "text-gray-500"
           }`}
         >
           Today&apos;s Plan
         </button>

         <button
          onClick={() => handleToggle("saved")}
          className={`rounded-xl px-6 py-2 text-sm  ${
            buttonType === "saved"
                ? "border border-gray-700 bg-[#20242c] font-semibold text-white"
                : "text-gray-500"
         }`}
         >
           Saved
         </button>
     </div>

    <div className='flex gap-2 items-center'>
       <p>Sort by</p>
       <select defaultValue="Server location" className="select select-neutral"
       value={sortBy}
       onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}>
        <option>Duration</option>
        <option>Calories</option>
        <option>Rating</option>
       </select>
    </div>
</div>


     {/* Dynamic Section */}
     <div className='mt-4'>
        {
            buttonType === 'plan' ? (
                plan.length > 0 ? (
                    <div className='grid grid-cols-1 gap-2 md:gap-3 '>
                        {
                            sortedPlan.map(workout => <PlanCard key={workout.id} workout={workout}></PlanCard>)
                        }
                    </div>
                ) : (<div>
                      <h2>NOTHING HERE YET</h2>
                      <p>Browse the library and add a lift to get today moving.</p>
                      <Link href='/'><button>Go to Workouts</button></Link>
                    </div>

                )
            ) : 
               saved.length > 0 ? (
                <div className='grid grid-cols-1 gap-2 md:gap-3 '>
                    {
                        sortedSaved.map(workout => <SavedCard key={workout.id} workout={workout}></SavedCard>)
                    }
                </div>
            ) : (
                <div>
                      <h2>NOTHING HERE YET</h2>
                      <p>Browse the library and add a lift to get today moving.</p>
                      <Link href='/'><button>Go to Workouts</button></Link>
                    </div>
                )
        }
     </div>

        </div>
    );
};

export default MyPlanPage;