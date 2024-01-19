-- Comando para a ciração da extensão UUID (Universal Unique ID) no PostgreSQL
create extension if not exists "uuid-ossp"

create table usuarios (
    id uuid primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
);