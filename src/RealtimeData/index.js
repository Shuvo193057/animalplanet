import StartFirebase from '../firebaseConfig/index';
import React from 'react';
import {ref, onValue} from '../firebase/database';
import { Table } from 'react-bootstrap';


const db = StartFirebase();

export class RealtimeData extends React.Component{
        constructor(){
            super();
            this.state = {
                tableData: []
            }
        }

        componentDidMount(){
            const dbRef = ref(db, 'Customer');

            onValue(dbRef, (snapshot)=>{
                let records = [];
                snapshot.forEach(childSnapshot=>{
                    let keyName = childSnapshot.key;
                    let data =  childSnapshot.val();
                    records.push({"key": keyName, "data":data});
                });
                this.setState({tableData: records});
            })
        }

    render(){
        return(
            <Table className='container w-75' bordered striped variant='drak'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                     
                     <tbody>
                        {this.state.tableData.map((rowdata,index) => {
                            return(
                            <tr>
                                <td>{index}</td>
                                <td>{row.key}</td>
                                <td>{row.data.Fullname}</td>
                                <td>{row.data.Phonenumber}</td>
                                <td>{row.data.dateofbirth}</td>
                            </tr>
                            )
                        })}
                     </tbody>

            </Table>
        )
    }

}
