
import { Suspense } from "react";
import { Tags } from "./tags";
import { AddTag } from "./add-tag";



export default function Home() {
  return (  
    <div style={{"padding": "50px"}}>
      <Suspense fallback={<p>Loading Tags...</p>}>
        <Tags />
      </Suspense>
      <AddTag />
    </div>  
    
  );
}
