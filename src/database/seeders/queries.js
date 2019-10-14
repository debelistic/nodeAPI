const {User, list} = require('../../models');


User.findAll({
  where: {username: 'varmer0'}, include: 'list'
})
  .then((varmerList) => {
    //console.log('VARMER LIST HERE \n', varmerList[0].dataValues.list[0].dataValues.item)
    const list = varmerList[0].dataValues.list
    console.log('\nVARMER LIST HERE', )
    list.forEach(list => {
      console.log(list.dataValues.item)
    });
  })
  .catch((error) => console.log(error))

  User.findAll({
    where: {username: 'stawton1'}, include: 'list'
  })
    .then((stawtonList) => {
      const list = stawtonList[0].dataValues.list
      console.log('\nSTAWTON LIST HERE',)
      list.forEach(list => {
        console.log(list.dataValues.item)
      });
    })
    .catch((error) => console.log(error))


// User.findByPk(2, {include: ['list']})
//   .then((stawton) => console.log('STAWTON LIST HERE \n', stawton))
//   .catch((error) => console.log(error))