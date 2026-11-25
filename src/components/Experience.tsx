import { Timeline, Avatar } from '@mantine/core';
import { IconCodeCircle2 } from '@tabler/icons-react';

import React from 'react'
import { ExperienceInfo } from '../User';

const TimeLineItem = (items:any) => {
    return <>
      {items.map((item:any,index:number)=><Timeline.Item data-aos="fade-up" data-aos-duration={800} color="#64FFDA" className='!py-8 sm:!py-14'  key={index} bullet={<IconCodeCircle2 className='!text-bgColor' size={35} />} >
        <div className="border flex flex-col gap-2 border-primaryColor p-4 rounded-2xl min-w-0 hover:!shadow-[0_0_10px_0_#64FFDA]">
          <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
            <Avatar
              src="VikashTiwari.jpeg"
              alt="Vikash Tiwari"
              imageProps={{
                onError: (event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "avatar.jpg";
                },
              }}
              className='!h-12 !w-12 sm:!h-16 sm:!w-16 shrink-0'
            />
            <div className='flex flex-col gap-1 min-w-0'>
              <div className='text-whiteColor text-2xl sm:text-3xl font-semibold'>{item.role}</div>
              <div className='text-base sm:text-lg font-semibold text-textColor'>{item.company} &#x2022; {item.date}</div>
            </div>
          </div>
          <div className='text-justify leading-5 text-textColor text-sm sm:text-base break-words'>{item.desc}</div>
          <div className='text-base sm:text-lg text-textColor font-medium flex flex-wrap gap-x-2'> <span> Skills:</span>
            {item.skills.map((skill:any,index:number)=><span key={index}> &#x2022; {skill}</span>
            )}
            
          </div>
        </div>
      </Timeline.Item>
      )}
    </>
  }

const Experience = () => {
   
  return (
    <div id="experience" className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20 pb-20 sm:pb-28 font-mono scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-whiteColor text-center">04.&nbsp;<span className="text-primaryColor">Experience</span></h1>
      <Timeline color="#64FFDA"  active={2} bulletSize={35} lineWidth={2}>
        {TimeLineItem(ExperienceInfo)}
        <Timeline.Item color="#64FFDA" bullet={<IconCodeCircle2 className='!text-bgColor' size={35} />} title="">
            </Timeline.Item>
    </Timeline>
        
    </div>
  )
}

export default Experience
