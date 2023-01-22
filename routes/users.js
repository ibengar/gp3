var express = require('express');
var router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
dotenv.config();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/completions/:prompt', async function(req, res, next) {
  let prompt = req.params.prompt;

  const configuration = new Configuration({
    apiKey: process.env.APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: prompt,
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.send(response.data);
});


router.get('/codex/:prompt', async function(req, res, next) {
  let prompt = req.params.prompt;

  const configuration = new Configuration({
    apiKey: process.env.APIKEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.send(response.data);


  });




module.exports = router;
