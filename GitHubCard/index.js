/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/samuelrowan')
  .then( res => {
    console.log(res.data);
    cards.appendChild(cardCreator(res.data));

  })
  .catch( err => {
    console.log(err);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

  followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
      .then( res => {
        cards.appendChild(cardCreator(res.data));
      })
      .catch( err => {
        console.log(err)
      })
  })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(obj){
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  cardDiv.classList.add('card');
  userImg.src = obj.avatar_url;
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  username.classList.add('username');
  profileLink.href = obj.html_url;

  usersName.textContent = obj.name;
  username.textContent = obj.login;
  userLocation.textContent = `Location: ${obj.location}`;
  profile.textContent = "Profile:";
  profileLink.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  cardInfo.appendChild(usersName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfo);

  return cardDiv;
}



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
