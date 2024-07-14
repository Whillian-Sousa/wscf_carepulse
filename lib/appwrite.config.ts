import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6689e3290033f80d1bc0")
  .setKey(
    "68d848c2468777b41bc13f8e426c3a5f5d974fa896a1c2d30bff9e88ad5adc7705a902012d6edca85498615f39446639a848f77a6528c968f6897c946c79fef4ac8739010a985825179afc870ad2afd3e2395a181808529c877d6cdb9f7293071987b5bf652e5758c87be8812059c168e6eab1533ac9aa9cb5f666ef20167f18",
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
