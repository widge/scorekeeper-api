CREATE TABLE participants (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255) NOT NULL
);

CREATE TABLE tournaments  (
  ID SERIAL PRIMARY KEY,
  tournament_date date NOT NULL,
  event SMALLINT NOT NULL,
  participant SMALLINT NOT NULL,
  score INT NOT NULL

);

CREATE DATABASE scorekeeper_api;