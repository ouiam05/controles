//Time
        var start = 0
        var end = 0
        var diff = 0
        var timerID = 0
        function chrono(){
            end = new Date()
            diff = end - start
            diff = new Date(diff)
            var sec = diff.getSeconds()
            var min = diff.getMinutes()

            if (min < 10){
                min = "0" + min
            }
            if (sec < 10){
                sec = "0" + sec
            }
            document.getElementById("timer").innerHTML = min + ":" + sec 
            timerID = setTimeout("chrono()", 10)
        }
  
        
        
        function chronoStart(){
           // document.chronoForm.startstop.disable= false
            start = new Date();
            chrono();
        }


//dragg

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
/*ctrl1 - M4 ouariali otmane*/
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}























/*ctrl1 - M4 ouariali otmane*/