import API from "../api";

async function getDataForAuthorPage(userId) {
  try {
    const data = await API.users.getById(userId);
    const posts = await API.posts.getByUserId(userId);
    return {
      ...data,
      posts,
    };
  } catch (error) {
    console.log(error);
  }
}

export default getDataForAuthorPage;
