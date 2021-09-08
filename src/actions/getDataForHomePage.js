import API from "../api";

async function getDataForHomePage() {
  try {
    return await API.posts.getAll();
  } catch (error) {
    console.log(error);
  }
}

export default getDataForHomePage;
