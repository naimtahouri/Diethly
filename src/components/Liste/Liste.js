import React from 'react';
import CardLike from '../core/Card/CardLike';

class Liste extends React.Component {

    renderMovies() {
        const recipes = this.props.recipes;
        return recipes.map(
          (recipe, index) => <CardLike key={index} {...recipe}  onRemove={this.props.onRemove} >{index}</CardLike>
          )
      }

    render() {
        console.log('state of liste :', this.props.recipes)
        return(
            <div className='row'>
                <img className='img-fluid banniere-home d-none d-md-block d-lg-block d-xl-block' src='/images/banniere-3.bmp' alt='banniere'/>
                {this.renderMovies()}
            </div>
        )
    }
}

export default Liste;