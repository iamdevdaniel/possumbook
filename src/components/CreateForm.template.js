import { 
    save,
    saveFilled,
    xCircle,
    xCircleFilled,
} from '../icons/'

const template = document.createElement('template')

template.innerHTML = /* html */ `
    <div class="container">
        <input class="header" type="text" placeholder="Header"></input>
        <input class="image" type="text" placeholder="Image URL"></input>
        <div class="controls">
            <div class="cancel">
                ${xCircle}
                ${xCircleFilled}
            </div>
            <div class="save">
                ${save}
                ${saveFilled}
            </div>
        </div>
    </div>
`

export default template