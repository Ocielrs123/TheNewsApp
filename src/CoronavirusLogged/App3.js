import React from 'react';
import {Cards} from './index';
import styles from './App.module.css';
import { fetchData } from './api/index'

class App3 extends React.Component {
    state = {
        data: {},
        country:'',
    }

   async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({data: fetchedData, country: country })
    }

    render(){
        const { data }= this.state;

    return (
        <div className={styles.container}>
            <Cards data={data} />

        </div>
    )
    }
}

export default App3;
