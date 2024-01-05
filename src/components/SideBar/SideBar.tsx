"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SideBarItem from './SIdeBarItem/SideBarItem'
import { useRouter, usePathname } from 'next/navigation'

const SideBarData = [
  {
    label: 'Overview',
    image: '/images/SideBar/overview.svg',
    path: '/'
  },
  {
    label: 'Analytics',
    image: '/images/SideBar/analytics.svg',
    path: '/analytics'
  },
  {
    label: 'Heatmap',
    image: '/images/SideBar/heatmap.svg',
    path: '/heatmap'
  },
  {
    label: 'Report',
    image: '/images/SideBar/report.svg',
    path: '/report'
  },
  {
    label: 'Support',
    image: '/images/SideBar/support.svg',
    path: '/support'
  },
]

const SideBar = () => {
  const [active, setActive] = useState('/overview');
  const pathname = usePathname()
  const router = useRouter();

  const onSideBarItemClick = (path: string) => {
    setActive(path);
    router.push(path);
  }

  useEffect(() => {
    pathname != null ? setActive(pathname) : '';
  }, [])

  return (
    <div>
      <div className={`lg:w-48 md:w-32 sm:w-[0px] p-6 h-screen rounded-tr-xl rounded-br-xl flex flex-col gap-6 bg-[#0D0D30]`}>
        <Image src={'/images/logo.svg'} width={150} height={150} alt='' className='hover:cursor-pointer' />
        <div className='w-full h-0.5 bg-[#454F5B]'></div>
        <>
          {SideBarData.map((item) => (
            <SideBarItem
              key={item.label}
              label={item.label}
              logo={item.image}
              onClick={() => onSideBarItemClick(item.path)}
              active={active == item.path ? true : false} />
          ))}
          <SideBarItem label='Logout' logo='/images/SideBar/logout.svg' bottom onClick={() => { }} />
        </>
      </div>
    </div>
  )
}
export default SideBar