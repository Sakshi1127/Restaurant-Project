import images from './images';

const mocktails= [
  {
    title: 'Virgin Mojito',
    price: '$10',
    tags: 'Refreshing, Minty Bliss',
  },
  {
    title: 'Blue Lagoon',
    price: '$59',
    tags: 'Tropical Elegance, Citrus Delight',
  },
  {
    title: 'Cucumber Basil Sparkler',
    price: '$44',
    tags: 'Crisp & Cool, Herbal Fusion',
  },
  {
    title: 'Strawberry Basil Lemonade',
    price: '$31',
    tags: 'Sweet Symphony, Berry Burst',
  },
  {
    title: 'Classic Martini',
    price: '$26',
    tags: 'Timeless Elegance, Gin Perfection',
  },
];

const cocktails = [
  {
    title: 'Mango Margarita',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Old Fashioned Elegance",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Passionfruit Caipirinha',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Raspberry Rose Fizz',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Smoky Maple ',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { mocktails, cocktails, awards };
