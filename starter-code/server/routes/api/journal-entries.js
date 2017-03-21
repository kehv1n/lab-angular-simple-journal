const express       = require('express');
const router        = express.Router();
const mongoose = require('mongoose');

const Journal       = require('../../models/journal-entry.js');



router.get('/journals', (req, res, next) => {
  Journal.find((err, journalList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(journalList);
  });
});

router.post('/journals', (req, res, next) => {
  const theJournal = new Journal({
    date: req.body.date,
    title: req.body.title,
    content: req.body.content
  });

  theJournal.save((err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
    message: 'Journal Created',
    id: theJournal._id
    });
  });
});

router.get('/journals/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json( { message: 'Specified id is not valid' } );
    return;
  }
  Journal.findById(req.params.id, (err, theJournal) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(theJournal);
  });
});


module.exports = router;
