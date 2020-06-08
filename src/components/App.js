import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from '../components/search/SearchBar';
import ImageList from '../components/image/ImageList';

class App extends Component {
    //set initional state
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        });
        this.setState({
            images: response.data.results
        });
    }

    //bydefault load 10 images
    componentDidMount(){
        this.loadDefaultImages();
    }

    loadDefaultImages = () => {
        unsplash.get('/photos')
        .then((response) => {
            this.setState({
                images: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1>React: Simple Image Search App</h1>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <p>{this.state.images.length? `Number of images ${this.state.images.length}`: 'No image found!'}</p>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;