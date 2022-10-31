const mainDiv$$ = document.querySelector(".container");

const getFiles = () => {
    fetch("http://localhost:3000/files")
      .then((res) => res.json())
      .then((files) => print(files));
};

const print = (files) => {
    mainDiv$$.textContent = ""

    const ul$$ = document.querySelector("ul")

    for (const file of files) {
        const name$$ = document.createElement("h2");
        const description$$ = document.createElement("p");
        const type$$ = document.createElement("p");
        const route$$ = document.createElement("p");
        const img$$ = document.createElement("img");

        const nameSide$$ = document.createElement("button");

        nameSide$$.addEventListener("click", () => printOne(file))
    
        name$$.classList.add("name");
        name$$.textContent = "Name: " + file.name;
        nameSide$$.textContent = file.name;
        description$$.textContent = "Description: " + file.description;
        type$$.textContent = "Type: " + file.type;
        route$$.textContent = "Route: " + file.route;
        img$$.src = file.img;
    
        ul$$.appendChild(nameSide$$)

        mainDiv$$.appendChild(name$$);
        mainDiv$$.appendChild(type$$);
        mainDiv$$.appendChild(route$$);
        mainDiv$$.appendChild(description$$);
        mainDiv$$.appendChild(img$$);
      }
};

const printOne = (file) => {
    mainDiv$$.textContent = ""

    const name$$ = document.createElement("h2");
        const description$$ = document.createElement("p");
        const type$$ = document.createElement("p");
        const route$$ = document.createElement("p");
        const img$$ = document.createElement("img");
    
        name$$.classList.add("name");
        name$$.textContent = "Name: " + file.name;
        description$$.textContent = "Description: " + file.description;
        type$$.textContent = "Type: " + file.type;
        route$$.textContent = "Route: " + file.route;
        img$$.src = file.img;

        mainDiv$$.appendChild(name$$);
        mainDiv$$.appendChild(type$$);
        mainDiv$$.appendChild(route$$);
        mainDiv$$.appendChild(description$$);
        mainDiv$$.appendChild(img$$);

}

const createFile = () => {
    mainDiv$$.textContent = ""

    const name$$ = document.createElement("input");
    name$$.type = "text";
    const description$$ = document.createElement("input");
    description$$.type = "text";
    const type$$ = document.createElement("select");
    const route$$ = document.createElement("input");
    route$$.type = "text";
    const img$$ = document.createElement("input");
    img$$.type = "file";

    const data = {
        name: name$$.value,
        type: type$$.value,
        img: img$$.value,
        description: description$$.value,
        route: route$$.value,
    };

    const submit$$ = document.createElement("input");
    submit$$.type = "submit";
    submit$$.value = "Submit";
    submit$$.addEventListener("click", () => sendRequest("http://localhost:3000/files/create", "POST", data))

    name$$.placeholder = "Name"
    description$$.placeholder = "Description"
    route$$.placeholder = "Route"

    mainDiv$$.appendChild(name$$);
    mainDiv$$.appendChild(type$$);
    mainDiv$$.appendChild(route$$);
    mainDiv$$.appendChild(description$$);
    mainDiv$$.appendChild(img$$);
    mainDiv$$.appendChild(submit$$);

}

const updateFile = () => {
    mainDiv$$.textContent = ""
    
    const form$$ = document.createElement("form");
    form$$.method = "POST"
    
    const fileSelect$$ = document.createElement("select")
    fillSelect(fileSelect$$)
    mainDiv$$.appendChild(fileSelect$$)

    form$$.action = "http://localhost:3000/files/edit/" + fileSelect$$.value
    
    const name$$ = document.createElement("input");
    name$$.type = "text";
    const description$$ = document.createElement("input");
    description$$.type = "text";
    const type$$ = document.createElement("select");
    const route$$ = document.createElement("input");
    route$$.type = "text";
    const img$$ = document.createElement("input");
    img$$.type = "file";

    const submit$$ = document.createElement("input");
    submit$$.type = "submit";
    submit$$.value = "Submit";
    
    name$$.placeholder = "Name"
    description$$.placeholder = "Description"
    route$$.placeholder = "Route"
    
    form$$.appendChild(name$$);
    form$$.appendChild(type$$);
    form$$.appendChild(route$$);
    form$$.appendChild(description$$);
    form$$.appendChild(img$$);
    form$$.appendChild(submit$$);

    mainDiv$$.appendChild(form$$)
}

const deleteFile = () => {
    const button$$ = document.querySelector(".enviar");
}

const sendRequest = async (URL, method, data) => {

  const dataToSend = JSON.stringify(data);

  const response$$ = document.createElement("p");

  try {
    await fetch(URL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: dataToSend,
    });
    response$$.textContent = "THE REQUEST HAS BEEN PROCESSED SUCCESFULLY";
  } catch (error) {
    response$$.textContent = "THE REQUEST HAS BEEN REJECTED"
  }

  mainDiv$$.textContent = ""
  mainDiv$$.appendChild(response$$);
};

const fillSelect = (select) => {
    fetch("http://localhost:3000/files")
    .then((res) => res.json())
    .then((files) => {
        for (const file of files) {
            const option$$ = document.createElement("option")
            option$$.value = file.name
            option$$.textContent = file.name

            select.appendChild(option$$)
          }
    });
}
const main = () => {
    getFiles();
    
    const createButton$$ = document.querySelector(".create")
    const updateButton$$ = document.querySelector(".update")
    const deleteButton$$ = document.querySelector(".delete")

    createButton$$.addEventListener("click", () => createFile())
    updateButton$$.addEventListener("click", () => updateFile())
    deleteButton$$.addEventListener("click", () => deleteFile())
}

main()