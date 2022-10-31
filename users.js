const mainDiv$$ = document.querySelector(".container");

const getFiles = () => {
    fetch("http://localhost:3000/users")
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
        name$$.textContent = file.name;
        nameSide$$.textContent = file.name;
        description$$.textContent = file.description;
        type$$.textContent = file.type;
        route$$.textContent = file.route;
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
        name$$.textContent = file.name;
        description$$.textContent = file.description;
        type$$.textContent = file.type;
        route$$.textContent = file.route;
        img$$.src = file.img;

        mainDiv$$.appendChild(name$$);
        mainDiv$$.appendChild(type$$);
        mainDiv$$.appendChild(route$$);
        mainDiv$$.appendChild(description$$);
        mainDiv$$.appendChild(img$$);

}

getFiles();
