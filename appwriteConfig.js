import { Client, Storage, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Project ID from env

// Initialize Storage service
const storage = new Storage(client);

// Export storage and ID
export { storage, ID };
