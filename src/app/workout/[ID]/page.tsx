import Image from "next/image";
import { notFound } from "next/navigation";
import { Flame, Star, Clock } from "lucide-react";
import { Iworkout } from "@/types/type";
import PlanButton from "@/components/PlanButton";
import SavedButton from "@/components/SavedButton";

interface Iworkoutdetailsparams {
    params: Promise<{
        ID: string;
    }>;
}

const getWorkout = async (): Promise<Iworkout[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    const data = await res.json();

    return data;
};

const WorkoutDetailsPage = async ({
    params,
}: Iworkoutdetailsparams) => {

    const { ID } = await params;

    const workoutData = await getWorkout();

    const workout = workoutData.find(
        (workout) => workout.id === Number(ID)
    );

    // Wrong ID হলে 404 page
    if (!workout) {
        notFound();
    }

    return (
        <main className="mx-auto w-full max-w-300 px-5 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* LEFT - IMAGE */}
                <div className="relative h-112.5 overflow-hidden rounded-xl lg:h-143.75">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* RIGHT - DETAILS */}
                <div className="flex flex-col">

                    {/* Name */}
                    <h1 className="text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information box */}
                    <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]">

                        {/* Equipment */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                Equipment
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.equipment}
                            </span>
                        </div>

                        {/* Difficulty */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                Difficulty
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.difficulty}
                            </span>
                        </div>

                        {/* Sets */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                Sets
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.sets}
                            </span>
                        </div>

                        {/* Reps */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                Reps
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.reps}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                <Clock size={14} />
                                Duration
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                <Flame size={14} className="text-orange-500" />
                                Calories
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                                <Star size={14} />
                                Rating
                            </span>

                            <span className="text-sm text-gray-300">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-7">
                        <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-3">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-6 text-gray-400"
                                    >
                                        <span className="text-gray-600">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">

                        <PlanButton workout={workout}/>

                        <SavedButton workout={workout}/>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetailsPage;