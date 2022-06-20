# NFT Marketplace 

This is the frontend part of NFT Marketplace project, using Moralis indexer.

> Moralis comes with more features than just indexing data compared to The Graph. It provides a single workflow for building high performance dapps. But in a more centralized way...

### Run the project

Note: You'll first need to create a Dapp on [Moralis](https://admin.moralis.io/dapps). Then just follow the [documentation](https://docs.moralis.io/moralis-dapp/getting-started/create-a-moralis-dapp) in order to setup everything.


```bash
yarn install # Install dependencies
cp .env.example .env # Create your .env file
yarn dev # Start local server
yarn moralis:sync # Connect local devchain to Moralis
node watchEvents.ts # Sync smart contract events with Moralis database
yarn moralis:cloud # Create cloud functions to update Moralis database when receiving events
```
