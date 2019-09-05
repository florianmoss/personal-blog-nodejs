module.exports = (req, res) => {
  console.log('session destroyed')
  req.session.destroy(() => {
    res.redirect('/');
  })
}