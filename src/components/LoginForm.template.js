
const template = document.createElement('template')
template.innerHTML = /* html */ `
    <div class="container">
        <div class="controls">
            <div class="login active">LOG IN</div>
            <div class="sign-up">SIGN UP</div>    
        </div>
        <div class="inputs">
            <input class="mail" type="email" placeholder="E-mail"></input>
            <input class="psw" type="text" placeholder="Password"></input>
        </div>
        <div class="using-google">USING GOOGLE</div>
    </div>
`

export default template
