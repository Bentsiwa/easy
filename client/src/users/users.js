
import '../vendor/datatables-plugins/dataTables.bootstrap.css';

import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import '../vendor/morrisjs/morris.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
const $ =require('jquery');
$.DataTable=require('datatables.net');


// class Users extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     error: null,
//     isLoaded: false,
//     items: []
//   };
// }

// componentDidMount() {

//   fetch('/api/getUsers')
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.users
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });

//       }
//     )
// }

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={userLink}>{user.id}</a></th>
        <td><a href={userLink}>{user.name}</a></td>
        <td>{user.registered}</td>
        <td>{user.role}</td>
        <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td>
    </tr>
  )
}

class Users extends Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: []
  };
}

componentDidMount() {

  fetch('/api/getUsers')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.users
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });

      }
    )


}

componentDidUpdate(prevProps, prevState) {

  console.log(this.el);
  this.$el=$(this.el);

  this.$el.DataTable()
}

  render() {

    var usersData = this.state.items

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div id="page-wrapper">
        <div className="animated fadeIn">
          <Row>
            <Col xl={6}>
              <Card>
              <div className="row">
                  <div className="col-lg-12">
                      <h1 className="page-header">Users</h1>
                  </div>

              </div>

                  <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example" ref={el=>this.el=el}>
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Registered</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map((user, index) =>
                        <UserRow key={index} user={user}/>
                      )}
                    </tbody>
                  </table>

              </Card>
            </Col>
          </Row>
        </div>
      </div>


    )
  }
  // console.log(this.el);
  // this.$el=$(this.el);
  //
  // this.$el.DataTable()

// render() {
//   console.log(this.state);

//   const { error, isLoaded, items } = this.state;
//   console.log(items);
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.name}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
}

export default Users;
