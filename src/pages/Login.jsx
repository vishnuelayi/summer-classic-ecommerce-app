import React, {Component} from 'react'



class Login extends Component {

    state = {
        username:'',
        password:''
    }

    handleChange = (evt) => {
        const fields = Object.assign({}, this.state)
        fields[evt.target.name] = evt.target.value;
        this.setState({...fields})
    }

    render()
    {
        return (<div className='flex justify-center'>
            <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[30%] h-[400px] mobile:w-[90%]'>
            <text className='text-2xl'>Login</text>
                <div className='flex mt-3 h-[50px]'>
                    <input className='border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200'  placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} required/>
                </div>

                <div className='flex mt-3 h-[50px]'>
                    <input className='border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200' 
                    placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} required/>
                </div>
                <input type='button' value='Login' className='btn mt-7 hover:scale-[1.02]' />
            </div>
        </div>)
    }
}

export default Login
