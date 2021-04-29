import React from 'react';

//npm install --save axios react-chartjs-2 react-countup classnames

/*
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

these are very lengthy if you have more than one component
So do this below
*/

//this is parsed by creating that index.js file in components
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component{
    state = {
        data: {},
        //initially left empty and we populate later by set state
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        //we have to bring this data to cards/chart etc so we set it in state
        this.setState({data: fetchedData});
    }
    render(){
        return(
            <div className={styles.container}>
                <Cards data={this.state.data}/>
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;