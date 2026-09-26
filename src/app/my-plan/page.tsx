'use client';
import PlanCard from '@/components/PlanCard';
import SavedCard from '@/components/SavedCard';
import { PlanContext } from '@/context/PlanContext';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import PlanDiv from '@/components/PlanDiv';
import SavedDiv from '@/components/SavedDiv';

const MyPlanPage = () => {

    const { plan,setPlan,saved,setSaved,buttonType,setButtonType } = useContext(PlanContext);


   const handleToggle = (type : 'plan' | 'saved') => {
        setButtonType(type);
   }

   const currentType = buttonType === 'plan' ? plan : saved;
   const totalExercises = currentType.length;
   const totalMinutes = currentType.reduce((total,workout) => total+workout.duration,0)
   const totalCalories = currentType.reduce((total,workout) => total+workout.caloriesBurned,0)

    return (
        <div className="lg:w-300 w-auto mx-4 lg:mx-auto">
            <h2>MY PLAN</h2>
            <p>Cap of five lifts for today. Finish them, then load more.</p>


            {/* Dynamic Section */}
            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e] sm:grid-cols-3">

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



     {/* Dynamic Section */}
     <div className='mt-8'>
        {
            buttonType === 'plan' ? (
                plan.length > 0 ? (
                    <div>
                        {
                            plan.map(workout => <PlanCard key={workout.id} workout={workout}></PlanCard>)
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
                <div>
                    {
                        saved.map(workout => <SavedCard key={workout.id} workout={workout}></SavedCard>)
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