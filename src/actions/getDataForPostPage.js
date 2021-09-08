import API from "../api";

async function getDataForPostPage(postId) {
  try {
    const { userId, ...rest } = await API.posts.getById(postId);
    const { username, website, company } = await API.users.getById(userId);
    const comments = await API.comments.getByPostId(postId);
    return {
      comments,
      author: {
        username,
        id: userId,
        website,
        companyName: company.name,
      },
      ...rest,
    };
  } catch (error) {
    console.log(error);
  }
}

export default getDataForPostPage;
