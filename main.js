

//Creamos una variable lista que sea la lista de los elementos que van a aparecer y desaparecer. Digamos que es el botón que va a desencadenar
//todos los submenus.

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElements => {
    listElements.addEventListener('click', ()=>{
       // alert() Esto se lo hemos puesto para ver si funciona el click ya que nos salta un aviso
        listElements.classList.toggle('arrow'); 
    //Una vez clock al elemento le añadira la clase arrow y despues se la quita. Es como desplegar y recoger.
    // Si inspeccionamos la web, veremos que al darle click, en la class, nos pone el arrow despues del modificador y lo retira segun le demos.
    
        let height = 0;
        let menu = listElements.nextElementSibling;
       // console.log(menu.scrollHeight) //En la consola de la web al inspeccionar nos chiva cuanto height se necesita minimo para que se vea el menu
        
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});
