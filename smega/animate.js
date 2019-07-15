window.onload = function(){
   $("#birthday").hide();

  var WIDTH = 1300;
  var HEIGHT = 600;
  var canvas, ctx;

  var pi = Math.PI;

  Particles = [];
  function pop(x, y, radius=15, speed=1){
    var particles = 16;
    var colors = ['#0088cc', '#c0de22', '#F0A626', '#26F08B', '#F0263A', '#8D49F2', '#49BFF2', '#8AF249'];
    var dir = ['N', 'NnE', 'NE', 'NeE', 'E', 'SeE', 'SE', 'SsE', 'S', 'SsW', 'SW', 'SwW', 'W', 'NwW', 'NW', 'NnW'];

    for(var i = 0; i < particles; i++){
      rc = colors[Math.round(Math.random()*(colors.length-1))];
      current_dir = dir[i];
      var x_pos = x;
      var y_pos = y;
      var rad = radius;
      var sp = speed;
      Particles.push({
        x: x_pos,
        y: y_pos,
        radius: rad,
        dir: current_dir,
        color: rc,
        speed: sp,
        go: true,

        update: function(){
          if(this.go){
            this.speed *= 1.15;
            //console.log(this.x, this.y)
            switch(this.dir){
              case "N":
                this.y -= this.speed;
                break;
              case "E":
                this.x += this.speed;
                break;
              case "S":
                this.y += this.speed;
                break;
              case "W":
                this.x -= this.speed;
                break;

              case "NW":
                this.y -= this.speed*0.75;
                this.x -= this.speed*0.75;
                break;
              case "SE":
                this.y += this.speed*0.75;
                this.x += this.speed*0.75;
                break;
              case "SW":
                this.y += this.speed*0.75;
                this.x -= this.speed*0.75;
                break;
              case "NE":
                this.y -= this.speed*0.75;
                this.x += this.speed*0.75;
                break;



              case "NnE":
                this.y -= this.speed*1;
                this.x += this.speed*0.375;
                break;
              case "NeE":
                this.y -= this.speed*0.375;
                this.x += this.speed*1;
                break;
              case "SeE":
                this.y += this.speed*0.375;
                this.x += this.speed*1;
                break;
              case "SsE":
                this.y += this.speed*1;
                this.x += this.speed*0.375;
                break;

              case "NnW":
                this.y -= this.speed*1;
                this.x -= this.speed*0.375;
                break;
              case "NwW":
                this.y -= this.speed*0.375;
                this.x -= this.speed*1;
                break;
              case "SsW":
                this.y += this.speed*1;
                this.x -= this.speed*0.375;
                break;
              case "SwW":
                this.y += this.speed*0.375;
                this.x -= this.speed*1;
                break;
              default:
                throw new Error("Direction is Not Assigned to Particle: " + this.dir);
            }
          }
        },
        draw: function(){
          if(!((this.x-this.radius) < 0 || (this.x+this.radius) > WIDTH || (this.y-this.radius) < 0 || (this.y+this.radius) > HEIGHT)){
            ctx.beginPath();
            ctx.arc((this.x), (this.y), this.radius, 0, 2 * pi);
            ctx.fillStyle = this.color;
            ctx.fill();
          } else {
            this.go = false
          }
        }
      })
    }
  }

  function fireworks(){
    window.setInterval(function(){
        var x = (Math.random()*(WIDTH-350))+350;
        var y = (Math.random()*(HEIGHT-150))+150;
        pop(x, y, radius = 4)
    }, ((Math.random()*(200))+200))
    window.setInterval(function(){
        var x = (Math.random()*(WIDTH-350))+350;
        var y = (Math.random()*(HEIGHT-150))+150;
        pop(x, y, radius = 8)
    }, ((Math.random()*(700))+300))
    window.setInterval(function(){
        var x = (Math.random()*(WIDTH-350))+350;
        var y = (Math.random()*(HEIGHT-150))+150;
        pop(x, y, radius = 14)
    }, ((Math.random()*(1500))+700))
  }

  var name = {
      x: null,
      y: null,
      alpha_1: 0,
      alpha_2: 0,
      alpha_3: 0,
      alpha_4: 0,
      alpha_5: 0,
      alpha_6: 0,

      pop1: true,
      pop2: true,
      pop3: true,
      pop4: true,
      pop5: true,
      pop6: true,
      fireworks: true,

      fade: true,

      draw: function(){
          this.color_1 = "rgba(255, 255, 255, " + this.alpha_1 + ")";
          this.color_2 = "rgba(255, 255, 255, " + this.alpha_2 + ")";
          this.color_3 = "rgba(255, 255, 255, " + this.alpha_3 + ")";
          this.color_4 = "rgba(255, 255, 255, " + this.alpha_4 + ")";
          this.color_5 = "rgba(255, 255, 255, " + this.alpha_5 + ")";
          this.color_6 = "rgba(255, 255, 255, " + this.alpha_6 + ")";

          ctx.fillStyle = this.color_1;
          ctx.font = "bold 75pt Monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("S", (this.x - 187.5), this.y);

          ctx.fillStyle = this.color_2;
          ctx.fillText("M", (this.x - 112.5), this.y);

          ctx.fillStyle = this.color_3;
          ctx.fillText("E", (this.x - 37.5), this.y);

          ctx.fillStyle = this.color_4;
          ctx.fillText("G", (this.x + 37.5), this.y);

          ctx.fillStyle = this.color_5;
          ctx.fillText("A", (this.x + 112.5), this.y);
      },

      update: function(){
          this.alpha_1 += 0.015;
          if(this.alpha_1 > 0.29){
            if(this.pop1){
              pop(this.x-187.5, this.y, radius=15, speed=2)
              this.pop1 = false;
            }
            this.alpha_2 += 0.015;
          }
          if(this.alpha_2 > 0.29){
            if(this.pop2){
              pop(this.x-112.5, this.y, radius=15, speed=2)
              this.pop2 = false;
            }
            this.alpha_3 += 0.015;
          }
          if(this.alpha_3 > 0.29){
            if(this.pop3){
              pop(this.x-37.5, this.y, radius=15, speed=2)
              this.pop3 = false;
            }
            this.alpha_4 += 0.015;
          }
          if(this.alpha_4 > 0.29){
            if(this.pop4){
              pop(this.x+37.5, this.y, radius=15, speed=2)
              this.pop4 = false;
            }
            this.alpha_5 += 0.015;
          }
          if(this.alpha_5 > 0.29){
            if(this.pop5){
              pop(this.x+112.5, this.y, radius=15, speed=2)
              this.pop5 = false;
            }
            this.alpha_6 += 0.015;
          }
          if(this.alpha_5 > 1.5){
            if(this.fireworks){
              fireworks();
              this.fireworks = false;
            }
          }
          if(this.alpha_5 > 11){
            if(this.fade){
              $('canvas').fadeOut(2000);
              $('#birthday').delay(3000).fadeIn(2000).delay(36000).fadeOut(2000);
              $('#txt').delay(3000).fadeIn(2000).delay(36000).fadeOut(2000);

              this.fade = false;
            }
          }
      }
  }

  function main(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d')
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    init()

    var loop = function(){
      update();
      draw();

      window.requestAnimationFrame(loop, canvas)
    }
    window.requestAnimationFrame(loop, canvas)
  }

  function init(){
    name.x = WIDTH/2;
    name.y = HEIGHT/2;
    //fireworks()
  }

  function update(){
    for(var particle in Particles){
      Particles[particle].update()
    }

    name.update()
  }

  function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    ctx.save()

    name.draw()

    for(var particle in Particles){
      Particles[particle].draw()
    }

    ctx.restore()
  }

  window.setTimeout(function(){main()}, 2000)
}
