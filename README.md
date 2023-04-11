# AWS EC2 Task

## Introduction

We've managed to get our hands on a private AWS endpoint serving EC2 instances data of a secret organization. Your mission, should you choose to accept it, is to extract the data in a readable manner, so that our engineers can use it in their task. This involves the development of two functions: a small ETL and an API router (there is no need to implement the API itself).

## Implementation

I chose to implment it as an API with two endpoints, `list_instances` which is the ETL and `instance/:region` which will return the list of instances for a given region.

## Prerequsites

- Node.js(LTS preferably or v14+)
- Docker

## Running the server

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run with `npm start`

- By default the server will run on port 80, you can specify a different port by modifying .env file
## REST endpoints

### GET /list_instances

Serves as the ETL, reads the data from './data/regions.txt', fetched all the EC2 instances for each of the regions, sorts them by launch time, adds the time since launch and outputs as json files to ./data/'region'.json

Example using curl:

```
curl 'http://localhost/api/v1/list_instances'
```

### GET /instances/:region

Returns the EC2 instances from the generated list of instances for the provided region.

Example using curl:

```
curl 'http://localhost/api/v1/instances/us-east-1'
```

## Input

The input for the service is a regions text file that will be under ./data/regions.txt and include a list of regions seperated by comma

```
us-east-1, eu-west-1, ap-southeast-1
```
