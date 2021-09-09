import API from "../api";

async function getDataForAuthorPage(userId) {
  try {
    const data = await API.users.getById(userId);
    const posts = await API.posts.getByUserId(userId);
    const photo = await API.albums.getPhotosById();
    const { title, url } = photo[0];
    return {
      ...data,
      photo: {
        title,
        url,
      },
      posts,
    };
  } catch (error) {
    console.log(error);
  }
}

export default getDataForAuthorPage;
