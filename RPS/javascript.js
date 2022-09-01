function getComputerChoice()
{
    //1=rock 2=paper 3=scissors
    return Math.floor(Math.random() * (3) + 1)
}
function playGame(pChoice, cChoice)
{
    let script = 0
    console.log(cChoice)
    if (cChoice == (pChoice-1) || cChoice == (pChoice + 2))
    {
        script = 1
    }
    else if (cChoice==pChoice)
    {
        script = 2
    }
    else
    {
        script = 3
    }
    return script
}
function Game()
{
    let pScore = 0
    let cScore = 0
    for (let i=0; i<5; i++)
    {
        let pcho = parseInt(prompt("1/2/3 rock/paper/scissors"))
        if (pcho > 3 || pcho < 1)
        {
            console.log("Incorrect input, randomizing choice...")
            pcho = getComputerChoice()
        }
        let result = playGame(pcho, getComputerChoice())
        if (result == 1)
        {
            console.log("Player wins round")
            pScore += 1
        }
        if (result == 2)
        {
            console.log("Tie round")
        }
        if (result == 3)
        {
            console.log("Computer wins round")
            cScore += 1
        }
    }
    if (pScore > cScore)
    {
        console.log("The Player Wins The Game!")
    }
    if (cScore > pScore)
    {
        console.log("The Computer Wins The Game")
    }
    if (pScore == cScore)
    {
        console.log("Tie Game!")
    }
}
console.log()