//new bio
async function newBio (event) {
    event.preventDefault();

    const bio = document.querySelector('textarea[name="bio-text"]').value.trim();

    if (bio) {
        const response = await fetch('/api/users/bio', {
            method: 'POST',
            body: JSON.stringify({
                bio
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.bio-form').addEventListener('submit', newBio);