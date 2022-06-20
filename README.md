# NFT Marketplace

This is the frontend part of NFT Marketplace project, using TheGraph indexer.

### Run the project

/!\ You'll first need to reate a subgraph on [Thegraph.com](https://thegraph.com) then follow the given documentation instructions

```bash
yarn install # Install dependencies
cp .env.example .env # Create your .env file
yarn dev # Start local server
yarn moralis:sync # Connect local devchain to Moralis
node watchEvents.ts # Sync smart contract events with Moralis database
yarn moralis:cloud # Create cloud functions to update Moralis database when receiving events
```
