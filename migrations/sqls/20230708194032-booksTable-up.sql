create table books(

    id int primary key not null AUTO_INCREMENT,
    title varchar(100) not null,
    info text not null,
    imageUrl text not null,
    authorId int not null ,

    foreign key (authorId) references authors(id)

);
-- insert into books values(0,'wales','adventure','http...',1);
