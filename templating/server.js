const express = require("express");
const path = require("path");
const axios = require("axios").default;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static("static"));

app.get("/", (req, res) => {
  const config = {
    headers: {
      Authorization: "Bearer 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",
    },
  };

  axios
    .get(
      "https://api.github.com/repos/tluhk/rif20-valikpraktika/issues",
      config
    )
    .then((response) => {
      var resp = response.data.map((elem) => {
        return {
          id: elem.number,
          title: elem.title,
          comments_count: elem.comments,
        };
      });

      res.render("pages/index", { persons: resp });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/details", (req, res) => {
  const data = {
    comments: [
      {
        date: "15.04.2022",
        text: "Lorem lorem",
      },
      {
        date: "12.04.2022",
        text: "Lorem lorem",
      },
      {
        date: "10.04.2022",
        text: "Lorem lorem",
      },
    ],
  };

  res.render("pages/details", data);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
