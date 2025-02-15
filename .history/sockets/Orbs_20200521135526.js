class Orb {
  constructor() {
    this.color = this.getRandomColor();
    this.locX = Math.floor(Math.random() * 500);
    this.locY = Math.floor(Math.random() * 500);
    this.radius = 5;
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 200 + 50);
    const g = Math.floor(Math.random() * 200 + 50);
    const b = Math.floor(Math.random() * 200 + 50);

    return `rgb(${r},${g},${b})`;
  }
}
