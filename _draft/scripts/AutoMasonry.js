class AutoMasonry {
    constructor (doc, options = {}) {
        this.element = doc.createElement("div")
        this.element.style.display = "grid"
        this.element.style.height = "100%"
        this.element.style.width = "100%"

        this.document = doc
        this.blocks = []
        this.displayedBlocks = []
        this.setOptions(options)
    }

    placeIntoTarget (target) {
        target.appendChild(this.element)
    }
    
    setOptions (options = {}) {
        this.options = {
            divX: options.divX > 0 ? options.divX : 7,
            divY: options.divY > 0 ? options.divY : 5,
            maxX: options.maxX > 0 ? options.maxX : 4,
            maxY: options.maxY > 0 ? options.maxY : 3,

            gridGap: options.gridGap || "0.5rem",

            blockBorder: options.blockBorder || "2px solid #555",

            shuffleBlocks: options.shuffleBlocks === true,
            repeatBlocks: options.repeatBlocks === true,
            //useDefaultBlock: options.useDefaultBlock === true
        }

        this.element.style.gridTemplateColumns =
            "minmax(0, 1fr) ".repeat(this.options.divX)
        this.element.style.gridTemplateRows =
            "minmax(0, 1fr) ".repeat(this.options.divY)

        this.element.style.gap = this.options.gridGap

        this.calculateMatrix()
    }

    addBlock (el, border = true) {
        if (border) el.style.border = this.options.blockBorder
        el.style.width = "100%"
        el.style.height = "100%"
        this.blocks.push(el)
    }

    addImage (url, description) {
        const img = this.document.createElement("img")
        img.src = url
        img.alt = description
        img.style.objectFit = "cover"

        this.addBlock(img)
    }

    clearBlocks () {
        this.blocks = []
    }
    
    clearGallery() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }
        this.displayedBlocks = []
        this.calculateMatrix()
    }

    calculateMatrix () {
        this.matrix = []
        for (let y = 0; y < this.options.divY; y++) {
            const row = []
            for (let x = 0; x < this.options.divX; x++) {
                row.push(false)
            }
            this.matrix.push(row)
        }
        
        this.displayedBlocks.forEach(block => {
            let cursorX = block.startX
            let cursorY = block.startY
            let endX = cursorX + block.spanX
            let endY = cursorY + block.spanY
            while (cursorY < endY) {
                this.matrix[cursorY][cursorX] = true
                cursorX++
                if (cursorX >= endX) {
                    cursorY++
                    cursorX = block.startX
                }
            }
        })
    }

    shuffleBlocks() {
        let i = this.blocks.length - 1
        for (;i >= 0; i--) {
            let j = Math.floor(Math.random() * this.blocks.length)
            let x = this.blocks[i]
            this.blocks[i] = this.blocks[j]
            this.blocks[j] = x
        }
    }

    getRandomBlock () {
        const index = Math.floor(Math.random() * this.displayedBlocks.length)
        return this.displayedBlocks[index]
    }

    removeBlock (block) {
        this.element.removeChild(block.block)
        this.displayedBlocks = this.displayedBlocks.filter(
            b => !(b.startX === block.startX
            && b.startY === block.startY)
        )
        this.calculateMatrix()
    }

    isFull () {
        return this.matrix.every(
            row => row.every(
                cell => cell === true
            )
        )
    }

    placeOneBlockRandom () {
        let done = false
        while (
            !this.isFull()
            && !done
        ) {
            let cursorX = Math.floor(Math.random() * this.options.divX)
            let cursorY = Math.floor(Math.random() * this.options.divY)

            while (
                cursorY < this.options.divY
                && this.matrix[cursorY][cursorX]
            ) {
                cursorX++
                if (cursorX >= this.options.divX) {
                    cursorY++
                    cursorX = 0
                }
            }

            done = this.placeBlock(cursorX, cursorY)
        }
    }

    addNextBlock (cursorX, cursorY, blockIndex = 0) {
        while (
            cursorY < this.options.divY
            && this.matrix[cursorY][cursorX]
        ) {
            cursorX++
            if (cursorX >= this.options.divX) {
                cursorY++
                cursorX = 0
            }
        }

        this.placeBlock(cursorX, cursorY, blockIndex)
    }

    placeBlock (cursorX, cursorY, blockIndex = 0) {
        this.calculateMatrix()
        if (
            cursorY >= this.options.divY
            || cursorX >= this.options.divX
            || this.matrix[cursorY][cursorX]
        ) {
            return false
        }
        // span
        let maxSpanX = 1
        while (
            cursorX + maxSpanX < this.options.divX
            && maxSpanX < this.options.maxX
            && !this.matrix[cursorY][cursorX + maxSpanX]
        ) {
            maxSpanX++
        }
        if (
            maxSpanX > 1
            && cursorX + maxSpanX < this.options.divX
            && this.matrix[cursorY][cursorX + maxSpanX]
        ) {
            maxSpanX--
        }
        const spanX = Math.ceil(Math.random() * maxSpanX)

        let maxSpanY = this.options.maxY
        let colSpanY = 1
        let col = cursorX
        const endCol = cursorX + spanX
        while (col < endCol) {
            while (
                cursorY + colSpanY < this.options.divY
                && colSpanY < maxSpanY
                && !this.matrix[cursorY + colSpanY][col]
            ) {
                colSpanY++
            }
            if (
                colSpanY > 1
                && cursorY + colSpanY < this.options.divY
                && this.matrix[cursorY + colSpanY][col]
            ) {
                colSpanY--
            }
            maxSpanY = colSpanY
            col++
        }
        const spanY = Math.ceil(Math.random() * maxSpanY)

        for (let y = cursorY; y < cursorY + spanY; y++) {
            for (let x = cursorX; x < cursorX + spanX; x++) {
                this.matrix[y][x] = true
            }
        }

        // block
        let block
        console.log(blockIndex)
        if (blockIndex < this.blocks.length) {
            console.log("yeah")
            block = this.blocks[blockIndex]
        } else {
            if (
                this.options.shuffleBlocks &&
                blockIndex === this.blocks.length
            ) {
                this.shuffleBlocks()
            }

            if (
                this.options.repeatBlocks 
                && this.blocks.length > 0
            ) {
                block = this.blocks[blockIndex % this.blocks.length]
                    .cloneNode(true)
            } else {
                block = this.document.createElement("div")

                const color = "#" + (
                    (Math.floor(Math.random() * 0xff) << 16)
                    + (Math.floor(Math.random() * 0xff) << 8)
                    + Math.floor(Math.random() * 0xff)
                ).toString(16).padStart(6, "0")

                block.style.background = color
                block.style.border = this.options.blockBorder
            }
        }

        const displayedBlock = {
            startX: cursorX,
            startY: cursorY,
            spanX: spanX,
            spanY: spanY,
            block: block
        }
        this.displayedBlocks.push(displayedBlock)

        block.style.gridColumn = cursorX + 1 + " / span " + (spanX)
        block.style.gridRow = cursorY + 1 + " / span " + (spanY)

        this.element.appendChild(block)

        return true
    }

    reset () {
        this.clearGallery()
        this.fill()
    }

    fill() {
        let blockIndex = 0
        while (!this.isFull()) {
            this.addNextBlock(0, 0, blockIndex)
            blockIndex++
        }
    }
}