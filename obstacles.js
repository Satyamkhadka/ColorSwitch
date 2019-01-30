
var NUMBER_OF_CALLS = 0;
var LOC_OF_OBS;
var OBS_OBJ;
var OBS_DIAM;


function check() {

    alert("it works!");
}


class Obstacle {

    constructor() {

       // nothing
    }
    setObstacle(){
        Obstacle.setObstacle_stat();
    }
    static setObstacle_stat() {
        
        NUMBER_OF_CALLS++;
       
        console.log(NUMBER_OF_CALLS);
        var colors = Obstacle.getRandomColors();
        var valid = Obstacle.randomNumber(4);
        colors[valid] = BALL_COLOR;
        OBS_OBJ = document.createElement('div');

        if (NUMBER_OF_CALLS <= 5) {
            var obs_diam = 150;
            OBS_DIAM=obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderLeftColor = 'red';
            OBS_OBJ.style.borderRightColor = 'yellow';
            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderLeftColor = colors[0];
            OBS_OBJ.style.borderRightColor = colors[1];
            OBS_OBJ.style.borderTopColor = colors[2];
            OBS_OBJ.style.borderBottomColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        }
        else if (NUMBER_OF_CALLS>5 || NUMBER_OF_CALLS<=10) {
            var obs_diam = 130;
            OBS_DIAM=obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid"; 

            OBS_OBJ.style.borderLeftColor = 'red';
            OBS_OBJ.style.borderRightColor = 'yellow';
            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderLeftColor = colors[0];
            OBS_OBJ.style.borderRightColor = colors[1];
            OBS_OBJ.style.borderTopColor = colors[2];
            OBS_OBJ.style.borderBottomColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        }
        else if (NUMBER_OF_CALLS>10 || NUMBER_OF_CALLS<=15){
            var obs_diam = 110;
            OBS_DIAM=obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderLeftColor = 'red';
            OBS_OBJ.style.borderRightColor = 'yellow';
            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderLeftColor = colors[0];
            OBS_OBJ.style.borderRightColor = colors[1];
            OBS_OBJ.style.borderTopColor = colors[2];
            OBS_OBJ.style.borderBottomColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        }
        else{
            var obs_diam = 90;
            OBS_DIAM=obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderLeftColor = 'red';
            OBS_OBJ.style.borderRightColor = 'yellow';
            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderLeftColor = colors[0];
            OBS_OBJ.style.borderRightColor = colors[1];
            OBS_OBJ.style.borderTopColor = colors[2];
            OBS_OBJ.style.borderBottomColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ); 
        }



    }


    static randomNumber(num) {


        return Math.floor(Math.random() * num);
    }

    static getRandomColors() {
        var textArray = [
            'aqua',
            '#6adca1',
            'cyan',
            'red',
            'green',
            'blue',
            'skyblue',
            'pink',
            'indigo',
            'lime',
            'magenta',
            'yellowgreen'

        ];
        var AL = textArray.length;
        var randomArray = [
            textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)]
        ];
        //randomArray[Obstacle.randomNumber(4)] = this.color;
        return randomArray;
    }


    

    changeLocation() {
        var top_pos = parseInt(OBS_OBJ.style.top);

        //OBS_OBJ.classList.add('translatee');

        OBS_OBJ.style.top = top_pos + 1 + 'px';
        //OBS_OBJ.style.transform = "translateY(20px)"; 
        if (top_pos > (FRAME_HEIGHT-(OBS_DIAM)-15)) {
            OBS_OBJ.remove();
            OBS_OBJ = null;
            OBS_INS = null;

            Obstacle.setObstacle_stat();
            //call to the new obstacle object creator function method
            
            

        }

    }

    resetGame(){
        OBS_OBJ.remove();
        Obstacle.setObstacle_stat();
        // show game stats



        NUMBER_OF_CALLS=0;
    }

}