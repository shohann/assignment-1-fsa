let person = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar1.jpg",
      age: 28,
      address: "123 Main St, Anytown USA"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      avatar: "https://example.com/avatar2.jpg",
      age: 42,
      address: "456 Elm St, Anytown USA"
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      avatar: "https://example.com/avatar3.jpg",
      age: 35,
      address: "789 Oak St, Anytown USA"
    },
    {
      firstName: "Samantha",
      lastName: "Brown",
      email: "samantha.brown@example.com",
      avatar: "https://example.com/avatar4.jpg",
      age: 21,
      address: "101 Maple St, Anytown USA"
    },
    {
      firstName: "Michael",
      lastName: "Davis",
      email: "michael.davis@example.com",
      avatar: "https://example.com/avatar5.jpg",
      age: 47,
      address: "111 Pine St, Anytown USA"
    },
    {
      firstName: "Emily",
      lastName: "Wilson",
      email: "emily.wilson@example.com",
      avatar: "https://example.com/avatar6.jpg",
      age: 32,
      address: "222 Cedar St, Anytown USA"
    },
    {
      firstName: "David",
      lastName: "Lee",
      email: "david.lee@example.com",
      avatar: "https://example.com/avatar7.jpg",
      age: 25,
      address: "333 Spruce St, Anytown USA"
    },
    {
      firstName: "Amy",
      lastName: "Garcia",
      email: "amy.garcia@example.com",
      avatar: "https://example.com/avatar8.jpg",
      age: 39,
      address: "444 Birch St, Anytown USA"
    },
    {
      firstName: "William",
      lastName: "Chen",
      email: "william.chen@example.com",
      avatar: "https://example.com/avatar9.jpg",
      age: 53,
      address: "555 Walnut St, Anytown USA"
    },
    {
      firstName: "Olivia",
      lastName: "Nguyen",
      email: "olivia.nguyen@example.com",
      avatar: "https://example.com/avatar10.jpg",
      age: 19,
      address: "666 Sycamore St, Anytown USA"
    }
  ];
  
  
module.exports.randomPerson = (selectedProperty) => {
    const personObj = {};
    const randomIndex = Math.floor(Math.random() * person.length);
    const randomPerson = person[randomIndex]

    for (let i = 0; i < selectedProperty.length; i++) {
        if (selectedProperty[i] === 'firstName') {
            personObj.firstName = randomPerson.firstName
        } else if (selectedProperty[i] === 'lastName') {
            personObj.lastName = randomPerson.lastName
        } else if (selectedProperty[i] === 'email') {
            personObj.email = randomPerson.email
        } else if (selectedProperty[i] === 'avatar') {
            personObj.avatar = randomPerson.avatar
        } else if (selectedProperty[i] === 'age') {
            personObj.age = randomPerson.age
        } else if (selectedProperty[i] === 'address') {
            personObj.address = randomPerson.address
        } 
    }

    return personObj;
}
