import React from 'react';

import FermentablesComposite from '../FermentablesComposite/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';
import YeastsComposite from '../YeastsComposite/index.jsx';

class Recipe extends React.Component {
    render() {
        const {
            fermentables,
            hops,
            yeasts
        } = this.props.recipe;

        return (
            <div>
                <FermentablesComposite
                    fermentables={ fermentables }
                />

                <HopsComposite
                    hops={ hops }
                />

                <YeastsComposite
                    yeasts={ yeasts }
                />
            </div>
        )
    }
}
Recipe.propTypes = {
    recipe: React.PropTypes.object.isRequired
}

export default Recipe;
