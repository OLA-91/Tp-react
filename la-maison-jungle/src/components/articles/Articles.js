// import React from 'react';
// import Article from '../article/Article.js';
// import './Articles.css';
// import Image from '../../assets/monstera.jpg';
// import Image1 from '../../assets/lyrata.jpg';
// import Image2 from '../../assets/pothos.jpg';
// import Image3 from '../../assets/basil.jpg';
// import Image4 from '../../assets/mint.jpg';
// import Image5 from '../../assets/calathea.jpg';
// import Image6 from '../../assets/olivier.jpg';
// import Image7 from '../../assets/succulent.jpg';
// import Image8 from '../../assets/cactus.jpg';




// function Articles() {

//     return (
//         <>
//             <div className="body-container">
//                 <Article title='Monstera' image={Image} price="10€" />
//                 <Article title='Lyrata' image={Image1} price="10€" />
//                 <Article title='Pothos' image={Image2} price="10€" />



//             </div>
//             <div className="body-container">

//                 <Article title='basil' image={Image3} price="10€" />
//                 <Article title='mint' image={Image4} price="10€" />
//                 <Article title='calathea' image={Image5} price="10€" />


//             </div>

//             <div className="body-container">

//                 <Article title='olivier' image={Image6} price="10€" />
//                 <Article title='succulent' image={Image7} price="10€" />
//                 <Article title='cactus' image={Image8} price="10€" />


//             </div>
//         </>

//     )
// }

import React from 'react';
import Article from '../article/Article.js';
import { plantList } from '../../datas/plantList.js';
import './Articles.css';

function Articles() {
    const rows = [];
    const colsPerRow = 3;

    for (let i = 0; i < plantList.length; i += colsPerRow) {
        const row = plantList.slice(i, i + colsPerRow);
        const cols = row.map((plant) => (
            <Article
                key={plant.id}
                title={plant.name}
                image={plant.cover}
                price={`${plant.price}€`}
            />
        ));
        rows.push(<div className="row">{cols}</div>);
    }

    return <div className="body-container">{rows}</div>;
}

export default Articles;
