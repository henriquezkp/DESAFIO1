export class Jogo {
    constructor(jogo) {
        this.nome = jogo.game;
        this.imagem = jogo.picture;
        this.classificacao = jogo.classificacao;
        this.genero = jogo.gender;
        this.produtora = jogo.produtora;
        this.plataforma = jogo.plataforma;
        this.video = jogo.video;
        this.resumo = jogo.resumo;
    }
    mostraCard() {
        return `
        <div class="col-md-5 col-md-offset-1 demo-card">
            <a data-id="${this.nome}" href="#" class="card-link compra" data-toggle="modal" data-target="#staticBackdrop">
                <div class="overlay light">
                    <p class="name light"><span class="colored-light">${this.nome}</p>
                </div>
                <img src="${this.imagem}" class="games img-responsive" alt="thumbnail">
            </a>
        </div>

        `;
    }

    rentCard() {
        return `hahaha
        <div id="tetetetetete">
        <!-------------------- IMAGEM E VIDEO -------------------->
        <section id="video">
            <div class="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${this.imagem}">
                        </div>
                        <div class="carousel-item">
                            <div class="position-relative video-desktop">
                                <video autoplay playsinline muted loop>
                                    <source src="${this.video}" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        <!-------------------- Informações -------------------->
        <section id="informacoes">
            <div class="card card text-warning  bg-dark">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${this.imagem}" class="card-img" alt="${this.nome}">
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <h1 class="card-title-games">
                            ${this.nome}
                            </h1>
                            <p class="classicacao">
                            ${this.classificacao}
                            </p>
                            <p class="genero">
                            ${this.genero}

                            </p>
                            
                            <p class="plataformas">
                            ${this.plataforma}
                            </p>
                            <p class="card-text">
                            ${this.resumo}
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 text-white">
                        <h3 class="valor">R$ 200+</h3>
                        <button class="btn btn-success col-md-4" type="button">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `;
    }
}