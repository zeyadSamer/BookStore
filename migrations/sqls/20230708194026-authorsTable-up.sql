create table authors(
    id int primary key not null AUTO_INCREMENT,
    email varchar(50) unique not null,
    fullName varchar(100) not null,
    bio text not null
  

)

insert into authors values(

    0,
    'zeyad@mail.com',
    'zeyad ahmed',
    'engineer'





);

