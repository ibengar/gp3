# open-ai-api

Simple API for OpenAI API using Express.js

## What is the point of this?
At the time of writing, OpenAI has a very limited API. This API is a simple wrapper around the OpenAI API that allows you to make requests to the OpenAI API from the browser. Furthermore the way that OpenAI handles their models are somewhat confusing to someone who doesn't have alot of experience. Therefore this project is a simple way to get started with OpenAI with all the boilerplate and model configuration already done for you. :)


## Installation

```bash
git clone https://github.com/BenSimmers/open-ai-api.git
```

```bash
cd open-ai-api
```

```bash
npm install
```

## Usage

```bash
npm start
```

## Environment Variables

```bash
API_KEY=your_api_key
```

## Endpoints

### GET /users/completions/:prompt

This endpoint returns a completion for a given prompt. The prompt is passed as a parameter in the URL.


```bash
http://localhost:3000/users/completions/hello%20world%20in%20python
```
returns
```json
{
  "id": "cmpl-6bNeAYQTnOdaeb7cqg0bkx7Z95czD",
  "object": "text_completion",
  "created": 1674367054,
  "model": "text-davinci-001",
  "choices": [
      {
      "text": "\n\nprint(\"Hello, world!\")",
      "index": 0,
      "logprobs": null,
      "finish_reason": "stop"
      }
  ],
  "usage": {
    "prompt_tokens": 4,
    "completion_tokens": 9,
    "total_tokens": 13
  }
}
```
