var json ={
    point : {
        field: {
            w:1,
            h:1
        },
        cells: [
            [0, 0]
        ],
        reversed: true
    },
    bloc : {
        field: {
            w:4,
            h:4
        },
        cells: [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1]
        ],
        reversed: false
    },
    clignotant : {
        field: {
            w:5,
            h:5
        },
        cells: [
            [0, -1],
            [0, 0],
            [0, 1]
        ],
        reversed: false
    },
    planeur : {
        field: {
            w:5,
            h:5
        },
        cells: [
            [-1, 0],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1]
        ],
        reversed: false
    },
    vaisseau : {
        field: {
            w:5,
            h:5
        },
        cells: [
            [-1, 0],
            [-1, 1],
            [0, 2],
            [1, 2],
            [2, 1],
            [2, 0],
            [0, -1],
            [1, -1]
        ],
        reversed: false
    },
    pulsar : {
        field: {
            w:15,
            h:15
        },
        cells: [
            [-6, -4], 
            [-6, -3], 
            [-6, -2], 
            [-6, 2], 
            [-6, 3], 
            [-6, 4], 
            [-4, -6], 
            [-4, -1], 
            [-4, 1], 
            [-4, 6], 
            [-3, -6], 
            [-3, -1], 
            [-3, 1], 
            [-3, 6], 
            [-2, -6], 
            [-2, -1], 
            [-2, 1], 
            [-2, 6], 
            [-1, -4], 
            [-1, -3], 
            [-1, -2], 
            [-1, 2], 
            [-1, 3], 
            [-1, 4], 
            [1, -4], 
            [1, -3], 
            [1, -2], 
            [1, 2], 
            [1, 3], 
            [1, 4], 
            [2, -6], 
            [2, -1], 
            [2, 1], 
            [2, 6], 
            [3, -6], 
            [3, -1], 
            [3, 1], 
            [3, 6], 
            [4, -6], 
            [4, -1], 
            [4, 1], 
            [4, 6], 
            [6, -4], 
            [6, -3], 
            [6, -2], 
            [6, 2], 
            [6, 3], 
            [6, 4],
        ],
        reversed: false
    },
    canon : {
        field: {
            w:36,
            h:9
        },
        cells: [
            [-4, 10], 
            [-3, 8], 
            [-3, 10], 
            [-2, -2], 
            [-2, -1], 
            [-2, 6], 
            [-2, 7], 
            [-2, 20], 
            [-2, 21], 
            [-1, -3], 
            [-1, 1], 
            [-1, 6], 
            [-1, 7], 
            [-1, 20], 
            [-1, 21], 
            [0, -14], 
            [0, -13], 
            [0, -4], 
            [0, 2], 
            [0, 6], 
            [0, 7], 
            [1, -14], 
            [1, -13], 
            [1, -4], 
            [1, 0], 
            [1, 2], 
            [1, 3], 
            [1, 8], 
            [1, 10], 
            [2, -4], 
            [2, 2], 
            [2, 10], 
            [3, -3], 
            [3, 1], 
            [4, -2], 
            [4, -1],
        ],
        reversed: false
    },
}