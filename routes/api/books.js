const router = require("express").Router();
const db = require("../../models");


const findAll= function(req, res) {
  db.Book.find(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
const findById= function(req, res) {
  db.Book.findById(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
const create= function(req, res) {
  db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
const update= function(req, res) {
  db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
const remove= function(req, res) {
  db.Book.findById(req.params.id)
    .then(dbBook => dbBook.remove())
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
// Matches with "/api/books"
router.route("/")
  .get(findAll)
  .post(create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(findById)
  .put(update)
  .delete(remove);

module.exports = router;
