require("./modules/express");
const { Person } = require("./person");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
//import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-HEaJEGJOckURgNrnSuiaUsuU",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = async () => await openai.listEngines();

console.log("Hello World!");
