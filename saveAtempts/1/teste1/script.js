
const canvas = document.getElementById("backgroundGrid");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
}

function drawGrid() {
resizeCanvas();
ctx.clearRect(0, 0, canvas.width, canvas.height);

const cellSize = 50;
const cols = Math.ceil(canvas.width / cellSize);
const rows = Math.ceil(canvas.height / cellSize);

// Configuração de chance (entre 0 e 1) para cada tamanho
const chanceGrande = 0.4;
const chanceMedio = 0.3;
const chancePequeno = 0.2;

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
    const baseX = x * cellSize;
    const baseY = y * cellSize;

    // Tamanhos relativos
    const sizes = [
        { chance: chanceGrande, factor: 0.8 },
        { chance: chanceMedio, factor: 0.55 },
        { chance: chancePequeno, factor: 0.3 }
    ];

    sizes.forEach(size => {
        if (Math.random() < size.chance) {
        const boxSize = cellSize * size.factor;
        const offset = (cellSize - boxSize) / 2;

        ctx.lineWidth = 2 + Math.random(); // entre 2 e 3px
        ctx.strokeStyle = "#000";
        ctx.strokeRect(baseX + offset, baseY + offset, boxSize, boxSize);
        }
    });
    }
}
}

window.addEventListener("load", drawGrid);
window.addEventListener("resize", drawGrid);



const container = document.querySelector(".projects-container");
  let isDown = false;
  let startX, scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("mouseleave", () => {
    isDown = false;
  });
  container.addEventListener("mouseup", () => {
    isDown = false;
  });
  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });