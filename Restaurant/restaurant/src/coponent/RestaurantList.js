import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from "./Navbar"

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.autorefresh()
    }

    autorefresh() {
        fetch("http://localhost:3000/restaurantApi").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }



    delete(id) {
        fetch('http://localhost:3000/restaurantApi/' + id,
            {
                method: "DELETE",
            })
            .then((result) => {
                result.json().then((Resp) => {
                   
                    alert("Restaurant has been Delete")
                    this.autorefresh()
                })

            })
    }



    render() {
        // console.log(this.state)
        return (
            <div>
               <Navbarmenu />
                <h3>RestaurantList<FontAwesomeIcon icon={faClipboardList} color="Pink" /></h3>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Sitting Capibility</th>
                                        <th>
                                            Operation
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            // <div className="list-style">
                                            //  <span>{item.id}</span>
                                            //   <span>{item.name}</span>
                                            //   <span>{item.address}</span>
                                            //   <span>{item.rating}</span>
                                            //   <span>{item.sittingCapibility}</span>
                                            //  </div>
                                           // div replace with tr

                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.sittingCapibility}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="Green" /></Link>
                                                    <button onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="Red" /></button>

                                                </td>

                                            </tr>

                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }

            </div>
        );
    }
}

export default RestaurantList;