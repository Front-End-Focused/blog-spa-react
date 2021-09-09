import React, { Component} from 'react'
import PostItem from './PostItem'
import getDataForHomePage from '../actions/getDataForHomePage'

export default class PostsList extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        const data = await getDataForHomePage()
        this.setState({ data })
        
    }

    renderList = () => {
        return this.state.data.map((arcticle) => <PostItem key = {arcticle.id} title = {arcticle.title} body = {arcticle.body} id = {arcticle.id}/>)
    }

        render() {
            const { data } = this.state;
        return (
            data.length ? this.renderList() : 'please wait'
        )
    }
}

