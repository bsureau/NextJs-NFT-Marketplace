# NFT Marketplace 

This is the frontend part of NFT Marketplace project, using Moralis indexer.

### Run the project

```bash
yarn install # Install dependencies
cp .env.example .env # Create your .env file
yarn dev # Start local server
moralis:sync # Sync with Moralis server
node watchEvents.ts # Sync smart contract events with Moralis database
```
