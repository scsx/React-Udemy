// THIS  IS THE MAIN APP.JS FILE, AppFunctional WAS CREATED TO KEEP BOTH, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';

class Exercise extends Component {

    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    };

    render() {

        const charList = this.state.userInput.split('').map( (ch, index) => {
            return <Char character={ch} key={index} clickedToDelete={() => this.deleteCharHandler(index)} />
        });

        return (
            <div className="exercise">
                <h1>Exercise.js</h1>
                <div className="card">
                    <div className="card-body">

                        <input type="text" className="form-control" onChange={this.inputChangedHandler} value={this.state.userInput} />
                        <p className="mt-2 mb-0">Value: {this.state.userInput}</p>
                        <Validation inputLength={this.state.userInput.length} />

                        {charList}

                    </div>
                </div>

                <ol className="mt-4">
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
            </div>
        );
    }
}

export default Exercise;
