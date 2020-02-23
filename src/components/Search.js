import React, {useState} from 'react';
import {Card, ListGroup, Button, Form, FormControl} from 'react-bootstrap';
import '../stylesheets/Search.css';
export default function Search(){
    //let searchValue = 'Davao'
    const [searchValue, setSearchValue] = useState("");
    const [ifEmpty, setIfEmpty] = useState("");
    
    let data = [
        {
            id:1,
            schoolName: 'Davao Christian HIgh School',
            section:'Grade 5 - Compassion',
            topic:'Favorite Food'},
        
            {id:2, schoolName:'Salugpungan Ta Ta’nu Igkanugon Learning Center',
            section:'Grade 12',
            topic:'Martial Law'},
            
            {id: 3, schoolName:'School of the Holy Spirit',
                section:'Grade 12 - Kasipagan',
                topic:'Religion'},
    ];

    const handleChange = event => {
        setSearchValue(event.target.value);
        setIfEmpty(event.target.value.trim() != '' ? `Results for ${event.target.value}` : "");
      };

    let results = data.filter(x => x.schoolName.includes(searchValue) || x.section.includes(searchValue) || x.topic.includes(searchValue));
    var resultsOut = results.map((result)=>{
        return(
                <ListGroup.Item key={result.id}>
                    <div class="row-sm-4" className="school-name">{result.schoolName}</div>
                    <div class="row-sm-4" className="grade-section">{result.section}</div>
                    <div class="row-sm-4">{result.topic}</div>
                    <Button variant="info">Join Discussion</Button>
                </ListGroup.Item>
        )
        })
    return(
             
            <div className="Search">
                
            <Form inline>
                <FormControl type="text" placeholder="Search" value={searchValue} 
                 onChange={handleChange} className="mr-sm-2" />

            </Form>
            <h2>{ifEmpty}</h2>
            <Card style={{ width: '80%', margin: 'auto 1em' }} striped>
                <ListGroup variant="flush">
                    {resultsOut}

                </ListGroup>
            </Card>
        </div>
    )
}