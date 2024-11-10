'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme } from '@mantine/core';

import AnimationContainer from '../utils/AnimationContainer';


const useStyles = createStyles((theme: any) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-center',
    padding: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  repo: string;
  link: string;
}

const Card = ({ image, title, category, repo, link }: CardProps) => {

  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>

      <div className='flex items-center justify-end gap-3'>

      </div>
    </Paper>
  );
}

const favProjects = [
  {
    image:
      'https://mobirise.co/assets/images/frame-68-1-2000x1100.jpg',
    title: '',
    category: 'React - Context - TypeScript - CSS ',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  },
  {
    image:
      'https://images.squarespace-cdn.com/content/v1/643d462156eda3673214a28c/1681737290239-1BLJJRZ6SHRLWI310GV6/2022-06-01_08-07-28.png',
    title: '',
    category: 'Next.js - Context - TypeScript ',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  },
  {
    image:
      'https://weblium.com/blog/wp-content/uploads/2020/01/trainer.jpg',
    title: '',
    category: 'React - React Query - TypeScript - Bootstrap',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  },
  {
    image:
      'https://smthemes.com/products/myprogram_lrg.png',
    title: '',
    category: 'Next.js - TypeScript - NextUI - ',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  },
  {
    image:
      'https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg',
    title: '',
    category: 'React - JavaScript - CSS',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  },
  {
    image:
      'https://media.licdn.com/dms/image/D5612AQEqrH2rMY7GRw/article-cover_image-shrink_720_1280/0/1679600688291?e=2147483647&v=beta&t=HsP6TRdUpG54xiyaihtDSPXt6Gilw9CcLE4VpBij6g4',
    title: '',
    category: 'React - JavaScript ',
    repo: 'https://github.com/laibagohar923',
    link: 'https://github.com/laibagohar923'
  }
];

const myGithub = 'https://github.com/laibagohar923';

const FavProjects = () => {

  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = favProjects.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <AnimationContainer customClassName='w-full flex flex-col justify-center text-center lg:items-start mb-16'>

      <h2 className='font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        Projects
      </h2>

      <Carousel
        slideSize='50%'
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 1 }]}
        slideGap='xs'
        align='center'
        slidesToScroll={mobile ? 1 : 2}
        withControls={false}
        style={{ width: '100%', cursor: 'grab' }}
        loop
      >
        {slides}
      </Carousel>

    </AnimationContainer>
  );
}

export default FavProjects;