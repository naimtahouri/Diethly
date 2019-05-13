import React from 'react';

class CardLike extends React.Component {
    render() {
        return(
            <div className='col-12 col-md-6 col-lg-6 col-xl-4 mt-5'>
            <div className='box-card'>
                <img className='img-fluid img-recette' src={this.props.images} alt='img'/>
                <div className='box-title m-1'>
                    <h1 className='title-recipe'>{this.props.title}</h1>
                    <h2 className='title-category'>{this.props.category}</h2>
                </div>
            <div className='box-rate'>
                <h3 style={{
                    color:'green'
                }}>{this.props.likes}</h3>
                <img className=' img-fluid coeur-brise' src= '/images/coeur-brise.png' alt='coeur-brise' onClick={() => this.props.onRemove(this.props.children)} />
                <h3 style={{
                    color:'red'
                }}>{this.props.dislikes}</h3>
            </div>
        </div>
      </div>
        )
    }
}

export default CardLike;