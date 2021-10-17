module.exports = { run: function (app) {

    app.get("/", function(req, res) {
        res.render("intro");
    });

}}
