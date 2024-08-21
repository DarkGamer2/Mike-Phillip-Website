const Staff=[{
    Name:"Vanita Maharaj",
    Role:"Manager",
},
{
    Name:"Rayanne",
    Role:"Secretary"
}]
const mapName=()=>{
    return [Staff.Name];
}

document.getElementsByClassName("name").innerHTML=Staff.map(mapName);
