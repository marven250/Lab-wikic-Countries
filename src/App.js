import React  from 'react';
import './App.css'
import countries from "./countries.json"
import {Switch, Route, Link} from "react-router-dom"
import CountryDetail from "./countryDetail"

class App extends React.Component{
      state = {
        List: countries
      }

      listCountries = ()=>{
        return this.state.List.map((country, i)=>{
          return (<div key={i} id="namer" style={{ color: "black", border: "1px solid black", padding: "2px", margin: "1px"}}><Link style={{ color: "black"}} to= {"/"+ country.cca3} >{country.name.common}</Link></div>)
          })
      }

    render(){
           
  return (
    <div>
      <div style= {{float: "left", width:"40%", textAlign:"center"}}>
        {this.listCountries()}
      </div>

      <div style={{ float: "right", width: "40%", textAlign: "center" }}>
        <Route exact path = "/:stuff" render= {(props)=><CountryDetail {... props} allCountries= {this.state.List} />}  />
      </div>
    </div>
  )
}
}


export default App