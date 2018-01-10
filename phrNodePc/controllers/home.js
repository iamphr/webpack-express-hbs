const renderHome = (req,res) => {
  // res.send(123)
  // console.log(res)
  res.render('index', {
    layout: 'main.hbs',
    title: '好像不行 ',

  });
}
module.exports = renderHome;