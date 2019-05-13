import React from 'react';
import Card from '../core/Card/Card';

class Home extends React.Component {
      
renderMovies() {
    const recipes = this.props.recipes;
    return recipes.map(
        (recipe, index) => <Card key={index} {...recipe} onAdd={this.props.onAdd}>{recipe.title}</Card>
        )
    }

    render() {
        // console.log(this.props.recipes)
        return(
            <div className='row '>
                <img className='img-fluid banniere-home d-none d-md-block d-lg-block d-xl-block' src='/images/banniere-4.bmp' alt='banniere'/>
                {this.renderMovies()}
            </div>
            
        )
    }
}

export default Home;