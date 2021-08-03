class Drop{
    constructor(){
          this.x = random(0, 1000);
          this.y = random(0, 400);
          this.image =loadImage("drop.png");
          this.next=createButton("NEXT");
        
          }

          update() {
              this.y = this.y + 10;

              if (this.y > 500) {
                  this.x = random(0, 700);
                  this.y = random(0, 500);
                  
              }
          }

          display() {
           
              imageMode(CENTER);
              image(this.image,this.x,this.y,70,70);
              this.next.position(displayWidth-100,700);
              this.next.style("color","orange");

              this.next.mousePressed(()=>{
                backgroundMusic.loop()
                var img=createImg("bg2.jpeg")
                img.position(displayWidth/2-700,displayHeight/2-600)

              nanna1.visible = false;
              nanna2.visible = false;
              nanna3.visible= false;
              text.visible=false;
              snow.visible=false;
              

                })

              
          }
    
}