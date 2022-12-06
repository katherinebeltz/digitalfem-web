import React from 'react';
import {useParams} from "react-router-dom";
import './Company.css';

function Company() {
    const id = useParams().id;

    const names = ["Google", "Apple", "Meta"]

    const first_name = ["Marissa Mayer", "Joanna Hoffman", "Ruchi Saghvi"]

    const first_year = [1999, 1980, 2005]

    const percent_F_tech = [25.9, 24.4, 25.8]

    const per_H_tech = [5.7, 7.8, 4.8]

    const per_H_lead = [4.1, 7.8, 5.4]

    const per_B_tech = [3.5, 5.5, 2.4]

    const per_B_lead = [4.7, 4.0, 4.9]

    const percent_F_lead = [30.6, 31.4, 36.7]

    const sources = [["https://www.cnn.com/2012/07/16/tech/web/marissa-mayer-bio#:~:text=New%20Yahoo%20CEO%20Marissa%20Mayer,and%20most%20visible%20public%20faces.",'https://about.google/belonging/diversity-annual-report/2022/','https://www.statista.com/statistics/311805/google-employee-gender-department-global/'],
["https://www.folklore.org/ProjectView.py?project=Macintosh&characters=Joanna+Hoffman","https://www.apple.com/diversity/" ],
["https://www.vagabomb.com/The-Story-of-Ruchi-Sanghvi-the-Woman-Who-Was-Facebooks-First-Female-Engineer/#:~:text=Ruchi%20Sanghvi%2C%20the%20first%20female,of%20Facebook's%20News%20Feed%20feature.", ]]

    const learn = ["https://about.google/belonging/diversity-annual-report/2022/","https://www.apple.com/diversity/" , "https://about.fb.com/news/2022/07/metas-diversity-report-2022/"]

    const list_src = sources[id].map((source, index) =>
    <a className="source" key={index} href={source} >{source}</a>)

    


    return (
<div className="container">
    <h1 className="title">{names[id]}</h1>
    <h1 className="intro">Here are some facts about {names[id]}.</h1>
    <h2 className="line">The first female engineer at&nbsp;<div> {names[id]} </div> &nbsp;was&nbsp;<div className="big">{first_name[id]}, </div> &nbsp;and she started in <div className="big">&nbsp;{first_year[id]}</div>.</h2>
   
    <div className="percents">
    <h2 className="percent"> <h2 className="per">{percent_F_tech[id]}%</h2>of tech employees are women.</h2>
    <h2 className="percent"> <h2 className="per">{per_H_tech[id]}%</h2>of tech employees are latinx.</h2>
    <h2 className="percent"> <h2 className="per">{per_B_tech[id]}%</h2>of tech employees are black.</h2>    
    </div>  

    <div className="percents">
    <h2 className="percent"><h2 className="per">{percent_F_lead[id]}%</h2> of leadership employees are women.</h2>
    <h2 className="percent"><h2 className="per">{per_H_lead[id]}%</h2> of leadership employees are latinx.</h2>
    <h2 className="percent"><h2 className="per">{per_B_lead[id]}%</h2> of leadership employees are black.</h2>
    </div>

    <div className="learn"><h2>Read more from the company</h2> <a className="link" href={learn[id]}>{learn[id]}</a> </div>
    <h2 className="sources"> <div>Sources</div> {list_src} </h2>
</div>
    )
}

export default Company;