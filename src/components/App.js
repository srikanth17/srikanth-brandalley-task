import React from 'react';
import Item from './Item';
import data from '../../data';

const App = () => (
    <div>
        <div className="header">
            <div className="container">
                <h1 className="header-title">Brand Alley</h1>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {data.interface.sales[0].sale.map((sale) => {
                    // returning a component for each city
                    return (
                        <div key={sale.id} className="col-md-4 col-sm-6 col-xs-12">
                            <Item sale={sale}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);

export default App;