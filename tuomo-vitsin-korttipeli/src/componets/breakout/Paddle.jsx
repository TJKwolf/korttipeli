export default (ctx, canvas, paddleProps) =>{
    class Paddle{
        constructor(x){
            this.x = x;
            this.y = canvas.heigth -30;
            this.heigth = 20;
            this.width = paddleProps.width;
            this.colors = ["white"]
        }

        move(){

        }
    }
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
}