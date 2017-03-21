const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-angular-simple-journal');

const Journal = require('../models/journal-entry.js');

const journals = [
{
  date: new Date(),
  title: 'Cheater5',
  content: 'duck diving rows of white water wall explosive keyhole rights pose on the nose. Shredded dry hair feathered fair-good Snapper Rocks A frames slabbing. Barrels standing tall standing tall white wash hot glass good wave tail click wave, ripping the pitch'

},

{
  date: new Date(),
  title: 'Pearl',
  content: 'l inner bar late drop whitewater deadly wax pounding lefts. Paddle so pitted water crumble short period vertical hook.'
},
{
  date: new Date(),
  title: 'Bottom Turn',
  content: 'Open face squirt whitewash transition snap shoulder high forehand hook hallow lull in the swell! Stall spittin skegs pigdog radical. Squirt speed hack psyched, shorebreak'
},

];

Journal.create(journals, (err, docs) => {
  if (err) {
    throw(err);
  }
  docs.forEach((onedoc) => {
    console.log(`${onedoc.title}`);
  });
  mongoose.disconnect();
});
