import "./App.css";
import React from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
// import { editData } from "../../controllers/productsController";

// import { API_URL } from "../constants/API";
// import "../assets/styles/admin.css";

class App extends React.Component {
  state = {
    productList: [],
    filteredProductList: [],
    sortBy: "",
    sortPrice: "",
    addName: "",
    addPrice: "",
    addCategory: "",
    editId: 0,
    editName: "",
    editPrice: "",
    editCategory: "",
    searchGenre: "",
    rawFinal: 0,
  };

  fetchProducts = () => {
    Axios.get(`http://localhost:3300/get-data`).then((result) => {
      this.setState({
        productList: result.data, // search feature
        filteredProductList: result.data,
      });
    });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  editToggle = (editData) => {
    // have the same exact colomn
    this.setState({
      editId: editData._id,
      editName: editData.Name,
      editPrice: editData.Price,
      editCategory: editData.Category,
    });
  };

  cancelEdit = () => {
    // ??
    this.setState({ editId: 0 }); // id 0 is not exist
  };

  saveBtnHandler = (Name) => {
    Axios.patch(`http://localhost:3300/update/${Name}`, {
      Name: this.state.editName,
      Price: parseInt(this.state.editPrice),
      Category: this.state.editCategory,
    })
      .then((res) => {
        console.log(res.data);
        this.fetchProducts();
        this.cancelEdit();
      })
      .catch(() => {
        alert("Terjadi kesalahan");
      });
  };

  deleteBtnHandler = (Name) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      Axios.delete(`http://localhost:3300/delete?Name=${Name}`)
        .then(() => {
          this.fetchProducts();
        })
        .catch(() => {
          alert("Error!");
        });
    } else {
      alert("Cancelled");
    }
  };

  renderProducts = () => {
    // let rawSorted = [...this.state.filteredProductList]; // sorting feature
    // let rawSorted = [...this.state.filteredProductList];
    let rawData = [...this.state.filteredProductList];
    // // sorting alphabetically
    // const compareString = (a, b) => {
    //   if (a.Name < b.Name) {
    //     return -1;
    //   }
    //   if (a.Name > b.Name) {
    //     return 1;
    //   }
    //   return 0;
    // };
    // console.log(this.state.sortPrice);
    // // if (this.state.sortPrice === "lowPrice") {
    // //   // Axios.get(`http://localhost:3300/low-price`).then((result) => {
    // //   //   this.setState({
    // //   //     productList: result.data, // search feature
    // //   //     filteredProductList: result.data,
    // //   //   });
    // //   // });
    // // }

    // console.log(this.state.sortBy);
    // if (this.state.sortBy) {
    //   switch (this.state.sortBy) {
    //     case "az":
    //       rawSorted = rawSorted.sort(compareString);
    //       break;
    //     case "za":
    //       rawSorted = rawSorted.sort((a, b) => compareString(b, a));
    //       break;
    //     default:
    //       rawSorted = [...this.state.filteredProductList];
    //       break;
    //   }
    // }

    // console.log(...this.state.filteredProductList);
    // console.log(rawData);
    // console.log(rawSorted);
    // console.log(rawFinal);
    switch (this.state.searchGenre) {
      case "Jazz":
        rawData = [this.state.filteredProductList].filter((val) => {
          // only return true value based on below condition
          return val.Category === "Jazz";
        });
        break;
      case "Rock":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Rock";
        });
        break;
      case "Hip Hop":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Hip Hop";
        });
        break;
      case "Electronic":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Electronic";
        });
        break;
      case "Pop":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Pop";
        });
        break;
      case "Funk":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Funk";
        });
        break;
      case "Soul":
        rawData = [this.state.filteredProductList].filter((val) => {
          return val.Category === "Soul";
        });
        break;
      default:
        rawData = [...this.state.filteredProductList];
        break;
    }

    return rawData.map((val) => {
      if (val._id === this.state.editId) {
        // click edit
        return (
          <tr>
            <td>{val._id}</td>
            <td>
              <input
                value={this.state.editName}
                onChange={this.inputHandler}
                type="text"
                className="form-control"
                name="editName"
                placeholder="Name"
              />
            </td>
            <td>
              <input
                value={this.state.editPrice}
                onChange={this.inputHandler}
                type="number"
                className="form-control"
                name="editPrice"
                placeholder="Price"
              />
            </td>
            <td>
              <input
                value={this.state.editCategory}
                onChange={this.inputHandler}
                type="text"
                className="form-control"
                name="editCategory"
                placeholder="Category"
              />
            </td>
            <td>
              <button
                onClick={() => this.saveBtnHandler(val.Name)}
                className="btn btn-success"
              >
                Save
              </button>
            </td>
            <td>
              <button onClick={this.cancelEdit} className="btn btn-danger">
                Cancel
              </button>
            </td>
          </tr>
        );
      }
      return (
        <tr>
          <td>{val._id}</td>
          <td>{val.Name}</td>
          <td>{val.Price}</td>
          <td>{val.Category}</td>
          <td>
            <button
              onClick={() => this.editToggle(val)}
              className="btn btn-secondary"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              onClick={() => this.deleteBtnHandler(val.Name)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  addNewProduct = () => {
    console.log("run");
    Axios.post(`http://localhost:3300/add-data`, {
      Name: this.state.addName,
      Price: parseInt(this.state.addPrice),
      Category: this.state.addCategory,
    })
      .then(() => {
        this.fetchProducts();
        this.setState({
          addName: "",
          addPrice: 0,
          addCategory: "",
        });
      })
      .catch(() => {
        alert("Unable to add");
      });
  };

  sortPrice = (event) => {
    // const { name, value } = event.target;
    const { value } = event.target;
    Axios.get(`http://localhost:3300/${value}`).then((result) => {
      this.setState({
        productList: result.data, // search feature
        filteredProductList: result.data,
      });
    });
  };

  sortName = (event) => {
    const { value } = event.target;
    Axios.get(`http://localhost:3300/${value}`).then((result) => {
      this.setState({
        productList: result.data, // search feature
        filteredProductList: result.data,
      });
    });
  };

  sortCategory = (event) => {
    const { value } = event.target;
    Axios.get(`http://localhost:3300/get-${value}`).then((result) => {
      this.setState({
        productList: result.data, // search feature
        filteredProductList: result.data,
      });
    });
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Manage Products</h1>
            <table className="table mt-4">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>
                    <select
                      onChange={this.sortName}
                      name="sortBy"
                      className="form-control"
                    >
                      <option value="get-data">Name</option>
                      <option value="az">A-Z</option>
                      <option value="za">Z-A</option>
                    </select>
                  </th>
                  <th>
                    <select
                      onChange={this.sortPrice}
                      name="sortPrice"
                      className="form-control"
                    >
                      <option value="get-data">Price</option>
                      <option value="high-price">Highest Price</option>
                      <option value="low-price">Lowest Price</option>
                    </select>
                  </th>
                  <th>
                    <select
                      onChange={this.sortCategory}
                      name="searchGenre"
                      className="form-control"
                    >
                      <option value="get-data">Genre</option>
                      <option value="Rock">Rock</option>
                      <option value="HipHop">Hip Hop</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Pop">Pop</option>
                      <option value="Jazz">Jazz</option>
                    </select>
                  </th>
                  <th>Category</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>{this.renderProducts()}</tbody>
              <tfoot className="bg-light">
                <tr>
                  <td></td>
                  <td>
                    <input
                      value={this.state.addName}
                      onChange={this.inputHandler}
                      name="addName"
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      value={this.state.addPrice}
                      onChange={this.inputHandler}
                      name="addPrice"
                      placeholder="Price"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      value={this.state.addCategory}
                      onChange={this.inputHandler}
                      name="addCategory"
                      className="form-control"
                    >
                      <option value="">Genre</option>
                      <option value="Rock">Rock</option>
                      <option value="Hip Hop">Hip Hop</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Pop">Pop</option>
                      <option value="Funk">Funk</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Soul">Soul</option>
                    </select>
                  </td>
                  <td colSpan="2">
                    <button
                      onClick={this.addNewProduct}
                      className="btn btn-info"
                    >
                      Add Product
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
