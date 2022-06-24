import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: false,
            content: '',
            isClear: false,
        };
    }

    handleContent(event) {
        const inputValue = event.target.value;
        this.setState({
            content: inputValue,
        });
    }

    handleClickAdd() {
        this.setState({isAdded: true});
    }

    handleClickClear() {
        this.setState({isClear: true});
    }

  render() {
    let added;
    if(this.state.isAdded) {
        added = (
            <div className='content'>
                <input type='checkbox'/>
                <input type='text' value={this.state.content} disabled/>
                <button>CLEAR</button>
            </div>  
        );
    }

    return (
        <form>
            <div className="container">
                <h1>To-Do List</h1>
                <div className='wrapper-add'>
                    <input type='text' placeholder='Add you need' onChange={(event) => {this.handleContent(event)}}/>
                    <button onClick={() => this.handleClickAdd()}>ADD</button>
                </div>
                {added}
            </div>
        </form>
    )
  }
}
