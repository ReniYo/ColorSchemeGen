let seedColorEl = document.getElementById("seed-color").value.substring(1)
let colorSchemeModeEl = document.getElementById("color-scheme-mode").value
const colorSchemeBtn = document.getElementById("color-scheme-btn")
const colorScheme = document.getElementById("color-scheme")
let colorHex = []

function render() {
    let html = ``
    for(hex of colorHex){
            html += `
            <div class="container-color">
                <div class="color-style" id="bkg-color${hex}"></div>
                <div>
                    <h3>#${hex}</h3>
                </div>
            </div>
            `  
        }
        colorScheme.innerHTML = html
        renderColors()
        colorHex = []
}

function renderColors() {
    for(let i = 0; i < colorHex.length; i++) {
            document.getElementById(`bkg-color${colorHex[i]}`).style.backgroundColor = `#${colorHex[i]}`
    }
}

colorSchemeBtn.addEventListener("click", function(){
      getColorSchemeParameters()
      fetchData()
  })  
  
function getColorSchemeParameters(){
    seedColorEl = document.getElementById("seed-color").value.substring(1)
    colorSchemeModeEl = document.getElementById("color-scheme-mode").value
}

function fetchData() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorEl}&mode=${colorSchemeModeEl}&count=5`)
    .then((res) => res.json())
    .then(data => {
            for(color of data.colors){
                colorHex.push(color.hex.clean)
            }
        render()   
    })
}

fetchData()












    
    
  
    

    
    

