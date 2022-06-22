
const template = document.createElement('template')
template.innerHTML = /* html */ `
    <div class="container">
        <div class="controls">
            <div class="log-in active">LOG IN</div>
            <div class="sign-up">SIGN UP</div>    
        </div>
        <div class="inputs">
            <input class="email" type="email" placeholder="E-mail"></input>
            <input class="password" type="text" placeholder="Password"></input>
        </div>
        <div class="methods">
            <div class="continue">Log In</div>
            <div class="use-google">Use Google</div>
        </div>
        
    </div>
`

export default template
