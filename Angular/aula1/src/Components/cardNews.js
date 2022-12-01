class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        //div.card
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //div.cardleft
        const cardLeft = document.createElement("div");

        //incluir a class no elemento div.
        cardLeft.setAttribute("class", "cardleft");

        //incluir os elementos filhos na div.cardleft
        const autor = document.createElement("p");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        //Conteúdos. O || é para quando não tem autor na HTML ele coloca Anonymous
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")
        newsContent.textContent = this.getAttribute("content");

        //pendurar os elementos filhos na div.cardleft
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //div.cardright
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardright");

        //incluir o elemento filho na div.cardleft
        const newsImage = document.createElement("img");

        //Conteúdo da Imagem ||(ou) uma imagem Default.
        newsImage.src = this.getAttribute("photo") || "./assets/default-image.png";
        newsImage.alt = "Foto da Noticia"

        //pendurar o elemento filho na div.cardright
        cardRight.appendChild(newsImage);

        //pedurar a div dos cards left e right (filho) na div.card
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");

        style.textContent = `
        .card {
            width: 90%;
            box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 15px;
            padding: 15px;
            align-items: center;
        }
        
        span {
            font-size: .825rem;
        }
        
        a {
            font-size: 1.7rem;
            text-decoration: none;
            color: black;
            font-weight: 600;
        }
        
        p {
            font-size: .9rem;
        }
        
        .cardleft {
            padding-right: 2px;
        }
        
        .cardright img {
            height: 260px;
        }
        `

        return style;
    }
}

customElements.define("card-news", CardNews)