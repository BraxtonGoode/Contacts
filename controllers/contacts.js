const mongodb = require("../data/database.js");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection("Contacts").find();
    const contacts = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  };
  

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .collection("Contacts")
    .find({ _id: contactId });
    const contact = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contact[0]);
};

module.exports = {
  getAll,
  getSingle,
};
