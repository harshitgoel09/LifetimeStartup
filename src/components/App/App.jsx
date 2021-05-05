import React from 'react';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import ResultContainer from '../ResultContainer/ResultContainer'

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Lifetime StartUp!",
        headerExpanded : true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded : !inputText,
            suggestedNames : inputText ? name(inputText) : [],
        });
    };

    render() {  //render is a method which returns html or jsx things
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}
export default App;