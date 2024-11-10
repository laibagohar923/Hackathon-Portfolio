'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'ATM',
    des: 'Project using the Typescript',
    category: 'Typescript',
    repo: 'https://github.com/laibagohar923/ATM',
    link: 'https://github.com/laibagohar923/ATM.git'
  },
  {
    id: '2',
    title: 'Cli Number Guessing Game',
    des: 'This is Cli number guessing game. ',
    category: 'Typescript',
    repo: 'https://github.com/laibagohar923/cli-number-guessing',
    link: 'https://github.com/jeandv/memoria-game'
  },
  {
    id: '3',
    title: 'Portfolio',
    des: 'This is simple portfolio using html,css , javascript.',
    category: 'javascript',
    repo: 'https://github.com/laibagohar923/Growintern',
    link: 'https://github.com/laibagohar923/Growintern.git'
  },
  {
    id: '5',
    title: 'Currency-Converter',
    des: 'This is Currency-Converter using Typescript',
    category: 'Typescript',
    repo: 'https://github.com/laibagohar923/Currency-converter',
    link: 'https://github.com/laibagohar923/Currency-converter.git'
  },
  {
    id: '6',
    title: 'Calculator',
    des: 'This is Simple Calculator using html css javascript',
    category: 'Javascript',
    repo: 'https://github.com/laibagohar923/Code_soft/tree/main/calculator%20L',
    link: 'https://github.com/laibagohar923/Code_soft.git'
  },
  {
    id: '7',
    title: 'Typescript-Calculator',
    des: 'This is simple Typescript Calculator.',
    category: 'typescript',
    repo: 'https://github.com/laibagohar923/typescript-calculator',
    link: 'https://github.com/laibagohar923/typescript-calculator.git'
  },
  {
    id: '8',
    title: 'Todo-List',
    des: 'This is Todo list using typescript.',
    category: 'typescript - react - react query',
    repo: 'https://github.com/laibagohar923/Todo-list',
    link: 'https://github.com/laibagohar923/Todo-list.git'
  },
  {
    id: '9',
    title: 'Pakola Website',
    des: 'This is Pakola Websit using html and css.',
    category: 'html ,css',
    repo: 'https://github.com/laibagohar923/Pakola-Website',
    link: 'https://github.com/laibagohar923/Pakola-Website.git'
  },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;