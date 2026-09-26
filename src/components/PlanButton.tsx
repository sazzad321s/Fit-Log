'use client';
import { Iworkout } from '@/types/type';
import React, { useContext } from 'react';
import { CalendarDays } from "lucide-react";
import  { PlanContext } from '@/context/PlanContext';
import toast from 'react-hot-toast';

const PlanButton = ({workout}:{workout:Iworkout}) => {

    const {plan,setPlan} = useContext(PlanContext);
    
    const handlePlan = () =>{
        const alreadySaved  = plan.some(item => item.id === workout.id);
        if(!alreadySaved){
        setPlan([...plan,workout]);
        toast.success(`${workout.name} is added to plan`);
        }
        else{
            toast.error(`${workout.name} is already added to plan`);
        }

    }

    return (
       <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-xs font-bold text-black transition hover:bg-lime-300"
       onClick={() => handlePlan()}>
                            <CalendarDays size={15} />
                            ADD TO TODAY&apos;S PLAN
                        </button>
    );
};

export default PlanButton;