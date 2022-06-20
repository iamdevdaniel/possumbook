import { 
    arrow,
    arrowFilled,
    chat,
    chatFilled,
    save,
    saveFilled,
} from '../icons/'

const template = document.createElement('template')

template.innerHTML = /* html */ `
    <div class="header"></div>
    <img class="image">
    <div class="controls">
        <div class="vote">
            ${arrow}
            ${arrowFilled}
            <div class="count">0</div>
        </div>
        <div class="comment">
            ${chat}
            ${chatFilled}
            <div class="count">0</div>
        </div>
        <div class="save">
            ${save}
            ${saveFilled}
        </div>
    </div>
`

export default template