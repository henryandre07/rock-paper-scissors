import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faRedo } from '@fortawesome/free-solid-svg-icons';

const choices = ['Rock', 'Paper', 'Scissors']

export default function RockPaperScissors() {
    const [userChoice, setUserChoice] = React.useState('')
    const [computerChoice, setComputerChoice] = React.useState('')
    const [result, setResult] = React.useState('')
    const [playerScore, setPlayerScore] = React.useState(0)
    const [computerScore, setComputerScore] = React.useState(0)

    function handleClick(choice) {
        const computerChoice = getRandomChoice()
        const result = getResult(choice, computerChoice)
        setUserChoice(choice)
        setComputerChoice(computerChoice)
        setResult(result)
        updateScores(result)
    }
    function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)]
    }
    
    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "IT'S A TIE!"
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') || 
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            return "YOU WIN!"
        } else {
            return "YOU LOSE!"
        }
    }

    function updateScores(result) {
        if (result === 'YOU WIN!') {
            setPlayerScore(prevScore => prevScore + 1)
        } else if (result === 'YOU LOSE!') {
            setComputerScore(prevScore => prevScore + 1)
        }
    }

    function handleReset() {
        setUserChoice('')
        setComputerChoice('')
        setResult('')
        setPlayerScore(0)
        setComputerScore(0)
    }

    return (
        <div className="game-container">
            <h1 className="header">ROCK, PAPER, SCISSORS GAME</h1>
            <div className="player-container">
                <h2 className="player-text">
                    Player - 
                    <span className="player-score"> {playerScore}</span>
                </h2>
                <button className="playerchoice-button" onClick={function() {handleClick('Rock')}}>
                    <FontAwesomeIcon icon={faHandRock} />
                </button>
                <button className="playerchoice-button" onClick={function() {handleClick('Paper')}}>
                    <FontAwesomeIcon icon={faHandPaper} />
                </button>
                <button className="playerchoice-button" onClick={function() {handleClick('Scissors')}}>
                    <FontAwesomeIcon icon={faHandScissors} />
                </button>
            </div>
            <div className="computer-container">
                <h2 className="computer-text">
                    Computer - 
                    <span className="computer-score"> {computerScore}</span>
                </h2>
                <button className="computerchoice-button">
                    <FontAwesomeIcon icon={faHandRock} />
                </button>
                <button className="computerchoice-button">
                    <FontAwesomeIcon icon={faHandPaper} />
                </button>
                <button className="computerchoice-button">
                    <FontAwesomeIcon icon={faHandScissors} /> 
                </button>
            </div>
            <div className="result-container">
                {userChoice && (
                <div className="results">
                    <p className="choice-text">You chose: {userChoice}</p>
                    <p className="choice-text">Computer chose: {computerChoice}</p>
                    <h2 className={`result-text ${result === "YOU WIN!" ? 'win' : result === "YOU LOSE!" ? 'lose' : ''}`}>
                        {result}
                    </h2>
                </div>
                )}
            </div>
            <button className="reset-button" onClick={handleReset}>
                <FontAwesomeIcon icon={faRedo} /> 
            </button>
        </div>
    )
}

