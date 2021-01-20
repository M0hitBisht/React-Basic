import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from "./Navbar"

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            address: null,
            rating: null,
            sittingCapibility: null,
        }
    }

    create() {
        fetch("http://localhost:3000/restaurantApi", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((Response) => {
                //console.log(Response)
                alert("Restaurent Created")
            }
            )
        })
    }

    render() {
        return (
            <div>
                  <Navbarmenu />
                <h3>RestaurantCreate<FontAwesomeIcon icon={faUtensils} color="brown"/></h3>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="ID" /> <br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" />
                    <input onChange={(event) => { this.setState({ sittingCapibility: event.target.value }) }} placeholder="Restaurant Sitting" />
                    <button onClick={() => { this.create() }}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;