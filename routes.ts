import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // The radio functionality will be handled entirely on the frontend
  // using the Radio Browser API directly from the client
  
  const httpServer = createServer(app);
  return httpServer;
}
