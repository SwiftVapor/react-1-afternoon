import React, {Component} from 'react';



export default class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val){
        this.setState({userInput:val});
    }
    isItPali = (userInput) =>{
        let noSpaces = userInput.split(" ").join("");
        let broken = noSpaces.split('');
        for(let i = 0; i < broken.length; i++){
            console.log (broken[i], i , broken[broken.length-[i+1]])
            if (broken[i] !== broken[broken.length-[i+1]] ){
                this.setState({ palindrome: 'false' });
            }
            else{
                this.setState({ palindrome: 'true' });
            }
        }
}
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.isItPali(this.state.userInput)} >Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>

        )
    }

}