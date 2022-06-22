import {
    bookmark,
    bookmarkFilled,
    house,
    houseFill,
    plus,
    plusFill,
} from '../icons/'

const template = document.createElement('template')

template.innerHTML = /* html */ `
    <div class="controls">
        <div class="feed active">
            FEED
            ${house}
            ${houseFill}
        </div>
        <div class="create">
            CREATE
            ${plus}
            ${plusFill}
        </div>
    </div>
    <div class="container"></div>
`
export default template

/*
<div class="saved">
    SAVED
    ${bookmark}
    ${bookmarkFilled}
</div>
*/
        