const { User } = require('../../models');

User.bulkCreate([
  {username: 'varmer0', password: 'zJEK1BBsB',budget: 2814},
  {username: 'stawton1',password: '7WKeBn',budget: 336},
  {username: 'pduffree2',password: 'IjxGJjgryX',budget: 2355},
  {username: 'gpesticcio3',password: 'GlcxJPr5i',budget: 2652},
  {username: 'akleinhausen4',password: 'qHHmBIfzJ9kq',budget: 1482}
])
.then((newUsers) => {
  console.log(newUsers)
})
.catch((error) => {
  console.log(error)
})