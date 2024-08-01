'use client';

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){

    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: '',
        password: ''
    })

    const router = useRouter();

    const login = async () => {
        try{
            
            
            let { data: dataUser, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            })
            
            if(dataUser) 
            {
                router.refresh();
            }
        }catch(error){
            console.log(error);
        };    
    }


    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    } 


    return <div className="container mx-auto w-[400px]">
        <div className='grid bg-red'>
            <label>Email</label>
            <input 
                type='text' 
                name='email'
                value={data?.email}
                onChange={handleChange}
                className="border-2 border-indigo-500 rounded p-2"
            />
        </div>
        <div className='grid'>
            <label>Password</label>
            <input 
                type='password' 
                name='password'
                value={data?.password}
                onChange={handleChange}
                className="border-2 border-indigo-500 rounded p-2"
            />
        </div>
        <div>
            <button onClick={login} className="px-4 py-2 bg-blue-500 rounded cursor-pointer mt-3">Sign In</button>
        </div>
    </div>
}