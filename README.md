# test-tasks
To run scripts use command : node "name".js "name".json
## Example of input and output data:

### Task1

Iput data shoud look like this:

{
    "initialNumber" : 31,
    "targetNumber" : 62211
}

Output:

{"isPossible":true,"resutSteps":["truncate:622;31","divade: 311;31","append:311;311"]}

### Task2 

Iput data shoud look like this:

{ "arr" : [1,3,5,1,9,8,8] }

Output:

{ "repetitiveElements":[1,8] }

### Task3

Iput data shoud look like this:

{ "numberOfKilos" : 150 }

Output:

{"result":"65.0040","multipliers":[1,1,0,0,0,0,2,0,0,0,2,0],"kilos":[0.5,1,2.5,4.536,5,10,11.34,15,15.88,20,20.412,25]}

### Task4

Iput data shoud look like this:

{
    "width" : 3,
    "height" : 4, 
    "positionsOfActors" : [
        {
            "x" : 0,
            "y" : 0
        },
        {
            "x" : 1,
            "y" : 2
        },
        {
            "x" : 2,
            "y" : 1
        }
    ]
}

Output: 

{"lightingPosition":[{"x":0,"y":1,"direction":"left"},{"x":1,"y":0,"direction":"up"},{"x":1,"y":1,"direction":"right"},{"x":0,"y":2,"direction":"down"},{"x":1,"y":3,"direction":"left"},{"x":2,"y":2,"direction":"up"},{"x":2,"y":0,"direction":"right"},{"x":1,"y":1,"direction":"down"},{"x":2,"y":2,"direction":"left"}]}
