import { Component} from 'react';




export class Filter extends Component {

    state = {
        name:'',
        coins:''
    }


    render(){
        // const {name, coins}

        return (
            <section className="filter-container">
                  <section>
                    <label htmlFor="name">Name</label>
                    {/* <input onChange={this.handleChange} type="text" id="name" name="name" value={model} /> */}
                </section>
            </section>
        )
    }
}