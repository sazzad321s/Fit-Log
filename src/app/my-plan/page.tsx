"use client";

import PlanCard from "@/components/PlanCard";
import SavedCard from "@/components/SavedCard";
import { PlanContext } from "@/context/PlanContext";
import { Iworkout } from "@/types/type";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
    const {
        plan,
        saved,
        buttonType,
        setButtonType,
    } = useContext(PlanContext);

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    // Toggle Plan / Saved
    const handleToggle = (type: "plan" | "saved") => {
        setButtonType(type);
    };

    // Sorting function
    const sortWorkout = (workouts: Iworkout[]) => {
        const sortedWorkout = [...workouts];

        if (sortBy === "duration") {
            sortedWorkout.sort(
                (a, b) => b.duration - a.duration
            );
        } else if (sortBy === "calories") {
            sortedWorkout.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        } else if (sortBy === "rating") {
            sortedWorkout.sort(
                (a, b) => b.rating - a.rating
            );
        }

        return sortedWorkout;
    };

    // Which data is currently active
    const currentType =
        buttonType === "plan" ? plan : saved;

    // Summary calculation
    const totalExercises = currentType.length;

    const totalMinutes = currentType.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    const totalCalories = currentType.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    // Sorted data
    const sortedPlan = sortWorkout(plan);
    const sortedSaved = sortWorkout(saved);

    return (
        <div className="mx-auto my-4 w-full max-w-300 px-4 md:my-8">

            {/* Heading */}
            <div>
                <h2 className="mb-2 text-3xl font-bold text-white md:text-5xl">
                    MY PLAN
                </h2>

                <p className="text-sm text-gray-400 md:text-base">
                    Cap of five lifts for today. Finish them,
                    then load more.
                </p>
            </div>

            {/* Summary */}
            <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e] sm:grid-cols-3">

                {/* Exercises */}
                <div className="px-5 py-5 sm:border-r sm:border-gray-800 md:px-6 md:py-6">
                    <p className="text-xs text-gray-500">
                        Exercises
                    </p>

                    <p className="mt-1 text-3xl font-bold text-lime-400">
                        {totalExercises}
                    </p>
                </div>

                {/* Minutes */}
                <div className="px-5 py-5 sm:border-r sm:border-gray-800 md:px-6 md:py-6">
                    <p className="text-xs text-gray-500">
                        Minutes
                    </p>

                    <p className="mt-1 text-3xl font-bold text-white">
                        {totalMinutes}
                    </p>
                </div>

                {/* Calories */}
                <div className="px-5 py-5 md:px-6 md:py-6">
                    <p className="text-xs text-gray-500">
                        Calories
                    </p>

                    <p className="mt-1 text-3xl font-bold text-white">
                        {totalCalories}
                    </p>
                </div>

            </div>

            {/* Toggle + Sort */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Toggle */}
                <div className="flex w-fit items-center rounded-xl border border-gray-800 bg-[#111318] p-1">

                    <button
                        onClick={() => handleToggle("plan")}
                        className={`rounded-xl px-5 py-2 text-sm  md:px-6 ${
                            buttonType === "plan"
                                ? "border border-gray-700 bg-[#20242c] font-semibold text-white"
                                : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => handleToggle("saved")}
                        className={`rounded-xl px-5 py-2 text-sm md:px-6 ${
                            buttonType === "saved"
                                ? "border border-gray-700 bg-[#20242c] font-semibold text-white"
                                : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">

                    <p className="text-xs text-gray-500 md:text-sm">
                        Sort By
                    </p>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as
                                    | "duration"
                                    | "calories"
                                    | "rating"
                            )
                        }
                        className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-xs text-gray-300 outline-none md:text-sm"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>

            </div>

            {/* Dynamic Content */}
            <div className="mt-5">

                {/* TODAY'S PLAN */}
                {buttonType === "plan" ? (

                    plan.length > 0 ? (

                        <div className="grid grid-cols-1 gap-3">
                            {sortedPlan.map((workout) => (
                                <PlanCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}
                        </div>

                    ) : (

                        <div className="flex min-h-70 flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#111318] px-5 text-center">

                            <h2 className="text-xl font-extrabold uppercase text-white md:text-2xl">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 max-w-md text-sm text-gray-500">
                                Browse the library and add a lift
                                to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300"
                            >
                                Go to Workouts
                            </Link>

                        </div>

                    )

                ) : (

                    /* SAVED */
                    saved.length > 0 ? (

                        <div className="grid grid-cols-1 gap-3">
                            {sortedSaved.map((workout) => (
                                <SavedCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}
                        </div>

                    ) : (

                        <div className="flex min-h-70 flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#111318] px-5 text-center">

                            <h2 className="text-xl font-extrabold uppercase text-white md:text-2xl">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 max-w-md text-sm text-gray-500">
                                Browse the library and save a workout
                                to see it here.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300"
                            >
                                Go to Workouts
                            </Link>

                        </div>

                    )

                )}

            </div>

        </div>
    );
};

export default MyPlanPage;