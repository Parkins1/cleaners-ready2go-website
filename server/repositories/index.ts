// Repository abstraction
// Re-export the in-memory storage implementing IStorage.
import { storage, type IStorage } from "../storage.js";

export { storage };
export type { IStorage };

