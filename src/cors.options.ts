import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// Configure CORS
export const corsOptions: CorsOptions = {
  origin: true, // Allow requests from all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};
