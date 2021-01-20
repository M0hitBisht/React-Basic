import React, { Component } from 'react';
import { Table,Form,Container} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from "./Navbar"

class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state={
            searchData:null,
            noData:false,
            lastSearch:"",
        }
    }

    search(key){
        console.log(key)
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurantApi?q=' + key).then((data) => {
            data.json().then((resp)=>{
                console.log("resp",resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
                
            })
        })

    }
    delete(id) {
        fetch('http://localhost:3000/restaurantApi/' + id,
            {
                method: "DELETE",
            })
            .then((result) => {
                result.json().then((Response) => {
                   
                    alert("Restaurant has been Delete")
                    this.search(this.state.lastSearch)
                })

            })
    }



    render() {
        return (
            <Container>
                    <Navbarmenu />
                  <h3>RestaurantSearch</h3>
                 
                  
                  <Form.Control type="type" onChange={(event)=>this.search(event.target.value)} placeholder="Search" />
                  <div>
                      { 
                          this.state.searchData?
                          
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
                              this.state.searchData.map((item)=>
                              
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
                          :""

                      }
                      {
                      this.state.noData?<h5>No Data Found!</h5>:null 
                      }
                  </div>
            </Container>
          
        );
    }
}

export default RestaurantSearch;