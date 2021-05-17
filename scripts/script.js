window.addEventListener("DOMContentLoaded", () => {
    // 2d level array - X AND Y ARE REVERSED - testLevel[y][x] - y++ goes down - x++ goes right
    const testLevel = [ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
                        [0,0,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,4,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,4,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,3,0,1,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
                        [0,0,1,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

    //key               0   1   2   3   4   5   6
    //spawns                            g
    const renderKey = [" ","#","<",">"," ","@","g"]
    
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


    //game state arrays
    const gameState = {
        //immutable level terrain, for collision
        level: [[]],
        //items and corpses on the ground
        ground: [[]],
        //actors and other objects that can move and have collision
        entities: [[]],
        //merged level,ground,and entities for rendering
        view: []
    }
    
    //load map from source into game state
    function loadLevel(levelSource) {
        //copy level source to test level
        gameState.level = levelSource.map((row) => {
            return row.map((tile) => {
                return tile
            })
        })
        //set floor to same size arrays
        //TODO add items based on level source
        gameState.ground = levelSource.map((row) => {
            return row.map((tile) => {
                return 0
            })
        })
        //set entities to same size
        //TODO add player and enemies from spawns
        gameState.entities = levelSource.map((row,y) => {
            return row.map((tile,x) => {
                if(tile === 2){
                    player.x = x
                    player.y = y
                    return player
                } else if(tile === 4) {
                    gameState.level[y][x] = 0
                    return new Goblin(x,y)
                } else{
                    return 0
                }
            })
        })
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
                    view[i][j] = gameState.entities[i][j].renderValue
                } else if(gameState.ground[i][j]) {
                    view[i][j] = gameState.ground[i][j]
                }
            }
        }
        gameState.view = view
    }

    //renders array from combined view to play field by keys
    function render() {
        for(let i = 0; i < gameTiles.length; i++) {
            let y = Math.floor(i / gameState.view[0].length)
            let x = i % gameState.view[0].length
            gameTiles.item(i).innerText = renderKey[gameState.view[y][x]]
        }
    }
    

    //after handling player input and actions, call advanceTurn
    //handles enemy actions and other between turn events, calls mergeView and render
    function advanceTurn() {
        //enemy stuff happens here
        gameState.entities.forEach((row) => {
            row.forEach((entity) => {
                if(entity instanceof Actor && !(entity instanceof Player)){
                    entity.act()
                }
            })
        })
        mergeView()
        render()
    }
    
    //define all my global variables and get DOMElements
    
    //create game logic and entities
        //game state stored in object containing three arrays of the same size
            //level, immutable, used for collision checking and stairs
            //ground - not important yet, items and objects on the floor, no collision
            //entities - player and all enemies, pointers to objects.

    
   
    class Actor {
        constructor(x,y,hitPoints) {
            this.x = x
            this.y = y
            this.hitPoints = hitPoints
            this.maxHitPoints = hitPoints
            this.renderValue = 0
            this.damageRoll = 0
        }

        //check if actor would collide with object in target x,y
        checkCollision(x,y) {
            if(gameState.level[y][x] && gameState.level[y][x] !== 2 && gameState.level[y][x] !== 3) {
                return true
            } else if(gameState.entities[y][x]) {
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

    class Player extends Actor {
        constructor(x,y,hitPoints) {
            super(x,y,hitPoints)
            this.name = "Player name 😶"
            this.renderValue = 5
            this.damageRoll = 6
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

        die() {
            console.log("You Died")
        }
    }

    class Goblin extends Actor {
        constructor(x,y) {
            super(x,y,Math.floor(Math.random()*5)+1)
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

    const eventLog = [" "," "," "," "," "," "," "," "," "," "]
    let eventContainer = document.querySelector(".event-log-container")
    
    function displayEvents() {
        while(eventContainer.firstChild){
            eventContainer.removeChild(eventContainer.firstChild)
        }
        for(let i = 10; i > 0; i--){
            if(eventLog[eventLog.length-i]) {
                let message = document.createElement("div")
                message.innerText = ">" + eventLog[eventLog.length-i]
                eventContainer.append(message)
            }
        }
    }

    function addEvent(eventMessage){
        eventLog.push(eventMessage)
        displayEvents()
    }

    let renderContainer = document.querySelector(".render-container")
    //create and get game-tile divs
    for(let i = 0; i < 1600; i++){
        let tile = document.createElement("div")
        tile.classList.add("game-tile")
        tile.innerText = " "
        renderContainer.append(tile)
    }
    let gameTiles = renderContainer.children

    //create player, load and render game start
    const player = new Player(0,0,10)
    loadLevel(testLevel)
    mergeView()
    render()
    displayEvents()

    //add event listeners for clickable movement buttons
    let movementButtons = document.getElementsByClassName("movement-button")
    for(let i = 0; i < movementButtons.length; i++) {
        movementButtons[i].addEventListener('click', () => {
            if(movementButtons[i].value !== "wait") {
                player.tryMove(movementButtons[i].value)
            }
            advanceTurn()
        })
    }
    
    //add keyboard event listeners
    document.addEventListener('keydown', (event) => {
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
    })
})