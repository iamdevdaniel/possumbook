import {
    bookmark,
    bookmarkFilled,
    filePlus,
    filePlusFill,
    house,
    houseFill,
} from '../icons/'

const template = document.createElement('template')

template.innerHTML = /* html */ `
    <div class="feed">
        FEED
        ${house}
        ${houseFill}
    </div>
    <div class="saved">
        SAVED
        ${bookmark}
        ${bookmarkFilled}
    </div>
    <div class="create">
        CREATE
        ${filePlus}
        ${filePlusFill}
    </div>
`
export default template
