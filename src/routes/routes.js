import { addContact, getAllContacts, getContact, editContactByID } from '../controller/crmController';


const routes = (app) => {
    app.route('/')
    .get((req, res) => res.send('<h1>Hello world! </h1>'))

    app.route('/contact')
        .get(getAllContacts)

        .post(addContact)

    app.route('/contact/:id')
        .get(getContact)
        .put(editContactByID)
        .delete((req,res) => 
        res.send("This will delete contact from database"))

    app.route('/profile')
    .get((req,res) => 
    res.send("You are on profile page using routes.")       
    )
}

export default routes;