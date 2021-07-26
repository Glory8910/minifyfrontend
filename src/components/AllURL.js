import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function AllURL(props) {


    let [dataset, setDataset] = useState();

    useEffect(() => {
        // Update the document title using the browser API

        fetch('https://minifylongurl.herokuapp.com/users/data')
            .then(response => response.json())
            .then(data => {

                console.log(data)

                if (data.err) {
                    alert(`error ${data.err}`)
                }
                else {

                    setDataset(data.initial)
                    
                }
            })
            .catch((error) => {
                console.log(error)
                let errors = error;
            });


    }, []);


    let handleDelete=(e,shortid)=>{
        e.preventDefault();

        fetch(`https://minifylongurl.herokuapp.com/users/delete/${shortid}`)
            .then(response => response.json())
            .then(data => {
      
                if(data.err){
                    alert("could not delete")
                }
                else{
                    alert("deleted url")
                    window.location.reload();
                }
               
            })
            .catch((error) => {
              let errors=error;
            });


    }

    return (
        <>
            <div className="container">

                <h1>All Shortned URLs</h1>
                <table class="table">
                    <thead>
                        <tr >
                            <th scope="col">clicks</th>
                            <th colspan="3">Long URL</th>
                            <th scope="col">Short URL</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {dataset &&
                        
                       
                            dataset.map((el, ind) => {
                                return(
                                <>

                               
                                    <tr  key={ind}>
                                        <th scope="col">{el.count}</th>
                                        <td colspan="3">{el.longurl}</td>
                                        <td scope="col"><a href={`https://minifylongurl.herokuapp.com/users/redirect/${el.shorturl}`} target="_blank">{el.shorturl}</a></td>
                                        <td scope="col" id={ind}>
                                         <button type="button" className="btn btn-danger" onClick={(e)=>handleDelete(e,el.shorturl)}>Delete</button>
                                            
                                        </td>
                                    </tr>


                                </>
                                )

                            })
                        }
                    </tbody>
                </table>

            </div>

            <Link className="btn btn-primary btnsize"  to="/createurl">Create URL</Link>

        </>
    )
}