// Simple filter for blog posts by tag
function filterPosts(tag) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        if (!tag || post.dataset.tags.includes(tag)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// contact form basic validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}
