import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import ProductMock from '../../__mocks__/ProductMock'
import Product from '../../components/Product'


describe('<Product />', () => {
    test('Render del componente Product', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });
    test('Comprobar el boton de comprar', () => {
        const handleAddToCart = jest.fn();
        const Wrapper = mount(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        );
        Wrapper.find('button').simulate('click')
        expect(handleAddToCart).toHaveBeenCalledTimes(1)
    })
});













/*Probablemente muchos se hagan esta pregunta:
¿Cuándo utilizar mount y cuándo utilizar shallow?
.
mount --> Cuando necesitas el DOM
shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM */