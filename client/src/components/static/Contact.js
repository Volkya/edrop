// import React, {Component} from "react";
//
//
// class Contact extends Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: ''
//         }
//     }
//
//     onNameChange(e){
//         this.setState({name: e.target.value})
//     }
//
//     onEmailChange(e){
//         this.setState({email: e.target.value})
//     }
//
//     onPhoneChange(e){
//         this.setState({phone: e.target.value})
//     }
//
//     onMessageChange(e){
//         this.setState({message: e.target.value})
//     }
//
//     resetForm(){
//         this.state({name: '', email: '', message: ''})
//     }
//
//
//     handleSubmit(e){
//         e.preventDefault();
//         console.log(this.state);
//
//         axios({
//             method: 'POST',
//             url: "http://localhost:3000/send",
//             data: this.state
//         }).then((res)=>{
//             if (res.data.status === "Success"){
//                 alert("Mensaje enviado");
//                 this.resetForm()
//             }else if(res.data.status === 'fail'){
//                 alert("Mensaje no enviado");
//             }
//         })
//     }
//
//
//
//     render() {
//         return (
//             <section id="contacto" className="p-5">
//                 <h1 className="title-second text-center">Contactanos!</h1>
//                 <hr className="divider my-4"/>
//                 <div className="container-fluid pt-5">
//                     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//                         <div className="row">
//                             <div className="col-6">
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Name"/>
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Dirección de email"/>
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="tel" className="form-control" aria-describedby="emailHelp" placeholder="Telefono"/>
//                                 </div>
//                             </div>
//                             <div className="col-6">
//                                 <div className="form-group">
//                                     <textarea className="form-control" rows="6" placeholder="Escribe tu consulta"></textarea>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-12 text-center">
//                                 <button type="submit" className="btn bg-dark text-white">Enviar consulta</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//
//             </section>
//         );
//     }
//
//
//
//
// } // end component
//
// export default Contact;
