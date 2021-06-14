//SHOW TO-DO
const showToDo = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if (toggle && nav) { 
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('show')

    })
  }
}
showToDo('nav-toggle', 'to-do-list');