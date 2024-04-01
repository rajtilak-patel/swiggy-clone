import React from 'react'

let data = [
    {
        name:"Chinese Restaurant Near Me"
    },
    {
        name:"South Indian Restaurant Near Me"
    },
    {
        name:"Indian Restaurant Near Me"
    },
    {
        name:"Kerala Restaurant Near Me"
    },
    {
        name:"Korean Restaurant Near Me"
    },
    {
        name:"North Indian Restaurant Near Me"
    }, {
        name:"Seafood Restaurant Near Me"
    }, {
        name:"Bengali Restaurant Near Me"
    },
    {
        name:"Korean Restaurant Near Me"
    },
    {
        name:"North Indian Restaurant Near Me"
    }, {
        name:"Seafood Restaurant Near Me"
    }, {
        name:"Bengali Restaurant Near Me"
    }

];

const BestCuisnes = () => {
  return (
    <div className='w-[75%] mx-auto my-[30px]'>
        <div className='flex items-center justify-between'>
            <div className='text-2xl font-bold mb-2'>
               Best Cuisines Near Me
            </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-center'>
                {data.map((value,index)=>{
                   return(
                    <div className='border shadow p-3 text-[15px]'>
                          {value.name}
                       </div>
                   )
                })}
            </div>
            {/* <hr className="my-10 border-[1px]" /> */}
    </div>
  )
}

export default BestCuisnes
