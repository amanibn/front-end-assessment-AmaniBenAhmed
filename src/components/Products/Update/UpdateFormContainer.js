import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProductById} from '../../../reducers/products';
import ProductForm from './ProductForm';
import {Link} from 'react-router-dom';
import {updateProductForm} from '../../../actions/products';
import { useParams } from 'react-router-dom';

  const UpdateFormContainer = (props)=>{
        const {product, categories, dispatch} = props;
        let { productId } = useParams();
        if (!product) {
            return null;
        }

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={(data) => {dispatch(updateProductForm(productId, data))}}
                    product={product}
                    categories={categories}
                />
            </>
        );
}

UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
};

const mapStateToProps = (state, {productId}) => {
    return {
        product: getProductById(state, productId),
        categories: state.categories,
    }
};

export default connect(mapStateToProps)(UpdateFormContainer);
