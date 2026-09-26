'use client';
import { Iworkout } from '@/types/type';
import React, { createContext, ReactNode, useState } from 'react';


interface Iworkoutcontext {
    plan: Iworkout[];
    setPlan: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    saved: Iworkout[];
    setSaved: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    buttonType: 'plan' | 'saved';
    setButtonType:  React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;
}

 export const PlanContext = createContext<Iworkoutcontext>({
    plan: [],
    saved: [],
    buttonType: 'plan',
    setPlan: () => {},
    setSaved: () => {},
    setButtonType: () => {}

 });


const PlanProvider = ({children}:{children: ReactNode}) => {

   const [plan, setPlan] = useState<Iworkout[]>([]);
   const [saved, setSaved] = useState<Iworkout[]>([]);
   const [buttonType, setButtonType] = useState<'plan' | 'saved'>('plan');

   const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    buttonType,
    setButtonType
   }

    return (
        <PlanContext.Provider value={sharedData}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;