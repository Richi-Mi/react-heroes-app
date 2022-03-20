import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn(); // Obligatorio poner mock para hacer funciones

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate 
}));

describe(' * Pruebas en el componente <SearchScreen /> ', () => {
    test(' - Debe de Mostrarse correctamente con valores por defecto', () => {
    
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert_info').text().trim() ).toBe('Busca un Heroe')
    });

    test(' - Debe de mostrar a Batman y el valor del QueryString', () => {
        const queryParam = 'batman'

        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/search?search=${ queryParam }`] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('input').prop('value') ).toBe( queryParam );
    })

    test(' - Debe de mostrar un error si no encuentra un Heroe', () => {
        const queryParam = 'batman12343'

        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/search?search=${ queryParam }`] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert_danger').text().trim() ).toBe(`No hay resultados para: ${ queryParam }`);
        expect( wrapper.find('.alert_danger').text().trim().includes( queryParam) ).toBe( true );      
    });
    
    test(' - Debe de llamar el navigate a la nueva pantalla', () => {

        const query = 'batman'
        const wrapper = mount(
            <MemoryRouter initialEntries={ [`/search`] }>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', { 
            target: { 
                value: query,
                name: 'searchText' 
            } 
        } );

        wrapper.find('form').simulate('submit', {
            preventDefault: () => {  }
        });

        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith(`?search=${ query }`);
    });
    
    
});
