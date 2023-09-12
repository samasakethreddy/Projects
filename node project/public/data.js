fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.jeans.length; i++) {
        // console.log(data.jeans[i]);
        const div2 = document.getElementById("div")
        const div = document.createElement("div");
        let data2=data.jeans[i].rate+data.jeans[i].image + data.jeans[i].color+data.jeans[i].size;
        console.log(data2);
        div.innerText = data2;
        div2.appendChild(div);
    }
}) ;