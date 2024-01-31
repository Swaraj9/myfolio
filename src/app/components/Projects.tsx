import React from 'react'

type Props = {}

const ProjectCard = ({name, desc}) => {
  return(
    <div className='p-5 bg-neutral-800 w-ull  border-2 border-neutral-400 duration-300 hover:border-neutral-800'>
      <div className='mb-3 text-2xl'>{name}</div>
      <div>{desc}</div>
    </div>
  )
}

const Projects = (props: Props) => {
  return (
    <div id='projects' className='w-full flex flex-col p-10 mb-20'>
      <div className='text-4xl'>Projects</div>
      <div className='flex flex-col gap-10 mt-10'>
        <ProjectCard name="Project 1" desc="Dummy Desc"/>
        <ProjectCard name="Project 1" desc="Dummy Desc"/>
        <ProjectCard name="Project 1" desc="Dummy Desc"/>
        <ProjectCard name="Project 1" desc="Dummy Desc"/>
      </div>
    </div>
  )
}

export default Projects