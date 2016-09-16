exports.users = {
  {
    _id: 1,
    email: 'bruce@wayneindustries.com',
    firstName: 'Bruce',
    lastName: 'Wayne',
    password: '123batman'
  },
  {
    _id: 2,
    email: 'damian@wayneindustries.com',
    firstName: 'Damian',
    lastName: 'Wayne',
    password: 'NotBatman'
  }
}

exports.iou = {
  {
    _id: 1,
    userID: 1,
    friendID: 1,
    title: 'Pizza Money',
    description: 'I bought the last pizza',
    dateCreated: '2016-05-06',
    dateDue: '2016-12-05'
  },
  {
    _id: 2,
    userID: 1,
    friendID: 2,
    title: 'Movie Money',
    description: 'I bought the movie tickets',
    dateCreated: '2016-09-15',
    dateDue: '2016-09-20'
  }
}

exports.friends = {
  {
    _id: 1,
    userID: 1,
    email: 'joker@batmanvillains.com',
    name: 'The Joker',
  },
  {
    _id: 2,
    userID: 2,
    email: 'selina@somesite.com',
    name: 'Selina Kyle',
  }
}