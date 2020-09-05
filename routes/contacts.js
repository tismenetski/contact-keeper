const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator'); //Changed from 'express-validator/check' since it was deprecated

//  Model
const Contact = require('../models/Contact');
const User = require('../models/User');

//  @router GET /api/contacts
//  @desc   Get all users contacts
//  @access Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

//  @router POST /api/contacts
//  @desc   Add new contact
//  @access Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please enter contact name').not().isEmpty(),
      check('email', 'Please enter contact email').not().isEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
);

//  @router PUT /api/contacts/:id
//  @desc   Update contact
//  @access Private
router.put('/:id', auth, async (req, res) => {
  res.send('Update contact');
});

//  @router DELETE /api/contacts/:id
//  @desc   Delete contact
//  @access Private
router.delete('/:id', auth, async (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
