let id: number = 5
let canopy: string = " Emmanuel Addo"
let isPublishable: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

//Tuple
let person: [number, string, boolean] = [1, 'Brad', false]

//tuple array
let employee: [number, string][]

employee = [
    [1, "Brad"],
    [1, "Brad"],
    [1, "Brad"]
]

// Union
let pid: string | number

pid = '22'


//Enum

enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

// Objects
type User = {
    id: number
    name: string
}
const user: User = {
    id:1,
    name: "John"
} 

//Type Assertion
let cid: any = 1
let consumerId = <number>cid


// Functions
function addNum(x:number, y:number): number{
    return x + y
}

// Void
function log(message: string | number){
    console.log(message)
}


// Interfaces
interface UserInterface{
    id: number
    name: string
}
const user1: UserInterface ={
    id: 1,
    name: "John"
} 

