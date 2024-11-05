class Queen {
    constructor(max) {
        console.log('queen');
        this.max = max || 8;
        this.currentFecthNum = 0;
        this.queen = [];
    }
    add(fn) {
        this.queen.push(fn);
        this.processQueen();
    }
    processQueen() {
        if (this.queen.length > 0 && this.currentFecthNum <= this.max) {
            this.currentFecthNum += 1
            this.queen.shift()().finally(() => {
                this.currentFecthNum -= 1;
                this.processQueen();
            });
        }
    }
}