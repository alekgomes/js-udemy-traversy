const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image:'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image:'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Willian Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image:'https://randomuser.me/api/portraits/men/2.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();


// Next event

document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile display
function nextProfile(){
  const currentProfile = profiles.next().value

  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.agr}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking: ${currentProfile.lookingfor}</li>
    </ul>
    `

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
  `
}else{
  // No more profiles availibles
  window.location.reload()
}

}

// Profile iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return{
    next: function(){
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done:false}:
      {done: true}
    }
  }
}