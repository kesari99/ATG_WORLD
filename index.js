




let getUnorderlist = document.getElementById('locationLists');
let recommendationsAdded = false; // Declare the variable outside the function
let groupsButtonElement = document.getElementById("groupsButton");
let recommendArray = [
    {
        imageSrc: 'images/reco1.jpg',
        heading: "Leisure"
    },
    {
        imageSrc: 'images/rec2.jpg',
        heading: "Activism"
    },
    {
        imageSrc: 'images/rec3.jpg',
        heading: "MBA"
    },
    {
        imageSrc: 'images/rec4.jpg',
        heading: "Philosophy"
    }
    // Add more objects as needed for additional list items
];

// Function to create and append recommendation list items
function getRecommendation(obj) {
    // Create list item element
    const listItem = document.createElement('li');
    listItem.style.listStyle = "none";
    // Create inner elements for the list item
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'flex-row', 'justify-content-between');
  
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('d-flex', 'flex-row');
  
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = obj.imageSrc;
    image.classList.add('recommended-image');
    image.alt = '';
  
    const headingDiv = document.createElement('div');
    const headingElement = document.createElement('h1');
    headingElement.classList.add('recommended-image-heading');
    headingElement.textContent = obj.heading;
  
    const buttonDiv = document.createElement('div');
    const followButton = document.createElement('button');
    followButton.classList.add('recommended-image-follow-button');
    followButton.textContent = 'Follow';
  
    // Append elements
    listItem.appendChild(outerDiv);
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(imageDiv);
    imageDiv.appendChild(image);
    innerDiv.appendChild(headingDiv);
    headingDiv.appendChild(headingElement);
    outerDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(followButton);
  
    // Append the created list item to the parent element
    getUnorderlist.appendChild(listItem);
}

// Function to clear recommendations
function clearRecommendations() {
    getUnorderlist.innerHTML = '';
}

// Event listener for the "Join Groups" button
function toggleRecommendations() {
    if (recommendationsAdded) {
        clearRecommendations();
        groupsButtonElement.classList.remove("leave-button");
        groupsButtonElement.textContent = "Join Group";
        groupsButtonElement.classList.add("join-button");
    } else {
        for(let rec of recommendArray)
        getRecommendation(rec);
        groupsButtonElement.classList.remove("join-button");
        groupsButtonElement.textContent = "Leave Group";
        groupsButtonElement.classList.add("leave-button");



    }
    recommendationsAdded = !recommendationsAdded;
}
