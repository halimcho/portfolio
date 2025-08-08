import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub repositories endpoint
  app.get("/api/github/repos", async (req, res) => {
    try {
      const githubUsername = process.env.GITHUB_USERNAME || "halimcho";
      const githubToken = process.env.GITHUB_TOKEN;
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website'
      };
      
      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
      }
      
      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`, {
        headers
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`);
      }
      
      const repos = await response.json();
      
      // Clear existing repos and store new ones
      await storage.clearGitHubRepos();
      
      const storedRepos = await Promise.all(
        repos.map(async (repo: any) => {
          return storage.createGitHubRepo({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated_at: repo.updated_at,
            html_url: repo.html_url
          });
        })
      );
      
      res.json(storedRepos);
    } catch (error) {
      console.error('GitHub API error:', error);
      res.status(500).json({ 
        message: "Failed to fetch GitHub repositories",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ 
        message: "Contact form submitted successfully", 
        contact: { id: contact.id } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit contact form",
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }
  });

  // Kakao Map API endpoint for location services
  app.get("/api/kakao/location", async (req, res) => {
    try {
      const { lat, lng } = req.query;
      const kakaoApiKey = process.env.KAKAO_API_KEY || "efe45bd0fb232c98afd3a547dc360d84";
      
      if (!lat || !lng) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
      }
      
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          headers: {
            'Authorization': `KakaoAK ${kakaoApiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Kakao API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Kakao API error:', error);
      res.status(500).json({ 
        message: "Failed to get location information",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
