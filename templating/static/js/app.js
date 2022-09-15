const comments = document.querySelector(".js-comments");

const config = {
  headers: {
    Authorization: "Bearer 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",
  },
};

axios
  .get(
    "https://api.github.com/repos/tluhk/rif20-valikpraktika/issues/3/comments",
    config
  )
  .then((response) => {
    console.log(response.data);

    let html = "";
    response.data.forEach((element) => {
      html += `<p>${element.updated_at}</p><p>${element.body}</p><hr>`;
    });

    comments.innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });
