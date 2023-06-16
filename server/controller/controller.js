function rGet(req, res) {
  res.render("../views/pagMain.ejs");
  // res.send("Esta haciendo get");
}
function rPut(req, res) {
  res.send("Esta haciendo Put");
}
function rPost(req, res) {
  res.send("Esta haciendo Post");
}
function rDelete(req, res) {
  res.send("Esta haciendo Delete");
}

module.exports = {
  rGet,
  rPost,
  rPut,
  rDelete,
};
