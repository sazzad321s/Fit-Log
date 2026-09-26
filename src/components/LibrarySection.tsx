import WorkoutCard from '@/components/WorkoutCard';
import { Iworkout } from '@/types/type';
import React from 'react';

const getWorkout = async() => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if (!res.ok) throw new Error("Failed to fetch workouts");
  const data = await res.json();
  return data;
}
const LibrarySection = async() => {
   
    const workouts:Iworkout[] = await getWorkout();

    return (
         <section id='workouts' className='max-w-300 xl:mx-auto mx-4 my-10 mb-4'>
            <h2 className='font-bold text-3xl'>THE LIBRARY</h2>
            <p className=' mb-4 md:mb-8'>Twelve lifts covering every major muscle group.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
                }
            </div>
        </section>
    );
};

export default LibrarySection;