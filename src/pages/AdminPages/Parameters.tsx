import Page from "../../AdminInterface/Page";
import AdminInterface from "../../AdminInterface/AdminInterface";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import Controls from "../../AdminInterface/Controls";
import Adjusments from "../../AdminInterface/Adjustments";



const Parameters = () => {
    return (
        <div className="flex bg-gray-200">
        <div className="bg-white">
        <Page />
        <AdminInterface />
        <Path />
        <Extra />
        </div>


       <div> <Controls />
       

       <div><Adjusments /></div>
       </div>
      
      
      
      

        </div>

       

    )
}

export default Parameters;