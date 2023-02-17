'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
    chatId: string;
}

function ChatInput({chatId}:Props) {
    const [promt,setPromt]=useState('');
    const session= useSession();
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
        <form className="p-5 space-x-5 flex-1">
            <input 
            className="bg-trasparent outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            disabled={!session}
            value={promt}
            onChange={(e)=>setPromt(e.target.value)}
            type="text" placeholder="Enter your message"/>
            <button 
            disabled={!promt || !session}
            className=" bg-[#11A37F] hover:opacity-50 text-white font-bold px-2 py-2 rounded 
            disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="submit">
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>Send</button>
        </form>
        <div>
            {/* modalselection */}
        </div>
    </div>
  )
}

export default ChatInput