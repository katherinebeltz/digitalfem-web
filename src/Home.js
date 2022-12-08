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
    <div className="stats">
        <h2>General Statistics about Women in Computer Science</h2>
        <div className="statline"><h3>Just over&nbsp;</h3> <h3 className="bigstat">25%</h3><h3>&nbsp;of software engineers are women.</h3></div>
        <div className="statline">
        <h3>Around </h3><h3 className="bigstat">&nbsp;12%&nbsp;</h3><h3> of tech jobs are held by women of color.</h3>
        </div>
        <div className="statline">
        <h3>Only </h3><h3 className="bigstat">&nbsp;18%&nbsp;</h3><h3> of computer science degrees are held by women.</h3>
        </div>
        <div  className="statline">
        <h3 className="bigstat">50%&nbsp;</h3><h3>of women who have tech jobs leave the industry by the age of </h3><h3 className="bigstat">&nbsp;35</h3><h3>.</h3>
        </div>
    </div>
    <div className="texts">
    <h3 className="bigtext">About me</h3>
    <h4 className="text">{about_me}</h4>
    </div>
    <div className="texts">
    <h3 className="bigtext">Why I created this website</h3>
    <h4 className="text">{why_website}</h4> 
    </div>     
    <p>Source: https://www.zippia.com/advice/women-in-technology-statistics/#:~:text=The%20percentage%20of%20bachelor's%20in,%2C%20to%2018%25%20in%202021.</p>
</div>
    )
}

export default Home;