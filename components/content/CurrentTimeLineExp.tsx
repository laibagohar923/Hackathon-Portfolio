import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>IA Interactive</a> | Mar. 2023 - {calculateDuration('2023-03-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
        Dedicated and motivated Front-End Developer with two year of professional experience. and have been working as a Web Developer at Online Study since November 2021. During my time at Online Study, I have successfully completed projects various other websites. I possess strong skills in creating websites and have a keen eye for detail and design. proficient in Web Development HTML | CSS | JavaScript | Tailwind CSS | Bootstrap a strong work ethic, always striving to deliver high-quality work in a timely manner. I am seeking opportunities to further developer. my skills and contribute to a dynamic team in a challenging professional environment.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Freelance | Feb. 2023 - Mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | May. 2023 - Jul. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;