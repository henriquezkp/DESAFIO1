export class Jogo {
    constructor(jogo) {
        this.nome = jogo.game;
        this.imagem = jogo.picture;
        this.classificacao = jogo.classificacao;
        this.genero = jogo.gender;
        this.produtora = jogo.produtora;
        this.plataforma = jogo.plataforma;
        this.video = jogo.video;
    }
    mostraCard() {
        return `
        <div data-name="${this.nome}" class="col-md-5 col-md-offset-1  demo-card">
            <a href="#" class="card-link compra" data-toggle="modal" data-target="#staticBackdrop">
                <div class="overlay light">
                    <p class="name light"><span class="colored-light">${this.nome}</p>
                </div>
                <img src="${this.imagem}" class="games img-responsive" alt="thumbnail">
            </a>
        </div>

        `;
    }
}