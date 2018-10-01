import React, {Component} from 'react';

class About extends Component {
    constructor(){
        super();
        this.state = {
            AddNew: [],
            txtName : ""
            
        }
    }
    
    onInputChange = e => {
        this.setState({ txtName: e.target.value });
    }

    onClick = () =>{
        let AddNewCopy = this.state.AddNew.slice();
        AddNewCopy.push(this.state.txtName);

        this.setState({ AddNew: AddNewCopy, txtName:""});
    }

    deleteTodo = i =>{
        let AddNewCopy = this.state.AddNew.slice();
        AddNewCopy.splice(i, 1);

        this.setState({ AddNew: AddNewCopy});
    }

    render(){
        const MarginPage ={
            marginTop : "30px"
        }
        
        let lopp = this.state.AddNew.map((e, i)=> {
            return (
                <div>
                    <td key={i}>{e}</td>
                    <td><button class="btn btn-success" onClick={() => this.deleteTodo(i)}> Delete </button></td>
                </div>
            )
        });


        return(
            <div class="row">
                <div class="col-lg-12">
                    <h2>Form Input</h2>
                    <form>
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control" value={this.state.txtName} onChange={this.onInputChange} placeholder="Isi Nama Anda"/>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <button type="button" class="btn btn-success" onClick={this.onClick}>Add New</button>
                    </form>
                </div>

                <div class="col-lg-12" style={MarginPage}>
                <table class="table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {lopp}
                            </tr>
                        </tbody>
                </table>
                   
                </div>
            </div>
        )
    }
}

export default About