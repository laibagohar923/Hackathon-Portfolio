import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      I am a web developer specializing in HTML, CSS, TypeScript, and Tailwind CSS. I possess strong front-end development skills and excel at creating intuitive and responsive websites that are both user-friendly and visually appealing. I have a passion for harmonizing design and development, consistently delivering projects that adhere to modern web standards. My attention to detail and love for creativity enable me to craft solutions that perfectly match client requirements. I am enthusiastic about innovative problem-solving and continuously seek to learn new frameworks and tools to enhance my work.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;