const CELL_STATE = {
    Player1: 'Player1',
    Player2: 'Player2',
    IntermediateImpossible: 'IntermediateImpossible',
    IntermediatePossible: 'IntermediatePossible',
    Empty: 'Empty',
}

const CELL_STATE_KEYMAP = {
    1: CELL_STATE.Player1,
    2: CELL_STATE.Player2,
    3: CELL_STATE.IntermediateImpossible,
    4: CELL_STATE.IntermediatePossible,
    0: CELL_STATE.Empty,

}

const matrix = {
    width: 20,
    height: 20,
    activeCell: {
        x: 0,
        y: 0,
    },
    render(selector) {
        const parent = document.querySelector(selector)

        const table = document.createElement('table')
        table.addEventListener('mousemove',(event) => {
            this.activeCell.x = Number(event.target.dataset.x)
            this.activeCell.y = Number(event.target.dataset.y)
        })
        document.addEventListener('keydown', (event) => {
            console.log('ALENA', event.key)
            const td = document.querySelector(`[data-x="${this.activeCell.x}"][data-y="${this.activeCell.y}"]`)

            if (CELL_STATE_KEYMAP[event.key]) {
                td.dataset.state = CELL_STATE_KEYMAP[event.key]
            }
        })
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
    },
}

matrix.render('#matrix')




