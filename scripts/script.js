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
    
    const gameState = {
        level: [[]],
        floor: [[]],
        entities: [[]],
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
        gameState.floor = levelSource.map((row) => {
            return row.map((tile) => {
                return null
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
                }
            })
        })
    }

    //get render container
    
    
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
                } else if(gameState.floor[i][j]) {
                    view[i][j] = gameState.floor[i][j]
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
        mergeView()
        render()
    }
    
    //define all my global variables and get DOMElements
    
    //create game logic and entities
        //game state stored in object containing three arrays of the same size
            //level, immutable, used for collision checking and stairs
            //floor - not important yet, items and objects on the floor, no collision
            //entities - player and all enemies, pointers to objects.

    
   
    class Actor {
        constructor(x,y,hitPoints) {
            this.x = x
            this.y = y
            this.hitPoints = hitPoints
            this.maxHitPoints = hitPoints
            this.renderValue = 0
        }

        //check if actor would collide with object in target x,y
        checkCollision(x,y) {
            if(gameState.level[y][x]) {
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
            this.x = x
            this.y = y
        }

        bump(target) {
            return false
        }
    }

    class Player extends Actor {
        constructor(x,y,hitPoints) {
            super(x,y,hitPoints)
            this.name = "Player name 😶"
            this.renderValue = 5
        }

        bump(target) {
            if(target){
                attack()
            } else{
                console.log("Ouch, you bump into something!")
            }
        }
    }

    let renderContainer = document.querySelector(".render-container")
    //create and get game-tile divs
    for(let i = 0; i < 1600; i++){
        let tile = document.createElement("div")
        tile.classList.add("game-tile")
        tile.innerText = "."
        renderContainer.append(tile)
    }
    let gameTiles = renderContainer.children

    const player = new Player(0,0,10)
    loadLevel(testLevel)
    console.log(gameState)
    mergeView()
    render()

})