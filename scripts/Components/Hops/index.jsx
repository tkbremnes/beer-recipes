import React from 'react';

import Hop from '../Hop/index.jsx';

class Hops extends React.Component {
    render() {
        function doThing(hops) {
            return hops.map((hop, index) => {
                return (
                    <Hop
                    name={ hop.name }
                    weight={ hop.weight }
                    ibu={ hop.ibu }
                    key={ index }
                    />
                )
            });
        }

        return (
            <div>
                { doThing(this.props.hops) }
            </div>
        )
    }
}

Hops.propTypes = {
    hops: React.PropTypes.array.isRequired
}

export default Hops;