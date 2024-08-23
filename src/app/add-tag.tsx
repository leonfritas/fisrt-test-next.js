import { revalidateTag } from "next/cache"
import { AddTagButton } from "./add-tag-button"

export function AddTag(){

    async function handleCreateTag(form: FormData){
        'use server'

        console.log(form.get('slug')) 

        const slug = form.get('slug')

        if(!slug){
            return
        }

        await new Promise(resolve => setTimeout(resolve, 3000))

        await fetch('http://localhost:3000/tags', {
            method: 'POST',
            body: JSON.stringify({
                slug
            })
        })

        revalidateTag('get-tags')
    }

    return(
        <form action={handleCreateTag} method="POST">
            <input type="text" style={{"color": "black"}} name="slug" placeholder="Slug da tag" />
            <AddTagButton />
        </form>
    )
}