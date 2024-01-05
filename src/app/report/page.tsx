'use client'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import API_ENDPOINT from '../../../config/config'

type ReportFields = {
  client: {
    _id: string,
    name: string,
    contactPerson: string
  },
  camname: string,
  violationType: string,
  tags: string,
  assigned: {
    _id: string,
    email: string,
    firstname: string,
    lastname: string,
    phone: string,
  },
  status: string,
  imagepath: string,
  live: string,
  comments: Object,
  _id: string,
}

type ChipProps = {
  label: string
}

const ChipComponent = ({ label }: ChipProps) => {
  return (
    <div className=''>
      <Button label={label} image={'/images/Report/dropdown.svg'} onClick={() => { }} chip={true} />
    </div>
  )
}

const ChipData = [
  {
    label: 'Status',
    dropdownArray: [],
    hasDropdown: true,
  },
  {
    label: 'Tags',
    dropdownArray: [],
    hasDropdown: true,
  },
  {
    label: 'Location',
    dropdownArray: ['Mixing tank', 'Coke Drum A', 'Loadig Dock'],
    hasDropdown: true,
  },
  {
    label: 'Violation',
    dropdownArray: [],
    hasDropdown: true,
  },
  {
    label: 'Unassigned',
    dropdownArray: [],
    hasDropdown: false,
  }
];

const ReportCard = ( {status, imagepath, _id}: ReportFields) => {
  var statusClassName = 'px-2 py-1 rounded-md font-bold text-sm';
  status = status.trim().toUpperCase()

  if (status == 'OPEN') statusClassName += ' text-[#694100] bg-[#FFF3D6]'
  else if (status == 'RESOLVED') statusClassName += ' text-[#006100] bg-[#F3FFF6]'
  else statusClassName += ' text-[#005278] bg-[#E0F1F5]'

  return (
    <div className='flex flex-1 flex-row p-5 border-[1px] border-gray-200 rounded-lg'>
      <div>
        <Image src={`http:localhost:8000/${imagepath}`} width={300} height={100} alt='' />
      </div>
      <div className='mx-5'>
        <div className='flex flex-row gap-5 '>
          <div className='text-gray-900 font-medium text-lg'>{`#${hashCode(_id)}`}</div>
          <div className={statusClassName}>{status}</div>
        </div>
      </div>
    </div>
  )
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return Math.abs(hash) % 100000;
}

const Report = () => {
  const [reports, setReports] = useState<ReportFields[] | null>();

  useEffect(() => {
    fetch(`${API_ENDPOINT}/reports/all/659831d7f95ed2f6fd914329`,
      {
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTg1ZGU5NTYyNDk1ZTA0NDI1MjkwNSIsImlhdCI6MTcwNDQ5MTgwMiwiZXhwIjoxNzA0NDk1NDAyfQ.A7F3Z_EixaDpSeb3PHnly0YMeTX8yFHf6zBxuUWx648'
        }
      })
      .then((data) => {
        if (!data.ok) {
          return;
        }
        return data.json()
      })
      .then((response) => {
        console.log(response)
        setReports(response)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='p-5 flex flex-1 flex-col'>
      <div className='text-2xl font-medium mb-5 mt-2 text-gray-900'>Report</div>
      <div className='flex flex-1 flex-col'>
        <div className='h-full w-full rounded-xl bg-white px-5 py-6'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[18px] font-[500] text-gray-900'>All Incidents {'(102)'}</p>
            <div className='flex flex-row justify-center items-center gap-6 text-[#4040F2]'>
              <Button image='/images/Report/download.svg' label='Download' onClick={() => { }} />
              <Button image='/images/Report/calender.svg' label='Calender' onClick={() => { }} />
            </div>
          </div>
          <div className='flex flex-row gap-5 my-2'>
            <ChipComponent label={'Status'} />
            <ChipComponent label={'Tags'} />
            <ChipComponent label={'Location'} />
            <ChipComponent label={'Violation'} />
            <ChipComponent label={'Unassigned'} />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 my-5'>
            {reports ?
              reports.map((report) => (
                <ReportCard {...report} />
              ))
              : <>zz</>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report