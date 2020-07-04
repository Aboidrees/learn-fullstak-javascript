import React from "react";
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
import Axios from "axios";


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contest',
        contests: []
    };

    componentDidMount() {
        //ajax
        Axios.get('https://aboidrees.info/demo/store1/wp-json/wc/v3/products')
            .then(res => {
                this.setState({
                    //contests: res.data.contests,
                    contests: res
                });

                console.log(res.data);
            })
            .catch(console.error());

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                

            </div>
        );
    };
};

export default App;

{/* <div>
{this.state.contests.map(contest =>
    <ContestPreview key={contest.id} {...contest} />
)}
</div> */}