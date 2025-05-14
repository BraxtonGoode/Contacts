const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('Contacts').find();
  const contacts = await result.toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contacts);
};

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().collection('Contacts').find({ _id: contactId });
  const contact = await result.toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contact[0]);
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb.getDatabase().collection('Contacts').insertOne(contact);
  res.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json({ error: 'Could not create contact' });
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb
    .getDatabase()
    .collection('Contacts')
    .updateOne({ _id: contactId }, { $set: contact });
  res.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: 'Could not update contact' });
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().collection('Contacts').deleteOne({ _id: contactId });
  res.setHeader('Content-Type', 'application/json');
  if (result.acknowledged) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: 'Could not delete contact' });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
