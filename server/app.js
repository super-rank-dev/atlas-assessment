const express = require('express');
const bodyParser = require('body-parser');
const { Agent } = require('./model');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/agents', async (req, res, next) => {

  const {
    firstName,
    lastName,
    photoUrl,
    agentLicence,
    address,
    practiceAreas,
    aboutMe
  } = req.body;

  try {
    const agent = await Agent.create({
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe
    });

    res.status(201).json(agent);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
