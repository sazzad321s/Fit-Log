'use client';
import { Iworkout } from '@/types/type';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { PlanContext } from '@/context/PlanContext';
import { Clock, Flame, Star, X } from "lucide-react";
import { useContext } from 'react';
import toast from 'react-hot-toast';

const SavedCard = ({workout}:{workout:Iworkout}) => {

   const {saved,setSaved} = useContext(PlanContext);
   
     const handleRemove = () => {
        const remove = saved.filter(item => item.id !== workout.id);
        setSaved(remove);
        toast.success(`${workout.name} is removed successfully`)
     }

    return (
       <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#15181e] p-3 sm:p-4">

            {/* Image */}
            <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Workout Info */}
            <div className="min-w-0 flex-1">

                <h3 className="truncate text-sm font-extrabold uppercase text-white">
                    {workout.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-2 flex items-center gap-3 text-[10px] text-gray-400">

                    <span className="flex items-center gap-1">
                        <Clock
                            size={12}
                            className="text-lime-400"
                        />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <Flame
                            size={12}
                            className="text-lime-400"
                        />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <Star
                            size={12}
                            className="fill-lime-400 text-lime-400"
                        />
                        {workout.rating}
                    </span>

                </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-4">

                <Link
                    href={`/workout/${workout.id}`}
                    className="hidden rounded-full border border-gray-700 px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white sm:block"
                >
                    View Details
                </Link>

                <button
                    className="text-gray-500 transition hover:text-white"
                    aria-label="Remove workout"
                    onClick={() => handleRemove()}
                >
                    <X size={16} />
                </button>

            </div>

        </div>
    );
};

export default SavedCard;