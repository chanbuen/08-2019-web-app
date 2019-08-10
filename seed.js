const { db } = require('./server/db');
const { Products } = require('./server/db/models');
// const Message = require('./server/db/models/message');
// const Channel = require('./server/db/models/channel');

const products = [
  { name: 'GLOSS BOMB',
    description: 'Universal Lip Luminizer',
    sku: '29406',
    categories: 'Lip|Lip Gloss',
    price: 18.00,
    image: 'https://www.fentybeauty.com/gloss-bomb/universal-lip-luminizer/FB50001.html?dwvar_FB50001_color=FB5006',
  },
  { name: 'GLOSS GOALZ ',
    description: 'Universal Lip Luminizer 3-PC Set',
    sku: '41692',
    categories: 'Lip|Lip Gloss',
    price: 54.00,
    image: 'https://www.fentybeauty.com/gloss-goalz/universal-lip-luminizer-3-pc-set/41692.html',
  },
  { name: 'FU$$Y BALLERINA',
    description: 'Universal Lip Luminizer 3-PC Set',
    sku: '41692',
    categories: 'Lip|Lip Gloss',
    price: 54.00,
    image: 'https://www.fentybeauty.com/gloss-goalz/universal-lip-luminizer-3-pc-set/41692.html',
  },
  { name: 'STUNNA LIP PAINT',
    description: 'Longwear Fluid Lip Color',
    sku: 'CLR-LIP',
    categories: 'Lip|Lipstick',
    price: 24.00,
    image: 'https://www.fentybeauty.com/stunna-lip-paint/longwear-fluid-lip-color/FB50002.html?dwvar_FB50002_color=FB5009',
  },
  { name: 'SHE MOODY',
    description: 'Hector\'s Sultry Metallic Brown Lip Set',
    sku: '42422',
    categories: 'Lip|Lipstick',
    price: 43.00,
    image: 'https://www.fentybeauty.com/gloss-goalz/universal-lip-luminizer-3-pc-set/41692.html',
  },
  { name: 'PRO FILT\'R',
    description: 'Soft Matte Longwear Foundation',
    sku: 'CLR-FACE',
    categories: 'Face|Foundation',
    price: 35.00,
    image: 'https://www.fentybeauty.com/pro-filtr/soft-matte-longwear-foundation/FB30006.html?dwvar_FB30006_color=FB0340',
  },
]

// const channels = [
//   { name: 'really_random' },
//   { name: 'generally_speaking' },
//   { name: 'dogs_of_fullstack' },
//   { name: 'lunch_planning' }
// ];

// const authors = [{
//   name: 'Cody',
//   image: '/images/cody.jpg'
// }, {
//   name: 'Ben',
//   image: '/images/ben.jpg'
// }, {
//   name: 'Star',
//   image: '/images/star.jpg'
// }, {
//   name: 'Batman',
//   image: '/images/batman.jpg'
// }, {
//   name: 'Elliott',
//   image: '/images/elliott.jpg'
// }, {
//   name: 'Fira',
//   image: '/images/fira.jpg'
// }, {
//   name: 'Henry',
//   image: '/images/henry.jpg'
// }, {
//   name: 'Marcy',
//   image: '/images/marcy.jpg'
// }, {
//   name: 'Milton',
//   image: '/images/milton.jpg'
// }, {
//   name: 'Murphy',
//   image: '/images/murphy.jpg'
// }, {
//   name: 'Raffi',
//   image: '/images/raffi.jpg'
// }, {
//   name: 'Tulsi',
//   image: '/images/tulsi.jpg'
// }, {
//   name: 'Pork Chop',
//   image: '/images/pork_chop.jpg'
// }, {
//   name: 'Ribs',
//   image: '/images/ribs.jpg'
// }, {
//   name: 'Stacey',
//   image: '/images/stacey.jpg'
// }, {
//   name: 'JD',
//   image: '/images/jd.jpg'
// }, {
//   name: 'BenBen',
//   image: '/images/benben.png'
// }, {
//   name: 'Odie',
//   image: '/images/odie.jpg'
// }];

// const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

// const messages = [
//   { authorId: id(), content: 'I like React!', channelId: 1 },
//   { authorId: id(), content: 'I like Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like writing web apps!', channelId: 2 },
//   { authorId: id(), content: 'You should learn JavaScript!', channelId: 2 },
//   { authorId: id(), content: 'JavaScript is pretty great!', channelId: 2 },
//   { authorId: id(), content: 'Dogs are great!', channelId: 3 },
//   { authorId: id(), content: 'Cats are also great!', channelId: 3 },
//   { authorId: id(), content: 'Why must we fight so?', channelId: 3 },
//   { authorId: id(), content: 'I want to get tacos!', channelId: 4 },
//   { authorId: id(), content: 'I want to get salad!', channelId: 4 },
//   { authorId: id(), content: 'I want a taco salad!', channelId: 4 }
// ];

const seed = () =>
  Promise.all(products.map(product => 
    Products.create(product))
  )

//   .then(() =>
//   Promise.all(channels.map(channel =>
//     Channel.create(channel))
//   ))
//   .then(() =>
//   Promise.all(messages.map(message =>
//     Message.create(message))
//   )
// );

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
