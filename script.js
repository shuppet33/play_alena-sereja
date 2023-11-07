const CELL_STATE = {
    Player1: 'Player1',
    Player2: 'Player2',
    IntermediateImpossible: 'IntermediateImpossible',
    IntermediatePossible: 'IntermediatePossible',
    Empty: 'Empty',
}

const matrix = {
    width: 20,
    height: 20,
    render(selector) {
        const parent = document.querySelector(selector)

        const table = document.createElement('table')
        parent.append(table)
        for (let i = 0; i < this.height; i++) {
            const tr =  document.createElement('tr')
            table.append(tr)
            for (let j = 0; j < this.width; j++) {
                const td = document.createElement('td')
                tr.append(td)
                td.dataset.x = j
                td.dataset.y = i
                td.dataset.state = CELL_STATE.Empty
            }
        }
    },
    fill(x, y, state) {
        const td = document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
        td.dataset.state = state
    }
}

matrix.render('#matrix')




