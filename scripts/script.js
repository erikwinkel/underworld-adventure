window.addEventListener("DOMContentLoaded", () => {
    // 2d level array - X AND Y ARE REVERSED - testLevel[y][x] - y++ goes down - x++ goes right
    const testLevel1 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,2,3,2,2,2,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,1,0,5,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,5,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,7,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,7,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,7,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,4,0,1,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]


    const testLevel2 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,5,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,5,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,3,0,1,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
    
    const levelSources = [testLevel1,testLevel2]
    
    //key               0   1   2   3   4   5   6   7                            
    const levelKey =  [" ","#",".","<",">","g","¥","%"]
    //key for spritesheet
    const spriteKey = [1,827,291,292,1,28,123,141]
    const colorKey = ["","","","","","deepskyblue","darkseagreen","gold"]
        
//helper functions

    //converts an angle to one of the eight directions for movement
    function angleToDirection(angle){
        if(angle >= -22.5 && angle <= 22.5) {
            return "right"
        } else if(angle > 22.5 && angle <= 67.5) {
            return "down-right"
        } else if(angle > 67.5 && angle <= 112.5) {
            return "down"
        } else if(angle > 112.5 && angle <= 157.5) {
            return "down-left"
        } else if(angle > 157.5 || angle < -157.5) {
            return "left"
        } else if(angle < -22.5 && angle >= -67.5) {
            return "up-right"
        } else if(angle < -67.5 && angle >= -112.5) {
            return "up"
        } else if(angle <-112.5 && angle >= -157.5) {
            return "up-left"
        } else{
            return "error in angleToDirection()"
        }
    }
    //adds source string to target element, one char per ms
    function slowPrint(target, source, ms) {
        let i = 0
        let newMessage = ""
        let print = setInterval(() => {
            newMessage += source.charAt(i)
            target.innerText = newMessage
            i++
            if(i === source.length) {
                clearInterval(print)
            }
        },ms)
    }

    
    //start the game on the intro screen
    function gameIntro() {
        //show the welcome screen
        let welcomeScreen = document.querySelector(".welcome-screen")
        let gameScreen = document.querySelector(".game-container")
        welcomeScreen.style.display = "flex"
        const welcomeMessage = document.querySelector(".welcome-message")
        welcomeMessage.style.color = "white"
        //print the title
        slowPrint(welcomeMessage, "Welcome to Underworld Adventure", 100)
        setTimeout(() => {
            const inputContainer = document.querySelector(".start-input-container").style.visibility = "visible"
        }, 3500)
        const blink = setInterval(() => {
            const cursor = document.querySelector(".input-cursor")
            if(cursor.style.color === "white"){
                cursor.style.color = "black"
            }else {
                cursor.style.color = "white"
            }
        }, 500);
        const nameInput = document.querySelector(".name-input-field")
        let playerName = ""
        const typeName = (event) => {
            if(event.key === "Enter" && playerName.trim()){
                welcomeScreen.style.display = "none"
                gameScreen.style.display = "grid"
                document.removeEventListener("keydown", typeName)
                game(playerName)
            } else if(event.key === "Backspace"){
                playerName = playerName.substring(0, playerName.length-1)
            } else if(event.key.length === 1 && playerName.length < 24){
                playerName += event.key
            }
            nameInput.innerText = playerName
        }
        document.addEventListener("keydown", typeName)
        document.querySelector(".start-game").addEventListener("click", () => {
            if(playerName.trim()){
                welcomeScreen.style.display = "none"
                gameScreen.style.display = "grid"
                document.removeEventListener("keydown", typeName)
                game(playerName)
            }
        })
    }

    //display the game over window
    function gameOver(outcome){
        const gameOverDisplay = document.querySelector(".game-over")
        gameOverDisplay.style.display = "flex"
        const title = document.querySelector(".game-over-message")
        const result = document.querySelector(".result")
        switch (outcome){
            case "died":
                title.innerText = "Game Over"
                result.innerText = "You Died"
                break
            case "won":
                title.innerText = "Congratulations!"
                result.innerText = "You Won!"
                break
        }
        document.querySelector('.restart').addEventListener("click", () => {location.reload()})
    }

    //gameplay happens in this function
    function game(playerName) {        
        //load map from source into game state
        function loadLevel(levelSource) {  
            for(let y = 0; y < levelSource.length; y++){
                gameState.level.push([])
                gameState.ground.push([])
                gameState.entities.push([])
                gameState.explored.push([])
                for(let x = 0; x < levelSource[y].length; x++){
                    gameState.level[y].push(0)
                    gameState.ground[y].push(0)
                    gameState.entities[y].push(0)
                    gameState.explored[y].push(0)
                }
            }    
            for(let y = 0; y < levelSource.length; y++){
                for(let x = 0; x < levelSource[y].length; x++){
                    spawn = levelSource[y][x]
                    switch(spawn) {
                        case 1:
                            gameState.level[y][x] = new Wall(x,y)
                            break
                        case 2:
                            gameState.level[y][x] = new Floor(x,y)
                            break
                        case 3:
                            gameState.level[y][x] = new Stairs(x,y,"up")
                            gameState.entities[y][x] = player
                            player.x = x
                            player.y = y
                            break
                        case 4:
                            gameState.level[y][x] = new Stairs(x,y,"down")
                            break
                        case 5:
                            gameState.entities[y][x] = new Goblin(x,y)
                            break
                        case 6:
                            gameState.ground[y][x] = new Crown(x,y)
                            break
                        case 7:
                            gameState.ground[y][x] = new Potion(x,y)
                    }
                }
            }
        }
        
        //iterates through gameState arrays and returns combined array of values for rendering
        function mergeView() {
            //set view to level
            let view = gameState.level.map((row) => {
                return row.map((tile) => {
                    return tile
                })
            })
            //overwrite view tile if occupied by floor item or entity
            for(let i = 0; i < view.length; i++) {
                for(let j= 0; j < view[i].length; j++) {
                    if(gameState.entities[i][j]) {
                        view[i][j] = gameState.entities[i][j]
                    } else if(gameState.ground[i][j]) {
                        view[i][j] = gameState.ground[i][j]
                    }
                }
            }
            gameState.view = view
        }

        function getFOV() {
            let x = player.x
            let y = player.y
            //set up our math for each octant
            class OctantTransform {
                constructor(xx,xy,yx,yy){
                    this.xx = xx
                    this.xy = xy
                    this.yx = yx
                    this.yy = yy
                }
            }
            octantTransforms = [new OctantTransform(1,0,0,1),
                                new OctantTransform(0,1,1,0),
                                new OctantTransform(0,-1,1,0),
                                new OctantTransform(-1,0,0,1),
                                new OctantTransform(-1,0,0,-1),
                                new OctantTransform(0,-1,-1,0),
                                new OctantTransform(0,1,-1,0),
                                new OctantTransform(1,0,0,-1)]
            //hardcoded view distance - could change later
            viewDistance = 6.5
            //clear fov
            gameState.fov = gameState.view.map((row) => {
                return row.map((tile) => {
                    return 0
                })
            })
            //starting tile is always visible
            gameState.fov[y][x] = 1
            
            //check fov in a narrow range transformed by octant value
            function castLight(x,y,radius,startCol,leftViewSlope,rightViewSlope,transform) {
                let radiusSquared = radius * radius
                let prevWasBlocked = false;
                let savedRightSlope = -1
                //iterate over columns
                for(let currentCol = startCol; currentCol <= radius;currentCol++){
                    let xc = currentCol
                    //iterate down a column
                    for(let yc = currentCol; yc >= 0; yc--){
                        //switch from relative octant coords to true grid coords
                        gridX = x + xc * transform.xx + yc * transform.xy
                        gridY = y + xc * transform.yx + yc * transform.yy
                        //make sure we're inside the level
                        if(gridX < 0 || gridX >= gameState.fov[0].length || gridY < 0 || gridY >= gameState.fov.length){
                            continue
                        }
                        //get slopes to corners of current tile
                        let leftTileSlope = (yc + 0.5) / (xc - 0.5)
                        let rightTileSlope = (yc - 0.5) / (xc + 0.5)
                        if(rightTileSlope > leftViewSlope){
                            continue
                        } else if(leftTileSlope < rightViewSlope){
                            break
                        }

                        distanceSquared = xc * xc + yc * yc
                        if(distanceSquared <= radiusSquared){
                            gameState.fov[gridY][gridX] = 1
                        }
                        //check if current tile blocks LOS
                        curBlocked = gameState.level[gridY][gridX].blocksView
                        if(prevWasBlocked) {
                            if(curBlocked) {
                                savedRightSlope = rightTileSlope
                            } else {
                                prevWasBlocked = false
                                leftViewSlope = savedRightSlope
                            }
                        } else {
                            if(curBlocked) {
                                if(leftTileSlope <= leftViewSlope) {
                                    castLight(x,y,viewDistance,currentCol + 1,leftViewSlope,leftTileSlope,transform)
                                }
                                prevWasBlocked = true
                                savedRightSlope = rightTileSlope
                            }
                        }
                    }

                    if(prevWasBlocked){
                        break
                    }
                }
            }

            //check fov for each octant
            for(let i = 0; i < octantTransforms.length; i++){
                castLight(x,y,viewDistance,1,1.0,0.0,octantTransforms[i])
            }

            //updated explored mask to include new fov
            for(let i = 0; i < gameState.explored.length; i++) {
                for(let j = 0; j < gameState.explored[0].length; j++){
                    if(gameState.fov[i][j]){
                        gameState.explored[i][j] = 1
                    }
                }
            }
        }


        //renders array from combined view to play field by keys
        function render() {
            for(let i = 0; i < gameTiles.length; i++) {
                let y = Math.floor(i / gameState.view[0].length)
                let x = i % gameState.view[0].length
                if(gameState.view[y][x] && gameState.fov[y][x]){
                    let tileCode = gameState.view[y][x].tile
                    let color = gameState.view[y][x].color
                    let row = Math.floor(tileCode / 48)
                    let col = tileCode % 48 - 1
                    gameTiles.item(i).style.objectPosition = `-${col*16}px -${row*16}px`
                    gameTiles.item(i).style.backgroundColor = color
                } else if(gameState.explored[y][x] && gameState.level[y][x]){
                    let tileCode = gameState.level[y][x].tile
                    let row = Math.floor(tileCode / 48)
                    let col = tileCode % 48 - 1
                    gameTiles.item(i).style.objectPosition = `-${col*16}px -${row*16}px`
                    gameTiles.item(i).style.backgroundColor = "dimgray"
                }
                else{
                    gameTiles.item(i).style.objectPosition = `0 0`
                    gameTiles.item(i).style.backgroundColor = "white"
                }
            }
        }
        
        //after handling player input and actions, call advanceTurn
        //handles enemy actions and other between turn events, calls mergeView and render
        function advanceTurn() {
            if(gameState.ground[player.y][player.x] instanceof Item){
                addEvent(`On the ground, you see ${gameState.ground[player.y][player.x].description}`)
            }
            //enemy stuff happens here
            gameState.entities.forEach((row) => {
                row.forEach((entity) => {
                    if(entity instanceof Actor && !(entity instanceof Player)){
                        entity.act()
                    }
                })
            })
            turnCounter++
            updateUI()
            mergeView()
            getFOV()
            render()
        }
        
        //check if the player has won
        function checkWin(){
            if(player.hasTreasure){
                endGame('won')
            } else {
                addEvent("You can't leave without the treasure")
            }
        }

        //
        function checkLOS(x1,y1,x2,y2){

        }


        class Entity {
            constructor(x,y,collision) {
                this.x = x
                this.y = y
                this.tile = 1
                this.color = "white"
                this.ascii = " "
                this.collision = collision
                this.blocksView = false
            }
        }
        
        class Wall extends Entity {
            constructor(x,y) {
                super(x,y,true)
                this.tile = 827
                this.blocksView = true
                this.color = "white"
            }
        }
        
        class Floor extends Entity{
            constructor(x,y) {
                super(x,y,false)
                this.tile = 1
                this.color = "white"
            }
        }

        class Stairs extends Entity{
            constructor(x,y,direction){
                super(x,y,false)
                this.direction = direction
                if(direction === "up"){
                    this.tile = 291
                } else {
                    this.tile = 292
                }
            }
        }

        class Item extends Entity{
            constructor(x,y){
                super(x,y,false)
                this.tile = 1
                this.description = "an item"
            }
        }

        class Crown extends Item{
            constructor(x,y) {
                super(x,y)
                this.tile = 141
                this.color = "gold"
                this.description = "the Crown"
            }
        }

        class Potion extends Item{
            constructor(x,y){
                super(x,y)
                this.tile = 946
                this.color = "tomato"
                this.healing = 5
                this.description = "a health potion"
            }
        }
        //Actor class extended to player and enemies
        class Actor extends Entity {
            constructor(x,y,hitPoints) {
                super(x,y,true)
                this.hitPoints = hitPoints
                this.maxHitPoints = hitPoints
                this.damageRoll = 0
            }

            //check if actor would collide with object in target x,y
            checkCollision(x,y) {
                if(gameState.level[y][x] && gameState.level[y][x].collision) {
                    return true
                } else if(gameState.entities[y][x] && gameState.entities[y][x].collision) {
                    return true
                }
                else return false
            }

            //try to move in a direction, checking for collison and either invoke move() or bump()
            tryMove(direction) {
                let targetX = 0
                let targetY = 0
                switch(direction){
                    case "up-left":
                        targetX = this.x - 1
                        targetY = this.y - 1
                        break;
                    case "up":
                        targetX = this.x
                        targetY = this.y - 1
                        break;
                    case "up-right":
                        targetX = this.x + 1
                        targetY = this.y - 1
                        break;
                    case "left":
                        targetX = this.x - 1
                        targetY = this.y
                        break;
                    case "right":
                        targetX = this.x + 1
                        targetY = this.y
                        break;
                    case "down-left":
                        targetX = this.x - 1
                        targetY = this.y + 1
                        break;
                    case "down":
                        targetX = this.x
                        targetY = this.y + 1
                        break;
                    case "down-right":
                        targetX = this.x + 1
                        targetY = this.y + 1
                        break;
                    default:
                        console.log("error: not a valid move direction")
                        break;
                }
                if(this.checkCollision(targetX,targetY)) {    
                    this.bump(gameState.entities[targetY][targetX])
                } else {
                    this.move(targetX,targetY)
                }
            }
            
            //move actor to target coordinates
            move(x,y) {
                gameState.entities[y][x] = gameState.entities[this.y][this.x]
                gameState.entities[this.y][this.x] = 0
                this.x = x
                this.y = y
            }

            bump(target) {
                return false
            }

            takeDamage(damage) {
                this.hitPoints -= damage
                if(this.hitPoints <= 0) {
                    this.die()
                }
            }

            attack(target) {
                let damage = Math.floor(Math.random()*this.damageRoll)+1
                target.takeDamage(damage)
            }

            die() {
                gameState.entities[this.y][this.x] = 0
            }
        }

        //class for player object - create in game() set pos in loadLevel()
        class Player extends Actor {
            constructor(x,y,hitPoints,name) {
                super(x,y,hitPoints)
                this.name = name
                this.tile = 28
                this.color = "deepskyblue"
                this.renderValue = 5
                this.damageRoll = 6
                this.inventory = []
                this.potions = 0
                this.hasTreasure = false 
            }

            pickup() {
                if(gameState.ground[player.y][player.x] instanceof Item){
                    if(this.inventory.length < 10){
                        addEvent(`You pick up ${gameState.ground[player.y][player.x].description}`)
                        this.inventory.push(gameState.ground[player.y][player.x])
                        if(gameState.ground[player.y][player.x] instanceof Potion){
                            this.potions++
                        }
                        if(gameState.ground[player.y][player.x] instanceof Crown){
                            this.hasTreasure = true
                        }
                        gameState.ground[player.y][player.x] = 0
                    } else {
                        addEvent("You are carrying too much")
                    }
                }
                
            }

            bump(target) {
                if(target){
                    this.attack(target)
                } else{
                    addEvent("Ouch, you bump into something!")
                }
            }

            attack(target) {
                if(target instanceof Goblin) {
                    let damage = Math.floor(Math.random()*this.damageRoll)+1
                    addEvent(`You attack the goblin for ${damage}hp`)
                    target.takeDamage(damage)
                }
            }

            heal(hp) {
                if(this.hitPoints + hp > this.maxHitPoints) {
                    addEvent(`You heal ${this.maxHitPoints - this.hitPoints}hp`)
                    this.hitPoints = this.maxHitPoints
                } else {
                    this.hitPoints += hp
                    addEvent(`You heal ${hp}hp`)
                }
            }

            die() {
                addEvent("You Died")
                endGame("died")
            }

            drinkPotion() {
                let i = 0
                let drank = false
                while(i < this.inventory.length){
                    if(this.inventory[i] instanceof Potion) {
                        addEvent("You drink a potion")
                        this.heal(this.inventory[i].healing)
                        this.inventory.splice(i,1)
                        this.potions--
                        drank = true
                        break
                    }
                    i++
                }
                if(!drank){
                    addEvent("You have no potions to drink")
                }
            }

            takeStairs(direction){
                let currentTile = gameState.level[player.y][player.x]
                if(currentTile.direction === direction){
                    if(direction === "up"){
                        changeFloors(currentFloor-1)
                        console.log("stairs up, current floor: " + currentFloor)
                    } else if(direction === "down"){
                        changeFloors(currentFloor+1)
                        console.log("stairs down, current floor: " + currentFloor)
                    }
                }
            }
        }

        //goblin - basic enemy - spawn on 4 by loadLevel()
        class Goblin extends Actor {
            constructor(x,y) {
                super(x,y,Math.floor(Math.random()*5)+1)
                this.tile = 123
                this.color = "darkseagreen"
                this.renderValue = 6
                this.damageRoll = 4
            }
            die(){
                gameState.entities[this.y][this.x] = 0
                addEvent("The goblin dies")
            }
            act() {
                let distance = Math.hypot(player.x - this.x, player.y - this.y)
                if(distance < 8) {
                    let angle = Math.atan2(player.y - this.y, player.x - this.x) * 180 / Math.PI
                    let direction = angleToDirection(angle)
                    this.tryMove(direction)
                }
            }

            bump(target) {
                if(target instanceof Player){
                    this.attack(target)
                }
            }

            attack(target) {
                let damage = Math.floor(Math.random()*this.damageRoll)+1
                addEvent(`The goblin attacks for ${damage}hp`)
                target.takeDamage(damage)
        }
        }

        //displays 12 most recent events
        function displayEvents() {
            while(eventContainer.firstChild){
                eventContainer.removeChild(eventContainer.firstChild)
            }
            for(let i = 12; i > 0; i--){
                let message = document.createElement("div")
                if(eventLog[eventLog.length-i]) {
                    message.innerText = ">" + eventLog[eventLog.length-i]
                    message.style.color = "white"
                } else {
                    message.innerText = ">"
                    message.style.color = "black"
                }
                eventContainer.append(message)
            }
            if(eventLog[eventLog.length-1]){
                eventContainer.lastChild.style.color = "black"
                eventContainer.lastChild.style.backgroundColor = "white"
            }
        }
        
        //add a new event and update
        function addEvent(eventMessage){
            eventLog.push(eventMessage)
            displayEvents()
        }
       
        //update playername and health
        function updateUI() {
            document.querySelector(".player-name").innerText = player.name
            document.querySelector(".health-bar").innerText = "Health: " + player.hitPoints
            document.querySelector(".potion-count").innerText = "Potions: " + player.potions
            document.querySelector(".turn-count").innerText = "Turn: " + turnCounter
            document.querySelector(".floor-display").innerText = "Floor: " + currentFloor
            if(player.hasTreasure){
                document.querySelector(".treasure-display").style.visibility = "visible"
            }
        }

        //cleans up event listeners and ends the game.
        function endGame(outcome) {
            for(let i = 0; i < movementButtons.length; i++) {
                movementButtons[i].removeEventListener('click', clickMove)
            }
            document.removeEventListener('keydown', keyPress)
            document.querySelector(".ascend-stairs").removeEventListener('click', stairsUp)
            document.querySelector(".descend-stairs").removeEventListener('click', stairsDown)
            document.querySelector(".drink-potion").removeEventListener('click', potionDrink)
            gameOver(outcome)
        } 

        function changeFloors(newFloor){
            if(newFloor < 0){
                checkWin()
            } else if(dungeonFloors[newFloor]){
                gameState = dungeonFloors[newFloor]
                mergeView()
                getFOV()
                render()
                currentFloor = newFloor
            } else {
                newState = new GameState
                dungeonFloors[newFloor] = newState
                gameState = dungeonFloors[newFloor]
                loadLevel(levelSources[newFloor])
                mergeView()
                getFOV()
                render()
                currentFloor = newFloor
            }
        }

        class GameState {
            constructor() {
                this.level = []
                this.ground = []
                this.entities = []
                this.ground = []
                this.view = []
                this.fov = []
                this.explored = []
            }
        }
        //game state arrays
        let gameState = new GameState
        // event log is an array of strings. invoke addEvent(string) to add string.
        const eventLog = ["","","","","","","","","",""]
        let eventContainer = document.querySelector(".event-log-container")

        let renderContainer = document.querySelector(".render-container")
        while(renderContainer.firstChild){
            renderContainer.removeChild(renderContainer.firstChild)
        }
        //create and get game-tile divs
        renderContainer.style.maxHeight = "320px"
        for(let i = 0; i < 1600; i++){
            let tile = document.createElement("img")
            tile.classList.add("game-tile")
            tile.src = "img/sprite-sheet.png"
            renderContainer.append(tile)
        }
        let gameTiles = renderContainer.children

        //create player, load and render game start
        const player = new Player(0,0,10,playerName)
        const dungeonFloors = [gameState]
        let currentFloor = 0
        let turnCounter = 0 
        loadLevel(levelSources[0])
        mergeView()
        getFOV()
        render()
        displayEvents()
        updateUI()

        //add event listeners for clickable movement buttons
        const clickMove = (event) => {
            if(event.currentTarget.value !== "wait") {
                player.tryMove(event.currentTarget.value)
            }
            advanceTurn()
        }
        let movementButtons = document.getElementsByClassName("movement-button")
        for(let i = 0; i < movementButtons.length; i++) {
            movementButtons[i].addEventListener('click', clickMove)
        }
        
        const stairsUp = () => {
            player.takeStairs("up")
            advanceTurn()
        }
        document.querySelector(".ascend-stairs").addEventListener('click', stairsUp)
        const stairsDown = () => {
            player.takeStairs("down")
            advanceTurn()
        }
        document.querySelector(".descend-stairs").addEventListener('click', stairsDown)
        const potionDrink = () => {
            player.drinkPotion()
            advanceTurn()
        }
        document.querySelector(".drink-potion").addEventListener('click', potionDrink)
        const pickupItem = () => {
            player.pickup()
            advanceTurn()
        }
        document.querySelector(".pickup-item").addEventListener('click', pickupItem)
        //add keyboard event listeners       
        const keyPress = (event) => {
            switch(event.code){
                case "Numpad1":
                    player.tryMove("down-left")
                    advanceTurn()
                    break
                case "Numpad2":
                    player.tryMove("down")
                    advanceTurn()
                    break
                case "Numpad3":
                    player.tryMove("down-right")
                    advanceTurn()
                    break
                case "Numpad4":
                    player.tryMove("left")
                    advanceTurn()
                    break
                case "Numpad5":
                    advanceTurn()
                    break
                case "Numpad6":
                    player.tryMove("right")
                    advanceTurn()
                    break
                case "Numpad7":
                    player.tryMove("up-left")
                    advanceTurn()
                    break
                case "Numpad8":
                    player.tryMove("up")
                    advanceTurn()
                    break
                case "Numpad9":
                    player.tryMove("up-right")
                    advanceTurn()
                    break
            }
            switch(event.key){
                case "<":
                    player.takeStairs("up")
                    advanceTurn()
                    break
                case ">":
                    player.takeStairs("down")
                    advanceTurn()
                    break
                case "q":
                    player.drinkPotion()
                    advanceTurn()
                    break
                case "g":
                    player.pickup()
                    advanceTurn()
                    break
            }
        }
        document.addEventListener('keydown', keyPress)
    }

    //start the whole thing
    gameIntro()
    //document.querySelector(".game-container").style.display = "grid"
    //game("Erik")
})