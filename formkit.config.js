import { generateClasses } from "@formkit/themes"
import { Input } from "postcss"

const config = {
    config: {
        classes:generateClasses({
            global:{
                message:'text-red-600',
                label: ' uppercase',
                wrapper: 'space-y-1 mb-4',
                input:'w-full border  rounded-xl placeholder placeholder-gray-400 p-1 shadow-lg text-gray-700'
            },
            file:{
                
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            submit:{
                input:'$reset bg-green-400 hover:bg-green-500 w-full p-1 mt-5  '
            }
        })

    }
}

export default config