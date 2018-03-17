# A Simple BigQuery App using React and Express:

Most Viewed StackOverflow Questions

-----

This app is based on the Google BigQuery app tutorial [Create A Simple Application With the API](https://cloud.google.com/bigquery/create-simple-app-api#bigquery-simple-app-download-nodejs) and using [Google Cloud Public Dataset - Stack Overflow](https://cloud.google.com/bigquery/public-data/stackoverflow)

## Demo

![React-Bigquery-Demo](https://raw.githubusercontent.com/yihan-us/storage/master/react-bigquery-app.png)

## Install

- Clone this repository
- `npm install`

## Usage

### Include Google Cloud Credential on Environment Variable

Follow instructions on Google Cloud Platform to get application credential [application default credentials](https://cloud.google.com/docs/authentication/getting-started)

You can also create a `.env` file and set as below:

```javascript
GOOGLE_APPLICATION_CREDENTIALS = 'PATH/To/Your/JSON/Key/File'
```

### Start Express Server

node-bigquery:

```
npm start
```

### Start React Client

node-bigquery/client:

```
npm start
```
