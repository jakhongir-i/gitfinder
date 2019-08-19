const github = new GitHub;
const ui = new UI;

const searchInput = document.querySelector('#searchUser');

searchInput.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  
  if(userText !== '') {
    // Http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show error
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})