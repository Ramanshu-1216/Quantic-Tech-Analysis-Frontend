import Image from 'next/image'
import React from 'react'

const TopBar = () => {
    return (
        <div className='w-full p-5 bg-white flex justify-between items-center'>
            <div className='text-[20px]'>
                Hi, John doe
            </div>
            <div className='flex flex-row gap-x-5'>
                <div className='flex p-2 rounded-full items-center justify-center hover:cursor-pointer hover:bg-gray-200 text-white'>
                    <Image src='/images/TopBar/notification.svg' width={24} height={24} alt='' />
                </div>
                <div className='flex bg-[#645050] p-2 rounded-full items-center justify-center hover:cursor-pointer' >
                    <Image src='/images/TopBar/user.svg' width={24} height={24} alt='' />
                </div>
            </div>
        </div>
    )
}

export default TopBar