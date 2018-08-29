var usersData = fetch('/getUsers').then(res=>res.json);

export default  usersData;
