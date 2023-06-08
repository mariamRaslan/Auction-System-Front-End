import React from 'react'
//import bootstarp
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import CIcon from '@coreui/icons-react'

const AddCategory = () => {
  return (
    //caregory fields with fields id , name , button add
    <div>
      <h1>Add Category</h1>
      <form>
        <div className="form-group">
          <label for="id">ID</label>
          <input type="text" className="form-control" id="id" placeholder="Enter ID" />
        </div>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Name" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}
export default AddCategory
