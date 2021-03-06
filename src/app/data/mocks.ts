import { User } from '../model/user';

export const USER_DATA : User[] = [{
  firstName : "Bill",
  lastName : "Gates",
  dob : new Date("Dec 25, 1964"),
  isWorking : true,
  income : 50000,
  company : "Microsoft",
  image : 'assets/images/bill.jpg',
  vote : 120,
  contact_no :9876543321,
  comments : [{
      stars : 5,
      body : "I love Mr. Bill",
      author : "test@test.com"
  },{
    stars : 3,
    body : "I love Mr. Bill",
    author : "test@test.com"
}]
},{
  firstName : "Steve",
  lastName : "Jobs",
  dob : new Date("Dec 25, 1963"),
  isWorking : false,
  income : 0,
  company : "Apple",
  image : 'assets/images/steve.png',
  vote : 180,
  contact_no :9876543321,
  comments : [{
    stars : 5,
    body : "I love Mr. Steve",
    author : "test@test.com"
},{
  stars : 3,
  body : "I love Mr. Steve",
  author : "test@test.com"
}]
},{
  firstName : "Tim B.",
  lastName : "Lee",
  dob : new Date("Jan 25, 1964"),
  isWorking : true,
  income : 30000,
  company : "World Wide Web",
  image : 'assets/images/tim.jpg',
  vote : 150,
  contact_no :9876543321,
  comments : [{
    stars : 5,
    body : "I love Mr. Tim",
    author : "test@test.com"
    },{
    stars : 4,
    body : "I love Mr. Tim",
    author : "test@test.com"
    }]
}]