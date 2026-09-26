import { Iworkout } from '@/types/type';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const WorkoutCard = ({workout}:{workout:Iworkout}) => {
    return (
        <Link href={`/workout/${workout.id}`}>
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]">
            
            {/* Image */}
            <div className="relative h-37.5 w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

         
            <div className="p-4">
                
                
                <div className="mb-3 flex gap-2">
                    {workout.muscleGroups.slice(0, 2).map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

               
                <h2 className="text-lg font-extrabold uppercase text-white">
                    {workout.name}
                </h2>

              
                <p className="mt-1 text-xs text-gray-500">
                    {workout.equipment}
                </p>

              
                <div className="my-4 border-t border-gray-800" />

                
                <div className="flex items-center justify-between text-xs text-gray-400">

                    <span className="flex items-center gap-1">
                        ◷ {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        ☆ {workout.rating}
                    </span>

                </div>
            </div>
        </div>
        </Link>
    );
};

export default WorkoutCard;