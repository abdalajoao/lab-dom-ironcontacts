// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;


const deleteBtnExample = exampleRow.querySelector(".btn-delete");
deleteBtnExample.addEventListener("click", () => {
  exampleRow.remove();
});


const likeBtnExample = exampleRow.querySelector(".btn-like");
likeBtnExample.addEventListener("click", () => {
  likeBtnExample.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);



// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.slice(0, 3);

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  // Like
  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});


//BONUS: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  // Like
  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});