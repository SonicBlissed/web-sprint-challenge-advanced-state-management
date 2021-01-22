import React, {useState} from 'react';
import axios from 'axios';
import {addSmurf} from '../actions';


const AddForm = props => {
        const [formData, setFormData] = useState({name:'', position:'', nickname:''});

        const handleChange = e => {
            const value = e.target.value;
            setFormData({
                ...formData,
                [e.target.name]:value,
                [e.target.position]:value,
                [e.target.nickname]:value,
            })
        }

        const handleSubmit = e => {
            e.preventDefault();
            console.log('test');
            props.dispatch(
                addSmurf(),
               )
            }



        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='position'>Position:</label>
                    <br/>
                    <input onChange={handleChange} name='position' id='position'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='nickname'>Nickname:</label>
                    <br/>
                    <input onChange={handleChange} name='nickname' id='nickname'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <br/>
                    <input onChange={handleChange} name='description' id='description'/>
                </div>
                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onSubmit={handleSubmit} type='submit'>Submit Smurf</button>
            </form>
        </section>);
    }

export default AddForm;