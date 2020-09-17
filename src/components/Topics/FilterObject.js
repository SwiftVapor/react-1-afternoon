import React, {Component} from 'react';

export default class FilterObject extends Component {


    constructor() {
        super()
        this.state={
                people: [
                    {name: 'Jeff',
                    title: 'The one named Jeff',
                    ssnLast4: 6969
                    },
                    {name: 'Not Jeff',
                    hobbies: 'not much',
                    cvv: '568'
                    },
                    {name: 'also Jeff',
                    hobbies: 'identity theft',
                    ssnLast4: 6969,
                    cvv: '568'}
                ],
                userInput:'',
                filteredPeople: []
            ,

        }
    }
    handleChange(val) {
      this.setState({ userInput: val });
    }
    filterPeople(prop) {
        let people= this.state.people;
        let filteredPeople = [];
        for (let i = 0; i < people.length; i++) {
            if (people[i].hasOwnProperty(prop) ){
                filteredPeople.push(people[i]);
            }
        }
        this.setState({ filteredPeople: filteredPeople });
    }

    render() {
        return (
        <div className= "puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.people, null, 10)}</span>
            <input className = "inputLIne" onChange={(ele) => this.handleChange (ele.target.value)}/>
            <button className= 'confirmationButton' onClick={ () => this.filterPeople(this.state.userInput)}>Filter</button>
            <span className = "resultsBox filterObjectRB"> Filtered:  {JSON.stringify(this.state.filteredPeople,null, 10)}</span>
        </div>
        )
    }
}
