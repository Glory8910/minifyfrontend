import React,{useEffect, useState} from "react";

import { useHistory, Link } from "react-router-dom";



export default function CreateURL(){


    const [longurl, setLongurl] = useState("")
    let history=useHistory();


    let handlechange = (e) => {

        setLongurl(
            
               e.target.value
            
        )


    }

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://minifylongurl.herokuapp.com/users/long', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({longurl}),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.err){
                    alert(`error ${data.err}`)
                }
                else{
                    alert("short url is created")

                }
               
            })
            .catch((error) => {
              let errors=error;
            });

        

        setLongurl("")

    }

    return (
        <>
            <div className="container">
                
            <h1>Create Short URL</h1>

                <form className="col-6 " onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label htmlFor="longurl">Long URL</label>
                        <input type="text" className="form-control" id="longurl"  value={longurl} onChange={handlechange}  placeholder="Enter longurl" />

                    </div>
                  

                    <button type="submit" className="btn btn-primary">Shorten</button>
             
                </form>

               <Link className="btn btn-primary btnsize"  to="/allurls">All URL's</Link>

               
            </div>
        </>
    )
}