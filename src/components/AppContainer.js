import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../components/core/Nav/Nav';
import Home from '../components/Home/Home';
import Liste from '../components/Liste/Liste';
import Discover from '../components/Discover/Discover';
import Advices from '../components/Advices/Advices';
import Card from './core/Card/Card';

import { recipes$ } from '../recipes';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          recipesList: [],
          recipesLikeList: []
        }
        this.onAdd = this.onAdd.bind(this);
        // this.onRemove = this.onRemove.bind(this);
        this.renderMovies = this.renderMovies.bind(this)
      }

      componentDidMount() {
        const recipes = recipes$;
        recipes.then(data => {
          this.setState({
            recipesList : data,
            newRecipeLikeList: [],
          })
          this.onAdd = this.onAdd.bind(this);
          this.onRemove = this.onRemove.bind(this);

        });
      }

      renderMovies() {
        const recipes = this.state.recipesList;
        console.log('const recipes :', recipes);
        // let arr = recipes.Object.keys(recipes);
        return recipes.map(
          (recipe, index) => <Card key={index} {...recipes} onAdd={this.props.onAdd} >{recipe.title}</Card>
          )
      }

      onAdd(recipe) {
        const newRecipeLikeList = this.state.recipesLikeList;
        newRecipeLikeList.push(recipe);
        console.log('consolelog du onAdd ; ', newRecipeLikeList);
      }

      onRemove(index) {
        let newRecipeLikeList = this.state.recipesLikeList.slice();
        newRecipeLikeList.splice(index, 1);
        this.setState({
          recipesLikeList: newRecipeLikeList
        })
      }

    render() {
        return(
            <div>
            <BrowserRouter>
                <Nav />
                <div className="container-fluid">
                    <Switch>
                    <Route path="/" exact component={() => <Home recipes={this.state.recipesList} onAdd={this.onAdd} ></Home>}/>
                        <Route path="/Discover" exact component={Discover} />
                        <Route path="/Liste" exact component={() => <Liste recipes={this.state.recipesLikeList} onAdd={this.onAdd} onRemove={this.onRemove} ></Liste>}/>                           
                        <Route path="/Advices" exact component={Advices} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default AppContainer;