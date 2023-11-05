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
            }
        }
    }
}

matrix.render('#matrix')



