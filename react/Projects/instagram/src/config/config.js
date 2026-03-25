const config = {
    AppwriteApiUrl: String( import.meta.env.VITE_APPWRITE_API_URL),
    AppWriteProjectId: String( import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppWriteDatabaseId: String( import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppWriteBucketId: String( import.meta.env.VITE_APPWRITE_BUCKET_ID),
    AppWriteCollectionId: String( import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}

export default config;