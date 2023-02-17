import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className='flex space-x-2 text-center' >
       <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
       <SunIcon className='h-8 w-8'/>
            <h2>Examples</h2>


          </div>
          <p className='infoText'>some stuff are great like lorem </p>
          <p className='infoText'> I am batman and stuff? </p>
          <p className='infoText'>oooh you touched my talala</p>
        
      </div>

       <div>
       
          <div className=' flex flex-col items-center justify-center mb-5'>
       <BoltIcon className='h-8 w-8'/>
            <h2>Capabilities</h2>


          </div>
          <p className='infoText'>some stuff are great like lorem </p>
          <p className='infoText'> I am batman and stuff? </p>
          <p className='infoText'>oooh you touched my talala</p>
        
      </div>

   
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
       <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>Limitations</h2>


          </div>
          <p className='infoText'>some stuff are great like lorem </p>
          <p className='infoText'> I am batman and stuff? </p>
          <p className='infoText'>oooh you touched my talala</p>
       
        </div>
      </div>
      </div>
     
  )
}
