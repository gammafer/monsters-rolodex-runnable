import './App.css';
import {CardList} from './component/Card/card-list.component';
import { Component } from 'react';
import { SearchBox } from './component/search-box/search-box';

 
class App extends Component {
 constructor(){
  super();
  this.state={
    monster:[],
    searchField:''
  };}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).
    then(users=>this.setState({monster:users}));
  }
  render(){
    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter((monst)=>
      monst.name.toLowerCase().includes(searchField.toLowerCase())
      );

  return (
    <div className="App">
      <h1 className='Title'>Monster-Rolodex</h1>
       <SearchBox
       placeholder='search monsters'
       handleChange={
        e=>this.setState({searchField:e.target.value},()=>console.log(this.state)
        )}
       ></SearchBox>
      <CardList monster={filteredMonsters}>{
       
      }</CardList>
      
    </div>
  );}
}

export default App;
