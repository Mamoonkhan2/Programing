import { database, storage } from "./config";
import { ID } from "appwrite";

const DB_ID = "69ac0b050008d1438a14";
const POST_COLLECTION = "post";
const BUCKET_ID = "69ac0ce20036929480cb";
const BOOKMARK_COLLECTION = 'bookmarks';
class AppwriteService {
  
  async createPost(data) {
    return await database.createDocument(
      DB_ID,
      POST_COLLECTION,
      ID.unique(),
      data
    );
  }
  async  addBookmark(postId, userId) {
  return await database.createDocument(
    DB_ID,
    BOOKMARK_COLLECTION,
    ID.unique(),
    {
      userId,
      postId
    }
  );
}
async  removeBookmark(bookmarkId) {
  return await database.deleteDocument(
    DB_ID,
    BOOKMARK_COLLECTION,
    bookmarkId
  );
}

async  getUserBookmarks(userId) {
  return await database.listDocuments(
    DB_ID,
    BOOKMARK_COLLECTION,
    [database.query.equal("userId", userId)]
  );
}
  async getPosts() {
    return await database.listDocuments(DB_ID, POST_COLLECTION);
  }

  async updatePost(id, data) {
    return await database.updateDocument(DB_ID, POST_COLLECTION, id, data);
  }

  async deletePost(id) {
    return await database.deleteDocument(DB_ID, POST_COLLECTION, id);
  }

  async uploadFile(file) {
    return await storage.createFile(BUCKET_ID, ID.unique(), file);
  }
}

const service = new AppwriteService();
export default service;