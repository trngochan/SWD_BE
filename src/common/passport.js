const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const connection = require("./connect");

passport.use(
  new LocalStrategy((username, password, done) => {
    const query = "SELECT * FROM Member WHERE email = ? AND password = ?";

    connection.query(query, [username, password], (err, results) => {
      if (err) return done(err);

      if (results.length === 0) {
        return done(null, false, {
          message: "Incorrect email or password.",
        });
      }

      const user = results[0];
      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const query = "SELECT * FROM Member WHERE id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) return done(err);
    const user = results[0];
    done(null, user);
  });
});

module.exports = passport;
