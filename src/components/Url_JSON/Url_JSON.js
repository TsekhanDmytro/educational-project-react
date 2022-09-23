const ollUsers =
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
export {ollUsers}



