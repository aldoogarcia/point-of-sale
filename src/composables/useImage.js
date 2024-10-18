import {ref,computed} from 'vue' 
import {useFirebaseStorage} from 'vuefire'
import { ref as refStorege, uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import { uid } from 'uid'

export default function useImage(){

const storage = useFirebaseStorage()
const url=ref('')

const fileChange= (e)=>{
        const file = e.target.files[0] //se obtiene la lista de la imagen subida
        const fileName= uid()+'.jpg' //se genera un nombre a la img
        const storageRef = refStorege(storage,'/img/'+fileName) //pasamos la credenciales, la ubicacion 
        const uploadTask= uploadBytesResumable(storageRef,file)// se sube la imagen

        //para obtener la url
        uploadTask.on('state_changed',
            ()=>{},
            (error)=>{console.log(error,'Salio un error🎈')},
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref)
                .then((donwloadURL)=>{
                    url.value=(donwloadURL)
                    //Aquí se puede guardar la URL en la base de datos o usarla en cualquier otro lugar.
                })
            }
        )
    }

    const isImageUpload= computed(()=>{
        return url.value ? url.value : null
    })

    return{
        fileChange,
        url,
        isImageUpload
    }
}