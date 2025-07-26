import mongoose from "mongoose";
import "dotenv/config"

/**
 * DatabaseService class for managing MongoDB connections using Mongoose
 * 
 * This service provides a singleton-like pattern for database connections,
 * ensuring only one connection is maintained throughout the application lifecycle.
 * 
 * @class DatabaseService
 * @example
 * const dbService = new DatabaseService();
 * await dbService.connect();
 * 
 * if (dbService.isConnected()) {
 *   console.log('Database is ready');
 * }
 * 
 * await dbService.disconnect();
 */

class DatabaseService {

    constructor() {
        this.connection = null
    }

    async connect() {
        try {
            if (this.connection) return this.connection

            // Connection configuration options
            const options = {
                maxPoolSize: 10,                    // Maximum number of connections in pool
                serverSelectionTimeoutMS: 5000,     // Time to wait for server selection (5s)
                socketTimeoutMS: 45000              // Time to wait for socket operations (45s)
            }

            this.connection = await mongoose.connect(process.env.MONGODB_URI, options)

            console.log(`MongoDB connected: ${this.connection.connection.host}`)

            return this.connection
        } catch (error) {
            console.log(`Database connection failed: ${error}`)
            throw error
        }
    }

    async disconnect() {
        if (this.connection) {
            await mongoose.connection.close()
            this.connection = null
            console.log("MongoDB connection closed")
        }
    }

    isConnected() {
        return mongoose.connection.readyState === 1
    }

}

export default DatabaseService