import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import AuthContext from "../../auth/authContext";
import DashBoardRoutes from "../../routers/DashBoardRoutes";

describe(' * Pruebas en el componente <DashBoardRoutes /> ', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Jose'
        }
    }
    // Cuando trabajemos en las pruebas y usemos contexto dentro de los componentes
    // tenemos que encerrarlo en un componente Context, y si oucpamos hacer pruebas 
    // con un componente que usa useNavigate() debemos encerrar el componente en 
    // el MemoryRouter de react-router-dom.

    // Usamos mount por que sirve mejor para renderizar todo el componente 
    // no como el shallow

    // propiedad inititialEntries .- Le mandamos un arreglo con el URL al que navegara y renderizara el componente
    

    test(' - Debe de Mostrarse correctamente <HomeScreen />', () => {

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }> 
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text_info').text().trim() ).toBe( 'Jose' );
    });

    test(' - Debe de Mostrarse correctamente <MarvelScreen />', () => {

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }> 
                <MemoryRouter initialEntries={ ['/marvel'] }>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text_info').text().trim() ).toBe( 'Jose' );
        expect( wrapper.find('h1').text().trim() ).toBe( 'Marvel Heroes' );
    });
    
    test(' - Debe de Mostrarse correctamente <DCScreen />', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }> 
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text_info').text().trim() ).toBe( 'Jose' );
        expect( wrapper.find('h1').text().trim() ).toBe( 'DC Heroes' );
    });
    
});
