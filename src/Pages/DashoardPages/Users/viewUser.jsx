import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Axios
import axiosInstance from "../../../Axios";
import { CButton } from "@coreui/react";
//viewuser
const ViewUser = () => {
  //get id from url

  const [userbloked , setUserBlocked]=useState(0)
  const { id } = useParams();

  //userdata
  const [user, setUser] = useState([]);
  //get user data
  async function fetchUser() {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      //log
      console.log(response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [userbloked]);

  //set permission
  // const setPermission = (_id) => {
  //   //set permission
  //   window.location.href = `/dashboard/users/set-permission/${_id}`;
  // };

  // block
  const block = async () => {
    try {
      const response = await axiosInstance.patch(`/users/${id}/block`);   
      setUserBlocked(userbloked+1)   
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      {/**check if not user display preload */}
      {user.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row d-felx align-items-center">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src={user.image}
                      className="rounded-circle mb-3"
                      width="160"
                      height="160"
                      alt="avatar"
                    />
                    <h5 className="my-3">{user.name} </h5>

                    <div className="d-flex justify-content-center mb-2">
                      {/**check  if blocked */}
                      {user.block ? (
                        <CButton
                          color="primary"
                          variant="outline"
                          className=" btn-lg mr-2 btntext"
                          onClick={block}
                        >
                          Unblocked
                        </CButton>
                      ) : (
                        <CButton
                          color="danger"
                          variant="outline"
                          className=" btn-lg mr-2 btntext"
                          onClick={block}
                        >
                          Blocked
                        </CButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم بالكامل</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.name ? user.name : "not exist"}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">البريد الإالكتلروني </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.email ? user.email : "not exist"}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم المحمول</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.phone ? user.phone : "not exist"}
                        </p>
                      </div>
                    </div>
                    <hr />
                    {/* <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Role</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.role ? user.role : "not exist"}
                        </p>
                      </div>
                    </div> 
                    <hr /> */}
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          <span>
                            {user.address ? user.address.city : "not exist"}
                          </span>
                          ,
                          <span>{user.address ? user.address.street : ""}</span>
                          ,{" "}
                          <span>
                            {user.address ? user.address.building_number : ""}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** table to display permissions with static data now  */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div className="card mb-4">
                <div className="card-header d-flex justify-content-between">
                  <h6 className="text-uppercase mb-0">Permissions</h6>
                  
                    <button className="btn btn-primary btn-sm" onClick={() => setPermission(user._id)}>
                      Assign new Permission
                    </button>
                   
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Permission</th>
                          <th scope="col">assign at</th> 
                          <th scope="col">delete</th> 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Permission 1</td>
                          <td>2020-10-10</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        <tr>
                          <td>Permission 2</td>
                          <td>2020-10-10</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        <tr>
                          <td>Permission 3</td>
                          <td>2020-10-10</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        <tr>
                          <td>Permission 4</td>
                          <td>2020-10-10</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        <tr>
                          <td>Permission 5</td>
                          <td>2020-10-10</td>
                          <td><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </div>
              </div> */}
              </div>
            </div>
          </div>
          {/** display all permission to select from it to assign to user */}
          <div className="container"></div>
        </section>
      )}
    </>
  );
};

export default ViewUser;
