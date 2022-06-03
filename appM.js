import { getFirestore,setDoc,collection,addDoc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
 

const db = getFirestore();



const estudianteForm = document.querySelector("#registroForm");



estudianteForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const estudianteObj = {
        nControl: document.querySelector("#nControl").value,
        nombre: document.querySelector("#nombre").value,
        genero: document.querySelector("#genero").value,
        correo: document.querySelector("#correo").value,
        direccion: document.querySelector("#direccion").value


    }
        addEstudiante(estudianteObj);
})

async function addEstudiante(estObj){
    try {
        const estudiante={
            id: estObj.nControl,
            nombre: estObj.nombre,
            genero: estObj.genero,
            correo: estObj.correo,
            direccion: estObj.direccion
        }
        insert(estudiante);
    } catch (error) {
        return error
    }
}

async function insert(item){
    try {
        const docRef = await addDoc(collection(db, "estudiantes"), item);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
}