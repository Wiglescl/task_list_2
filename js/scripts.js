const taskList = document.getElementById('task__list')
const elipsisBlock = document.getElementsByClassName('elipsis__block')

const taskArray = [
    { Title: 'Купить пива', Categories: 2, data: "27.04.2025" },
    { Title: 'Поехать в магазин', Categories: 2, data: "10.04.2025" },
    { Title: 'Выучить 100 новых слов', Categories: 2, data: "17.06.2025" }
]


function createTaskItem(taskArr) {
    taskArr.forEach(element => {
        taskList.insertAdjacentHTML('beforeend',
            `
            <li>
                <div class="container">
                    <div class="list__item">
                        <div class="head__first-block">
                            <input type="checkbox">
                            <p>${element.Title}</p>
                        </div>
                        <div class="head__info-block">
                            <p>${element.Categories}</p>
                            <p>${element.data}</p>
                        </div>
                        <div class="elipsis__block">
                            <span class="ellipsis"></span>
                        </div>
                    </div>
                </div>
            </li>
            `)
    })
}


function createElipsisWindow() {
    Array.from(elipsisBlock).forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation()
            if (!element.querySelector('.elipsis__window-settings')) {
                element.insertAdjacentHTML('beforeend',
                    `
                    <div class="elipsis__window-settings">
                                <button class="elipsis__button elipsis__button-edit">Edit</button>
                                <button class="elipsis__button elipsis__button-delete">Delete</button>
                            </div>
                `
                )
            } else {
                element.querySelector('.elipsis__window-settings').remove()
            }
            document.querySelectorAll('.elipsis__window-settings')
                .forEach(win => win.remove())
            element.insertAdjacentHTML('beforeend', `
                   <div class="elipsis__window-settings">
                       <button class="elipsis__button elipsis__button-edit">Edit</button>
                       <button class="elipsis__button elipsis__button-delete">Delete</button>
                    </div>
                `)
            document.addEventListener('click', () => {
    document.querySelectorAll('.elipsis__window-settings')
        .forEach(win => win.remove())
})

        })
    })
}

function render() {
    createTaskItem(taskArray)
    createElipsisWindow()
}








render()