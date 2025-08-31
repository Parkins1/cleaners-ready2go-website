import type { Request, Response } from "express";
import { z } from "zod";
import { insertBlogPostSchema } from "../../shared/schema.js";
import type { IStorage } from "../repositories/index.js";
import { createBlogPost, getBlogPosts, getBlogPostBySlug } from "../services/blogService.js";

export const postBlog = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const validated = insertBlogPostSchema.parse(req.body);
    const blogPost = await createBlogPost(repo, validated);
    res.json({ success: true, blogPost });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export const listBlogs = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const published = req.query.published === "true";
    const posts = await getBlogPosts(repo, published);
    res.json(posts);
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getBlogBySlug = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const post = await getBlogPostBySlug(repo, req.params.slug);
    if (!post) {
      res.status(404).json({ success: false, message: "Blog post not found" });
      return;
    }
    res.json(post);
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
