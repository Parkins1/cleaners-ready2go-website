import type { IStorage } from "../repositories/index.js";
import type { InsertBlogPost } from "@shared/schema";

export async function createBlogPost(repo: IStorage, data: InsertBlogPost) {
  return repo.createBlogPost(data);
}

export async function getBlogPosts(repo: IStorage, publishedOnly?: boolean) {
  return repo.getBlogPosts(publishedOnly);
}

export async function getBlogPostBySlug(repo: IStorage, slug: string) {
  return repo.getBlogPostBySlug(slug);
}

