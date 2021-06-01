import React,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {faEdit, faTrash,} from "@fortawesome/free-solid-svg-icons";

const productsApi = 'http://localhost:3200/products/';

class ListProducts extends Component{

    state = {
        products: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {
            id: '',
            title: '',
            description: '',
            precioVenta: '',
            precioCompra: '',
            categoria: '',
            subcategoria: '',
            updated: '',
            colores: '',
            proveedor: '',
            talle: '',
            marca: '',
            tipoModal: ''
        }
    };

    // cambiar estado del modal ON OFF
    modalInsertar=()=>{
        this.setState({modalInsertar: !this.state.modalInsertar});
    }

    // MANIPULANDO DATOS
    getProducts = () => {
        axios.get(`${productsApi}`).then(res => {
                console.log(res.data.docs);
                const products = res.data.docs;
                this.setState({ products });
            })
            .catch(console.log)
    }

    newProduct = async ()=>{
        delete  this.state.form.id;
        await axios.post(productsApi, this.state.form).then(res=>{
            this.modalInsertar();
            this.getProducts();
        }).catch(error=>{
            console.log(error.message);
        })
    }

    updateProduct = async () =>{
        await axios.put(`${productsApi}`+this.state.form.id, this.state.form).then(res=>{
        this.modalInsertar();
        this.getProducts();
        }).catch();
    }

    deleteProduct = () => {
        axios.delete(productsApi+this.state.form.id).then(res=>{
            this.setState({modalEliminar: false});
            this.getProducts();
        }).catch();
    }


    selectProduct=(product)=>{
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: product.id,
                title: product.title,
                description: product.description,
                precioVenta: product.precioVenta,
                precioCompra: product.precioCompra,
                categoria: product.categoria,
                subcategoria: product.subcategoria,
                updated: product.updated,
                colores: product.colores,
                proveedor: product.proveedor,
                talle: product.talle,
                marca: product.marca
            }
        })
    }

    handleChange = async e =>{
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }


    componentDidMount() {
    this.getProducts();

    } // end component didmount


    render() {
        const {form}=this.state;
        return (
            <main>
                <div className="table-responsive">
                    <h1 className="bg-second text-center p-5">Productos</h1>
                    <br />
                    <button className="btn bg-info text-white" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar producto</button>
                    <br /><br />
                    <table className="table tablestriped table-sm">
                        <thead className="thead-dark">
                        <tr className="text-center">
                            <th>Producto</th>
                            <th>Compra</th>
                            <th>Venta</th>
                            <th>Categoria</th>
                            <th>Subcategoria</th>
                            <th>Proveedor</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(product =>
                            <tr className="text-center">
                                <td>{product.title}</td>
                                <td>{new Intl.NumberFormat("em-EN").format(product.precioCompra)}</td>
                                <td>{new Intl.NumberFormat("em-EN").format(product.precioVenta)}</td>
                                <td>{product.categoria}</td>
                                <td>{product.subCat}</td>
                                <td>{product.proveedor}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>{this.selectProduct(product); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                    {"  "}
                                    <button className="btn btn-primary" onClick={()=>{this.selectProduct(product); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>

                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader style={{display: 'block'}}>
                            <span style={{float: 'right', cursor: 'pointer'}} onClick={()=>this.modalInsertar()}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="id">ID register</label>
                                            <input type="text" readOnly className="form-control" name="id" onChange={this.handleChange} value={form?form.id: this.state.products.length+1}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="title">Nombre del producto</label>
                                            <input type="text" className="form-control" name="title" onChange={this.handleChange} value={form?form.title: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="talle">Talle</label>
                                            <input type="text" className="form-control" name="subcategoria" onChange={this.handleChange} value={form?form.talle: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="colores">Colores</label>
                                            <input type="text" className="form-control" name="subcategoria" onChange={this.handleChange} value={form?form.colores: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customFile">Imagen del producto</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" name="image" id="customFile"/>
                                                <label className="custom-file-label" htmlFor="customFile">Escoger archivo file</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="precioVenta">Precio de venta</label>
                                            <input type="text" className="form-control" name="precioVenta" onChange={this.handleChange} value={form?form.precioVenta: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="precioCompra">Precio de compra</label>
                                            <input type="text" className="form-control" name="precioCompra" onChange={this.handleChange} value={form?form.precioCompra: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="categoria">Categoria</label>
                                            <input type="text" className="form-control" name="categoria" onChange={this.handleChange} value={form?form.categoria: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subcategoria">Subcategoria</label>
                                            <input type="text" className="form-control" name="subcategoria" onChange={this.handleChange} value={form?form.subcategoria: ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="proveedor">Proveedor</label>
                                            <input type="text" className="form-control" name="proveedor" onChange={this.handleChange} value={form?form.proveedor: ''}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="description">Describe tu producto</label>
                                            <textarea className="form-control" name="description" onChange={this.handleChange} value={form?form.description: ''} rows="3" placeholder="Descripcion de tu producto a la hora de publicar">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            {this.state.tipoModal==='insertar'?
                                <button className="btn btn-info" onClick={()=>this.newProduct()}>
                                    Agregar
                                </button>: <button className="btn btn-info" onClick={()=>this.updateProduct()}>
                                    Actualizar
                                </button>
                            }
                            <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                        </ModalFooter>
                    </Modal>




                    <Modal isOpen={this.state.modalEliminar}>
                        <ModalBody>
                            Estás seguro que deseas eliminar el producto <b>{form && form.title}</b>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-info" onClick={()=>this.deleteProduct()}>Sí</button>
                            <button className="btn btn-danger" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                        </ModalFooter>
                    </Modal>




                </div>
            </main>


        )
    } // end render
} // end component






export default ListProducts;
