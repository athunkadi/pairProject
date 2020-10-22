const routerGame = require("./game");
const routerUser = require("./user");
const router = require("express").Router();
const session = require("express-session");
const { User } = require("../models");

router.use(
  session({
    secret: "nyanyikanlagunya",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

router.use((req, res, next) => {
  console.log("heelo");
  next();
});

const middleBridge = (req, res, next) => {
  console.log("heeloo");
  next();
};

router.get("/", middleBridge, (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.render("home", {
      username: req.session.username,
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  if (req.query.err) {
    res.render("login", {
      errorLogin: true,
    });
  } else {
    res.render("login", {
      errorLogin: false,
    });
  }
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
    .then((data) => {
      if (data === null) {
        res.redirect("/login?err=true");
      } else {
        req.session.isLoggedIn = true;
        req.session.username = data.username;

        res.redirect("/");
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.get("/logout", (req, res) => {
  res.redirect("/login");
});

router.use("/games", routerGame);
router.use("/users", routerUser);

module.exports = router;
