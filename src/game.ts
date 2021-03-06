class Game {
    private ui: UI;
    private gameLeader: GameLeader;
    constructor() {
        this.ui = new UI();
        this.gameLeader = new GameLeader();
        document.getElementById("app")?.appendChild(this.ui.getElement());
        this.startGame();
    }

    public updateUI() {
        this.ui = new UI();
        const appDiv = document.getElementById("app");
        
        if (appDiv) {
            appDiv.innerHTML = '';
            appDiv.appendChild(this.ui.getElement());
        }
    }

    private startGame() {
        this.gameLeader.startGame();
        appState.addPlayer(new HumanPlayer());
        appState.addPlayer(new BotPlayerDumb());
        appState.addPlayer(new BotPlayerSmart());
    }

    public handleUserGuess(value: number) {
        this.gameLeader.handleUserGuess(value);
    }
}
