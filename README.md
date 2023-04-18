# test-tasks

This is a project with test tasks

## Instalation

It is required to install necessary nmp packages: 

```
npm i 
```

## How to run

In order to run task solution use next:

```
node task<number>/index.js task<number>/input.json
```

Execution result will be stored in `task<number>/output.json`

## Example of input and output data:

### Task1

Input data shoud look like this:

```
{
    "initialNumber" : 31,
    "targetNumber" : 62211
}
```

- Key `initialNumber` stands for number we try to convert to `targetNumber`

Output:

```
{
    "isPossible":true,
    "resutSteps":[
        "truncate:622;31",
        "divide: 311;31",
        "append:311;311"
    ]
}
```

- Key `isPossible` contains the answer wether the conversion is possible. Value `true` means conversion is possible, value `false` means conversion is impossible.
- Key `resultSteps` contains ordered operations required to be applied to reach the successfull convertion. 
    - Key `truncate` stands for truncating symbol "1" from the end of `targetNumber`.
    - Key `divide` stands for dividing `targetNumber` by 2.
    - Key `append` stands for appending symbol "1" to the end of `initialNumber`.

### Task2 

Input data shoud look like this:

```
{ "arr" : [1,3,5,1,9,8,8] }
```

Output:

```
{ "repetitiveElements":[1,8] }
```

### Task3

Input data shoud look like this:

```
{ "numberOfKilos" : 150 }
```

Output:

```
{
    "result":"65.0040",
    "multipliers":[1,1,0,0,0,0,2,0,0,0,2,0],
    "kilos":[0.5,1,2.5,4.536,5,10,11.34,15,15.88,20,20.412,25]
}
```

### Task4

Input data shoud look like this:

```
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
```

Output: 

```
{
    "lightingPosition":[
        {"x":0,"y":1,"direction":"left"},
        {"x":1,"y":0,"direction":"up"},
        {"x":1,"y":1,"direction":"right"},
        {"x":0,"y":2,"direction":"down"}
    ]
}
```