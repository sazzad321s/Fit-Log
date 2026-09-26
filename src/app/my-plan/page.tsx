'use client';
import { PlanContext } from '@/context/PlanContext';
import React from 'react';
import { useContext } from 'react';

const MyPlanPage = () => {

    const { plan,setPlan,saved,setSvaed,buttonType,setButtonType } = useContext(PlanContext);

   const handleToggle = (type : 'plan' | 'saved') => {
        setButtonType(type);
   }

    return (
        <div className='max-w-300 mx-4 lg:mx-auto'>
            <h2>MY PLAN</h2>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div></div>
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
        </div>
    );
};

export default MyPlanPage;