fetch("https://api.escuelajs.co/api/v1/users", {})
  .then((res) => res.json())
  .then((data) => {
    let info = data;
    console.log(info);
    for (let i = 0; i < info.length; i++) {
      const all = info[i];
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      img.setAttribute("src", all.avatar);
      console.log(img.src);
    }
  });
