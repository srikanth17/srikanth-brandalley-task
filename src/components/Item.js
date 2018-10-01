import React from 'react';
import ReactTooltip from 'react-tooltip'
import moment from 'moment';

// calls the update function when component mounts & starts the timer
class Item extends React.Component {
    state = {
        time: null
    };
    componentDidMount() {
        this.update();
    }
    update = () => {
        let startTimer = setInterval(() => {
            let now = moment();
            let endDate = moment(this.props.sale.end, 'YYYY-MM-DD HH:mm:ss');
            if(endDate < now) {
                this.setState({ time: '00:00:00' });
                clearInterval(startTimer);
            } else {
                const timeLeft = moment(endDate - now);
                const formatted = timeLeft.format('HH:mm:ss');

                this.setState({ time: formatted });
            }
        }, 1000);
    };
    render() {
        let now = moment();
        let endDate = moment(this.props.sale.end, 'YYYY-MM-DD HH:mm:ss');
        let days = moment(endDate - now).format('D')-1;
        if(endDate < now)
            days = 'Today';
        else if(days <= 1)
            days = 'Today';
        else
            days = days + ' Days';

        return (
            <div className="card">
                <div className="card-body">
                    <ReactTooltip place="bottom" type="light" effect="float" className="test"/>
                    <a data-tip={this.props.sale.description} href={this.props.sale.url}>
                        <img className="card-img-top" src={this.props.sale.image}/>
                    </a>
                    <p className="card-title">
                        {this.props.sale.title}
                        {this.props.sale.delivery[0] !== '' ?
                            <span className="right">
                                <i className="fas fa-truck">&nbsp;</i>
                                {this.props.sale.delivery}
                            </span> :
                            <span className="right">
                                <i className="fas fa-truck">&nbsp;</i>
                                Not Available
                            </span>
                        }
                    </p>
                    <p className="card-text">
                        {days !== 'NaN Days' ? <strong>Ends {days} </strong> : <strong>Not Available</strong>}
                        {days !== 'NaN Days' && this.state.time}
                        <span className="right" style={{color: 'red'}}>
                    {this.props.sale.discount}
                    </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Item;