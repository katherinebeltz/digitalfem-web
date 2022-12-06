import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const navigate = useNavigate()

    const companies = ["Google", "Apple", "Meta"]

    const buttons = companies.map((company, index) => {
        const routeChange = () => {
            navigate('/company/'+index)
        }
        return(
        <div key={index}>
        <button className="button" onClick={routeChange}>{company}</button>
        </div>)
})
    return (
<div className="container">
    <h1>Welcome to my Digital Feminism Project!</h1>
    <h2>Click a company to learn more about their inclusion of women and minorities in tech.</h2>
        <div className="buttons" >{buttons}</div>
</div>
    )
}

export default Home;