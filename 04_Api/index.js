const url = "https://catfact.ninja/fact";





const fetchData = () => {

    fetch(url).then((response)=>{
        
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    })
};


fetchData();
