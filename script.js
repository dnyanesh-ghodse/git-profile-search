const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')



async function getUser(username) {
    try{
       const {data} = await axios.get(APIURL + username)
        main.innerHTML = "<h1>Hijsdkjfjkl</h1>"
        createUserCard(data);

    } catch(err){
        if(err.response.status == 404){
            createErrorCard("User Not Found")
        }
    }

}

function createErrorCard(msg){
    const cardHTML = `
        <div>
            <h1 style="color: red">${msg}</h1>
            <img src="./404.jpg" alt="404" width="200px">
        </div>
    `

    main.innerHTML = cardHTML;
}


function createUserCard(user) {
    const cardHTML = `<div class="card">
            <div >
                <img src=${user.avatar_url} alt="avatar" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <h3>${user.location}</h3>
                <p>${user.bio}</p>

                <ul>
                    <li> ${user.followers}<strong>Followers</strong></li>
                    <li> ${user.following}<strong> Following </strong></li>
                    <li> ${user.public_repos}<strong> Repos</strong></li>
                </ul>

                <div id="repos">

                </div>
            </div>
        </div>`

        main.innerHTML = cardHTML;
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const user = search.value;

    if(user){
        getUser(user)

        search.value = ''
    }
})

