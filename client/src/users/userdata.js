var usersData = fetch('/getUsers').then(res=>json(res));

export default  usersData;
