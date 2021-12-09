import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'
import { create } from 'react-test-renderer';


describe('<Header />', () => {
    test('Render del componente Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.find(".Header-title").text()).toEqual('Platzi Store')
    })
});

describe('Header SnapShot', () => {
    test('Comprobar la UI de Header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.toJSON()).toMatchSnapshot();
    })
})

//si hay un cambio en el componente se usa jest --updateSnapshot
//para cualquier cambio