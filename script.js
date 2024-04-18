function mincost(arr)

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        
        const top = this.heap[0];
        // Move the last element to the top and bubble it down
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0, length = this.heap.length;
        let element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function mincost(arr) {
    const minHeap = new MinHeap();
    arr.forEach(length => minHeap.push(length));

    let totalCost = 0;
    while (minHeap.size() > 1) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const cost = first + second;
        totalCost += cost;
        minHeap.push(cost);
    }

    return totalCost;
}

module.exports=mincost;
