import React from "react";
import PostItem from "./PostItem";
import getDataForHomePage from "../actions/getDataForHomePage";

function PostsList() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        async function getPosts() {
            const data = await getDataForHomePage();
            setData(data);
        };
        getPosts();
    }, [])

    function renderList() {
        return data.map((article) =>
            <PostItem title={article.title} body={article.body} id={article.id} />)
    }
    return data.length ? renderList() : "Please wait...";
}

// class PostsList extends React.Component {
//     state = {
//         data: [],
//     };

//     componentDidMount() {
//         this.getPosts()
//     }

//     getPosts = async () => {
//         const data = await getDataForHomePage();
//         this.setState({ data });
//     }

//     renderList = () => {
//         return this.state.data.map((article) => <PostItem title={article.title} body={article.body} id={article.id} />)
//     }

//     render() {
//         const { data } = this.state;
//         return data.length ? this.renderList() : "Please wait...";
//     }
// }

export default PostsList;