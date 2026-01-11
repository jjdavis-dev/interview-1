const url = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  const response = await fetch(url);
  const users = await response.json();

  console.table(users);
}

fetchUsers();
