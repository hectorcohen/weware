import React from 'react'
import { AiOutlineArrowUp, AiOutlineCloseCircle } from 'react-icons/ai'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

function AccordionUI({ title, children, Id, Index, setIndex }) {

  /**
   * `const handleSetIndex = (Id) => Index !== Id && setIndex(Id)`
   * 
   * The above function is a React hook that sets the index of the current tab
   */
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id)

  return (
    <>
      <div onClick={() => handleSetIndex(Id)} className="container cursor-pointer w-full md:w-1/2 border py-2 border-['#D9DAE5'] m-2 flex justify-between items-center">
        <div className='flex group cursor-pointer'>
          <div className='text-blue_dark text-left font-bold text-base md:text-xl'>
            {title}
          </div>
        </div>
        <div className='flex items-center justify-center pr-10'>
          {
            Index !== Id ? (<IoIosArrowDown className='w-6 h-6 text-verde' />) : (<IoIosArrowUp className='w-6 h-6 text-verde' />)
          }
        </div>
      </div>
      {
        Index === Id && (
          <div className='text-justify pl-0 bg-white text-blue_dark md:w-1/2'>
            {children}
          </div>
        )
      }
    </>
  )
}

export default AccordionUI