import { Client } from "pg";
import express from "express";
import "dotenv/config";

const pgClientString = process.env.DATABASE_URL;

if(!pgClientString){
    throw new Error("NO DATABASE URL FOUND");
}

const app = express();

const pgClient = new Client(pgClientString);

