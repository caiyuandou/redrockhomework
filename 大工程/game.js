// 获取 canvas 元素
const canvas = document.getElementById('gameCanvas');
// 获取 canvas 上下文
const ctx = canvas.getContext('2d');

// 定义吃豆人的位置和大小
let x = canvas.width / 2;
let y = canvas.height - 30;
const pacmanRadius = 15;

// 定义吃豆人的速度
let dx = 2;
let dy = -2;

// 定义豆子的位置和大小
let beans = [
    { x: 50, y: 50 },
    { x: 100, y: 100 },
    { x: 150, y: 150 }
  ];
  document.getElementById('reset-button').addEventListener('click', () => {
    beans = [
      generateBeanPosition(),
      generateBeanPosition(),
      generateBeanPosition()
    ];
    // 重置其他游戏变量
    // ...
  });
  
const beanRadius = 5;

// 定义墙壁的位置和大小
let walls = [];
const wallWidth = 20;
const wallHeight = 20;

// 绘制吃豆人的函数
function drawPacman() {
  ctx.beginPath();
  ctx.arc(x, y, pacmanRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();
}

// 绘制豆子的函数
function drawBean() {
    beans.forEach(bean => {
      ctx.beginPath();
      ctx.arc(bean.x, bean.y, beanRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
    });
  }
  

// 绘制墙壁的函数
function drawWalls() {
  walls.forEach(wall => {
    ctx.beginPath();
    ctx.rect(wall.x, wall.y, wallWidth, wallHeight);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
  });
}

// 检测吃豆人是否吃到了豆子的函数
function checkPacmanEatsBean() {
    beans.forEach((bean, index) => {
      if (x > bean.x - pacmanRadius && x < bean.x + pacmanRadius && y > bean.y - pacmanRadius && y < bean.y + pacmanRadius) {
        beans.splice(index, 1);
      }
    });
  }
  
// 清空 canvas 并绘制所有游戏元素的函数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacman();
    drawBean();
    drawWalls();
  }
  
  // 更新吃豆人的位置的函数
  function updatePacmanPosition() {
    // 如果吃豆人碰到了边界，就调整其速度使其反向移动
    if (x + dx > canvas.width - pacmanRadius || x + dx < pacmanRadius) {
      dx = -dx;
    }
    if (y + dy > canvas.height - pacmanRadius || y + dy < pacmanRadius) {
      dy = -dy;
    }
    // 更新吃豆人的位置
    x += dx;
    y += dy;
  }
  
  // 检测吃豆人是否撞墙的函数
  function checkPacmanHitsWall() {
    walls.forEach(wall => {
      if (x + pacmanRadius > wall.x && x - pacmanRadius < wall.x + wallWidth && y + pacmanRadius > wall.y && y - pacmanRadius < wall.y + wallHeight) {
        // 吃豆人撞到了墙壁，调整其速度使其反向移动
        dx = -dx;
        dy = -dy;
      }
    });
  }
  
  // 游戏主函数
  function gameLoop() {
    updatePacmanPosition();
    checkPacmanEatsBean();
    checkPacmanHitsWall();
    draw();
  }
  
  // 使用 setInterval 调用游戏主函数，以达到动画效果
  setInterval(gameLoop, 10);
  // 监听键盘事件
document.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 37: // 左键
        dx = -2;
        dy = 0;
        break;
      case 38: // 上键
        dx = 0;
        dy = -2;
        break;
      case 39: // 右键
        dx = 2;
        dy = 0;
        break;
      case 40: // 下键
        dx = 0;
        dy = 2;
        break;
    }
  });
  
// 生成墙壁的函数
function createWalls() {
    for (let i = 0; i < 10; i++) {
      let wall = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
      };
      walls.push(wall);
    }
  }
  function generateBeanPosition() {
    return {
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height)
    };
  }
  
  
  // 初始化游戏
  function init() {
    createWalls();
    beanX = Math.floor(Math.random() * canvas.width);
    beanY = Math.floor(Math.random() * canvas.height);
  }
  
  init();
    