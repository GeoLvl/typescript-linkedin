import { getUser, updateUser } from "./services/user";


function updateDom() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>Hello ${user.username}</div>
`
}

let user = await getUser();
updateDom();

setTimeout(
    async () => {
        user = await updateUser({username: "Bobbby"});
        console.log(user);
        updateDom();
    }, 3000
);

user.id?.toExponential()



