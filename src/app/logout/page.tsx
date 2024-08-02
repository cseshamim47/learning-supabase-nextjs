import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){


    return <form action="/auth/logout" method="post">
        
        <button>Logout</button>
    </form>
}