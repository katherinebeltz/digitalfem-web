import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const navigate = useNavigate()

    const companies = ["Google", "Apple", "Meta", "Microsoft"]

    const about_me = "I am a student at Duke University in the class of 2024 studying Computer Science. After graduation, I hope to become a software engineer! I have created this website for a course I am taking called Digital Feminism, where we discuss digital culture from a feminist perspective."

    const why_website = "I created this website to bring more awareness to the lack of representation of women and minorities in tech companies."

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
    <div className="texts">
    <h3 className="bigtext">About me</h3>
    <h4 className="text">{about_me}</h4>
    </div>
    <div className="texts">
    <h3 className="bigtext">Why I created this website</h3>
    <h4 className="text">{about_me}</h4> 
    </div>     
</div>
    )
}

export default Home;