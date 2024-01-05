'use client'
import Image from 'next/image'
import React from 'react'
import { act } from 'react-dom/test-utils'

type ButtonProps = {
    label: string,
    image?: string,
    onClick: Function,
    chip?: boolean,
    active?: boolean,
}

const Button = ({label, image, onClick, chip=false, active=false} : ButtonProps) => {
    return (
        
        <button className={`
              flex 
              flex-row 
              justify-center 
              items-center 
              gap-2 
              px-5 
              py-2.5
              ${!chip ? 
                `border-[1px] 
                border-[#4040F2]
                hover:bg-gray-100` 
                :
                active ? 
                `bg-[#ECECFE]
                text-[#4040F2]` :
                `bg-[#F4F6F8]
                hover:bg-[#ECECFE]
                hover:text-[#4040F2]
                text-gray-700` } 
              rounded-md
              `}
              
              onClick={() => onClick()}>
            {label}
            <Image src={`${!chip ? image : active ? '/images/Report/dropup.svg' : '/images/Report/dropdown.svg'}`} width={16} height={16} alt='download' />
        </button>
    )
}

export default Button