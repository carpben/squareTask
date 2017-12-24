const COLUMNS = 10
const ROWS = 10
const COLOR_ODD = "red"
const COLOR_EVEN = "blue"

$(document).ready(
   ()=>{

      let html=""
      for (let i=0; i<ROWS ; i++){
         html+=`<div class="row${i}">`
            for (let j=0; j<COLUMNS; j++){
               const type = j%2? "odd" :"even"
               html+=`<div class="square ${type}"></div>`
            }
         html+="</div>"
      }

      const clickHandler = (ev)=>{
         console.log(ev)
         let row = parseInt($(ev.currentTarget).attr('data-row'))
         console.log(row)
      }
      $("#root").html(html)
      $(".square").click( function() {
         console.log(22)
         $(this).toggleClass('clicked');
      } )
   }
)
