
// Define the function to fetch and display repositories
function getUserRepos() {
    let gitHubUsername = 'TTQBqueen'; // Default GitHub username
    var url = 'https://api.github.com/users/' + gitHubUsername + '/repos?sort=created';
// Add an event listener to the submit button
    document.getElementById("submit").addEventListener("click", myFunction);

    // Define the function to fetch and display repositories
    function myFunction() {
        var gitHubUsername = document.getElementById("gitHubUsername").value.trim(); // Get the GitHub username from the input field
        if (!gitHubUsername) {
            alert('Please enter a GitHub username');
            return;
        }
        var url = 'https://api.github.com/users/' + gitHubUsername + '/repos?sort=created';
        document.getElementById("demo").innerHTML = gitHubUsername + ' ' + url;
  
        // Clear previous repository entries
  document.getElementById('container').innerHTML = '';

    fetch(url)
        .then(checkStatus)
        .then((repoData) => {
            console.log(repoData);
            let container = document.getElementById('container');
            
            for (const item of repoData) {
                // Create a container for each repository entry
                let repositoryDiv = document.createElement('div');
                repositoryDiv.classList.add('repository'); // Add CSS class to the container

                 // Create an image element for the repository
                 let repoImage = document.createElement('img');
                 repoImage.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'; // Example image URL, replace with actual image URL
                 repoImage.alt = 'Repository Image'; // Alt text for accessibility

                   // Create a hyperlink element for the repository name
                let repoLink = document.createElement('a');
                repoLink.href = item['html_url']; // Set the URL to the repository's GitHub page
                repoLink.textContent = item['name']; // Set the text content to the repository name
            


                // Create elements for repository name, creation date, and update date
               //name
                let repoName = document.createElement('h2');
                repoName.textContent = item['name'];        
                //Depcption
                let repoDecption = document.createElement('h4');
                repoDecption.textContent = item['description'];
                //number commits
                let repoCommits = document.createElement('p');
                repoCommits.textContent = 'Commits: ' + item['size'];
                //list of laugaes
                let repoLag = document.createElement('p');
                repoLag.textContent = 'Lauages Used: ' + item['language'];
                //number of watchers
                let repoWatch = document.createElement('p');
                repoWatch.textContent = 'Watchers: ' + item['watchers_count'];
                //Creation date
                let repoDate = document.createElement('p');
                repoDate.textContent = 'Created: ' + item['created_at'];
                //Update date
                let updateDate = document.createElement('p');
                updateDate.textContent = 'Updated: ' + item['updated_at'];
         


                // Append elements to the repository container
        
                repositoryDiv.appendChild(repoImage);
                repositoryDiv.appendChild(repoLink);
                repositoryDiv.appendChild(repoDecption);

                repositoryDiv.appendChild(repoCommits);
                repositoryDiv.appendChild(repoWatch);
               
                repositoryDiv.appendChild(repoDate);
                repositoryDiv.appendChild(updateDate);
                repositoryDiv.appendChild(repoLag);
                
                
               

                // Append repository container to the main container
                container.appendChild(repositoryDiv);
            }
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}
}

// Function to check the status of the response
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response.json());
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

async function fetchRepositories() {
    const username = document.getElementById('username').value;
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    gitHubUsername = username; // Set the gitHubUsername variable
}
// Call the function to fetch and display repositories
getUserRepos()
