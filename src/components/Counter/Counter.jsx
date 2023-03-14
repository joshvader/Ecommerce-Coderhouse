import {useState} from 'react'


export const Counter = () => {
    const [count, setCount] = useState(0)
    
    const decrementCount = () => {
      if(count === 0) return
      setCount(count -1)
    }
  return (
    <>
    <p>Cantidad:</p>
    <div className='flex mx-auto gap-2 py-4 px-4'>
    <div className="bg-gray-400 w-10 text-white font-bold py-2 px-4 rounded">{count}</div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>setCount(count+1)}>+</button>{''}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={decrementCount} >-</button>{''}
    </div>
    
    </>
  )
}
