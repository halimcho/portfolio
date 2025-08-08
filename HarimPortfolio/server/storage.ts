import { type User, type InsertUser, type Contact, type InsertContact, type GitHubRepo, type InsertGitHubRepo } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getGitHubRepos(): Promise<GitHubRepo[]>;
  createGitHubRepo(repo: InsertGitHubRepo): Promise<GitHubRepo>;
  clearGitHubRepos(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private githubRepos: Map<string, GitHubRepo>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.githubRepos = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      subject: insertContact.subject || null,
      id, 
      created_at: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getGitHubRepos(): Promise<GitHubRepo[]> {
    return Array.from(this.githubRepos.values());
  }

  async createGitHubRepo(insertRepo: InsertGitHubRepo): Promise<GitHubRepo> {
    const id = randomUUID();
    const repo: GitHubRepo = { 
      ...insertRepo,
      description: insertRepo.description || null,
      language: insertRepo.language || null,
      stars: insertRepo.stars || null,
      forks: insertRepo.forks || null,
      updated_at: insertRepo.updated_at || null,
      id 
    };
    this.githubRepos.set(id, repo);
    return repo;
  }

  async clearGitHubRepos(): Promise<void> {
    this.githubRepos.clear();
  }
}

export const storage = new MemStorage();
