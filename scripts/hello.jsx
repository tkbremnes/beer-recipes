import React from 'react';
import CreateRecipeView from './CreateRecipeView.jsx';

class RecipeList extends React.Component {
  render() {
    let recipes = [];

    this.props.recipes.forEach(function (recipe, pos) {
      recipes.push(<Recipe recipe={recipe} key={pos} />);
    });

    return <div> { recipes } </div>
  }
}

class Recipe extends React.Component {
  render() {
    return <article className="card clickable">
        <header>{ this.props.recipe.name }</header>
        <table>
          <tbody>
            <tr>
              <th>ABV</th>
              <td>{ this.props.recipe.abv.toPrecision(2) }%</td>
            </tr>
            <tr>
              <th>IBU</th>
              <td>{ Math.round(this.props.recipe.ibu) }</td>
            </tr>
          </tbody>
        </table>
      </article>
  }
}

class BeerView extends React.Component {
  render() {
    return <div>{ this.props.recipe.name }</div>
  }
}

class RecipeScraper extends React.Component {
  render() {
    const url = 'temp';

    window.fetch('http://localhost:9000/kolsch-altbier/item/1881-koelsch-style-profile')
      .then(function (res) {
        return res.text();
      })
      .then(function (body) {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(body, "text/html");

        var content = htmlDoc.querySelector('#content-main')
          .querySelector('.itemBody')
          .querySelector('.itemFullText');

        console.log(content);
      });
  }
}

const staticRecipes = [
  {
    abv: 6.667858048422881,
    abw: 5.2172719080530054,
    author: "danielgtaylor",
    batchSize: 18.92705,
    boilSize: 11.35623,
    buToGu: 0.2947789199571786,
    bv: 0.7577864266251388,
    calories: 195.00334749781888,
    color: 10.100657561905829,
    fermentables: [
      {
        color: 10,
        late: false,
        name: "Munich liquid extract",
        weight: 2.26795,
        yield: 75.7346258709,
      },
      {
        color: 3,
        late: false,
        name: "Wheat liquid extract",
        weight: 1.36077,
        yield: 75.7346258709,
      },
      {
        color: 1,
        late: false,
        name: "Pilsner malt (steeped)",
        weight: 0.226795,
        yield: 73.5707794175,
      },
      {
        color: 34,
        late: false,
        name: "Caramunich (steeped)",
        weight: 0.226795,
        yield: 75.7346258709,
      },
      {
        color: 19,
        late: false,
        name: "Aromatic (steeped)",
        weight: 0.1133975,
        yield: 73.5707794175,
      }
    ],
    fg: 1.0096479445748985,
    fgPlato: 2.470248099146545,
    ibu: 17.775066759970656,
    mashEfficiency: 75,
    name: "Aramis Saison",
    og: 1.0602996535931157,
    ogPlato: 14.81185411741032,
    price: 33.94436787172289,
    primingCornSugar: 0.12961975028595002,
    primingDme: 0.17271702105852554,
    primingHoney: 0.15877900931027733,
    primingSugar: 0.11794749177270022,
    realExtract: 4.701610467248635,
    spices: [
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.0212615166549,
      },
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.00708717221828,
      },
    ],
    // style: Object,
    // timelineMap: Object,
    yeast: [
      {
        attenuation: 84,
        form: "Liquid",
        name: "WLP560 - Classic Saison Ale Blend",
        type: "Ale"
      }
    ]
  }
]

// React.render(<RecipeList recipes={staticRecipes} />, document.getElementById('container'));
// React.render(<BeerView recipe={staticRecipes[0]} />, document.getElementById('container'));
React.render(<CreateRecipeView />, document.getElementById('container'));
// React.render(<RecipeScraper />, document.getElementById('container'));
