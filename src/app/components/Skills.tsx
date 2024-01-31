import React from 'react'
import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFirebase, SiMicrosoftazure, SiNextdotjs } from "react-icons/si";

type Props = {}

const SkillCard = ({image, name}) => {
    return(
      <div className="p-5 pb-2 w-24 flex flex-col items-center bg-neutral-800 w-fit border-2 border-neutral-400 duration-300 hover:border-neutral-800">
        <div className='text-4xl mb-5'>
          {image}
        </div>
        <div className='text-center'>{name}</div>
      </div>
    )
}

const Skills = (props: Props) => {
  return (
    <div className="w-full p-10 flex flex-col mb-20">
      <div className='text-4xl'>Skills</div>
      <div className='flex flex-wrap gap-5 mt-10'>
        <SkillCard image={<FaReact/>} name='ReactJS'/>
        <SkillCard image={<SiFirebase/>} name='Firebase'/>
        <SkillCard image={<FaJsSquare/>} name='JavaScript'/>
        <SkillCard image={<FaCss3/>} name='CSS'/>
        <SkillCard image={<FaHtml5/>} name='HTML'/>
        <SkillCard image={<FaNodeJs/>} name='Node.js'/>
        <SkillCard image={<FaPython/>} name='Python'/>
        <SkillCard image={<SiMicrosoftazure/>} name='Microsoft Azure'/>
        <SkillCard image={<SiNextdotjs/>} name='Next JS'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
        <SkillCard image='temp' name='Skill 1'/>
      </div>
    </div>
  )
}

export default Skills