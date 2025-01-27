import Page from "../../AdminInterface/Page";
import AdminInterface from "../../AdminInterface/AdminInterface";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import AddtoStore from "../../AdminInterface/AddtoStore";
import AddaListing from "../../AdminInterface/AddaListing";
import SignOut from "../../AdminInterface/SignOut";



const InsertItem = () => {
    return (
        <div className="flex bg-gray-200">

<div className="w-[260px] h-[925px] bg-white">
        <Page />
        <AdminInterface />
        <Path />
        <Extra />
      </div>

    <div>  
       
      <div className="flex justify-between">
      <AddtoStore />
      <SignOut />
      </div>

       
      

    <AddaListing />

    
    </div>


        </div>
    )
}

export default InsertItem;