import React from "react";
import { useParams } from "react-router-dom";
import getDataForAuthorPage from "../actions/getDataForAuthorPage";
import PostItem from "./PostItem";
import { AvatarIcon } from "./Icons"

function AuthorPage() {
    const [data, setData] = React.useState()
    let { id } = useParams();
    React.useEffect(() => {
        async function getAuthor() {
            const data = await getDataForAuthorPage(id);
            setData(data);
        }
        getAuthor();
    }, [id])

    function AuthorImage() {
        let { photo } = data;
        return (
            <div className="flex-grow-1 ms-3">
                <img width="200" src={photo.url} alt={photo.title} />
            </div>
        )
    }

    function PostsSection() {
        let { posts } = data;
        if (!posts.length) return;
        const dataPost = posts.map((article) => <PostItem title={article.title} body={article.body} id={article.id} key={`post-${article.id}`} />)
        return (
            <section className="mt-5 mb-5">
                <h4 className="mb-5">Posts ({posts.length})</h4>
                {dataPost}
            </section>
        )
    }

    return data ? (
        <main>
            <section className="d-flex mt-5 mb-5">
                <div className="flex-shrink-0">
                    <AvatarIcon />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h4>{data.name}</h4>
                    <p>{data.company.name} . {data.company.catchPhrase}</p>
                    <p>{data.company.bs}</p>
                    <p>{data.website}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.address.street}, {data.address.city}, {data.address.zipcode}</p>
                </div>
                <AuthorImage />
            </section>
            <hr />
            <PostsSection />
        </main>
    ) : "Please wait..."
}

export default AuthorPage;
