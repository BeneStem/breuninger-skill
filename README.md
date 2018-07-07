# breuninger-skill

> "TODO" - Someone Nice

Give breuninger a voice.

## Setup

Install and setup ask:

https://www.npmjs.com/package/ask-cli

    $ yarn global add ask-cli
    $ ask init

Install dependencies:

    $ yarn install
    $ yarn setup

## Build

    $ yarn build

## Deploy

    $ yarn deploy

## Dependency Update

    $ yarn upgrade && yarn upgrade-interactive
    $ cd src && yarn upgrade && yarn upgrade-interactive

## Make simple Intent/Handler

You can simply make intent/handler as much as you want by creating corresponding json files in *intents* directory as the following format:

```
{
    "intent_name": "Plan",
    "utterances": [
        "plannen",
        "plan"
    ],
    "response_sentence": "Planung ist immer gut."
}
```

- *intent_name* should start with uppercase.

- *utterances* is array.

- *response_sentence* is variable.

After creating json files, your can execute the command below as the last step:

    $ ./make_intent
    
You can also update intent/handler by running the command above again after modifying json files.
