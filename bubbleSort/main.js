

const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");

class BubbleSort {
    constructor(arrayLength) {
        this.array = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 500) + 10);
        this.color = this.getRandomColor();
        this.temp = null;
        this.xPositions = Array.from({ length: this.array.length }, (_, i) => 10 + i * 50);
        this.currentStep = 0;
        this.isSwapping = false;
        this.swapProgress = 0;
        this.swapSpeed = 0.005;
        this.opacity = 1; 
        setInterval(() => {           
            this.color = this.getRandomColor();
        }, 200);
    }

    draw() {
        for (let i = 0; i < this.array.length; i++) {
            c.beginPath();
            c.rect(this.xPositions[i], 600, 40, -this.array[i]);
            c.fillStyle = this.color; 
            c.fill();
        }
    }

    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    sortStep() {
        if (this.currentStep < this.array.length - 1) {
            const j = this.currentStep;
            if (this.array[j] > this.array[j + 1]) {
                this.isSwapping = true;
               
                // Interpolate xPositions to simulate smooth movement
                this.xPositions[j] += this.swapSpeed * (10 + (j + 1) * 50 - this.xPositions[j]);
                this.xPositions[j + 1] += this.swapSpeed * (10 + j * 50 - this.xPositions[j + 1]);
    
                // Update the swap progress
                this.swapProgress += this.swapSpeed;
    
                if (this.swapProgress >= 1) {
                    // Swap the elements in the array and reset variables
                    const temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    this.isSwapping = false;
                }
            } else {
                this.currentStep++;
            }
        } else {
            this.swapProgress = 0;
            this.currentStep = 0;
        }
    }
    

    move() {
        for (let i = 0; i < this.array.length; i++) {
            const targetX = 10 + i * 50;
            const diff = targetX - this.xPositions[i];
            this.xPositions[i] += diff * 0.05;
        }
    }

    update() {
        this.sortStep();
        this.move();
        this.draw();
    }
}

const obj = new BubbleSort(20);

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    obj.update();
    requestAnimationFrame(animate);
}

animate();
