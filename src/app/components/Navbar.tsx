import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex gap-10 text-xl pt-5 pb-5'>
        <div className='duration-300 hover:underline'>Projects</div>
        <div className='duration-300 hover:underline'>Skills</div>
        <div className='duration-300 hover:underline'>Achievements</div>
        <div className='duration-300 hover:underline'>Education</div>
    </div>
  )
}

export default Navbar