"use strict";


var database = {
  user = {
    ID: 1234,
    firstName: "Spencer",
    lastName: "Tranter",
    email: "spencertranter95@gmail.com",
    password: "password",
  },
  IOU = {
    title: 'movie ticket',
    description: 'whatever',
    dateCreated: 'Septemer 16, 2016',
    dateOwed: 'September 20, 2016',
    userID: 1234,
    friendID: 4321,
  },
  friend = {
    ID: 4321,
    email: "anthony@gmail.com",
    name: "Anthony"
  }
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
