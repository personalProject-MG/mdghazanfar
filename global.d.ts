import { MongoClient } from 'mongodb';

/* eslint-disable no-var */
declare global {
  // Declare the property on the global object
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export { };
