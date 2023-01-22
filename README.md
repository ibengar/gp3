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


### GET /users/codex/:prompt

This endpoint returns a codex completion for a given prompt. The prompt is passed as a parameter in the URL. This model is trained on code examples from GitHub.

```bash
http://localhost:3000/users/codex/def%20hello%20world%20%28%29%3A
```
returns
```json
{
  "id": "cmpl-6bTxldE3sp9uFJsBX2m8GZo5sAt13",
  "object": "text_completion",
  "created": 1674391333,
  "model": "text-davinci-003",
  "choices": [
    {
    "text": "\n\nBubble Sort:\n\n1. Start looping from with a variable called i the end of the array towards the beginning \n2. Start an inner loop with a variable called j from the beginning     until   i-1 \n3. If arr[j] is greater than arr[j+1], swap those two values \n4. Continue until i and j are at the beginning of the array \n5. Repeat this process until the array is sorted\n\n//     Pseudocode  \n\nfunction bubbleSort(array) {\n  for (let i = array.length; i > 0; i--) {\n    for (let j = 0; j < i - 1; j++) {\n      if (array[j] > array[j + 1]) {\n        let temp = array[j];   \n          array[j] = array[j + 1];\n        array[j + 1] = temp;\n      }\n    }\n  }\n  return array;\n}",
    "index": 0,
    "logprobs": null,
    "finish_reason": "stop"
  }
  ],
  "usage": {
    "prompt_tokens": 4,
    "completion_tokens": 217,
    "total_tokens": 221
  }
}
```