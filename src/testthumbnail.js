const imageThumbnail = require('image-thumbnail');

try {
    const thumbnail = await imageThumbnail({ uri: 'https://images/dogs.jpg' });
    console.log(thumbnail);
} catch (err) {
    console.error(err);
}