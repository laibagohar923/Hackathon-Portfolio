'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Portfolio ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hey My Name is Laiba Gohar and I'm from Pakistan. Dedicated and motivated Front-End Developer with two year of professional experience. and have been working as a Web Developer at Online Study since November 2021. During my time at Online Study, I have successfully completed projects various other websites. I possess strong skills in creating websites and have a keen eye for detail and design. proficient in Web Development HTML | CSS | JavaScript | Tailwind CSS | Chatbot Developer | Bootstrap | Firebase | Typescript .. and WordPress a strong work ethic, always striving to deliver high-quality work in a timely manner. I am seeking opportunities to further developer. my skills and contribute to a dynamic team in a challenging professional environment.`,
    keywords: ' Web,  Programador web,  P Aplicaciones web, Aplicaciones móviles, Aplicaciones escritorio, Desarrollo frontend, Programador frontend, HTML, CSS, Javascript, Typescript, React, Angular.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <link rel='me' href='mailto:laibagohar923@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Laiba Gohar' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Laiba Gohar_' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;