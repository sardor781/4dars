const btn = document.getElementById("btn");
const container = document.getElementById("container");

const getData = async () => {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
    container.innerHTML =''
    let card = document.createElement("div");
    card.classList.add('w-[679px]', ',rounded-xl', 'h-[524px]', 'pl-6', 'absolute', 'bottom-0', 'right-0',  'bg-white', 'flex', 'flex-col', 'items-center', 'gap-5');
    card.innerHTML = `
        <div class="w-[250px] h-[296px] rounded-full mb-10 absolute -top-[140px] text-center object-cover">
                <img src="${data.results[0].picture.large}" alt="" class="mx-auto rounded-full w-full">
            </div>            
            <h1 class="font-bold text-[48px] text-[#16A784] mt-[100px]">${data.results[0].name.first} ${data.results[0].name.last}</h1>
            <h2 class="font-medium text-[30px] ">${data.results[0].location.street.name}</h2>
            <div class="w-full text-start flex flex-col gap-5 mt-5">
                <h3 class="text-2xl font-normal">Phone: ${data.results[0].phone}</h3>
                <h4 class="text-2xl font-normal">Manzil: ${data.results[0].location.country}</h4>
                <h5 class="text-2xl font-normal">Yosh: ${data.results[0].dob.age}</h5>
                <h6 class="text-2xl font-normal">Email: ${data.results[0].email}</h6>
            </div>
    `  
    container.append(card);
};
getData()

btn.addEventListener("click" , () => {
    window.location.reload();
});