const  form = document.querySelector(".contact-form")
form.addEventListener("submit", handleSubmit)


function handleSubmit(e){
    e.preventDefault()
    const data= new FormData(e.target)
    console.log(data)
    const formInJson=Object.fromEntries(data.entries())
    console.log("form in json: ", formInJson)

    // selecting snacks
    formInJson.snacks=data.getAll("snacks")
    const result=document.querySelector(".result pre")
    result.innerText+=JSON.stringify( formInJson,null,2)

}