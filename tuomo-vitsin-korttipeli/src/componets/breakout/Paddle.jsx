export default (ctx, canvas, paddleProps) =>{
    class Paddle{
        constructor(x){
            this.x = x;
            this.y = canvas.height -30;
            this.heigth = 20;
            this.width = paddleProps.width;
            this.colors = ["red", "#FFA62B"];
        }

        move(){
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.heigth);
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.strokeStyle = this.broke ? "white" : "red";
            ctx.lineWidth = 1;
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.shadowBlur = 0;
            ctx.shadowColor = "blue";
            ctx.strokeRect(this.x, this.y, this.width, this.heigth);
            ctx.fill();
        }
    }
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    if (paddleProps.x <= 0) {
        paddleProps.x = 0;
      } else if (paddleProps.x + paddleProps.width >= canvas.width) {
        paddleProps.x = canvas.width - paddleProps.width;
      }
}