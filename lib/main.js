// Utility for gemerating specific random numbers
//* Note: not for use with negative numbers
function randomRangeInt(min, max)
{ 
    return (Math.round(Math.random()*max)) + min
}

// Random word selection for marked word
const words =
[
    "wonderful",
    "beautiful",
    "magical",
    "creative",
    "amazing",
    "revolutionary",
    "visionary",
    "for everybody",
    "eye catching",
    "infinite",
    "new",
    "lovely",
    "marvellous",
    "magnificent",
    "glorious",
    "mighty",
    "fantastic",
    "boundless",
    "groundbreaking",
    "innovative",
    "disruptive",
    "inventive",
    "exceptional",
    "delightful"
]

const wordInsert = document.getElementById("insert");
wordInsert.innerText = words[randomRangeInt(0, words.length)];

// Background particles
const bubleContainer = document.getElementById("bubleContainer");
const bubleTemplate = document.getElementById("buble");

// Utility function to create bubles
function createBuble(cx, cy, r, d, template, container)
{
    // Prototipal instantiation
    let buble = template.cloneNode();
    buble.setAttribute("cx", cx);
    buble.setAttribute("cy", cy);
    buble.setAttribute("r", r);
    buble.style.animationDuration = `${d}s`
    // console.log(buble);
    container.appendChild(buble);
    
    //Cleanup
    setTimeout(() => buble.remove(), d*1000,)
}

function generateBuble()
{
    let x = randomRangeInt(0, 1600);
    let r = randomRangeInt(100, 600);
    let lifespan = randomRangeInt(3, 30);
    createBuble(x, 2400, r, lifespan, bubleTemplate, bubleContainer);    
}

generateBuble();
generateBuble();
generateBuble();
generateBuble();
generateBuble();
const bubleSpawner = setInterval(generateBuble, 4000)

// createBuble(800,3000,500,5, bubleTemplate, bubleContainer)