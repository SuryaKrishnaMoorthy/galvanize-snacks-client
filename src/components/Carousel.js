import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://foodsogoodmall.com/wp-content/uploads/2014/05/Pan-Seared-Oven-Roasted-Veal-Chops.jpg',
    altText: 'Slide 1',
    header: 'Welcome to Galvanize Snacks!'
  },
  {
    src: 'https://windsetfarms.com/wp-content/uploads/2016/10/WF_Website_Product-on-White-500x375_ROMA.jpg',
    altText: 'Slide 2',
    header: 'The Ultimate Snack Website'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/1200px-Brie_01.jpg',
    altText: 'Slide 3',
    header: `Don't forget to leave reviews!`
  }
];

const HomeCarousel = () => <UncontrolledCarousel items={items} />;

export default HomeCarousel;
