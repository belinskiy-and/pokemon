import { Field, Form, Formik } from "formik";

const initialValues = {
    searchName: "",
}

const SearchForm = ({ searchSubmit }) => {

    const handleSubmit = (values, {resetForm}) => {
        const { searchName } = values;

        if (searchName) {
            searchSubmit(searchName);
            resetForm();
        }        
    };

    return (
        <>
            <h2>Enter pokemon name</h2> 
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field type="text" name="searchName"></Field>
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </>
    )    
}

export default SearchForm;