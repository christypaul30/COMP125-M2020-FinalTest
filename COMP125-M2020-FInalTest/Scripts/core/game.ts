let Game = (function(){
// Player name 
let player1 = "Player 1"; 
let player2 = "Player 2"; 

// Function to change the player name 
function editNames() { 
    player1 = prompt("Change Player1 name"); 
    player2 = prompt("Change player2 name"); 

    document.querySelector("p.Player1").innerHTML = player1; 
    document.querySelector("p.Player2").innerHTML = player2; 
} 

// Function to roll the dice 
function rollTheDice() { 
    setTimeout(function () { 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        document.querySelector(".1").setAttribute("src", 
            "dice" + randomNumber1 + ".png"); 

        document.querySelector(".2").setAttribute("src", 
            "dice" + randomNumber2 + ".png"); 

        if (randomNumber1 === randomNumber2) { 
            document.querySelector("h1").innerHTML = "Draw!"; 
        } 

        else if (randomNumber1 < randomNumber2) { 
            document.querySelector("h1").innerHTML 
                            = (player2 + " WINS!"); 
        } 

        else { 
            document.querySelector("h1").innerHTML 
                            = (player1 + " WINS!"); 
        } 
    }, 2500); 
} 
    // letiable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    
    let assets: createjs.LoadQueue;

    let exampleLabel: UIObjects.Label;
    let exampleButton: UIObjects.Button;    

    let assetManifest = 
    [
        {id:"1", src:"./Assets/images/1.png"},
        {id:"2", src:"./Assets/images/2.png"},
        {id:"3", src:"./Assets/images/3.png"},
        {id:"4", src:"./Assets/images/4.png"},
        {id:"5", src:"./Assets/images/5.png"},
        {id:"6", src:"./Assets/images/6.png"},
        {id:"backButton", src:"./Assets/images/startButton.png"},
        {id:"background", src:"./Assets/images/background.png"},
        {id:"blank", src:"./Assets/images/blank.png"},
        {id:"button", src:"./Assets/images/button.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"resetButton", src:"./Assets/images/resetButton.png"},
        {id:"rollButton", src:"./Assets/images/rollButton.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"startOverButton", src:"./Assets/images/startOverButton.png"}
    ];

    function Preload():void
    {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }

    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config

        Main();
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        stage.update();
    }

    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main():void
    {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");

        exampleLabel = new UIObjects.Label("An Example Label", "40px", "Consolas", "#000000", Config.Game.CENTER_X, Config.Game.CENTER_Y, true);
        stage.addChild(exampleLabel);

        exampleButton = new UIObjects.Button("button", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(exampleButton);

        exampleButton.on("click", ()=>{
            console.log("example button clicked");
        });
    }

    window.addEventListener('load', Preload);


})();