import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props)
        
        this.imgageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount(){
        this.imgageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
        const imageHeight = this.imgageRef.current.clientHeight;
        const imageSpan = Math.ceil(imageHeight / 10);
        this.setState({spans: imageSpan});
    }
    
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
               <img ref={this.imgageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default ImageCard;