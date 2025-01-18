import './register.css'

function Register() {
  return (
    <div className='resister'>
      <div className="regis">
        <div id="front">
          <h1 id="inh" className='font-bold text-[39px] ml-12'>Register</h1>
          <form>
            <div id="inpu1">
              <label id="label1">
                First Name:
              </label>
              <input id="input1" type='text' placeholder='John' required />
            </div>
            <div id="inpu2">
              <label id="label2">
                Last Name:
              </label>
              <input id="input2" type='text' placeholder='Doe' required />
            </div>
            <div id="inpu3">
              <label id="label3">
                Email:
              </label>
              <input id="input3" type='email' placeholder='john.doe@example.com' required />
            </div>
            <div id="inpu4">
              <label id="label4">
                Phone:
              </label>
              <input id="input4" type='text' placeholder='+91' />
            </div>
            <div id="inpu5">
              <label id="label5">
                Address:
              </label>
              <input id="input5" type='text' placeholder='123 main ,city,country' required />
            </div>
            <div id="inpu6">
              <label id="label6">
                Password:
              </label>
              <input id="input6" type='password' placeholder='Enter the password' required />
            </div>
            <div id="inpu7">
              <label id="label7">
                Confirm Password:
              </label>
              <input id="input7" type='password' placeholder='Enter confirm password' required />
            </div>
            <button id="rbtn"> Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register