const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')



async function getUser(username) {
    try{
       const {data} = await axios.get(APIURL + username)

        createUserCard(data);

    } catch(err){
        console.log(err);
    }

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

