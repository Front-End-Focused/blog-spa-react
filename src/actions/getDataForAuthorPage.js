import API from "../api";

async function getDataForAuthorPage(userId) {
  try {
    const data = await API.users.getById(userId);
    const posts = await API.posts.getByUserId(userId);
    const photos = await API.albums.getPhotosById();
    const {title, url} = photos[0]
    return {
      ...data,
      posts,
      photos: {
        title,
        url
      }
    };
  } catch (error) {
    console.log(error);
  }
}

export default getDataForAuthorPage;
