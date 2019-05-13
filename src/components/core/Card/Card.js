import React from 'react';

class Card extends React.Component {

    render() {
        console.log(this.props.etapes);
        return(
            <div className='col-12 col-md-6 col-lg-6 col-xl-4 mt-5'>
            <div className='box-card'>
                <img className='img-fluid img-recette' src={this.props.images} alt='img'/>
                <div className='box-title m-1'>
                    <h1 className='title-recipe'>{this.props.title}</h1>
                    {/* <h3>Etapes : {this.props.etapes}</h3> */}
                </div>
            <div className='box-pouces'>
                <img className='pouce-vert' src= '/images/pouce-vert.png' alt='pouce vert' />
                <img className='pouce-rouge' src= '/images/pouce-rouge.png' alt='pouce rouge' />
            </div>
            <div className='box-rate'>
                <h3 style={{
                    color:'green'
                }}>{this.props.likes}</h3>
        <img className=' img-fluid coeur-like' src= '/images/coeur.png' alt='coeur' onClick={() => this.props.onAdd({
            title: this.props.title,
            images: this.props.images
          })
        }/> 
                <h3 style={{
                    color:'red'
                }}>{this.props.dislikes}</h3>
            </div>
            <div className='barre-dislikes'>
                <div className='barre-likes'></div>
            </div>
        </div>
      </div>
        )
    }
}

export default Card;