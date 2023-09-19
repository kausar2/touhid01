document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login');
    const friendsSection = document.getElementById('friends');
    const friendList = document.getElementById('friendList');

    function showLogin() {
        loginSection.classList.remove('hidden');
        friendsSection.classList.add('hidden');
    }

    function showFriends() {
        loginSection.classList.add('hidden');
        friendsSection.classList.remove('hidden');
    }

    const loginForm = document.querySelector('#login form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated login. Replace this with actual authentication logic.
        if (username === 'testuser' && password === 'testpassword') {
            showFriends();
            loadFriends();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    function loadFriends() {
        const friendData = [
            { name: 'Md Touhidul islam', image: 'tl.png' },
            { name: 'Shabbir', image: 'shabbir.jpg' },
            { name: 'hridoy', image: 'hridoy.jpg' },
            { name: 'rakib taloukder', image: 'rakib.jpg' },
            { name: 'jubayer ahmed', image: 'jobayer.jpg' },
            { name: 'shehab', image: 'shehab.jpg' },
            { name: 'nur mohammad', image: 'nur mohammad.jpg' },
            { name: 'sajeeb', image: 'sajeeb.jpg' },
            { name: 'nazmul bosni ', image: 'nazmul.jpg' },
            { name: 'prince', image: 'prince.jpg' },

            // Add more friend data here
        ];

        friendData.forEach(function(friend) {
            const friendDiv = document.createElement('div');
            friendDiv.classList.add('friend');
            friendDiv.innerHTML = `<img src="${friend.image}" alt="${friend.name}">
                                  <p>${friend.name}</p>`;
            friendList.appendChild(friendDiv);
        });
    }

    showLogin();
});






function submitFeedback() {
    var feedbackText = document.getElementById('feedback').value;
    
    if (feedbackText.trim() === '') {
        alert('Please enter feedback before submitting.');
        return;
    }

    var feedbackList = document.getElementById('feedbackList');
    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(feedbackText));
    feedbackList.appendChild(listItem);

    document.getElementById('feedback').value = '';
}
