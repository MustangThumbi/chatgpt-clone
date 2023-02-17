'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from 'firebase/firestore'
import db from '../firebase'
import ChatRow from './ChatRow'
import { timeStamp } from 'console'

function SideBar() {
  const {data: session} =useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"),
    orderBy('timeStamp','asc')
    )
    );
  
    console.log(chats)
  return (
    <div className='p-2 flex flex-col h-screen'>
        
        <div className='flex-1'>
            <div>
                {/* newchat */}
                <NewChat />
                <div>
                    {/* model selection */}
                     </div>
                    
                        {/* map through chats */}
                        {chats?.docs.map(chat => (
                          <ChatRow key={chat.id} id={chat.id}/>
                        ))}
                   
                
            </div>
            </div>
            {session &&(
              <img 
              onClick={()=> signOut()}
              src={session.user?.image!} alt="profile pic"
              className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'/>
            )}
            </div>
  )
}

export default SideBar