const taskList = document.getElementById('task__list')

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
                        <span class="ellipsis">|</span>
                    </div>
                </div>
            </li>
            `)
    })
}

createTaskItem(taskArray)