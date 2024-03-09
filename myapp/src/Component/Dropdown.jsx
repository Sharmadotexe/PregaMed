
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Placeholder from './Placeholder'
import Nutri1 from '../assets/nutrition1.jpg'

const NutritionPlaceholder = [
  {
    id: 1,
    title: 'Eating out safely when pregnant',
    href: '#',
    description:
      'Some foods and drinks are unsafe for pregnant women, and it can be tricky to navigate a restaurant menu. Read More...',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://assets.babycenter.com/ims/2014/08/iStock_000030289580Medium_wide.jpg',
    },
  },
  {
    id: 2,
    title: 'Eating sesame seeds safe?',
    href: '#',
    description:
      'Yes, there is no harm in including sesame (til) seeds or gingelly seeds in your diet. However, Read more...',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://assets.babycenter.com/ims/2013/02/5_Week_Seasame_wide.jpg',
    },
  },
  {
    id: 3,
    title: '20 healthy snacks for pregnancy',
    href: '#',
    description:
      'You might find that you get hungry more often now that you are pregnant. Make the most of these hunger pangs by eating nutrient-packed healthy snacks. Here are a few healthy options for you!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      href: '#',
      imageUrl:
        'https://assets.babycenter.com/ims/2017/09/iStock-663290162_4x3.jpg',
    },
  },
  // More posts...
]
const ExercisePlaceholder = [
  {
    id: 1,
    title: 'How much should I exercise during pregnancy',
    href: '#',
    description:
      'Ideally, pregnant women should get at least 150 minutes of moderate-intensity aerobic activity every week. An aerobic activity is one in which. Read More...',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://imgs.search.brave.com/CYkXGxCeYBp_2lX5NXDmddubpeOoNzD2SckXpxr3TBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lm5hc20ub3JnL2h1/YmZzL3ByZWduYW5j/eS1leGVyY2lzZXMt/Zm9yLWVhY2gtdHJp/bWVzdGVyLmpwZw',
    },
  },
  {
    id: 2,
    title: 'What exercise should I avoid during pregnancy',
    href: '#',
    description:
      'While pregnant, avoid activities that put you at increased risk of injury, such as the following: Read more...',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://imgs.search.brave.com/zNI6nfxuO1bn861L68jujzPf5-gSoUQ20WmafzGCdCw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWdvcmFtZWRp/YS5jb20vd3RlMy4w/L2djbXMvYWItZXhl/cmNpc2VzLWR1cmlu/Zy1wcmVnbmFuY3kt/NTI1eDI5NS5qcGc',
    },
  },
  {
    id: 3,
    title: 'How much should I exercise during pregnancy?',
    href: '#',
    description:
      'Ideally, pregnant women should get at least 150 minutes of moderate-intensity aerobic activity every week. An aerobic activity is one in which you move large muscles of the body (like those in the legs and arms) in a rhythmic way. Moderate intensity means, Read more...',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://imgs.search.brave.com/6YlRAQu4ZH4O03MuNDOVGeNQsi_NzMbeniMqzTNNXOc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcG9zdC5o/ZWFsdGhsaW5lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOS9wcmVnbmFu/dC1neW0tZXhlcmNp/c2UtMTI5Nng3Mjgt/aGVhZGVyLTEyOTZ4/NzI4LmpwZz93PTEx/NTUmaD0xNTI4',
    },
  },
  // More posts...
]

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Nutrition
        </AccordionSummary>
        <AccordionDetails>
          <Placeholder posts = {NutritionPlaceholder}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            Exercise
        </AccordionSummary>
        <AccordionDetails>
        <Placeholder posts = {ExercisePlaceholder}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            Baby Vaccination
        </AccordionSummary>
        <AccordionDetails>
        <Placeholder posts = {NutritionPlaceholder}/>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
