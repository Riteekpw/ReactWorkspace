
function Fruits(){
    let fruits=[
        {name:"apple",price:"100rs"},
        {name:"orange", price:"80rs"},
        {name:"mango", price:"150rs"}
    ]

    return <div>
        {
            fruits.map(fruit=>(
                <li>{fruit.name}</li>
            ))
        }
    </div>
    
}

export default Fruits;