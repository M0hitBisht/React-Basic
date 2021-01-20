import React, { Component } from 'react';
import Navbarmenu from "./Navbar"


class RestaurantUpdate extends Component {
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


    componentDidMount() {
        fetch('http://localhost:3000/restaurantApi/' + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    id: result.id,
                    name: result.name,
                    address: result.address,
                    rating: result.rating,
                    sittingCapibility: result.sittingCapibility,



                })
            })
        })
    }

    update() {
        fetch("http://localhost:3000/restaurantApi/" + this.state.id,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((Response) => {
                    // console.log(Response)
                    alert("Restaurant has been Upsate")
                }
                )
            })
    }




    render() {
        //console.warn(this.props.match.params.id);
        return (
            <div>
                  <Navbarmenu />
                <h3>RestaurantUpdate</h3>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="ID" value={this.state.id} /> <br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" value={this.state.name} /> <br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" value={this.state.address} />  <br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" value={this.state.rating} />  <br />
                    <input onChange={(event) => { this.setState({ sittingCapibility: event.target.value }) }} placeholder="Restaurant Sitting" value={this.state.sittingCapibility} />  <br />
                    <button onClick={() => { this.update() }}>Update</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;