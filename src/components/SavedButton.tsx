'use client';
import React from 'react';
import { Iworkout } from '@/types/type';
import { Bookmark } from "lucide-react";
import { useContext } from 'react';
import { PlanContext } from '@/context/PlanContext';
import toast from 'react-hot-toast';

const SavedButton = ({workout}:{workout:Iworkout}) => {

   const {saved,setSaved} = useContext(PlanContext);
      
      const handleSaved = () =>{
          console.log("Button kam kore");
          const alreadySaved = saved.some(item => item.id === workout.id);
          if(!alreadySaved){
           setSaved([...saved,workout]);
           toast.success(`${workout.name} is saved`);
          }
          else{
            toast.error(`${workout.name} is already saved`);
          }
      }

    return (
        <button className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-xs font-bold text-gray-300 transition hover:bg-gray-800"
        onClick={() => handleSaved()}>
                            <Bookmark size={15} />
                            SAVE FOR LATER
                        </button>
    );
};

export default SavedButton;