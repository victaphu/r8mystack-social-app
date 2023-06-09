# Serverless AWS Lambda function for Tiktok and Instagram APIs
For the Chainlink 2023 Hackathon

The purpose of this tool is to abstract away the data retrieval across various social media platforms.
It retrieves likes from Instagram and Tiktok.

For the hackathon this is a stub to demonstrate the chainlink functions and uses authorisation API (private routes) 
which callers must provide x-api-key (we couldn't get approval for the developer keys in time!)

For future integrations this would do two things:
1. user approves access to Instagram and Tiktok as an app
2. using the endpoints and the various registered posts we would call instagram/tiktok for the likes
3. return the aggregate likes back to the chainlink function for further processing

