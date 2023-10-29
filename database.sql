CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE users (
    user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    watchlist_items INT DEFAULT 0 NOT NULL
);


