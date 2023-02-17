import { PlusIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import db from '../firebase';



function NewChat() {
  const router = useRouter();
  const {data:session} =useSession();

const createNewChat = async() => {
  const doc =await addDoc (collection(db, 'users', session?.user?.email!,'chats'), {
    messages:[],
    userId:session?.user?.email,
    timestamp:serverTimestamp(),

}
  );

  router.push(`/chat/${doc.id}`);
};
  return (
    <div className='border-gray-700 border items-center justify-center'>
        <PlusIcon className='h-4 w-4'/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat