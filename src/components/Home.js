import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./home.css"


export default function Home() {

    let [shortnerdata, setShortnerdata] = useState();

    useEffect(() => {
       

        fetch('https://minifylongurl.herokuapp.com/users/data')
            .then(response => response.json())
            .then(data => {

              

                if (data.err) {
                    alert(`error ${data.err}`)
                }
                else {

                    setShortnerdata(data.initial)
                  

                }
            })
            .catch((error) => {
                let errors = error;
            });


    }, []);



    return (

        
        <>
            <h1>URL Shortner</h1>

            {
                shortnerdata ?
                    <div className="cardbox"><h4> Shortned URL's </h4><h1>{shortnerdata.length}</h1></div>
                    :
                    <div>No data available</div>
            }

           
            <Link className="btn btn-primary btnsize" to="/createurl">Create Mini URL</Link>
            {shortnerdata &&
               
               
               <Link className="btn btn-primary btnsize" shorturldata={shortnerdata } to="/allurls">All URL's</Link>


            }
          

        </>
    )
}