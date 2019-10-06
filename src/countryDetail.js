import React from "react"
import {Link} from "react-router-dom"

function CountryDetail(props){
    let finder = props.allCountries.find((country)=>{
            if(country.cca3 == props.match.params.stuff) return( 
                country
            )
        })

        let borders = finder.borders.map((border, i)=>{
         let borderName=   props.allCountries.find((countrie)=>{
                if(countrie.cca3 == border) return (countrie)
            })

            return <li key= {i}><Link to= {"/"+borderName.cca3}>{borderName.name.common}</Link></li>
            
        })
        
       // console.log(props.allCountries)
    return(
        <div>
        <h2>{finder.name.common}</h2>
        <h3>Capital: {finder.capital}</h3>
        <h3>Area: {finder.area} km<sup>2</sup></h3>
        <h3 id= "o" >Borders</h3> 
        <ul>
         {borders}
        </ul>
        </div>
    )
}


export default CountryDetail