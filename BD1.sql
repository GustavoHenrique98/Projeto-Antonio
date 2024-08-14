create database plataforma_login;
-- drop database plataforma_login;
use plataforma_login;

create table usuarios(
    ID int primary key not null auto_increment,
    username varchar(200),
    password varchar(200)
);

select * from usuarios;