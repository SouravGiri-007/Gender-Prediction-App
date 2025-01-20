// let url = "https://api.genderize.io?name=";
// let wrapper = document.getElementById("wrapper");
// let predictGender = () =>{
//     let name = document.getElementById("name").value.trim();
//     let error = document.getElementById("error");
//     let finalURL = url+name;
//     console.log(name);
//     console.log(finalURL);
//     wrapper.innerHTML= " ";
//     error.innerHTML= " ";

//     if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
//         fetch(finalURL)
//         .then((resp) => resp.json())
//         .then((data) => {
//             console.log(data);
//             let div = document.createElement("div");
//             div.setAttribute("id","info");
//             div.innerHTML = `<h2 id="result_name">${data.name}</h2><img src=" "id="gender-icon"/> <h1
//             id="gender">${data.gender}</h1><h4
//             id="prob">Probability: ${data.probability}</h4>`;
//             wrapper.append(div);
//             if (data.gender == "female") {
//                 div.classList.add("female");
//                 document.getElementById("gender-icon").setAttribute("src","female.svg");
//             }else {
//                 div.classList.add("male");
//           document
//             .getElementById("gender-icon")
//             .setAttribute("src", "male.svg");
//             }
//         });
//     }
//     else{
//         if (name.length === 0) {
//             error.innerHTML = "";
//         }
//         error.innerHTML = "Enter a  valid name with no spaces";
//     }
// };
// document.getElementById("submit").addEventListener("click",predictGender);
// window.addEventListener("load",predictGender);


let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");

let predictGender = () => {
    let name = document.getElementById("name").value.trim();  
    let error = document.getElementById("error");
    let finalURL = url + name;
    console.log(name);
    console.log(finalURL);
    wrapper.innerHTML = " ";  
    error.innerHTML = " ";  

    if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
        
        if (name.toLowerCase() === " ") {
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h2 id="result-name"></h2><img src="" id="gender-icon"/> <h1 id="gender">female</h1><h4 id="prob">Probability: 1.0</h4>`;
            wrapper.append(div);
            div.classList.add("female");
            document.getElementById("gender-icon").setAttribute("src", "female.svg");
        } else {
            fetch(finalURL)
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data);
                    let gender = data.gender;

                    
                    console.log(gender);

                    let div = document.createElement("div");
                    div.setAttribute("id", "info");
                    div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
                    wrapper.append(div);

                    if (gender === "female") {
                        div.classList.add("female");
                        document.getElementById("gender-icon").setAttribute("src", "female.svg");
                    } else if (gender === "male") {
                        div.classList.add("male");
                        document.getElementById("gender-icon").setAttribute("src", "male.svg");
                    } else {
                        div.classList.add("unknown");
                        document.getElementById("gender-icon").setAttribute("src", "unknown.svg");
                    }
                });
        }
    } else {
        if (name.length === 0) {
            error.innerHTML = "";  
        } else {
            error.innerHTML = "Enter a valid name with no spaces";  
        }
    }
};

document.getElementById("submit").addEventListener("click", predictGender);

document.getElementById("name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        predictGender();
    }
});