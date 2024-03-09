const stars = document.querySelectorAll('.stars');
    let userRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            userRating = index + 1;
            updateStars(userRating);
            calculateRating();
        });
    });

    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function calculateRating() {
        const avgRatingElement = document.getElementById('avg-rating');
        const totalRatings = 5; // Assume 5 ratings for simplicity
        let totalStars = userRating;
        let avgRating = totalStars / totalRatings;
        avgRatingElement.textContent = `Average Rating: ${avgRating.toFixed(1)}`;
    }
    document.getElementById('openDialog').addEventListener('click', function() {
        document.getElementById('dialogBox').style.display = 'block';
    });
    
    document.getElementById('closeDialog').addEventListener('click', function() {
        document.getElementById('dialogBox').style.display = 'none';
    });
    
    // Simulate multiple users' comments before the main user's post
    simulateOtherUsersComments();
    
    // Function to simulate multiple users' comments
    function simulateOtherUsersComments() {
        // List of simulated users
        var users = ['Alice', 'Bob', 'Charlie'];
    
        // Loop through each user to generate comments
        users.forEach(function(user) {
            // Generate a comment from the current user
            var userComment = document.createElement('p');
            userComment.textContent = user + ': ' + generateUserComment();
            userComment.className = 'userComment'; // Add userComment class for styling
            dialogMessages.appendChild(userComment);
        });
    }
    
    // Function to generate comments from other users
    function generateUserComment() {
        // List of comment templates
        var comments = [
            "I think this is great!",
            "Interesting topic!",
            "I'm not sure about that.",
            "Can you explain further?",
            "I completely agree!",
            "I disagree, but I respect your opinion.",
            "That's a unique perspective.",
            "I see what you mean.",
            "I hadn't thought of it that way before.",
            "Fascinating!",
            "Tell me more about that.",
            "That's something to consider.",
            "I appreciate your input.",
            "Hmm, I'll have to think about that.",
            "That's a valid point.",
            "I'm curious to hear more."
        ];
    
        // Generate a random comment from the list
        var randomComment = comments[Math.floor(Math.random() * comments.length)];
    
        return randomComment;
    }
    
    document.getElementById('sendMessage').addEventListener('click', function() {
        var userInput = document.getElementById('userInput').value;
        var dialogMessages = document.getElementById('dialogMessages');
    
        var userMessage = document.createElement('p');
        userMessage.textContent = 'You: ' + userInput;
        userMessage.className = 'userMessage'; // Add userMessage class for styling
        dialogMessages.appendChild(userMessage);
    
        document.getElementById('userInput').value = '';
    });
    
    // Allow pressing Enter to send message
    document.getElementById('userInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('sendMessage').click();
        }
    });
    